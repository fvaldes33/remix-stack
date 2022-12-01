var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/lib/gtag.client
var require_gtag = __commonJS({
  "empty-module:~/lib/gtag.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});

// app/styles/app.css
var app_default = "/build/_assets/app-YNBKCLCS.css";

// app/root.tsx
var import_node2 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_react_query = require("@tanstack/react-query"), import_react_hot_toast = require("react-hot-toast"), import_react3 = require("react");

// app/lib/session.server.ts
var import_node = require("@remix-run/node");

// app/lib/const.ts
var SESSION_KEY = "authenticated", SESSION_ERROR_KEY = "error";
var APP_NAME = "Project Template", ANON_SESSION_KEY = "__pt_anon_session";

// app/lib/session.server.ts
var import_crypto = __toESM(require("crypto")), sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), { commitSession } = sessionStorage;
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
function generateHash() {
  return import_crypto.default.randomBytes(16).toString("hex");
}
async function getAuthSession(request) {
  return (await getSession(request)).get(SESSION_KEY);
}
async function commitAuthSession(request, {
  authSession,
  flashErrorMessage
} = {}) {
  let session = await getSession(request);
  return authSession !== void 0 && session.set(SESSION_KEY, authSession), session.flash(SESSION_ERROR_KEY, flashErrorMessage), sessionStorage.commitSession(session, { maxAge: 2592e3 });
}
async function destroyAuthSession(request) {
  let session = await getSession(request);
  return (0, import_node.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
function mapAuthSession(supabaseAuthSession) {
  var _a, _b;
  return supabaseAuthSession ? {
    accessToken: supabaseAuthSession.access_token,
    refreshToken: supabaseAuthSession.refresh_token ?? "",
    userId: ((_a = supabaseAuthSession.user) == null ? void 0 : _a.id) ?? "",
    email: ((_b = supabaseAuthSession.user) == null ? void 0 : _b.email) ?? "",
    expiresIn: supabaseAuthSession.expires_in ?? -1,
    expiresAt: supabaseAuthSession.expires_at ?? -1,
    providerToken: supabaseAuthSession.provider_token
  } : null;
}

// app/lib/isBrowser.ts
var isBrowser = typeof document < "u" && typeof process > "u";

// app/lib/env.ts
function getEnv(name, { isRequired, isSecret } = { isSecret: !0, isRequired: !0 }) {
  if (isBrowser && isSecret)
    return "";
  let value = ((isBrowser ? window.env : process.env) ?? {})[name];
  if (!value && isRequired)
    throw new Error(`${name} is not set`);
  return value;
}
var SUPABASE_SERVICE_KEY = getEnv("SUPABASE_SERVICE_KEY"), SESSION_SECRET = getEnv("SESSION_SECRET"), PRIVATE_STRIPE_KEY = getEnv("PRIVATE_STRIPE_KEY"), PRIVATE_STRIPE_WEBHOOK_SECRET = getEnv(
  "PRIVATE_STRIPE_WEBHOOK_SECRET"
), NODE_ENV = getEnv("NODE_ENV", {
  isSecret: !1,
  isRequired: !1
}), SUPABASE_URL = getEnv("SUPABASE_URL", { isSecret: !1 }), SUPABASE_ANON_KEY = getEnv("SUPABASE_ANON_KEY", {
  isSecret: !1
}), PUBLIC_STRIPE_KEY = getEnv("PUBLIC_STRIPE_KEY", {
  isSecret: !1
}), PRIVATE_PRINTFUL_SECRET = getEnv("PRIVATE_PRINTFUL_SECRET", {
  isSecret: !0
}), SPACES_KEY = getEnv("SPACES_KEY", {
  isSecret: !0
}), SPACES_SECRET = getEnv("SPACES_SECRET", {
  isSecret: !0
}), SPACES_BASE = getEnv("SPACES_BASE", {
  isSecret: !1
}), SPACES_CDN = getEnv("SPACES_CDN", {
  isSecret: !1
}), GA_TRACKING_ID = getEnv("GA_TRACKING_ID", {
  isSecret: !1,
  isRequired: !1
}), GTM_TRACKING_ID = getEnv("GTM_TRACKING_ID", {
  isSecret: !1,
  isRequired: !1
}), PRIVATE_SLACK_WEBHOOK = getEnv("PRIVATE_SLACK_WEBHOOK"), SLACK_TOKEN = getEnv("SLACK_TOKEN");

// app/root.tsx
var gtag = __toESM(require_gtag());
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links() {
  return [
    { rel: "stylesheet", href: app_default },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&family=Inter:wght@400;700;900&display=swap"
    }
  ];
}
var meta = ({ location }) => ({
  charset: "utf-8",
  title: "Design Your Next Purchase With AI | Designed AI",
  description: "Design with the power of AI to create one of a kind apparel and more delivered to your door step",
  "og:description": "Design with the power of AI to create one of a kind apparel and more delivered to your door step",
  viewport: "width=device-width,initial-scale=1",
  "twitter:card": "summary_large_image",
  "twitter:site": "@francoxavier33",
  "twitter:creator": "@francoxavier33",
  "twitter:image": `${SPACES_CDN}static/social/open-graph.jpg`,
  "og:image": `${SPACES_CDN}static/social/open-graph.jpg`,
  "og:type": "website",
  "og:url": `https://www.designedwithai.com${location.pathname}`
});
async function loader({ request }) {
  let session = await getSession(request);
  return session.has(ANON_SESSION_KEY) || session.set(ANON_SESSION_KEY, generateHash()), (0, import_node2.json)(
    {
      env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
        PUBLIC_MAPBOX_KEY: process.env.PUBLIC_MAPBOX_KEY,
        PUBLIC_GOOGLE_MAP_KEY: process.env.PUBLIC_GOOGLE_MAP_KEY,
        GA_TRACKING_ID: process.env.GA_TRACKING_ID,
        GTM_TRACKING_ID: process.env.GTM_TRACKING_ID,
        PRINTFUL_SECRET: process.env.PRINTFUL_SECRET,
        SPACES_CDN: process.env.SPACES_CDN,
        SPACES_BASE: process.env.SPACES_BASE
      }
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
function action() {
  return { ok: !0 };
}
function App() {
  let { env } = (0, import_react2.useLoaderData)(), location = (0, import_react2.useLocation)(), [queryClient] = (0, import_react3.useState)(
    () => new import_react_query.QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5e3,
          refetchOnWindowFocus: !1
        }
      }
    })
  );
  return (0, import_react3.useEffect)(() => {
    var _a;
    (_a = env.GA_TRACKING_ID) != null && _a.length && gtag.pageview(location.pathname, env.GA_TRACKING_ID);
  }, [location, env.GA_TRACKING_ID]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_query.QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      className: "h-full selection:bg-rose-600/50",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          className: "h-full min-h-screen bg-slate-100 text-gray-800 font-sans",
          children: [
            env.GA_TRACKING_ID ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
                  async: !0,
                  src: `https://www.googletagmanager.com/gtag/js?id=${env.GA_TRACKING_ID}`
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 116,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
                  async: !0,
                  id: "gtag-init",
                  dangerouslySetInnerHTML: {
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${env.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
                  }
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 120,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 115,
              columnNumber: 13
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_hot_toast.Toaster, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 137,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 138,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
              dangerouslySetInnerHTML: {
                __html: `window.env = ${JSON.stringify(env)}`
              }
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 144,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 145,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 113,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Oops!"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 157,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 158,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 159,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 156,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-screen w-screen flex items-center justify-center bg-gray-100 text-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-11/12 max-w-screen-md bg-white rounded-lg shadow-xl border-gray-200 p-12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-start justify-start",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "text-5xl",
                  children: "\u{1F62D}"
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 164,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "ml-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-5xl font-sans font-black mb-2",
                      children: "Whoops!"
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 166,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-lg mb-4",
                      children: [
                        caught.status,
                        " / ",
                        caught.statusText
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 167,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "/",
                      className: "inline-block bg-transparent h-12 px-6 bg-slate-900 text-white transition-all duration-150 hover:bg-slate-800 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "h-full flex items-center justify-center font-bold",
                        children: "Back Home"
                      }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 170,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 165,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 162,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 181,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 161,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 155,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Oh no!"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 191,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 192,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 193,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 190,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-screen w-screen flex items-center justify-center bg-gray-100 text-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-11/12 max-w-screen-md bg-white rounded-lg shadow-xl border-gray-200 p-12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-start justify-start",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "text-5xl",
                  children: "\u{1F62D}"
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 198,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "ml-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-5xl font-sans font-black mb-2",
                      children: "Oh no, this is bad!"
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 200,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-lg mb-4",
                      children: error.message
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 203,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "/",
                      className: "inline-block bg-transparent h-12 px-6 bg-slate-900 text-white transition-all duration-150 hover:bg-slate-800 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "h-full flex items-center justify-center font-bold",
                        children: "Back Home"
                      }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 204,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 199,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 197,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 196,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 215,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 195,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 189,
    columnNumber: 5
  }, this);
}

// app/routes/api/webhooks/stripe.ts
var stripe_exports = {};
__export(stripe_exports, {
  action: () => action2
});
var import_node3 = require("@remix-run/node");

// app/lib/stripe.server.ts
var import_stripe = __toESM(require("stripe"));

// app/lib/supabase.ts
var import_supabase_js = require("@supabase/supabase-js");
function getSupabaseClient(supabaseKey, access_token) {
  return (0, import_supabase_js.createClient)(SUPABASE_URL, supabaseKey, {
    auth: {
      autoRefreshToken: !1,
      persistSession: !1
    },
    global: access_token ? {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    } : {}
  });
}
function getSupabase(accessToken) {
  return getSupabaseClient(SUPABASE_ANON_KEY, accessToken);
}
function getSupabaseAdmin(accessToken) {
  if (isBrowser)
    throw new Error(
      "getSupabaseAdmin is not available in browser and should NOT be used in insecure environments"
    );
  return getSupabaseClient(SUPABASE_SERVICE_KEY, accessToken);
}

