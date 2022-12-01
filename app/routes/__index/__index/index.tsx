import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  return json({});
}

export default function HomePage() {
  const loaderData = useLoaderData();

  return (
    <>
      <section>
        public area
        <pre>{JSON.stringify(loaderData, null, 2)}</pre>
      </section>
    </>
  );
}
