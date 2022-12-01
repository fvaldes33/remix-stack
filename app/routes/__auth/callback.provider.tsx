import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useFetcher, useSearchParams } from "@remix-run/react";
import { useEffect, useMemo } from "react";
import { z } from "zod";
import {
  commitAuthSession,
  getAuthSession,
  mapAuthSession,
} from "~/lib/session.server";
import { getSupabase } from "~/lib/supabase";
import { getSupabaseAdmin } from "~/lib/supabase";

export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);

  if (authSession) return redirect("/");

  return json({});
}

export async function action({ request }: ActionArgs) {
  const schema = z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    redirectTo: z.string().optional(),
  });

  const formData = Object.fromEntries(await request.formData());
  const form = schema.safeParse(formData);

  if (!form.success) {
    return json(
      {
        message: "invalid-request",
      },
      { status: 400 }
    );
  }

  const { accessToken, refreshToken, redirectTo = "/app" } = form.data;

  // We should not trust what is sent from the client
  // https://github.com/rphlmr/supa-fly-stack/issues/45
  const {
    data: { session: authSession },
  } = await getSupabaseAdmin().auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (!authSession) {
    return json(
      {
        message: "invalid-refresh-token",
      },
      { status: 401 }
    );
  }

  // user have an account, skip creation part and just commit session
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession: mapAuthSession(authSession),
      }),
    },
  });
}

export default function CallbackProviderPage() {
  const error = useActionData<typeof action>();
  const fetcher = useFetcher();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/app";
  const supabase = useMemo(() => getSupabase(), []);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, supabaseSession) => {
      if (event === "SIGNED_IN") {
        const accessToken = supabaseSession?.access_token;
        const refreshToken = supabaseSession?.refresh_token;

        if (!accessToken || !refreshToken) return;

        const formData = new FormData();

        formData.append("accessToken", accessToken);
        formData.append("refreshToken", refreshToken);
        formData.append("redirectTo", redirectTo);

        fetcher.submit(formData, { method: "post", replace: true });
      }
    });

    return () => {
      // prevent memory leak. Listener stays alive 👨‍🎤
      subscription?.unsubscribe();
    };
  }, [fetcher, redirectTo, supabase.auth]);

  return error ? <div>{error.message}</div> : null;
}