// app/lib/stripe.server.ts
var stripe = new import_stripe.default(PRIVATE_STRIPE_KEY, {
  apiVersion: "2022-08-01"
}), supabase = getSupabaseAdmin();
async function onCheckoutSessionCompleted(session) {
  let enrichedSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["customer", "line_items", "payment_intent.shipping"]
  });
  console.log(enrichedSession);
}

// app/lib/slack.server.ts
async function sendNotification({
  text,
  blocks
}) {
  try {
    let data = await (await fetch(PRIVATE_SLACK_WEBHOOK, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ text, blocks })
    })).text();
    return console.log("sendNotification", data), data;
  } catch (error) {
    console.log(error);
  }
}

// app/routes/api/webhooks/stripe.ts
async function action2({ request }) {
  let event;
  try {
    let payload = await request.text(), signature = request.headers.get("stripe-signature");
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.PRIVATE_STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    throw console.log(err), console.log("\u26A0\uFE0F  Webhook signature verification failed."), console.log("\u26A0\uFE0F  Check the env file and enter the correct webhook secret."), new Response("", { status: 400 });
  }
  try {
    await sendNotification({
      blocks: [
        {
          type: "section",
          text: {
            type: "plain_text",
            text: `[Stripe] ${event.type} hook called`,
            emoji: !0
          }
        }
      ]
    });
  } catch {
  }
  switch (event.type) {
    case "checkout.session.completed":
      await onCheckoutSessionCompleted(
        event.data.object
      );
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return (0, import_node3.json)({
    status: "OK"
  });
}

// app/routes/api/webhooks/slack.ts
var slack_exports = {};
__export(slack_exports, {
  action: () => action3,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
async function loader2({ request }) {
  let url = new URL(request.url), resultId = url.searchParams.get("resultId"), status = url.searchParams.get("status");
  if (url.searchParams.get("key") !== SLACK_TOKEN)
    throw new Response("", { status: 401, statusText: "Not authorized" });
  if (!resultId || !status)
    throw new Response("", {
      status: 500,
      statusText: "Missing required parameters"
    });
  let client = getSupabaseAdmin(), { data, error } = await client.from("prompt_results").update({
    featured: !0
  }).match({ id: resultId }).select("*, prompt:prompts(*)").single();
  if (error)
    throw new Response("", {
      status: 500,
      statusText: error.message
    });
  if (!data)
    throw new Response("", {
      status: 500,
      statusText: "Something went wrong"
    });
  return await client.from("prompts").update({ featured: !0, approved: !0 }).match({ id: data.prompt.id }), (0, import_node4.redirect)(`/explore/${data.prompt.uuid}`);
}
function action3() {
  return { ok: !0 };
}

// app/routes/__index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => MainLayout,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_jotai2 = require("jotai");

// app/lib/atoms/root.tsx
var import_jotai = require("jotai"), rootScope = Symbol("__root"), sbAtom = (0, import_jotai.atom)(null), accessTokenAtom = (0, import_jotai.atom)(""), userAtom = (0, import_jotai.atom)(null), profileAtom = (0, import_jotai.atom)(
  null
), colorSchemeAtom = (0, import_jotai.atom)("dark"), showAuthModalAtom = (0, import_jotai.atom)(!1);

// app/lib/auth/guards.server.ts
var import_node5 = require("@remix-run/node");

// app/lib/auth/auth.server.ts
async function getAuthAccountByAccessToken(accessToken) {
  let { data, error } = await getSupabaseAdmin().auth.getUser(accessToken);
  return !data || error ? null : data.user;
}

// app/lib/auth/guards.server.ts
async function verifyAuthSession(authSession) {
  let authAccount = await getAuthAccountByAccessToken(
    authSession.accessToken
  );
  return !(!authAccount || authAccount.id !== authSession.userId);
}
async function requireNonAuthSession(request) {
  let authSession = await getAuthSession(request);
  return authSession ? await verifyAuthSession(authSession) ? (0, import_node5.redirect)("/app") : (0, import_node5.json)(
    {},
    {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session"
        })
      }
    }
  ) : (0, import_node5.json)({});
}
async function requireAuthSession(request) {
  let authSession = await getAuthSession(request);
  if (!(authSession != null && authSession.accessToken) || !(authSession != null && authSession.refreshToken))
    throw (0, import_node5.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session"
        })
      }
    });
  if (!await verifyAuthSession(authSession))
    throw (0, import_node5.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session"
        })
      }
    });
  return authSession;
}

