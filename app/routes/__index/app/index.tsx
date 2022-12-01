// ---------------------------------------------
/**
 * When logged in, /app is the home page for your account
 * Should be able to view your own designs, create new designs and orders
 *
 * Should be dashboard-like
 */
// ---------------------------------------------

import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  return json({});
}

export default function AppMainPage() {
  const loaderData = useLoaderData();

  return (
    <div className="container my-12">
      <section>
        Authed area
        <pre>{JSON.stringify(loaderData, null, 2)}</pre>
      </section>
    </div>
  );
}
