import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type Stripe from "stripe";

import { stripe, onCheckoutSessionCompleted } from "~/lib/stripe.server";
import { sendNotification } from "~/lib/slack.server";

export async function action({ request }: ActionArgs) {
  let event: Stripe.Event;

  try {
    const payload = await request.text();
    const signature = request.headers.get("stripe-signature")!;

    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.PRIVATE_STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.log(err);
    console.log(`⚠️  Webhook signature verification failed.`);
    console.log(`⚠️  Check the env file and enter the correct webhook secret.`);
    throw new Response("", { status: 400 });
  }

  try {
    await sendNotification({
      blocks: [
        {
          type: "section",
          text: {
            type: "plain_text",
            text: `[Stripe] ${event.type} hook called`,
            emoji: true,
          },
        },
      ],
    });
  } catch (error: unknown) {
    //shhh
  }

  switch (event.type) {
    case "checkout.session.completed":
      await onCheckoutSessionCompleted(
        event.data.object as Stripe.Checkout.Session
      );
      break;

    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}`);
  }

  return json({
    status: "OK",
  });
}