// app/routes/__index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  var _a;
  let authSession = await getAuthSession(request);
  if (authSession != null && authSession.accessToken && await verifyAuthSession(authSession)) {
    let { accessToken } = authSession, supabase2 = getSupabaseAdmin(accessToken), { data } = await supabase2.auth.getUser(accessToken), { data: profile } = await supabase2.from("profiles").select("*").match({ id: (_a = data.user) == null ? void 0 : _a.id }).single();
    return (0, import_node6.json)({
      accessToken,
      user: data.user,
      profile
    });
  }
  return (0, import_node6.json)({
    accessToken: null,
    user: null,
    profile: null
  });
}
function MainLayout() {
  let { accessToken, user, profile } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jotai2.Provider, {
    initialValues: [
      [accessTokenAtom, accessToken],
      [userAtom, user],
      [profileAtom, profile]
    ],
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index.tsx
var index_exports2 = {};
__export(index_exports2, {
  default: () => SubMainLayout
});
var import_react16 = require("@remix-run/react"), import_jotai5 = require("jotai");

// app/components/Footer.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "bg-white border-t border-gray-200 py-24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container mx-auto",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
            to: "/",
            className: "font-bold text-xl",
            children: [
              "Designed ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "text-emerald-600 font-black",
                children: "/ AI"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 9,
                columnNumber: 22
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 8,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "flex mt-2 divide-x-2 -mx-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
                className: "px-2",
                to: "/explore",
                children: "Explore"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 12,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
                className: "px-2",
                to: "/login",
                children: "Login"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 15,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
                className: "px-2",
                to: "/privacy",
                children: "Privacy"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 18,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
                className: "px-2",
                to: "/terms",
                children: "Terms"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 21,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
                className: "px-2",
                to: "/returns",
                children: "Returns"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 24,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-4",
            children: "\xA9 2022 designedwithai.com \u2014 All rights reserved."
          }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_react12 = require("@headlessui/react"), import_react13 = require("@remix-run/react"), import_react14 = require("react"), import_tabler_icons_react5 = require("tabler-icons-react");

// app/components/primitives/Avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar")), import_react6 = require("react");

// app/lib/classNames.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// app/components/primitives/Avatar.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), sizeClass = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
  "2xl": "w-16 h-16"
}, Avatar = (0, import_react6.forwardRef)(function({ component, src, alt = "", fallback, size = "md", ...props }, ref) {
  let Component = component || "div";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarPrimitive.Root, {
    ref,
    className: classNames(
      "flex items-center justify-center overflow-hidden select-none rounded-full bg-white border border-slate-800",
      sizeClass[size],
      props.className ?? ""
    ),
    asChild: !0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, {
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarPrimitive.Image, {
          src,
          alt,
          className: "w-full h-full object-cover"
        }, void 0, !1, {
          fileName: "app/components/primitives/Avatar.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarPrimitive.Fallback, {
          delayMs: 600,
          className: "h-full w-full flex items-center justify-center bg-white text-slate-800 text-sm leading-none font-semibold",
          children: fallback ?? "NA"
        }, void 0, !1, {
          fileName: "app/components/primitives/Avatar.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/primitives/Avatar.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/primitives/Avatar.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}), Avatar_default = Avatar;

// app/components/primitives/Button.tsx
var import_react7 = require("react"), import_tabler_icons_react = require("tabler-icons-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), defaultWrapperClass = [
  "appearance-none",
  "inline-block",
  "relative",
  "font-medium",
  "overflow-hidden",
  "whitespace-nowrap",
  "leading-none",
  "select-none",
  "cursor-pointer",
  "rounded-full",
  "w-auto",
  "ease transition-all duration-150",
  "active:scale-95",
  "focus:outline-none focus:ring-2",
  "disabled:opacity-50"
], sizeMap = {
  xs: ["h-7", "px-4", "text-xs"],
  sm: ["h-8", "px-4", "text-sm"],
  md: ["h-10", "px-6", "text-base"],
  lg: ["h-12", "px-8", "text-lg"],
  xl: ["h-14", "px-10", "text-xl"]
}, variantClasses = {
  primary: [
    "border",
    "border-primary-600",
    "bg-primary-600",
    "text-white",
    "focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-50",
    "hover:bg-primary-400 hover:border-primary-400"
  ],
  secondary: [
    "border",
    "border-secondary-600",
    "bg-secondary-600",
    "text-white",
    "focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-secondary-50",
    "hover:bg-secondary-400 hover:border-secondary-400"
  ],
  outline: [
    "border",
    "border-primary-600",
    "text-primary-600",
    "hover:bg-primary-600",
    "hover:text-white"
  ]
}, Button = (0, import_react7.forwardRef)(function({
  component,
  children,
  variant = "primary",
  size = "md",
  loading = !1,
  leftIcon,
  ...props
}, ref) {
  let Component = component || "button", variantClass = variantClasses[variant], sizeClass3 = sizeMap[size], renderLeftSection = () => loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react.Loader, {
    size: 16,
    className: "mr-2 animate-spin transition-all"
  }, void 0, !1, {
    fileName: "app/components/primitives/Button.tsx",
    lineNumber: 93,
    columnNumber: 14
  }, this) : leftIcon;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, {
    ...props,
    ref,
    disabled: loading,
    className: classNames(
      defaultWrapperClass.join(" "),
      variantClass.join(" "),
      sizeClass3.join(" "),
      props.className
    ),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: classNames("flex items-center justify-center h-full w-full"),
      children: [
        renderLeftSection(),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children
        }, void 0, !1, {
          fileName: "app/components/primitives/Button.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/primitives/Button.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/primitives/Button.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}), Button_default = Button;

// app/components/primitives/DropdownMenu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu")), import_react8 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DropdownMenu = (0, import_react8.forwardRef)(function({ trigger, children, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Root, {
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Trigger, {
        asChild: !0,
        children: trigger
      }, void 0, !1, {
        fileName: "app/components/primitives/DropdownMenu.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Portal, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Content, {
          className: "w-60 bg-white rounded-md shadow-xl z-50 overflow-hidden border border-gray-100",
          align: "end",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Arrow, {
              style: { fill: "white" }
            }, void 0, !1, {
              fileName: "app/components/primitives/DropdownMenu.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this),
            children
          ]
        }, void 0, !0, {
          fileName: "app/components/primitives/DropdownMenu.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/primitives/DropdownMenu.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/primitives/DropdownMenu.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
});
var DropdownMenuItem = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Item, {
  asChild: !0,
  className: "px-4 py-2 bg-white hover:bg-gray-100 outline-none text-sm",
  children
}, void 0, !1, {
  fileName: "app/components/primitives/DropdownMenu.tsx",
  lineNumber: 50,
  columnNumber: 3
}, this), DropdownMenu_default = DropdownMenu;

// app/components/primitives/Input.tsx
var import_react9 = require("react"), import_tabler_icons_react2 = require("tabler-icons-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), defaultWrapperClass2 = [
  "flex items-center",
  "relative",
  "font-medium",
  "whitespace-nowrap",
  "leading-none",
  "rounded-md",
  "w-auto",
  "border border-primary-600",
  "focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2 focus-within:ring-offset-primary-50",
  "ease transition-all duration-150",
  "disabled:opacity-50"
], sizeMap2 = {
  xs: ["h-7", "text-xs"],
  sm: ["h-8", "text-sm"],
  md: ["h-10", "text-base"],
  lg: ["h-12", "text-lg"],
  xl: ["h-14", "text-xl"]
}, Input = (0, import_react9.forwardRef)(function({
  component,
  children,
  label,
  size = "md",
  loading = !1,
  leftIcon,
  rightIcon,
  ...props
}, ref) {
  let Component = component || "input", sizeClass3 = sizeMap2[size], renderLeftSection = () => !leftIcon && !loading ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: "pl-4 text-primary-600",
    children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react2.Loader, {
      className: "animate-spin transition-all"
    }, void 0, !1, {
      fileName: "app/components/primitives/Input.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this) : leftIcon
  }, void 0, !1, {
    fileName: "app/components/primitives/Input.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this), renderRightSection = () => rightIcon ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: "pr-4 text-primary-600",
    children: rightIcon
  }, void 0, !1, {
    fileName: "app/components/primitives/Input.tsx",
    lineNumber: 80,
    columnNumber: 12
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col w-full",
    children: [
      label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        className: "block text-sm font-medium px-1 mb-1",
        children: label
      }, void 0, !1, {
        fileName: "app/components/primitives/Input.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: classNames(defaultWrapperClass2.join(" "), props.className),
        children: [
          renderLeftSection(),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, {
            ...props,
            ref,
            className: classNames(
              "w-full px-4",
              "bg-transparent",
              "border-none",
              "focus:border-none",
              "focus:ring-0",
              "focus:outline-none",
              sizeClass3.join(" ")
            )
          }, void 0, !1, {
            fileName: "app/components/primitives/Input.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this),
          renderRightSection()
        ]
      }, void 0, !0, {
        fileName: "app/components/primitives/Input.tsx",
        lineNumber: 88,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/primitives/Input.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}), Input_default = Input;

// app/components/primitives/Modal.tsx
var Dialog = __toESM(require("@radix-ui/react-dialog")), import_react10 = require("react"), import_tabler_icons_react3 = require("tabler-icons-react");

// app/components/primitives/VisuallyHidden.tsx
var VisuallyHiddenPrimitive = __toESM(require("@radix-ui/react-visually-hidden")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function VisuallyHidden(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHiddenPrimitive.Root, {
    ...props
  }, void 0, !1, {
    fileName: "app/components/primitives/VisuallyHidden.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

// app/components/primitives/Modal.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), sizeClass2 = {
  xs: "max-w-screen-xs",
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl"
}, paddingClass = {
  xs: "p-4",
  sm: "p-6",
  md: "p-10",
  lg: "p-16",
  xl: "p-32",
  "2xl": "p-32"
}, Modal = (0, import_react10.forwardRef)(function({
  size = "md",
  padding = "sm",
  ariaTitle,
  title,
  description,
  children,
  fullScreen = !1,
  withCloseButton = !0,
  ...props
}, ref) {
  let finalSize = fullScreen ? "w-screen max-w-screen" : sizeClass2[size], finalPadding = typeof padding == "number" ? `${padding}px` : paddingClass[padding];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Root, {
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Portal, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Overlay, {
          className: "bg-slate-900 bg-opacity-50 fixed inset-0 animate-show z-50 backdrop-blur-sm"
        }, void 0, !1, {
          fileName: "app/components/primitives/Modal.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Content, {
          className: classNames(
            "bg-white z-50  shadow-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "w-full",
            finalSize,
            fullScreen ? "h-screen max-h-screen" : "max-h-[85vh]",
            fullScreen ? "" : "rounded-lg",
            finalPadding,
            "focus:outline-none",
            "animate-modalIn",
            "overflow-y-auto"
          ),
          children: [
            ariaTitle && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VisuallyHidden, {
              asChild: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Title, {
                children: ariaTitle
              }, void 0, !1, {
                fileName: "app/components/primitives/Modal.tsx",
                lineNumber: 74,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/primitives/Modal.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Title, {
              className: "mb-4",
              children: title
            }, void 0, !1, {
              fileName: "app/components/primitives/Modal.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, this),
            description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Description, {
              children: description
            }, void 0, !1, {
              fileName: "app/components/primitives/Modal.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            children,
            withCloseButton && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog.Close, {
              asChild: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                "aria-label": "Close",
                className: "absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 text-white transition-transform hover:rotate-90",
                "data-hide-screenshot": !0,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react3.X, {
                  size: 16
                }, void 0, !1, {
                  fileName: "app/components/primitives/Modal.tsx",
                  lineNumber: 91,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/primitives/Modal.tsx",
                lineNumber: 86,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/primitives/Modal.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/primitives/Modal.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/primitives/Modal.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/primitives/Modal.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}), Modal_default = Modal;

// app/components/AvatarMenu.tsx
var import_react11 = require("@remix-run/react");

// app/lib/hooks/useUserData.tsx
var import_jotai3 = require("jotai");
function useUserData() {
  let user = (0, import_jotai3.useAtomValue)(userAtom), profile = (0, import_jotai3.useAtomValue)(profileAtom);
  return {
    user,
    profile
  };
}

// app/components/AvatarMenu.tsx
var import_jotai4 = require("jotai");
var import_tabler_icons_react4 = require("tabler-icons-react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AvatarMenu({ links: links3 }) {
  let { profile } = useUserData(), setUser = (0, import_jotai4.useSetAtom)(userAtom), setProfile = (0, import_jotai4.useSetAtom)(profileAtom);
  if (!profile)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar_default, {
      component: import_react11.Link,
      to: "/login",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react4.User, {}, void 0, !1, {
        fileName: "app/components/AvatarMenu.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/AvatarMenu.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this);
  let signout = () => {
    setUser(null), setProfile(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu_default, {
    trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar_default, {
      component: "button",
      src: profile.avatar_url ? profile.avatar_url : `https://avatars.dicebear.com/api/miniavs/${profile.email}.svg`,
      alt: profile.full_name
    }, void 0, !1, {
      fileName: "app/components/AvatarMenu.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    children: [
      links3 && links3.length > 0 && (links3 == null ? void 0 : links3.map(({ label, to }) => {
        let isExternal = to.startsWith("http"), menuItemProps = {
          component: import_react11.Link,
          to
        };
        isExternal && (menuItemProps = {
          component: "a",
          href: to,
          target: "_blank",
          rel: "noreferrer"
        });
        let { component: Component, ...props } = menuItemProps;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, {
            ...props,
            className: "block",
            children: label
          }, void 0, !1, {
            fileName: "app/components/AvatarMenu.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        }, to, !1, {
          fileName: "app/components/AvatarMenu.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this);
      })),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
          to: "/signout",
          className: "block",
          onClick: () => signout(),
          children: "Logout"
        }, void 0, !1, {
          fileName: "app/components/AvatarMenu.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/AvatarMenu.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/AvatarMenu.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), mainLinks = [{ to: "/page", label: "Page" }], avatarLinks = [
  { to: "/app/account", label: "Account" }
];
function Header({ fullWidth = !1 }) {
  let { user } = useUserData(), location = (0, import_react13.useLocation)(), [opened, setOpened] = (0, import_react14.useState)(!1), [searchOpened, setSearchOpened] = (0, import_react14.useState)(!1), finalLinks = mainLinks.concat(
    user ? [{ to: "/app", label: "My Designs", end: !0 }] : [{ to: "/login", label: "Login" }]
  ), searchEndpoint = location.pathname.includes("app") ? "/app" : "/explore";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: classNames(
          "container flex h-20 items-center px-4 relative z-50 lg:justify-between",
          "text-slate-800"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center lg:flex-shrink-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Link, {
                to: "/",
                className: "relative font-bold text-xl",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: [
                    "P ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-emerald-600 font-black",
                      children: "/ T"
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 51,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 50,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 49,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
                className: "hidden lg:flex lg:space-x-4 ml-8",
                children: [
                  mainLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
                    to: link.to,
                    end: link.end ?? !1,
                    className: ({ isActive }) => `transition-all duration-150 ${isActive ? "font-black tracking-tighter" : ""}`,
                    children: link.label
                  }, link.to, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 57,
                    columnNumber: 15
                  }, this)),
                  user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
                        to: "/app",
                        className: ({ isActive }) => `transition-all duration-150 ${isActive ? "font-black tracking-tighter" : ""}`,
                        end: !0,
                        children: "My Designs"
                      }, void 0, !1, {
                        fileName: "app/components/Header.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
                        to: "/app/create",
                        className: ({ isActive }) => `transition-all duration-150 ${isActive ? "font-black tracking-tighter" : ""}`,
                        children: "Create"
                      }, void 0, !1, {
                        fileName: "app/components/Header.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 71,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Header.tsx",
                lineNumber: 55,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ml-auto flex lg:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "mr-4 h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center",
                onClick: () => setSearchOpened(!0),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react5.Search, {
                  size: 16,
                  className: "text-gray-800",
                  strokeWidth: 3
                }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 104,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 100,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center",
                onClick: () => setOpened(!0),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react5.Menu, {
                  size: 16,
                  className: "text-gray-800",
                  strokeWidth: 3
                }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 110,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 106,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "hidden lg:flex lg:justify-end",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "hidden mr-4 w-full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Form, {
                  action: searchEndpoint,
                  className: "relative flex-1 lg:w-full lg:max-w-md mx-auto",
                  onSubmitCapture: () => setSearchOpened(!1),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "search",
                      placeholder: "Search...",
                      name: "q",
                      className: classNames(
                        "pl-10 pr-4 h-10  rounded-full w-full shadow-md focus-within:border-none text-slate-800",
                        "bg-white/50"
                      )
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 122,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react5.Search, {
                      size: 16,
                      className: "text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2",
                      strokeWidth: 3
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 131,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 117,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 116,
                columnNumber: 11
              }, this),
              user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarMenu, {
                links: avatarLinks
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 144,
                columnNumber: 13
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                component: import_react13.Link,
                variant: "primary",
                to: "/signup",
                children: "Create Account"
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 140,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 114,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Transition, {
        appear: !0,
        as: import_react14.Fragment,
        show: searchOpened,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex h-20 items-center px-4 fixed top-0 inset-x-0 z-50",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Form, {
              action: searchEndpoint,
              className: "flex-1 mr-4 focus:outline-emerald-600 focus:ring-emerald-600",
              onSubmitCapture: () => setSearchOpened(!1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "search",
                placeholder: "Search...",
                name: "q",
                className: "px-4 h-10 bg-gray-200 rounded-full w-full shadow-md"
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 157,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 152,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "ml-auto h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center",
              onClick: () => setSearchOpened(!1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react5.X, {
                size: 16,
                className: "text-gray-800",
                strokeWidth: 3
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 168,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 164,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 151,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 150,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Transition, {
        appear: !0,
        as: import_react14.Fragment,
        show: opened,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fixed inset-0 z-[999]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Transition.Child, {
              as: import_react14.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-md z-0",
                onClick: () => setOpened(!1)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 184,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 175,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Transition.Child, {
              as: import_react14.Fragment,
              enter: "ease-in-out transition-all duration-150",
              enterFrom: "opacity-0 translate-y-1/2",
              enterTo: "opacity-100 translate-y-0",
              leave: "ease-in-out transition-all duration-150",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 translate-y-1/2",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-white absolute bottom-0 rounded-t-3xl w-full p-12 shadow-2xl z-10",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
                  className: "flex flex-col space-y-8",
                  children: [
                    finalLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
                      to: link.to,
                      className: ({ isActive }) => `text-xl ${isActive ? "font-black tracking-tighter" : ""}`,
                      onClick: () => setOpened(!1),
                      end: link.end ?? !1,
                      children: link.label
                    }, link.to, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 202,
                      columnNumber: 19
                    }, this)),
                    user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.NavLink, {
                      to: "/create",
                      className: ({ isActive }) => `text-xl ${isActive ? "font-black tracking-tighter" : ""}`,
                      onClick: () => setOpened(!1),
                      children: "Create"
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 215,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      component: import_react13.Link,
                      to: "/signup",
                      variant: "primary",
                      children: "Create Account"
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 225,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 200,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 199,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 190,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 174,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 173,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action4,
  default: () => SignupPage,
  loader: () => loader4
});
var import_form = require("@mantine/form"), import_react15 = require("@remix-run/react"), import_react_query2 = require("@tanstack/react-query"), import_tabler_icons_react6 = require("tabler-icons-react"), import_zod = require("zod");

// app/components/GoogleIcon.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function GoogleIcon({ size }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#fbc02d",
        d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      }, void 0, !1, {
        fileName: "app/components/GoogleIcon.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#e53935",
        d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      }, void 0, !1, {
        fileName: "app/components/GoogleIcon.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#4caf50",
        d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      }, void 0, !1, {
        fileName: "app/components/GoogleIcon.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#1565c0",
        d: "M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      }, void 0, !1, {
        fileName: "app/components/GoogleIcon.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/GoogleIcon.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/signup.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SignupSchema = import_zod.z.object({
  email: import_zod.z.string().email()
});
async function loader4({ request }) {
  return await requireNonAuthSession(request);
}
async function action4({ request }) {
  return null;
}
function SignupPage({ asPage = !0 }) {
  let [searchParams] = (0, import_react15.useSearchParams)(), { onSubmit, getInputProps, setFieldValue, ...form } = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(SignupSchema),
    initialValues: {
      email: ""
    }
  }), createAccount = (0, import_react_query2.useMutation)(async ({ email }) => {
    let redirect7 = `${window.location.origin}/callback`;
    searchParams.has("redirect") && (redirect7 = `${redirect7}?redirectTo=${searchParams.get("redirect")}`);
    let {
      data: { user, session },
      error
    } = await getSupabase().auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirect7
      }
    });
    if (error)
      throw error;
    return { user, session };
  }), handleSubmit = async (values) => {
    createAccount.mutate(values);
  }, signInWithGoogle = async () => {
    let redirectTo = `${window.location.origin}/callback/provider`;
    searchParams.has("redirect") && (redirectTo = `${redirectTo}?redirectTo=${searchParams.get("redirect")}`), await getSupabase().auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo
      }
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: asPage ? "grid md:grid-cols-2" : "",
    children: [
      asPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-4xl font-black text-slate-800",
            children: [
              "Hello \u{1F44B}\u{1F3FC}",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 86,
                columnNumber: 13
              }, this),
              "Welcome to ",
              APP_NAME,
              "!"
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mt-8",
            children: [
              "Already have an account?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Link, {
                to: "/login",
                className: "text-fuchsia-600",
                children: "Sign In"
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 92,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/signup.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-8 md:p-12",
        children: [
          !asPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-center",
            children: [
              "Designed ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "text-emerald-600 font-black",
                children: "/ AI"
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 101,
                columnNumber: 22
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this),
          createAccount.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-red-700/25 border border-red-700/50 mb-4 p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react6.AlertCircle, {
                size: 24
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: createAccount.error.message
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 107,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this),
          createAccount.data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mb-8",
            children: "You are all set! Check your email for the magic link to continue."
          }, void 0, !1, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 112,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "bg-white border-2 border-gray-200 rounded-full px-4 py-2 w-full transition-all duration-150 hover:border-[#4285F4]",
                  onClick: () => signInWithGoogle(),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "flex items-center justify-center space-x-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleIcon, {
                        size: 24
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/signup.tsx",
                        lineNumber: 123,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold font-[Roboto] text-[#00000089]",
                        children: "Sign in with Google"
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/signup.tsx",
                        lineNumber: 124,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__auth/signup.tsx",
                    lineNumber: 122,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__auth/signup.tsx",
                  lineNumber: 118,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 117,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                className: "mt-6",
                method: "post",
                onSubmit: onSubmit(handleSubmit),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, {
                      id: "email",
                      "aria-label": "Email",
                      name: "email",
                      type: "email",
                      placeholder: "you@email.com",
                      required: !0,
                      ...getInputProps("email")
                    }, void 0, !1, {
                      fileName: "app/routes/__auth/signup.tsx",
                      lineNumber: 138,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      type: "submit",
                      variant: "primary",
                      loading: createAccount.isLoading,
                      children: "Send Magic Link"
                    }, void 0, !1, {
                      fileName: "app/routes/__auth/signup.tsx",
                      lineNumber: 148,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__auth/signup.tsx",
                  lineNumber: 137,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 132,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-slate-600 mt-4 text-sm",
                children: [
                  "By signing up, I agree to  Designed AI's",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    className: "text-fuchsia-600",
                    href: "https://www.designwithai.com/terms",
                    children: "terms & conditions"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/signup.tsx",
                    lineNumber: 159,
                    columnNumber: 15
                  }, this),
                  "."
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 157,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/signup.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/signup.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SubMainLayout() {
  let [authModal, setAuthModal] = (0, import_jotai5.useAtom)(showAuthModalAtom);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__index/__index.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        open: authModal,
        onOpenChange: () => setAuthModal(!1),
        size: "sm",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignupPage, {
          asPage: !1
        }, void 0, !1, {
          fileName: "app/routes/__index/__index.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => PrivacyPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PrivacyPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "min-h-[80vh]",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container flex items-center justify-center max-w-screen-lg py-32 -mt-20",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-6xl md:text-8xl font-black tracking-tighter text-slate-800",
            children: "\u{1F648} Privacy Policy"
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/privacy.tsx",
            lineNumber: 6,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/privacy.tsx",
          lineNumber: 5,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/privacy.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "content",
        className: "container -mt-20 pb-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mx-auto prose prose-slate lg:prose-xl bg-white p-6 md:p-12 rounded-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "This Privacy Policy describes how DesignedWithAI (the \u201CSite\u201D or \u201Cwe\u201D) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 13,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Collecting Personal Information"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 18,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as \u201CPersonal Information\u201D. See the list below for more information about what Personal Information we collect and why."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", {
                children: "Device information"
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/privacy.tsx",
                lineNumber: 30,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Examples of Personal Information collected:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 34,
                      columnNumber: 15
                    }, this),
                    " ",
                    "version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Purpose of collection:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 40,
                      columnNumber: 15
                    }, this),
                    " to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 39,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Source of collection:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 45,
                      columnNumber: 15
                    }, this),
                    " Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 44,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Disclosure for a business purpose:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 50,
                      columnNumber: 15
                    }, this),
                    " shared with our processor Shopify."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", {
                children: "Order information"
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/privacy.tsx",
                lineNumber: 55,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Examples of Personal Information collected:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 59,
                      columnNumber: 15
                    }, this),
                    " name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Purpose of collection:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 64,
                      columnNumber: 15
                    }, this),
                    " to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 63,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Source of collection:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 73,
                      columnNumber: 15
                    }, this),
                    " collected from you."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 72,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Disclosure for a business purpose:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 76,
                      columnNumber: 15
                    }, this),
                    " shared with our processor Shopify."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", {
                children: "Customer support information"
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/privacy.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Purpose of collection:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 85,
                      columnNumber: 15
                    }, this),
                    " to provide customer support."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 84,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                      children: "Source of collection:"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 89,
                      columnNumber: 15
                    }, this),
                    " collected from you."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 88,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "\xA0"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 92,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Sharing Personal Information"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 93,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 94,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    "We use Open AI to power our designs. You can read more about how Open AI uses your Personal Information here:",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "https://openai.com/privacy",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "https://openai.com/privacy"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 103,
                      columnNumber: 15
                    }, this),
                    "."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 100,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights."
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 112,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Behavioural Advertising"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 119,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For example:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 120,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    "We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here:",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "https://policies.google.com/privacy?hl=en",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "https://policies.google.com/privacy?hl=en"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 130,
                      columnNumber: 15
                    }, this),
                    ".You can also opt-out of Google Analytics here:",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "https://tools.google.com/dlpage/gaoptout",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "https://tools.google.com/dlpage/gaoptout"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 138,
                      columnNumber: 15
                    }, this),
                    "."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 126,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "We share information about your use of the Site, your purchases, and your interaction with our ads on other websites with our advertising partners. We collect and share some of this information directly with our advertising partners, and in some cases through the use of cookies or other similar technologies (which you may consent to, depending on your location)."
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 147,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 125,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "For more information about how targeted advertising works, you can visit the Network Advertising Initiative's (\u201CNAI\u201D) educational page at",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 160,
                  columnNumber: 13
                }, this),
                "."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 156,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You can opt out of targeted advertising by:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 169,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                      children: "FACEBOOK - "
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 172,
                      columnNumber: 15
                    }, this),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "https://www.facebook.com/settings/?tab=ads",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "https://www.facebook.com/settings/?tab=ads"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 173,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 171,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                      children: "GOOGLE - "
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 182,
                      columnNumber: 15
                    }, this),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "https://www.google.com/settings/ads/anonymous",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "https://www.google.com/settings/ads/anonymous"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 183,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 181,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                      children: "BING - "
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 192,
                      columnNumber: 15
                    }, this),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 193,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                      children: "]"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 200,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 191,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 170,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal at:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "http://optout.aboutads.info/",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "http://optout.aboutads.info/"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 206,
                  columnNumber: 13
                }, this),
                "."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 203,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Using Personal Information"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 216,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Lawful basis"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 222,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Pursuant to the General Data Protection Regulation (\u201CGDPR\u201D), if you are a resident of the European Economic Area (\u201CEEA\u201D), we process your personal information under the following lawful bases:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 223,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "Your consent;"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 229,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "The performance of the contract between you and the Site;"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 230,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "Compliance with our legal obligations;"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 231,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "To protect your vital interests;"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 232,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "To perform a task carried out in the public interest;"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 233,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "For our legitimate interests, which do not override your fundamental rights and freedoms."
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 234,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 228,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Retention"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 239,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the 'Your rights' section below."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 240,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Automatic decision-making"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 246,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "If you are a resident of the EEA, you have the right to object to processing based solely on automated decision-making (which includes profiling), when that decision-making has a legal effect on you or otherwise significantly affects you."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 247,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "We ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  children: "DO NOT"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 254,
                  columnNumber: 16
                }, this),
                "\xA0engage in fully automated decision-making that has a legal or otherwise significant effect using customer data."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 253,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Our processor Shopify uses limited automated decision-making to prevent fraud that does not have a legal or otherwise significant effect on you."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 257,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Services that include elements of automated decision-making include:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 262,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "Temporary denylist of IP addresses associated with repeated failed transactions. This denylist persists for a small number of hours."
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 266,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "Temporary denylist of credit cards associated with denylisted IP addresses. This denylist persists for a small number of days."
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 270,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 265,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {}, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 275,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Your rights"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 276,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "GDPR"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 277,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  children: "."
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 283,
                  columnNumber: 53
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 278,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "CCPA"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 285,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the \u2018Right to Know'), to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 286,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "If you would like to designate an authorized agent to submit these requests on your behalf, please contact us at the address below."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 294,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Cookies"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 298,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "A cookie is a small amount of information that's downloaded to your computer or device when you visit our Site. We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. Cookies make your browsing experience better by allowing the website to remember your actions and preferences (such as login and region selection). This means you don't have to re-enter this information each time you return to the site or browse from one page to another. Cookies also provide information on how people use the website, for instance whether it's their first time visiting or if they are a frequent visitor."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 299,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We use the following cookies to optimize your experience on our Site and to provide our services."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 311,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Cookies Necessary for the Functioning of the Store"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 315,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                          children: "Name"
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 320,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 319,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                          children: "Function"
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 323,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 322,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__index/__index/privacy.tsx",
                    lineNumber: 318,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 317,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "_ab"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 330,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 329,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with access to admin."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 332,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 328,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "_secure_session_id"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 336,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 335,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with navigation through a storefront."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 338,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 334,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "cart"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 344,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 343,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with shopping cart."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 346,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 342,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "cart_sig"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 350,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 349,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with checkout."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 352,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 348,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "cart_ts"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 356,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 355,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with checkout."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 358,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 354,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "checkout_token"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 362,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 361,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with checkout."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 364,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 360,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "secret"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 368,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 367,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with checkout."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 370,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 366,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "secure_customer_sig"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 374,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 373,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with customer login."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 376,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 372,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            children: "storefront_digest"
                          }, void 0, !1, {
                            fileName: "app/routes/__index/__index/privacy.tsx",
                            lineNumber: 380,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 379,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          children: "Used in connection with customer login."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 382,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/__index/privacy.tsx",
                      lineNumber: 378,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 327,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 316,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Reporting and Analytics"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 386,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                          children: "Name"
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 391,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 390,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                          children: "Function"
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 394,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 393,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__index/__index/privacy.tsx",
                    lineNumber: 389,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                          children: "_tracking_consent"
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 399,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 398,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                        children: "Tracking preferences."
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 401,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__index/__index/privacy.tsx",
                    lineNumber: 397,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                          children: "_landing_page"
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 405,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 404,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                        children: "Track landing pages"
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 407,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__index/__index/privacy.tsx",
                    lineNumber: 403,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                          children: "_orig_referrer"
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/privacy.tsx",
                          lineNumber: 411,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 410,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                        children: "Track landing pages"
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/privacy.tsx",
                        lineNumber: 413,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__index/__index/privacy.tsx",
                    lineNumber: 409,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__index/__index/privacy.tsx",
                lineNumber: 388,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 387,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "The length of time that a cookie remains on your computer or mobile device depends on whether it is a \u201Cpersistent\u201D or \u201Csession\u201D cookie. Session cookies last until you stop browsing and persistent cookies last until they expire or are deleted. Most of the cookies we use are persistent and will expire between 30 minutes and two years from the date they are downloaded to your device."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 417,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 425,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through your browser controls, often found in your browser's \u201CTools\u201D or \u201CPreferences\u201D menu. For more information on how to modify your browser settings or how to block, manage or filter cookies can be found in your browser's help file or through such sites as",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "www.allaboutcookies.org",
                  target: "_blank",
                  children: "www.allaboutcookies.org"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/privacy.tsx",
                  lineNumber: 438,
                  columnNumber: 13
                }, this),
                "."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 431,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Additionally, please note that blocking cookies may not completely prevent how we share information with third parties such as our advertising partners. To exercise your rights or opt-out of certain uses of your information by these parties, please follow the instructions in the \u201CBehavioural Advertising\u201D section above."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 443,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Do Not Track"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 450,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Please note that because there is no consistent industry understanding of how to respond to \u201CDo Not Track\u201D signals, we do not alter our data collection and usage practices when we detect such a signal from your browser."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 451,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Changes"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 457,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 458,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Contact"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 463,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hey@designedwithai.com\xA0or by mail using the details provided below:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 464,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "PO BOX 778, Candler, NC 28715"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 470,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                children: "Last updated: 11/25/2022"
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/privacy.tsx",
                lineNumber: 472,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 471,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority. You can contact your local data protection authority, or our supervisory authority."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/privacy.tsx",
              lineNumber: 474,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/__index/privacy.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/privacy.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/privacy.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/returns.tsx
