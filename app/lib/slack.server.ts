import { PRIVATE_SLACK_WEBHOOK } from "./env";

export async function sendNotification({
  text,
  blocks,
}: {
  text?: string;
  blocks?: any;
}) {
  try {
    const response = await fetch(PRIVATE_SLACK_WEBHOOK, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text, blocks }),
    });
    const data = await response.text();

    console.log("sendNotification", data);

    return data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
