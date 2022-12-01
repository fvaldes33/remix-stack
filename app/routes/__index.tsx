import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Provider } from "jotai";
import { accessTokenAtom, userAtom, profileAtom } from "~/lib/atoms/root";
import { verifyAuthSession } from "~/lib/auth/guards.server";
import { getAuthSession } from "~/lib/session.server";
import { getSupabaseAdmin } from "~/lib/supabase";

export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);

  if (authSession?.accessToken) {
    const validSession = await verifyAuthSession(authSession);
    if (validSession) {
      const { accessToken } = authSession;
      const supabase = getSupabaseAdmin(accessToken);
      const { data } = await supabase.auth.getUser(accessToken);
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .match({ id: data.user?.id })
        .single();

      return json({
        accessToken,
        user: data.user,
        profile,
      });
    }
  }

  return json({
    accessToken: null,
    user: null,
    profile: null,
  });
}

export default function MainLayout() {
  const { accessToken, user, profile } = useLoaderData<typeof loader>();

  return (
    <Provider
      initialValues={[
        [accessTokenAtom, accessToken],
        [userAtom, user],
        [profileAtom, profile],
      ]}
    >
      <Outlet />
    </Provider>
  );
}