var returns_exports = {};
__export(returns_exports, {
  default: () => ReturnsPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ReturnsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "min-h-[80vh]",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container max-w-screen-lg justify-center flex items-center py-32 -mt-20",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-6xl md:text-8xl font-black text-slate-800 tracking-tighter",
            children: "\u{1F69A} Return Policy"
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/returns.tsx",
            lineNumber: 6,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/returns.tsx",
          lineNumber: 5,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/returns.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "content",
        className: "container -mt-20 pb-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mx-auto prose prose-slate lg:prose-xl bg-white p-6 md:p-12 rounded-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "What's your return policy?"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 13,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "We don't offer returns and exchanges, but if there's something wrong with your order, please let us know by contacting us at",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "mailto:hey@designedwithai.com",
                  children: "hey@designedwithai.com"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/returns.tsx",
                  lineNumber: 17,
                  columnNumber: 13
                }, this),
                "!"
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Do you offer refunds?"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Refunds are only offered to customers that receive the wrong items or damaged items. If any of these apply, please contact us at",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "mailto:hey@designedwithai.com",
                  children: "hey@designedwithai.com"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/returns.tsx",
                  lineNumber: 23,
                  columnNumber: 13
                }, this),
                " ",
                "with photos of wrong/damaged items and we'll sort that out for you."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Can I exchange an item for a different size/color?"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "At this time, we don't offer exchanges. If you're unsure which size would fit better, check out our sizing charts\u2014we have one for every item listed on our store, in the product description section. Though rare, it's possible that an item you ordered was mislabelled. If that's the case, please let us know at",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "mailto:hey@designedwithai.com",
                  children: "hey@designedwithai.com"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/returns.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                " ",
                "within a week after receiving your order. Include your order number and photos of the mislabeled item, and we'll send you a new one, or issue a refund!"
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "Return Policy"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Any claims for misprinted/damaged/defective items must be submitted within 30 days after the product has been received. For packages lost in transit, all claims must be submitted no later than 30 days after the estimated delivery date. Claims deemed an error on our part are covered at our expense."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "The return address is set by default to the Printful facility. When we receive a returned shipment, an automated email notification will be sent to you. Unclaimed returns get donated to charity after 30 days. If Printful's facility isn't used as the return address, you would become liable for any returned shipments you receive."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Otherwise stated here, Printful's return policy will apply. Read it",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://www.printful.com/policies/returns",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "here"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/returns.tsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this),
                "."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/returns.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/__index/returns.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/returns.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/returns.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/index.tsx
