import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { requireAuthSession } from "~/lib/auth/guards.server";

export function links() {
  return [];
}

export async function loader({ request }: LoaderArgs) {
  await requireAuthSession(request);

  return json({});
}

export function action() {
  return { ok: true };
}

export default function AppLayout() {
  return (
    <>
      <Header fullWidth />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
