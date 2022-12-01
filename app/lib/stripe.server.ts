// import dayjs from "dayjs";
import Stripe from "stripe";
import { PRIVATE_STRIPE_KEY } from "./env";
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

  console.log(enrichedSession);
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