var index_exports3 = {};
__export(index_exports3, {
  default: () => HomePage,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader5({ request }) {
  return (0, import_node7.json)({});
}
function HomePage() {
  let loaderData = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "container my-48",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "text-6xl font-bold mb-4",
          children: "Project Template Hero"
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/index.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
        children: JSON.stringify(loaderData, null, 2)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => TermsPage
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TermsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "min-h-[80vh]",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container max-w-screen-lg flex items-center justify-center py-32 -mt-20",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-6xl md:text-8xl font-black tracking-tighter text-slate-800",
            children: "\u{1F4DD} Terms"
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/terms.tsx",
            lineNumber: 6,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/terms.tsx",
          lineNumber: 5,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/terms.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "content",
        className: "container -mt-20 pb-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mx-auto prose prose-slate lg:prose-xl bg-white p-6 md:p-12 rounded-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "OVERVIEW"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 13,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "This website is operated by DesignedWithAi. Throughout the site, the terms \u201Cwe\u201D, \u201Cus\u201D and \u201Cour\u201D refer to DesignedWithAi. DesignedWithAi offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "By visiting our site and/ or purchasing something from us, you engage in our \u201CService\u201D and agree to be bound by the following terms and conditions (\u201CTerms of Service\u201D, \u201CTerms\u201D), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 1 - ONLINE STORE TERMS"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws)."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You must not transmit any worms or viruses or any code of a destructive nature."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 64,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "A breach or violation of any of the Terms will result in an immediate termination of your Services."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 2 - GENERAL CONDITIONS"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We reserve the right to refuse service to anyone for any reason at any time."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 91,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 98,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 107,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 115,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Prices for our products are subject to change without notice."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 121,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 5 - PRODUCTS OR SERVICES"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 126,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Return Policy. We adhere to Printful\u2019s Return Policy, which can be found",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://www.printful.com/policies/returns",
                  children: "here"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/terms.tsx",
                  lineNumber: 133,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 127,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 135,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 141,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 152,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 158,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 159,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 171,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "For more detail, please review our",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://www.printful.com/policies/returns",
                  children: "Returns Policy"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/terms.tsx",
                  lineNumber: 180,
                  columnNumber: 13
                }, this),
                "."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 178,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 7 - OPTIONAL TOOLS"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 185,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 186,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You acknowledge and agree that we provide access to such tools \u201Das is\u201D and \u201Cas available\u201D without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 190,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s)."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 197,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "DesignedWithAi uses the OpenAi API. You agree to adhere to their Terms of Use, which can be found",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "https://openai.com/api/policies/terms",
                  children: "here"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/terms.tsx",
                  lineNumber: 206,
                  columnNumber: 13
                }, this),
                "."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 203,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We may also, in the future, offer new Services and/or features through the website (including, the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 208,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 8 - THIRD-PARTY LINKS"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 214,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Certain content, products and Services available via our Service may include materials from third-parties."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 215,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 219,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 227,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 236,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 237,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party\u2019s intellectual property or these Terms of Service."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 249,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 256,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 10 - PERSONAL INFORMATION"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 270,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy, please see ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: "/privacy",
                  children: "privacy policy"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/terms.tsx",
                  lineNumber: 274,
                  columnNumber: 17
                }, this),
                "."
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 271,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 276,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order)."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 277,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 288,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 12 - PROHIBITED USES"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 296,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 297,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "(a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information;"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 301,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 312,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 324,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 327,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 331,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 335,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and Services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 340,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "In no case shall DesignedWithAi, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 351,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 368,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 14 - INDEMNIFICATION"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 374,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You agree to indemnify, defend and hold harmless DesignedWithAi and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys\u2019 fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 375,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 15 - SEVERABILITY"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 385,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 386,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 16 - TERMINATION"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 395,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 396,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 401,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof)."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 407,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 17 - ENTIRE AGREEMENT"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 415,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 416,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service)."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 421,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 430,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 18 - GOVERNING LAW"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 434,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United States."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 435,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 19 - CHANGES TO TERMS OF SERVICE"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 440,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "You can review the most current version of the Terms of Service at any time at this page."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 441,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 445,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: "SECTION 20 - CONTACT INFORMATION"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 453,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Questions about the Terms of Service should be sent to us at hey@designedwithai.com."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 454,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "Our contact information is posted below:"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 458,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "mailto:hey@designedwithai.com",
                children: "hey@designedwithai.com"
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/terms.tsx",
                lineNumber: 460,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 459,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "DesignedWithAi"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 462,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: "PO BOX 778, Candler, NC 28715"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/terms.tsx",
              lineNumber: 463,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/__index/terms.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/terms.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/terms.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/__index/app.tsx
