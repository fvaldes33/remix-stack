import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { SLACK_TOKEN } from "~/lib/env";
import { getSupabaseAdmin } from "~/lib/supabase";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const resultId = url.searchParams.get("resultId");
  const status = url.searchParams.get("status");
  const key = url.searchParams.get("key");

  if (key !== SLACK_TOKEN) {
    throw new Response("", { status: 401, statusText: "Not authorized" });
  }

  if (!resultId || !status) {
    throw new Response("", {
      status: 500,
      statusText: "Missing required parameters",
    });
  }

  const client = getSupabaseAdmin();
  const { data, error } = await client
    .from("prompt_results")
    .update({
      featured: true,
    })
    .match({ id: resultId })
    .select("*, prompt:prompts(*)")
    .single();

  if (error) {
    throw new Response("", {
      status: 500,
      statusText: error.message,
    });
  }

  if (!data) {
    throw new Response("", {
      status: 500,
      statusText: "Something went wrong",
    });
  }

  await client
    .from("prompts")
    .update({ featured: true, approved: true })
    .match({ id: data.prompt.id });

  return redirect(`/explore/${data.prompt.uuid}`);
}

export function action() {
  return { ok: true };
}
