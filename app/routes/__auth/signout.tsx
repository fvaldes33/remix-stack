import type { LoaderArgs } from "@remix-run/node";
import { destroyAuthSession } from "~/lib/session.server";

export async function loader({ request }: LoaderArgs) {
  return destroyAuthSession(request);
}