var app_exports = {};
__export(app_exports, {
  action: () => action5,
  default: () => AppLayout,
  links: () => links2,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links2() {
  return [];
}
async function loader6({ request }) {
  return await requireAuthSession(request), (0, import_node8.json)({});
}
function action5() {
  return { ok: !0 };
}
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
        fullWidth: !0
      }, void 0, !1, {
        fileName: "app/routes/__index/app.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__index/app.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/app.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/routes/__index/app.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/app.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/__index/app/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  default: () => AppMainPage,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node"), import_react19 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  return (0, import_node9.json)({});
}
function AppMainPage() {
  let loaderData = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container my-12",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      children: [
        "Authed area",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
          children: JSON.stringify(loaderData, null, 2)
        }, void 0, !1, {
          fileName: "app/routes/__index/app/index.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__index/app/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__index/app/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout
});
var import_react20 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "bg-gray-100 h-screen w-screen flex flex-col items-center justify-center px-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-6xl md:text-8xl font-bold tracking-tighter mb-8",
        children: [
          "Project ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-emerald-600 font-black",
            children: "/ Template"
          }, void 0, !1, {
            fileName: "app/routes/__auth.tsx",
            lineNumber: 7,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full max-w-screen-md rounded-xl shadow-2xl bg-white border border-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__auth.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/callback.provider.tsx
var callback_provider_exports = {};
__export(callback_provider_exports, {
  action: () => action6,
  default: () => CallbackProviderPage,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_react22 = require("react"), import_zod2 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  return await getAuthSession(request) ? (0, import_node10.redirect)("/") : (0, import_node10.json)({});
}
async function action6({ request }) {
  let schema = import_zod2.z.object({
    accessToken: import_zod2.z.string(),
    refreshToken: import_zod2.z.string(),
    redirectTo: import_zod2.z.string().optional()
  }), formData = Object.fromEntries(await request.formData()), form = schema.safeParse(formData);
  if (!form.success)
    return (0, import_node10.json)(
      {
        message: "invalid-request"
      },
      { status: 400 }
    );
  let { accessToken, refreshToken, redirectTo = "/app" } = form.data, {
    data: { session: authSession }
  } = await getSupabaseAdmin().auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken
  });
  return authSession ? (0, import_node10.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession: mapAuthSession(authSession)
      })
    }
  }) : (0, import_node10.json)(
    {
      message: "invalid-refresh-token"
    },
    { status: 401 }
  );
}
function CallbackProviderPage() {
  let error = (0, import_react21.useActionData)(), fetcher = (0, import_react21.useFetcher)(), [searchParams] = (0, import_react21.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? "/app", supabase2 = (0, import_react22.useMemo)(() => getSupabase(), []);
  return (0, import_react22.useEffect)(() => {
    let {
      data: { subscription }
    } = supabase2.auth.onAuthStateChange((event, supabaseSession) => {
      if (event === "SIGNED_IN") {
        let accessToken = supabaseSession == null ? void 0 : supabaseSession.access_token, refreshToken = supabaseSession == null ? void 0 : supabaseSession.refresh_token;
        if (!accessToken || !refreshToken)
          return;
        let formData = new FormData();
        formData.append("accessToken", accessToken), formData.append("refreshToken", refreshToken), formData.append("redirectTo", redirectTo), fetcher.submit(formData, { method: "post", replace: !0 });
      }
    });
    return () => {
      subscription == null || subscription.unsubscribe();
    };
  }, [fetcher, redirectTo, supabase2.auth]), error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: error.message
  }, void 0, !1, {
    fileName: "app/routes/__auth/callback.provider.tsx",
    lineNumber: 104,
    columnNumber: 18
  }, this) : null;
}

