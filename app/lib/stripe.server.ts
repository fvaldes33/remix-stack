// import dayjs from "dayjs";
import Stripe from "stripe";
import { PRIVATE_STRIPE_KEY } from "./env";
import { createFullOrder } from "./printful.server";
// import { sendEmail } from "./sendgrid";
import { getSupabaseAdmin } from "./supabase";

export const stripe = new Stripe(PRIVATE_STRIPE_KEY, {
  apiVersion: "2022-08-01",
});

const supabase = getSupabaseAdmin();

export async function onCheckoutSessionCompleted(
  session: Stripe.Checkout.Session
): Promise<void> {
  const enrichedSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["customer", "line_items", "payment_intent.shipping"],
    });

  const customer = enrichedSession.customer as Stripe.Customer;
  const line_items = enrichedSession.line_items?.data as Stripe.LineItem[];
  const payment_intent = enrichedSession.payment_intent as Stripe.PaymentIntent;
  const metadata = enrichedSession.metadata;

  // search for the customer email in my db
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .match({ email: customer.email })
    .single();

  let userId = profile?.id;
  if (!profile) {
    // create a new user
    const { data } = await supabase.auth.admin.createUser({
      email: customer.email!,
      data: {
        full_name: customer.name,
      },
    });
    if (data.user) {
      userId = data.user.id;
    }
  }

  // shit broke, bounce, notify, whatevs
  if (!userId) return;

  // add stripe id to profiles
  const { data: updatedProfile } = await supabase
    .from("profiles")
    .update({ stripe_id: customer.id })
    .match({ email: customer.email })
    .select("*")
    .single();

  // create order
  const { data: order } = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      line_items: line_items.map((line_item) => {
        return {
          product_id: line_item.price?.product,
          quantity: line_item.quantity,
        };
      }),
      shipping_address: payment_intent.shipping?.address,
      printful_data: metadata,
    })
    .select("*")
    .single();

  // future, send email
  // create printful order
  const printfulOrder = await createFullOrder(updatedProfile, order);
  await supabase
    .from("orders")
    .update({
      printful_order_id: printfulOrder.id,
    })
    .match({ id: order.id });
}

export async function createPaymentLink(
  params: Stripe.PaymentLinkCreateParams
) {
  const { line_items, after_completion, metadata } = params;
  const paymentLink = await stripe.paymentLinks.create({
    customer_creation: "always",
    shipping_address_collection: { allowed_countries: ["US"] },
    after_completion,
    line_items,
    metadata,
  });
  return paymentLink;
}

export async function createCheckoutSession(
  params: Stripe.Checkout.SessionCreateParams
) {
  const { line_items, success_url, cancel_url, metadata } = params;

  const session = await stripe.checkout.sessions.create({
    customer_creation: "always",
    shipping_address_collection: { allowed_countries: ["US"] },
    mode: "payment",
    allow_promotion_codes: true,
    success_url,
    cancel_url,
    line_items,
    metadata,
  });
  return session;
}
