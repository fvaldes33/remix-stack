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
      <section className="container my-48">
        <h1 className="text-6xl font-bold mb-4">Project Template Hero</h1>
      </section>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </>
  );
}