// app/routes/__auth/callback.recovery.tsx
var callback_recovery_exports = {};
__export(callback_recovery_exports, {
  action: () => action7,
  default: () => CallbackRecoveryPage,
  loader: () => loader9
});
var import_node11 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_react24 = require("react"), import_zod3 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader9({ request }) {
  return await getAuthSession(request) ? (0, import_node11.redirect)("/") : (0, import_node11.json)({});
}
async function action7({ request }) {
  let schema = import_zod3.z.object({
    accessToken: import_zod3.z.string(),
    refreshToken: import_zod3.z.string(),
    redirectTo: import_zod3.z.string().optional()
  }), formData = Object.fromEntries(await request.formData()), form = schema.safeParse(formData);
  if (!form.success)
    return (0, import_node11.json)(
      {
        message: "invalid-request"
      },
      { status: 400 }
    );
  let { accessToken, refreshToken } = form.data, {
    data: { session: authSession }
  } = await getSupabaseAdmin().auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken
  });
  return authSession ? (0, import_node11.redirect)("/recovery", {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession: mapAuthSession(authSession)
      })
    }
  }) : (0, import_node11.json)(
    {
      message: "invalid-refresh-token"
    },
    { status: 401 }
  );
}
function CallbackRecoveryPage() {
  let error = (0, import_react23.useActionData)(), fetcher = (0, import_react23.useFetcher)(), [searchParams] = (0, import_react23.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? "/", supabase2 = (0, import_react24.useMemo)(() => getSupabase(), []);
  return (0, import_react24.useEffect)(() => {
    let {
      data: { subscription }
    } = supabase2.auth.onAuthStateChange((event, supabaseSession) => {
      if (event === "SIGNED_IN" || event === "PASSWORD_RECOVERY") {
        let accessToken = supabaseSession == null ? void 0 : supabaseSession.access_token, refreshToken = supabaseSession == null ? void 0 : supabaseSession.refresh_token;
        if (!accessToken || !refreshToken)
          return;
        let formData = new FormData();
        formData.append("accessToken", accessToken), formData.append("refreshToken", refreshToken), formData.append("redirectTo", redirectTo), fetcher.submit(formData, { method: "post", replace: !0 });
      }
    });
    return () => {
      subscription == null || subscription.unsubscribe();
    };
  }, [fetcher, redirectTo, supabase2.auth]), error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: error.message
  }, void 0, !1, {
    fileName: "app/routes/__auth/callback.recovery.tsx",
    lineNumber: 104,
    columnNumber: 18
  }, this) : null;
}

