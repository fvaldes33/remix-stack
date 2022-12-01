import { json, redirect } from "@remix-run/node";
import type { AuthSession } from "~/lib/session.server";
import { getAuthSession, commitAuthSession } from "~/lib/session.server";
import { getAuthAccountByAccessToken } from "./auth.server";

export async function verifyAuthSession(authSession: AuthSession) {
  const authAccount = await getAuthAccountByAccessToken(
    authSession.accessToken
  );

  if (!authAccount) return false;

  // Here we verify that what we have in the session is the same as what we have in the auth database.
  // It's a guard against a session cookie secret leak.
  if (authAccount.id !== authSession.userId) {
    return false;
  }

  return true;
}

export async function requireNonAuthSession(request: Request) {
  const authSession = await getAuthSession(request);

  if (authSession) {
    const isValidSession = await verifyAuthSession(authSession);
    if (isValidSession) {
      return redirect("/app");
    }

    return json(
      {},
      {
        headers: {
          "Set-Cookie": await commitAuthSession(request, {
            authSession: null,
            flashErrorMessage: "no-user-session",
          }),
        },
      }
    );
  }

  return json({});
}

export async function requireAuthSession(
  request: Request
): Promise<AuthSession> {
  const authSession = await getAuthSession(request);

  if (!authSession?.accessToken || !authSession?.refreshToken) {
    throw redirect("/login", {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session",
        }),
      },
    });
  }

  const isValidSession = await verifyAuthSession(authSession);

  // damn, access token is not valid or expires soon
  // let's try to refresh, in case of 🧐
  if (!isValidSession) {
    throw redirect("/login", {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session",
        }),
      },
    });
  }

  // finally, we have a valid session, let's return it
  return authSession;
}
