import styles from "./styles/app.css";

import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { commitSession, generateHash, getSession } from "./lib/session.server";
import { SPACES_CDN } from "./lib/env";
import * as gtag from "~/lib/gtag.client";
import { ANON_SESSION_KEY } from "./lib/const";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&family=Inter:wght@400;700;900&display=swap",
    },
  ];
}

export const meta: MetaFunction = ({ location }) => ({
  charset: "utf-8",
  title: "Design Your Next Purchase With AI | Designed AI",
  description:
    "Design with the power of AI to create one of a kind apparel and more delivered to your door step",
  "og:description":
    "Design with the power of AI to create one of a kind apparel and more delivered to your door step",
  viewport: "width=device-width,initial-scale=1",
  "twitter:card": "summary_large_image",
  "twitter:site": "@francoxavier33",
  "twitter:creator": "@francoxavier33",
  "twitter:image": `${SPACES_CDN}static/social/open-graph.jpg`,
  "og:image": `${SPACES_CDN}static/social/open-graph.jpg`,
  "og:type": "website",
  "og:url": `https://www.designedwithai.com${location.pathname}`,
});

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request);
  if (!session.has(ANON_SESSION_KEY)) {
    session.set(ANON_SESSION_KEY, generateHash());
  }

  return json(
    {
      env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
        PUBLIC_MAPBOX_KEY: process.env.PUBLIC_MAPBOX_KEY,
        PUBLIC_GOOGLE_MAP_KEY: process.env.PUBLIC_GOOGLE_MAP_KEY,
        GA_TRACKING_ID: process.env.GA_TRACKING_ID,
        PRINTFUL_SECRET: process.env.PRINTFUL_SECRET,
        SPACES_CDN: process.env.SPACES_CDN,
        SPACES_BASE: process.env.SPACES_BASE,
      },
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export function action() {
  return { ok: true };
}

export default function App() {
  const { env } = useLoaderData<typeof loader>();
  const location = useLocation();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  useEffect(() => {
    if (env.GA_TRACKING_ID?.length) {
      gtag.pageview(location.pathname, env.GA_TRACKING_ID);
    }
  }, [location, env.GA_TRACKING_ID]);

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className="h-full selection:bg-rose-600/50">
        <head>
          <Meta />
          <Links />
        </head>
        <body className="h-full min-h-screen bg-slate-100 text-gray-800 font-sans">
          {!env.GA_TRACKING_ID ? null : (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_TRACKING_ID}`}
              />
              <script
                async
                id="gtag-init"
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${env.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </>
          )}
          <Outlet />
          <ScrollRestoration />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.env = ${JSON.stringify(env)}`,
            }}
          />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </QueryClientProvider>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen flex items-center justify-center bg-gray-100 text-slate-800">
        <div className="w-11/12 max-w-screen-md bg-white rounded-lg shadow-xl border-gray-200 p-12">
          <div className="flex items-start justify-start">
            <span className="text-5xl">😭</span>
            <div className="ml-4">
              <h1 className="text-5xl font-sans font-black mb-2">Whoops!</h1>
              <p className="text-lg mb-4">
                {caught.status} / {caught.statusText}
              </p>
              <a
                href="/"
                className="inline-block bg-transparent h-12 px-6 bg-slate-900 text-white transition-all duration-150 hover:bg-slate-800 rounded-md"
              >
                <div className="h-full flex items-center justify-center font-bold">
                  Back Home
                </div>
              </a>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen flex items-center justify-center bg-gray-100 text-slate-800">
        <div className="w-11/12 max-w-screen-md bg-white rounded-lg shadow-xl border-gray-200 p-12">
          <div className="flex items-start justify-start">
            <span className="text-5xl">😭</span>
            <div className="ml-4">
              <h1 className="text-5xl font-sans font-black mb-2">
                Oh no, this is bad!
              </h1>
              <p className="text-lg mb-4">{error.message}</p>
              <a
                href="/"
                className="inline-block bg-transparent h-12 px-6 bg-slate-900 text-white transition-all duration-150 hover:bg-slate-800 rounded-md"
              >
                <div className="h-full flex items-center justify-center font-bold">
                  Back Home
                </div>
              </a>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