// app/routes/__auth/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  action: () => action8,
  default: () => CallbackPage,
  loader: () => loader10
});
var import_node12 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_react26 = require("react"), import_zod4 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader10({ request }) {
  return await getAuthSession(request) ? (0, import_node12.redirect)("/") : (0, import_node12.json)({});
}
async function action8({ request }) {
  let schema = import_zod4.z.object({
    accessToken: import_zod4.z.string(),
    refreshToken: import_zod4.z.string(),
    redirectTo: import_zod4.z.string().optional()
  }), formData = Object.fromEntries(await request.formData()), form = schema.safeParse(formData);
  if (!form.success)
    return (0, import_node12.json)(
      {
        message: "invalid-request"
      },
      { status: 400 }
    );
  let { accessToken, refreshToken, redirectTo = "/app" } = form.data, {
    data: { session: authSession }
  } = await getSupabaseAdmin().auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken
  });
  return authSession ? (0, import_node12.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession: mapAuthSession(authSession)
      })
    }
  }) : (0, import_node12.json)(
    {
      message: "invalid-refresh-token"
    },
    { status: 401 }
  );
}
function CallbackPage() {
  let error = (0, import_react25.useActionData)(), fetcher = (0, import_react25.useFetcher)(), [searchParams] = (0, import_react25.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? "/", supabase2 = (0, import_react26.useMemo)(() => getSupabase(), []);
  return (0, import_react26.useEffect)(() => {
    let {
      data: { subscription }
    } = supabase2.auth.onAuthStateChange((event, supabaseSession) => {
      if (event === "SIGNED_IN") {
        let accessToken = supabaseSession == null ? void 0 : supabaseSession.access_token, refreshToken = supabaseSession == null ? void 0 : supabaseSession.refresh_token;
        if (!accessToken || !refreshToken)
          return;
        let formData = new FormData();
        formData.append("accessToken", accessToken), formData.append("refreshToken", refreshToken), formData.append("redirectTo", redirectTo), fetcher.submit(formData, { method: "post", replace: !0 });
      }
    });
    return () => {
      subscription == null || subscription.unsubscribe();
    };
  }, [fetcher, redirectTo, supabase2.auth]), error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: error.message
  }, void 0, !1, {
    fileName: "app/routes/__auth/callback.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-12 text-center",
    children: [
      "You are being redirected to your ",
      APP_NAME,
      "..."
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/callback.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/recovery.tsx
var recovery_exports = {};
__export(recovery_exports, {
  default: () => RecoveryPage,
  loader: () => loader11
});
var import_form2 = require("@mantine/form"), import_node13 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_react28 = require("react"), import_react_hot_toast2 = require("react-hot-toast"), import_zod5 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LoginSchema = import_zod5.z.object({
  email: import_zod5.z.string().email(),
  password: import_zod5.z.string().min(8)
});
async function loader11({ request }) {
  let { email, accessToken, refreshToken } = await requireAuthSession(
    request
  );
  return console.log(email, accessToken), (0, import_node13.json)({
    email,
    accessToken,
    refreshToken
  });
}
function RecoveryPage() {
  let navigate = (0, import_react27.useNavigate)(), { accessToken, refreshToken, email } = (0, import_react27.useLoaderData)(), supabase2 = (0, import_react28.useMemo)(() => getSupabase(accessToken), [accessToken]), [loading, setLoading] = (0, import_react28.useState)(!1), { onSubmit, getInputProps, ...form } = (0, import_form2.useForm)({
    validate: (0, import_form2.zodResolver)(LoginSchema),
    initialValues: {
      email,
      password: ""
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid md:grid-cols-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-4xl font-black text-slate-800",
            children: [
              "Hello \u{1F44B}\u{1F3FC}",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 71,
                columnNumber: 11
              }, this),
              "Complete your password reset."
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/recovery.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mt-8",
            children: [
              "Here by mistake?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Link, {
                to: "/login",
                className: "text-fuchsia-600",
                children: "Go Back"
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 77,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/recovery.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/recovery.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-8 md:p-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "post",
          onSubmit: onSubmit(async (values) => {
            setLoading(!0), await supabase2.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken
            });
            let { error } = await supabase2.auth.updateUser({
              password: values.password
            });
            if (console.log(error), error) {
              setLoading(!1), import_react_hot_toast2.toast.error(error.message);
              return;
            }
            navigate("/");
          }),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                label: "Email",
                type: "email",
                name: "email",
                placeholder: "you@email.com",
                disabled: !0,
                required: !0,
                ...getInputProps("email")
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                label: "Password",
                name: "password",
                placeholder: "********",
                autoComplete: "new-password",
                required: !0,
                type: "password",
                ...getInputProps("password")
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 94,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                type: "submit",
                loading,
                children: "Reset Password"
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 103,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/recovery.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__auth/recovery.tsx",
          lineNumber: 83,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/recovery.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/recovery.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/signout.tsx
var signout_exports = {};
__export(signout_exports, {
  loader: () => loader12
});
async function loader12({ request }) {
  return destroyAuthSession(request);
}

// app/routes/__auth/forgot.tsx
var forgot_exports = {};
__export(forgot_exports, {
  default: () => ForgotPage,
  loader: () => loader13
});
var import_form3 = require("@mantine/form"), import_react29 = require("@remix-run/react"), import_react30 = require("react"), import_react_hot_toast3 = require("react-hot-toast"), import_tabler_icons_react7 = require("tabler-icons-react"), import_zod6 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ForgotSchema = import_zod6.z.object({
  email: import_zod6.z.string().email()
});
async function loader13({ request }) {
  return await requireNonAuthSession(request);
}
function ForgotPage() {
  let [loading, setLoading] = (0, import_react30.useState)(!1), [success, setSuccess] = (0, import_react30.useState)(!1), { onSubmit, getInputProps, ...form } = (0, import_form3.useForm)({
    validate: (0, import_form3.zodResolver)(ForgotSchema),
    initialValues: {
      email: ""
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid md:grid-cols-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-4xl font-black text-slate-800",
            children: [
              "Hello \u{1F44B}\u{1F3FC}",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__auth/forgot.tsx",
                lineNumber: 56,
                columnNumber: 11
              }, this),
              "Reset your password."
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/forgot.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mt-8",
            children: [
              "Here by mistake?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Link, {
                to: "/login",
                className: "text-fuchsia-600",
                children: "Go Back"
              }, void 0, !1, {
                fileName: "app/routes/__auth/forgot.tsx",
                lineNumber: 62,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/forgot.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/forgot.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-8 md:p-12",
        children: success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-green-700/25 border border-green-700/50 mb-4 p-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.Check, {
              size: 24
            }, void 0, !1, {
              fileName: "app/routes/__auth/forgot.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: "Success"
                }, void 0, !1, {
                  fileName: "app/routes/__auth/forgot.tsx",
                  lineNumber: 72,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: "Please check your email for further instructions"
                }, void 0, !1, {
                  fileName: "app/routes/__auth/forgot.tsx",
                  lineNumber: 73,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__auth/forgot.tsx",
              lineNumber: 71,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__auth/forgot.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "post",
          onSubmit: onSubmit(async (values) => {
            setLoading(!0);
            let { error } = await getSupabase().auth.resetPasswordForEmail(
              values.email,
              {
                redirectTo: `${window.location.origin}/callback/recovery`
              }
            );
            if (error) {
              setLoading(!1), import_react_hot_toast3.toast.error(error.message);
              return;
            }
            setSuccess(!0), setLoading(!1);
          }),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              id: "email",
              label: "Email",
              name: "email",
              placeholder: "you@email.com",
              required: !0,
              ...getInputProps("email")
            }, void 0, !1, {
              fileName: "app/routes/__auth/forgot.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              type: "submit",
              loading,
              children: "Reset Password"
            }, void 0, !1, {
              fileName: "app/routes/__auth/forgot.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__auth/forgot.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/forgot.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/forgot.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => LoginPage,
  loader: () => loader14
});
var import_form4 = require("@mantine/form"), import_react31 = require("@remix-run/react"), import_react_query3 = require("@tanstack/react-query"), import_tabler_icons_react8 = require("tabler-icons-react"), import_zod7 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SigninSchema = import_zod7.z.object({
  email: import_zod7.z.string().email()
});
async function loader14({ request }) {
  return await requireNonAuthSession(request);
}
function LoginPage() {
  let { onSubmit, getInputProps, setFieldValue, ...form } = (0, import_form4.useForm)({
    validate: (0, import_form4.zodResolver)(SigninSchema),
    initialValues: {
      email: ""
    }
  }), createAccount = (0, import_react_query3.useMutation)(async ({ email }) => {
    let {
      data: { user, session },
      error
    } = await getSupabase().auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/callback`
      }
    });
    if (error)
      throw error;
    return { user, session };
  }), handleSubmit = async (values) => {
    createAccount.mutate(values);
  }, signInWithGoogle = async () => {
    let { error } = await getSupabase().auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/callback/provider`
      }
    });
    error && console.log("error", error);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid md:grid-cols-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col p-8 md:p-12 border-b md:border-b-none md:border-r border-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-4xl font-black tracking-tighter text-slate-800",
            children: [
              "Hello \u{1F44B}\u{1F3FC}",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 75,
                columnNumber: 11
              }, this),
              "Welcome back!"
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mt-8",
            children: [
              "Do not have an account yet?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Link, {
                to: "/signup",
                className: "text-fuchsia-600",
                children: "Create account"
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 81,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-8 md:p-12",
        children: [
          createAccount.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-red-700/25 border border-red-700/50 mb-4 p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react8.AlertCircle, {
                size: 24
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 89,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: createAccount.error.message
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 88,
            columnNumber: 11
          }, this),
          createAccount.data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mb-8",
            children: "Please use the magic link in your email to continue."
          }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "bg-white border-2 border-gray-200 rounded-full px-4 py-2 w-full transition-all duration-150 hover:border-[#4285F4]",
                  onClick: () => signInWithGoogle(),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "flex items-center justify-center space-x-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleIcon, {
                        size: 24
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/login.tsx",
                        lineNumber: 106,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold font-[Roboto] text-[#00000089]",
                        children: "Sign in with Google"
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/login.tsx",
                        lineNumber: 107,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__auth/login.tsx",
                  lineNumber: 101,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 100,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                method: "post",
                onSubmit: onSubmit(handleSubmit),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      id: "email",
                      label: "Email",
                      name: "email",
                      placeholder: "you@email.com",
                      required: !0,
                      ...getInputProps("email")
                    }, void 0, !1, {
                      fileName: "app/routes/__auth/login.tsx",
                      lineNumber: 117,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      type: "submit",
                      variant: "primary",
                      loading: createAccount.isLoading,
                      children: "Send Magic Link"
                    }, void 0, !1, {
                      fileName: "app/routes/__auth/login.tsx",
                      lineNumber: 126,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__auth/login.tsx",
                  lineNumber: 116,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 115,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Link, {
                  to: "/forgot",
                  className: "text-sm text-slate-600",
                  children: "Forgot password?"
                }, void 0, !1, {
                  fileName: "app/routes/__auth/login.tsx",
                  lineNumber: 136,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 135,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 99,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 86,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "057254c8", entry: { module: "/build/entry.client-HP5PAZZI.js", imports: ["/build/_shared/chunk-S54LQFQP.js", "/build/_shared/chunk-TWNKW3LE.js", "/build/_shared/chunk-BPQL3L3K.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GDVV64BR.js", imports: ["/build/_shared/chunk-2H3NHIRG.js", "/build/_shared/chunk-XLGUPP2G.js", "/build/_shared/chunk-LUX4SLFO.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-OEZET5B4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/callback": { id: "routes/__auth/callback", parentId: "routes/__auth", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/callback-GH7PYICV.js", imports: ["/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-LUX4SLFO.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/callback.provider": { id: "routes/__auth/callback.provider", parentId: "routes/__auth", path: "callback/provider", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/callback.provider-4CVZJM6Q.js", imports: ["/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/callback.recovery": { id: "routes/__auth/callback.recovery", parentId: "routes/__auth", path: "callback/recovery", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/callback.recovery-EWTXNX4R.js", imports: ["/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/forgot": { id: "routes/__auth/forgot", parentId: "routes/__auth", path: "forgot", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/forgot-2B5SK7UH.js", imports: ["/build/_shared/chunk-2H3NHIRG.js", "/build/_shared/chunk-LWLKNHPO.js", "/build/_shared/chunk-5X3FQB3E.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-TMN7Z6UZ.js", imports: ["/build/_shared/chunk-LMVDFF73.js", "/build/_shared/chunk-LWLKNHPO.js", "/build/_shared/chunk-5X3FQB3E.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-XLGUPP2G.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/recovery": { id: "routes/__auth/recovery", parentId: "routes/__auth", path: "recovery", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/recovery-CVP6B6F6.js", imports: ["/build/_shared/chunk-2H3NHIRG.js", "/build/_shared/chunk-LWLKNHPO.js", "/build/_shared/chunk-5X3FQB3E.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/signout": { id: "routes/__auth/signout", parentId: "routes/__auth", path: "signout", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/signout-NII5LUPE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/signup": { id: "routes/__auth/signup", parentId: "routes/__auth", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/signup-REJYS7KS.js", imports: ["/build/_shared/chunk-SZSE2KOE.js", "/build/_shared/chunk-LMVDFF73.js", "/build/_shared/chunk-LWLKNHPO.js", "/build/_shared/chunk-5X3FQB3E.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-XLGUPP2G.js", "/build/_shared/chunk-LUX4SLFO.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index": { id: "routes/__index", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__index-K53JD6L4.js", imports: ["/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-ML5SIHVC.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-EIVBJOM5.js", "/build/_shared/chunk-SPUIDVFV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index": { id: "routes/__index/__index", parentId: "routes/__index", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index-MBOTHZBQ.js", imports: ["/build/_shared/chunk-SZSE2KOE.js", "/build/_shared/chunk-LMVDFF73.js", "/build/_shared/chunk-LWLKNHPO.js", "/build/_shared/chunk-VQRPFGPF.js", "/build/_shared/chunk-5X3FQB3E.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-XLGUPP2G.js", "/build/_shared/chunk-LUX4SLFO.js", "/build/_shared/chunk-MIBZRFGI.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/index": { id: "routes/__index/__index/index", parentId: "routes/__index/__index", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__index/__index/index-QV32NLNN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/privacy": { id: "routes/__index/__index/privacy", parentId: "routes/__index/__index", path: "privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/privacy-LPVTNXAH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/returns": { id: "routes/__index/__index/returns", parentId: "routes/__index/__index", path: "returns", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/returns-2HJEIAFZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/terms": { id: "routes/__index/__index/terms", parentId: "routes/__index/__index", path: "terms", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/terms-G66QSR7C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/app": { id: "routes/__index/app", parentId: "routes/__index", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/app-OT7NVN4X.js", imports: ["/build/_shared/chunk-VQRPFGPF.js", "/build/_shared/chunk-5X3FQB3E.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/app/index": { id: "routes/__index/app/index", parentId: "routes/__index/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__index/app/index-MYYJADGY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhooks/slack": { id: "routes/api/webhooks/slack", parentId: "root", path: "api/webhooks/slack", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhooks/slack-YOTSG24W.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhooks/stripe": { id: "routes/api/webhooks/stripe", parentId: "root", path: "api/webhooks/stripe", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhooks/stripe-AQAE6M4P.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-057254C8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/webhooks/stripe": {
    id: "routes/api/webhooks/stripe",
    parentId: "root",
    path: "api/webhooks/stripe",
    index: void 0,
    caseSensitive: void 0,
    module: stripe_exports
  },
  "routes/api/webhooks/slack": {
    id: "routes/api/webhooks/slack",
    parentId: "root",
    path: "api/webhooks/slack",
    index: void 0,
    caseSensitive: void 0,
    module: slack_exports
  },
  "routes/__index": {
    id: "routes/__index",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/__index/__index": {
    id: "routes/__index/__index",
    parentId: "routes/__index",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: index_exports2
  },
  "routes/__index/__index/privacy": {
    id: "routes/__index/__index/privacy",
    parentId: "routes/__index/__index",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/__index/__index/returns": {
    id: "routes/__index/__index/returns",
    parentId: "routes/__index/__index",
    path: "returns",
    index: void 0,
    caseSensitive: void 0,
    module: returns_exports
  },
  "routes/__index/__index/index": {
    id: "routes/__index/__index/index",
    parentId: "routes/__index/__index",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports3
  },
  "routes/__index/__index/terms": {
    id: "routes/__index/__index/terms",
    parentId: "routes/__index/__index",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/__index/app": {
    id: "routes/__index/app",
    parentId: "routes/__index",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__index/app/index": {
    id: "routes/__index/app/index",
    parentId: "routes/__index/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_exports2
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/callback.provider": {
    id: "routes/__auth/callback.provider",
    parentId: "routes/__auth",
    path: "callback/provider",
    index: void 0,
    caseSensitive: void 0,
    module: callback_provider_exports
  },
  "routes/__auth/callback.recovery": {
    id: "routes/__auth/callback.recovery",
    parentId: "routes/__auth",
    path: "callback/recovery",
    index: void 0,
    caseSensitive: void 0,
    module: callback_recovery_exports
  },
  "routes/__auth/callback": {
    id: "routes/__auth/callback",
    parentId: "routes/__auth",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/__auth/recovery": {
    id: "routes/__auth/recovery",
    parentId: "routes/__auth",
    path: "recovery",
    index: void 0,
    caseSensitive: void 0,
    module: recovery_exports
  },
  "routes/__auth/signout": {
    id: "routes/__auth/signout",
    parentId: "routes/__auth",
    path: "signout",
    index: void 0,
    caseSensitive: void 0,
    module: signout_exports
  },
  "routes/__auth/forgot": {
    id: "routes/__auth/forgot",
    parentId: "routes/__auth",
    path: "forgot",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_exports
  },
  "routes/__auth/signup": {
    id: "routes/__auth/signup",
    parentId: "routes/__auth",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "routes/__auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
