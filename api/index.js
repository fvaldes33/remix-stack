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
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
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
var app_default = "/build/_assets/app-VTYVJZ4K.css";

// app/root.tsx
var import_core = require("@mantine/core"), import_notifications = require("@mantine/notifications"), import_remix2 = require("@mantine/remix"), import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_react_query = require("@tanstack/react-query");

// app/theme.ts
var theme = {
  colorScheme: "light",
  fontFamily: "Archivo"
};

// app/root.tsx
var import_react6 = require("react");

// app/components/ScrollRestoration.tsx
var React = __toESM(require("react")), import_react_router_dom = require("react-router-dom"), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), STORAGE_KEY = "positions", positions = {};
if (typeof document < "u") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  sessionPositions && (positions = JSON.parse(sessionPositions));
}
function ScrollRestoration({ nonce = void 0 }) {
  useScrollRestoration(), React.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []), (0, import_react2.useBeforeUnload)(
    React.useCallback(() => {
      window.history.scrollRestoration = "auto";
    }, [])
  );
  let restoreScroll = ((STORAGE_KEY2) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let storedY = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}")[window.history.state.key];
      typeof storedY == "number" && window.scrollTo(0, storedY);
    } catch (error) {
      console.error(error), sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
    nonce,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`
    }
  }, void 0, !1, {
    fileName: "app/components/ScrollRestoration.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
var hydrated = !1;
function useScrollRestoration() {
  let location = (0, import_react_router_dom.useLocation)(), transition2 = (0, import_react2.useTransition)(), wasSubmissionRef = React.useRef(!1);
  React.useEffect(() => {
    transition2.submission && (wasSubmissionRef.current = !0);
  }, [transition2]), React.useEffect(() => {
    transition2.location && (positions[location.key] = window.scrollY);
  }, [transition2, location]), (0, import_react2.useBeforeUnload)(
    React.useCallback(() => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
    }, [])
  ), typeof document < "u" && React.useLayoutEffect(() => {
    if (!hydrated) {
      hydrated = !0;
      return;
    }
    if (location.state && typeof location.state == "object" && location.state.scroll === !1)
      return;
    let y = positions[location.key];
    if (y != null) {
      window.scrollTo(0, y);
      return;
    }
    if (location.hash) {
      let el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    if (wasSubmissionRef.current === !0) {
      wasSubmissionRef.current = !1;
      return;
    }
    window.scrollTo(0, 0);
  }, [location]), React.useEffect(() => {
    transition2.submission && (wasSubmissionRef.current = !0);
  }, [transition2]);
}

// app/lib/session.server.ts
var import_node = require("@remix-run/node");

// app/lib/const.ts
var SESSION_KEY = "authenticated", SESSION_ERROR_KEY = "error";
var APP_NAME = "Designed / AI", PROMPT_SESSION_KEY = "__prompt_id", ANON_PROMPT_KEY = "__ai_promptHistory", PROMPT_SAVE_KEY = "__prompt_ids", PAGE_LIMIT = 20, ANON_SESSION_KEY = "__ai_anon_session", BASE_TRANSFORM_ENDPOINT = "/api/transform/thumbnail", promptExamples = [
  "a {animal}, sleeping, warm and comfy, smiling, wearing pajamas, digital art, zoomed out",
  "A hand drawn cartoon creature of a kawaii {animal} {emotion}, very very cute, in pastel solid colour and thick uneven outline, Crayon Shin-chan style, harmonious background color",
  "3D icon of a lightly glowing {color} {object}, dark background, logo style, digital art",
  "icon of a {icon}, synthwave vector art, gradients, vibrant color, 8K, featured on 99designs",
  "icon of a {animal}'s head, synthwave vector art, gradients, vibrant color, 8K, featured on 99designs",
  "Very tiny {emoji} that looks like the iOS emoji and has the same colors, 3D clay render, 4k UHD, {color} background, isometric top down left view, diffuse lighting, zoomed out very far",
  "Very tiny {animal} that looks like the iOS emoji and has the same colors, 3D clay render, 4k UHD, {color} background, isometric top down left view, diffuse lighting, zoomed out very far",
  "3d {emoji} made of {material}, 8k photo, front view, full view, white background, studio lighting, rendered by octane, highly detailed",
  "{animal} wearing a suit. 4k. 60mm. lightroom. white Background"
], options = {
  animal: [
    "dog",
    "cat",
    "elephant",
    "lion",
    "sea lion",
    "shark",
    "whale",
    "goldfish",
    "deer",
    "moose",
    "rhino",
    "monkey",
    "bird",
    "mouse",
    "turtle",
    "tiger",
    "panda",
    "panther",
    "bear",
    "polar bear",
    "bear",
    "penguin",
    "wolf",
    "sloth",
    "pig",
    "cow",
    "bull",
    "sheep",
    "llama",
    "octopus"
  ],
  emotion: ["smiling", "angry", "surprised", "mad", "sad", "frown", "hurt"],
  color: [
    "white",
    "black",
    "red",
    "purple",
    "blue",
    "yellow",
    "pink",
    "fuchsia",
    "orange",
    "green",
    "brown",
    "teal"
  ],
  icon: [
    "ice cream",
    "F1 car",
    "supercar",
    "camera",
    "hotdog",
    "hamburger",
    "water gun",
    "lions head",
    "elephant head",
    "deer head",
    "rhino head",
    "paint brush",
    "bonsai tree",
    "octopus",
    "rocket"
  ],
  object: [
    "ice cream",
    "F1 car",
    "supercar",
    "camera",
    "water gun",
    "headphones",
    "water gun",
    "hotdog"
  ],
  emoji: [
    "hamburger \u{1F354}",
    "rocket \u{1F680}",
    "party popper \u{1F389}",
    "taco \u{1F32E}",
    "avocado \u{1F951}",
    "burrito \u{1F32F}",
    "retro telephone \u260E\uFE0F",
    "red heart \u2764\uFE0F"
  ],
  material: ["felt", "cotton", "satin"]
};

// app/lib/session.server.ts
var import_crypto = __toESM(require("crypto")), sessionStorage2 = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), { commitSession } = sessionStorage2;
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage2.getSession(cookie);
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
  return authSession !== void 0 && session.set(SESSION_KEY, authSession), session.flash(SESSION_ERROR_KEY, flashErrorMessage), sessionStorage2.commitSession(session, { maxAge: 2592e3 });
}
async function destroyAuthSession(request) {
  let session = await getSession(request);
  return (0, import_node.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage2.destroySession(session)
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

// app/components/NavProgress.tsx
var import_nprogress = require("@mantine/nprogress"), import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function NavProgress() {
  let transition2 = (0, import_react3.useTransition)();
  return (0, import_react4.useEffect)(() => {
    transition2.state === "loading" || transition2.state === "submitting" ? (0, import_nprogress.startNavigationProgress)() : (0, import_nprogress.completeNavigationProgress)();
  }, [transition2.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_nprogress.NavigationProgress, {
    autoReset: !0,
    withinPortal: !0,
    color: "violet",
    size: 16
  }, void 0, !1, {
    fileName: "app/components/NavProgress.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
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
}), REMOVEBG_API_KEY = getEnv("REMOVEBG_API_KEY"), PRIVATE_SLACK_WEBHOOK = getEnv("PRIVATE_SLACK_WEBHOOK"), SLACK_TOKEN = getEnv("SLACK_TOKEN");

// app/root.tsx
var gtag = __toESM(require_gtag()), import_hooks = require("@mantine/hooks"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links() {
  return [
    { rel: "stylesheet", href: app_default },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&family=Archivo:wght@400;700;900&display=swap"
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
(0, import_core.createEmotionCache)({ key: "mantine" });
function App() {
  let { env } = (0, import_react5.useLoaderData)(), location = (0, import_react5.useLocation)(), { copy } = (0, import_hooks.useClipboard)(), [queryClient] = (0, import_react6.useState)(
    () => new import_react_query.QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5e3,
          refetchOnWindowFocus: !1
        }
      }
    })
  );
  return (0, import_react6.useEffect)(() => {
    var _a;
    (_a = env.GA_TRACKING_ID) != null && _a.length && gtag.pageview(location.pathname, env.GA_TRACKING_ID);
  }, [location, env.GA_TRACKING_ID]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_query.QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MantineProvider, {
      theme,
      withGlobalStyles: !0,
      withNormalizeCSS: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavProgress, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 119,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_notifications.NotificationsProvider, {
          position: "top-right",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
            lang: "en",
            className: "h-full selection:bg-rose-600/50",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 123,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 124,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Links, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 125,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 122,
                columnNumber: 13
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
                        lineNumber: 130,
                        columnNumber: 19
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
                        lineNumber: 134,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/root.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                  }, this) : null,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "bg-pink-600 h-10 flex items-center justify-center text-white relative z-50 px-6 md:px-0",
                    role: "banner",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "bg-transparent h-full w-full flex items-center justify-center text-white",
                      onClick: () => {
                        copy("BF20"), (0, import_notifications.showNotification)({
                          title: "Black Friday Sale",
                          message: "Promo code BF20 copied",
                          color: "pink"
                        });
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "font-bold text-xs lg:text-sm",
                        children: [
                          "Black Friday Sale \u{1F389} 20% off any purchase \u{1F389} Code: BF20",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 165,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 154,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 150,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 170,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 171,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
                    dangerouslySetInnerHTML: {
                      __html: `window.env = ${JSON.stringify(env)}`
                    }
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 172,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 177,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 178,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 127,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 121,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react5.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MantineProvider, {
    theme,
    withGlobalStyles: !0,
    withNormalizeCSS: !0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_notifications.NotificationsProvider, {
      position: "top-right",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
                children: "Oops!"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 194,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Links, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 196,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 193,
            columnNumber: 11
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
                      lineNumber: 201,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "ml-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                          className: "text-5xl font-sans font-black mb-2",
                          children: "Whoops!"
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 203,
                          columnNumber: 19
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
                          lineNumber: 206,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                          href: "/",
                          className: "inline-block bg-transparent h-12 px-6 bg-slate-900 text-white transition-all duration-150 hover:bg-slate-800 rounded-md",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-full flex items-center justify-center font-bold",
                            children: "Back Home"
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 213,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 209,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 202,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 200,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 199,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 220,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 198,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 191,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 190,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MantineProvider, {
    theme,
    withGlobalStyles: !0,
    withNormalizeCSS: !0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_notifications.NotificationsProvider, {
      position: "top-right",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
                children: "Oh no!"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 234,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 235,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Links, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 236,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 233,
            columnNumber: 11
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
                      lineNumber: 241,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "ml-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                          className: "text-5xl font-sans font-black mb-2",
                          children: "Oh no, this is bad!"
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 243,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "text-lg mb-4",
                          children: error.message
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 246,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                          href: "/",
                          className: "inline-block bg-transparent h-12 px-6 bg-slate-900 text-white transition-all duration-150 hover:bg-slate-800 rounded-md",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-full flex items-center justify-center font-bold",
                            children: "Back Home"
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 251,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 247,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 242,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 240,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 239,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 258,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 238,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 231,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 230,
    columnNumber: 5
  }, this);
}

// app/routes/api/printful/products/$id.templates.tsx
var id_templates_exports = {};
__export(id_templates_exports, {
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");

// app/lib/printful.server.ts
var import_zod = require("zod");

// app/lib/formatCurrency.ts
function formatCurrency(currency) {
  return new Intl.NumberFormat("us-EN", {
    style: "currency",
    currency: "USD"
  }).format(currency);
}

// app/modules/printful/const.ts
var AVAILABLE_PRODUCT_IDS = [71, 639, 356, 2], PRODUCT_VARIANTS = {
  71: [4011, 4012, 4013, 4014, 4016, 4017, 4018, 4019],
  639: [16187, 16186, 16185, 16184, 16182, 16181, 16180, 16179],
  356: [10094, 10095, 10096, 10097, 10098, 10142, 10143, 10144, 10145, 10146],
  2: [
    4652,
    4653,
    4654,
    4655,
    4656,
    15022,
    15024,
    15027,
    15028,
    15030,
    10755,
    10756,
    10757,
    10758,
    10759
  ]
}, PRODUCT_PRINTFILES_PLACEMENT = {
  71: "front",
  639: "front",
  356: "front",
  2: "default"
}, PRODUCT_RETAIL_PRICING = {
  71: formatCurrency(45),
  4011: formatCurrency(45),
  4012: formatCurrency(45),
  4013: formatCurrency(45),
  4014: formatCurrency(45),
  4016: formatCurrency(45),
  4017: formatCurrency(45),
  4018: formatCurrency(45),
  4019: formatCurrency(45),
  639: formatCurrency(45),
  16186: formatCurrency(45),
  16185: formatCurrency(45),
  16184: formatCurrency(45),
  16181: formatCurrency(45),
  16180: formatCurrency(45),
  16179: formatCurrency(45),
  356: formatCurrency(65),
  10098: formatCurrency(65),
  10097: formatCurrency(65),
  10096: formatCurrency(65),
  10095: formatCurrency(65),
  10094: formatCurrency(65),
  10146: formatCurrency(65),
  10144: formatCurrency(65),
  1014: formatCurrency(65),
  10142: formatCurrency(65),
  2: formatCurrency(60),
  4652: formatCurrency(60),
  4653: formatCurrency(67),
  4654: formatCurrency(75),
  4655: formatCurrency(90),
  4656: formatCurrency(125),
  15022: formatCurrency(60),
  15024: formatCurrency(67),
  15027: formatCurrency(75),
  15028: formatCurrency(90),
  15030: formatCurrency(125),
  10755: formatCurrency(60),
  10756: formatCurrency(67),
  10757: formatCurrency(75),
  10758: formatCurrency(90),
  10759: formatCurrency(125)
}, PRODUCT_PRINTFILES_POSITION = {
  71: {
    area_width: 1800,
    area_height: 2400,
    width: 1800,
    height: 1800,
    top: 300,
    left: 0
  },
  639: {
    area_width: 1800,
    area_height: 2400,
    width: 1800,
    height: 1800,
    top: 300,
    left: 0
  },
  356: {
    area_width: 2775,
    area_height: 2475,
    width: 2775,
    height: 2475,
    top: 0,
    left: 0
  },
  2: {
    area_width: 2775,
    area_height: 2775,
    width: 2775,
    height: 4800,
    top: 0,
    left: 0
  }
};

// app/modules/printful/get.ts
var import_react_query2 = require("@tanstack/react-query");
async function getProduct(id) {
  return await (await fetch(`/api/printful/products/${id}`, {
    method: "GET"
  })).json();
}
async function getProducts(ids) {
  return await Promise.all(ids.map(getProduct));
}
function useGetProducts(ids, options2 = {}) {
  return (0, import_react_query2.useQuery)(["products", ...ids], () => getProducts(ids), {
    ...options2,
    staleTime: 1 / 0
  });
}
async function getProductTemplates(id) {
  return await (await fetch(`/api/printful/products/${id}/templates`, {
    method: "GET"
  })).json();
}
function useGetProductTemplates(id, options2 = {}) {
  return (0, import_react_query2.useQuery)(
    ["products", id, "templates"],
    () => getProductTemplates(id),
    {
      ...options2
    }
  );
}

// app/lib/removebg.server.ts
var BASE_URL = "https://api.remove.bg/v1.0/removebg";
async function removeBg(image_url, size = "auto") {
  console.log(image_url);
  try {
    let formData = new FormData();
    formData.append("size", size), formData.append("image_url", image_url);
    let res = await fetch(BASE_URL, {
      method: "post",
      headers: {
        "X-API-KEY": REMOVEBG_API_KEY
      },
      body: formData
    });
    if (res.status !== 200)
      throw console.log(res), new Error(`${res.status}, ${res.statusText}`);
    return await res.arrayBuffer();
  } catch (error) {
    throw error;
  }
}

// app/lib/resize.server.ts
var import_sharp = __toESM(require("sharp"));
async function resizeImage(url, size) {
  let imageBuffer = await (await fetch(url)).arrayBuffer(), buffer = Buffer.from(imageBuffer);
  return await (0, import_sharp.default)(buffer).withMetadata({ density: 300 }).resize(size).jpeg().toBuffer();
}

// app/lib/resolveUrl.ts
function resolveUrl(path) {
  return path.startsWith("http") ? path : new URL(path, SPACES_BASE).href;
}
function resolveCdn(path) {
  return path.startsWith("http") ? path : new URL(path, SPACES_CDN).href;
}
function resolveThumbnail(result) {
  return result.thumbfile ? resolveCdn(result.thumbfile) : getThumbnailUrl(result.id);
}
function getThumbnailUrl(id) {
  return [BASE_TRANSFORM_ENDPOINT, id].join("/");
}

// app/lib/slack.server.ts
async function sendNotification({
  text: text2,
  blocks
}) {
  try {
    let data = await (await fetch(PRIVATE_SLACK_WEBHOOK, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ text: text2, blocks })
    })).text();
    return console.log("sendNotification", data), data;
  } catch (error) {
    console.log(error);
  }
}

// app/lib/spaces.ts
var import_client_s3 = require("@aws-sdk/client-s3"), s3Client = new import_client_s3.S3({
  forcePathStyle: !1,
  endpoint: "https://sfo3.digitaloceanspaces.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
  }
}), BUCKET_NAME = "project-ai";
async function deleteFile(path) {
  let command = new import_client_s3.DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: path
  });
  console.log("DELETE", path);
  try {
    return await s3Client.send(command);
  } catch (error) {
    console.log(error);
  }
}
async function uploadFile(path, content, type = "image/png") {
  let command = new import_client_s3.PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: path,
    Body: Buffer.from(content),
    ACL: "public-read",
    ContentType: type
  });
  try {
    await s3Client.send(command);
  } catch (err) {
    console.log("Error", err);
  }
}

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

// app/lib/printful.server.ts
var ENDPOINT = "https://api.printful.com", ENDPOINT_CDN = "https://project-ai.sfo3.cdn.digitaloceanspaces.com/printful";
async function getProduct2(id) {
  let data = await (await fetch(`${ENDPOINT}/products/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${PRIVATE_PRINTFUL_SECRET}`
    }
  })).json(), { code, result } = data;
  if (code !== 200)
    throw new Error(result);
  return result;
}
async function getProductTemplates2(id) {
  return await (await fetch(
    `${ENDPOINT_CDN}/mockup-generator/templates/${id}.json`,
    {
      method: "GET"
    }
  )).json();
}
var PrintfulOrderSchema = import_zod.z.object({
  recipient: import_zod.z.object({
    name: import_zod.z.string(),
    email: import_zod.z.string().optional(),
    address1: import_zod.z.string(),
    address2: import_zod.z.string().optional().nullable(),
    city: import_zod.z.string(),
    state_code: import_zod.z.string(),
    country_code: import_zod.z.string(),
    zip: import_zod.z.string()
  }),
  items: import_zod.z.array(
    import_zod.z.object({
      variant_id: import_zod.z.number(),
      quantity: import_zod.z.number().default(1),
      files: import_zod.z.array(
        import_zod.z.object({
          url: import_zod.z.string(),
          position: import_zod.z.object({
            area_width: import_zod.z.number().optional(),
            area_height: import_zod.z.number().optional(),
            width: import_zod.z.number().optional(),
            height: import_zod.z.number().optional(),
            top: import_zod.z.number().optional(),
            left: import_zod.z.number().optional()
          }).optional()
        })
      )
    })
  )
});
async function createOrder(order) {
  try {
    let data = await (await fetch(`${ENDPOINT}/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PRIVATE_PRINTFUL_SECRET}`
      },
      body: JSON.stringify(order)
    })).json(), { code, result } = data;
    if (code !== 200)
      throw new Error(result);
    return result;
  } catch (error) {
    throw error;
  }
}
async function createFullOrder(customer, orderData) {
  let { shipping_address, printful_data } = orderData, { imageId, printImage, variantId } = printful_data, client = getSupabaseAdmin(), { data, error } = await client.from("prompt_results").select("*").match({ id: imageId }).single();
  if (error)
    throw error;
  if (!data)
    throw new Error("No image found");
  let filename = data.filename.split("/").pop(), designfile = data.designfile;
  if (!data.designfile) {
    let imageBuffer = await resizeImage(resolveUrl(data.filename), {
      height: 4e3,
      width: 4e3
    }), filePath = ["hi-res", `result-${data.id}`, filename].join("/");
    await uploadFile(filePath, imageBuffer), await client.from("prompt_results").update({
      designfile: filePath
    }).match({ id: data.id }), designfile = filePath;
  }
  let nobgfile = data.nobgfile;
  if (printImage === "nobgfile") {
    let imageBuffer = await removeBg(resolveUrl(designfile), "full"), hash = new Date().getTime(), filePath = [
      "hi-res",
      `result-${data.id}`,
      `nobg-${hash}-${filename}`
    ].join("/");
    await uploadFile(filePath, imageBuffer), await client.from("prompt_results").update({
      nobgfile: filePath
    }).match({ id: data.id });
  }
  let finalMockImage = printImage === "nobgfile" ? nobgfile : designfile, orderParams = {
    recipient: {
      name: customer.full_name,
      email: customer.email,
      address1: shipping_address.line1,
      address2: shipping_address.line2,
      city: shipping_address.city,
      state_code: shipping_address.state,
      country_code: shipping_address.country,
      zip: shipping_address.postal_code
    },
    items: [
      {
        variant_id: Number(variantId),
        quantity: 1,
        files: [
          {
            url: resolveUrl(finalMockImage),
            position: PRODUCT_PRINTFILES_POSITION[Number(variantId)]
          }
        ]
      }
    ]
  };
  try {
    return await createOrder(orderParams);
  } catch {
    await sendNotification({
      text: `Order creation failed for ${customer.email}`
    });
  }
}

// app/routes/api/printful/products/$id.templates.tsx
async function loader2({ params }) {
  try {
    let product = await getProductTemplates2(Number(params.id));
    return (0, import_node3.json)(product);
  } catch (error) {
    return (0, import_node3.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  }
}

// app/routes/api/transform/thumbnail.$id.tsx
var thumbnail_id_exports = {};
__export(thumbnail_id_exports, {
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_sharp2 = __toESM(require("sharp"));
async function placeholder() {
  return await (0, import_sharp2.default)({
    create: {
      width: 1024,
      height: 1024,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  }).png().toBuffer();
}
async function getRemoteFile(url) {
  return await (await fetch(url)).arrayBuffer();
}
async function loader3({ request, params }) {
  let { id } = params, client = getSupabaseAdmin(), { data, error } = await client.from("prompt_results").select("id, filename, thumbfile").match({ id }).single();
  if (!data || error) {
    let ph = await placeholder();
    return new Response(ph);
  }
  if (data.thumbfile)
    return (0, import_node4.redirect)(resolveCdn(data.thumbfile));
  let originalFile = await getRemoteFile(resolveUrl(data.filename)), buffer = Buffer.from(originalFile), thumbPath = data.filename.replace("img-", "thumb-").replace(".png", ".webp"), thumbNail = await (0, import_sharp2.default)(buffer).resize().webp({ quality: 70 }).toBuffer();
  return await uploadFile(thumbPath, thumbNail), await client.from("prompt_results").update({
    thumbfile: thumbPath
  }).match({ id }).single(), (0, import_node4.redirect)(resolveCdn(thumbPath));
}

// app/routes/api/printful/orders/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action2
});
var import_node5 = require("@remix-run/node"), import_zod2 = require("zod");
var OrderSchema = import_zod2.z.object({
  imageId: import_zod2.z.number(),
  variantId: import_zod2.z.number()
});
async function action2({ request }) {
  let payload = await request.json(), validation = OrderSchema.safeParse(payload);
  if (!validation.success)
    return (0, import_node5.json)(
      {
        error: validation.error
      },
      { status: 500 }
    );
  let client = getSupabaseAdmin(), { imageId, variantId } = validation.data, { data, error } = await client.from("prompt_results").select("*").match({ id: imageId }).single();
  if (error)
    return (0, import_node5.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  if (!data)
    return (0, import_node5.json)(
      {
        error: "No image found"
      },
      { status: 500 }
    );
  let finalMockImage = data.designfile;
  if (!data.designfile) {
    let image = data.filename.startsWith("http") ? data.filename : resolveUrl(data.filename), imageBuffer = await resizeImage(image, {
      height: 4e3,
      width: 4e3
    }), filename = data.filename.split("/").pop(), filePath = ["hi-res", `result-${data.id}`, filename].join("/");
    await uploadFile(filePath, imageBuffer), await client.from("prompt_results").update({
      designfile: filePath
    }).match({ id: data.id }), finalMockImage = filePath;
  }
  let orderParams = {
    recipient: {
      name: "Franco Valdes",
      address1: "10617 Providence Arbours Dr",
      city: "Charlotte",
      state_code: "NC",
      country_code: "US",
      zip: "28270"
    },
    items: [
      {
        variant_id: variantId,
        quantity: 1,
        files: [
          {
            url: resolveUrl(finalMockImage),
            position: PRODUCT_PRINTFILES_POSITION[variantId]
          }
        ]
      }
    ]
  };
  try {
    let order = await createOrder(orderParams);
    return (0, import_node5.json)(order);
  } catch (error2) {
    return (0, import_node5.json)(
      {
        error: error2.message
      },
      { status: 500 }
    );
  }
}

// app/routes/api/printful/products/$id.tsx
var id_exports = {};
__export(id_exports, {
  loader: () => loader4
});
var import_node6 = require("@remix-run/node");
async function loader4({ request, params }) {
  try {
    let product = await getProduct2(Number(params.id));
    return (0, import_node6.json)(product);
  } catch (error) {
    return (0, import_node6.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  }
}

// app/routes/api/duplicate.$promptId.tsx
var duplicate_promptId_exports = {};
__export(duplicate_promptId_exports, {
  action: () => action3
});
var import_node7 = require("@remix-run/node");
async function action3({ request, params }) {
  let { promptId } = params, authSession = await getAuthSession(request), client = getSupabaseAdmin(), { data, error } = await client.from("prompts").select("*").match({ uuid: promptId }).single();
  if (error)
    throw new Response("", { status: 500, statusText: "Something went wrong" });
  if (!data)
    throw new Response("", { status: 404, statusText: "Prompt not found" });
  if (authSession) {
    let { userId } = authSession;
    if (userId === data.created_by)
      return (0, import_node7.redirect)(`/app/${data.uuid}`);
  }
  let session = await getSession(request);
  return session.set(
    PROMPT_SAVE_KEY,
    JSON.stringify({
      action: "insert",
      ids: [data.id]
    })
  ), (0, import_node7.redirect)("/signup", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}

// app/routes/api/generate/image-test.tsx
var image_test_exports = {};
__export(image_test_exports, {
  action: () => action4
});
var import_sharp3 = __toESM(require("sharp"));
function hexToRgbA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))
    return c = hex.substring(1).split(""), c.length == 3 && (c = [c[0], c[0], c[1], c[1], c[2], c[2]]), c = "0x" + c.join(""), {
      r: c >> 16 & 255,
      g: c >> 8 & 255,
      b: c & 255,
      alpha: 1
    };
  throw new Error("Bad Hex");
}
async function action4() {
  let aiImage = "https://project-ai.sfo3.digitaloceanspaces.com/generated/anon/img-OFtYeP9soPqz9gJirpLWp1u6.png", printConfig = {
    template_id: 150560,
    image_url: "https://files.cdn.printful.com/m/57-bc3001/medium/ghost/front/05_bc3001_ghost_front_base_whitebg.png?v=1668602552",
    background_url: "https://files.cdn.printful.com/m/57-bc3001/medium/bgImages/01_bc3001_heather-black.jpg?v=1668602552",
    background_color: "#0b0b0b",
    printfile_id: 1,
    template_width: 3e3,
    template_height: 3e3,
    print_area_width: 1010,
    print_area_height: 1346,
    print_area_top: 530,
    print_area_left: 996,
    is_template_on_front: !0,
    orientation: "any"
  }, shirtImage = "https://files.cdn.printful.com/m/57-bc3001/medium/ghost/front/05_bc3001_ghost_front_base_whitebg.png?v=1668602552", [ai, shirt] = await Promise.all([fetch(aiImage), fetch(shirtImage)]), aiBuff = Buffer.from(await ai.arrayBuffer()), shirtBuff = Buffer.from(await shirt.arrayBuffer()), aiFix = await (0, import_sharp3.default)(aiBuff).resize(printConfig.print_area_width, printConfig.print_area_width).toBuffer(), shirtFix = await (0, import_sharp3.default)(shirtBuff).resize(printConfig.template_width, printConfig.template_height).toBuffer(), offset2 = (printConfig.print_area_height - printConfig.print_area_width) / 2, rgba = hexToRgbA(printConfig.background_color), image = await (0, import_sharp3.default)({
    create: {
      width: printConfig.template_width,
      height: printConfig.template_height,
      channels: 4,
      background: rgba
    }
  }).composite([
    {
      input: aiFix,
      top: printConfig.print_area_top + offset2,
      left: printConfig.print_area_left
    },
    { input: shirtFix }
  ]).withMetadata().png().toBuffer();
  return console.log(image), new Response(image, {
    headers: {
      "Content-type": "image/png"
    }
  });
}

// app/routes/api/generate/remove-bg.tsx
var remove_bg_exports = {};
__export(remove_bg_exports, {
  action: () => action5
});
var import_node8 = require("@remix-run/node"), import_base = require("openai/dist/base");
async function action5({ request }) {
  let data = await request.json(), { imageId } = data;
  if (!imageId)
    return (0, import_node8.json)({
      error: "Prompt ID is required"
    });
  let client = getSupabaseAdmin(), { data: result, error } = await client.from("prompt_results").select("*").match({ id: imageId }).single();
  if (error)
    return (0, import_node8.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  if (!result)
    return (0, import_node8.json)(
      {
        error: "No result found"
      },
      { status: 500 }
    );
  if (result.nobgfile)
    return (0, import_node8.json)({
      result
    });
  try {
    let imageBuffer = await removeBg(resolveUrl(result.filename)), filename = result.filename.split("/").pop(), hash = new Date().getTime(), filePath = [
      "hi-res",
      `result-${result.id}`,
      `nobg-${hash}-${filename}`
    ].join("/");
    await uploadFile(filePath, imageBuffer);
    let { data: newResult } = await client.from("prompt_results").update({
      nobgfile: filePath
    }).match({ id: result.id }).select("*").single();
    return (0, import_node8.json)({
      result: newResult
    });
  } catch (e) {
    return console.log("error", e), e instanceof import_base.RequiredError ? (0, import_node8.json)(
      {
        error: e.message
      },
      { status: 500 }
    ) : (0, import_node8.json)(
      {
        error: (e == null ? void 0 : e.message) ?? "Unknown error"
      },
      { status: 500 }
    );
  }
}

// app/routes/api/purchase/initiate.ts
var initiate_exports = {};
__export(initiate_exports, {
  action: () => action6
});
var import_node9 = require("@remix-run/node"), import_zod3 = require("zod");

// app/lib/stripe.server.ts
var import_stripe = __toESM(require("stripe"));
var stripe = new import_stripe.default(PRIVATE_STRIPE_KEY, {
  apiVersion: "2022-08-01"
}), supabase = getSupabaseAdmin();
async function onCheckoutSessionCompleted(session) {
  var _a, _b;
  let enrichedSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["customer", "line_items", "payment_intent.shipping"]
  }), customer = enrichedSession.customer, line_items = (_a = enrichedSession.line_items) == null ? void 0 : _a.data, payment_intent = enrichedSession.payment_intent, metadata = enrichedSession.metadata, { data: profile } = await supabase.from("profiles").select("*").match({ email: customer.email }).single(), userId = profile == null ? void 0 : profile.id;
  if (!profile) {
    let { data } = await supabase.auth.admin.createUser({
      email: customer.email,
      data: {
        full_name: customer.name
      }
    });
    data.user && (userId = data.user.id);
  }
  if (!userId)
    return;
  let { data: updatedProfile } = await supabase.from("profiles").update({ stripe_id: customer.id }).match({ email: customer.email }).select("*").single(), { data: order } = await supabase.from("orders").insert({
    user_id: userId,
    line_items: line_items.map((line_item) => {
      var _a2;
      return {
        product_id: (_a2 = line_item.price) == null ? void 0 : _a2.product,
        quantity: line_item.quantity
      };
    }),
    shipping_address: (_b = payment_intent.shipping) == null ? void 0 : _b.address,
    printful_data: metadata
  }).select("*").single(), printfulOrder = await createFullOrder(updatedProfile, order);
  await supabase.from("orders").update({
    printful_order_id: printfulOrder.id
  }).match({ id: order.id });
}
async function createCheckoutSession(params) {
  let { line_items, success_url, cancel_url, metadata } = params;
  return await stripe.checkout.sessions.create({
    customer_creation: "always",
    shipping_address_collection: { allowed_countries: ["US"] },
    mode: "payment",
    allow_promotion_codes: !0,
    success_url,
    cancel_url,
    line_items,
    metadata
  });
}

// app/routes/api/purchase/initiate.ts
var PurchaseSchema = import_zod3.z.object({
  promptId: import_zod3.z.string().transform((val) => Number(val)),
  variantId: import_zod3.z.string().transform((val) => Number(val)),
  productId: import_zod3.z.string().transform((val) => Number(val)),
  imageId: import_zod3.z.string().transform((val) => Number(val)),
  printImage: import_zod3.z.enum(["nobgfile", "designfile"]),
  printShape: import_zod3.z.enum(["rectangle", "square"]).optional().default("square")
});
async function action6({ request }) {
  let formData = Object.fromEntries(await request.formData()), validator = PurchaseSchema.safeParse(formData);
  if (!validator.success)
    throw (0, import_node9.redirect)("/", {
      status: 500,
      statusText: "Missing a required paramter"
    });
  let client = getSupabaseAdmin(), { promptId, variantId, imageId, productId, printImage, printShape } = validator.data, { data: result } = await client.from("prompt_results").select("*, prompt:prompts(*)").match({ id: imageId }).single(), productNameMap = {
    71: "DAI Men's Staple T-Shirt",
    639: "DAI Women's Relaxed T-Shirt",
    356: "DAI Long Sleeve T-Shirt",
    2: "DAI Matte Paper Framed Poster"
  }, productPrice = Number(
    PRODUCT_RETAIL_PRICING[variantId].replace("$", "")
  ), productName = productNameMap[productId], origin = new URL(request.url).origin, hash = Buffer.from(JSON.stringify(validator.data)).toString("base64"), success_url = `${origin}/confirmation?hash=${hash}`, cancel_url = `${origin}/designer?promptId=${result.prompt.uuid}&resultId=${result.id}&variantId=${variantId}&productId=${productId}`, printFile = printImage === "designfile" ? resolveUrl(result.filename) : resolveUrl(result.nobgfile), buffer = await (await fetch(
    `${origin}/api/printful/mock?productId=${productId}&variantId=${variantId}&imageUrl=${printFile}&printShape=${printShape}`
  )).arrayBuffer(), fileName = [productId, variantId, imageId, printImage].join("-");
  await uploadFile(`stripe/${fileName}.webp`, buffer);
  let paymentLink = await createCheckoutSession({
    line_items: [
      {
        quantity: 1,
        price_data: {
          product_data: {
            name: productName,
            description: `This image will be printed on the ${productName}. Prompt: ${result.prompt.prompt}`,
            images: [resolveCdn(`stripe/${fileName}.webp`)]
          },
          currency: "USD",
          unit_amount: productPrice * 100
        }
      }
    ],
    success_url,
    cancel_url,
    metadata: {
      promptId,
      variantId,
      imageId,
      printImage,
      printShape
    }
  });
  return (0, import_node9.redirect)(paymentLink.url);
}

// app/routes/api/delete.$promptId.tsx
var delete_promptId_exports = {};
__export(delete_promptId_exports, {
  action: () => action7
});
var import_node11 = require("@remix-run/node");

// app/lib/auth/guards.server.ts
var import_node10 = require("@remix-run/node");

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
  return authSession ? await verifyAuthSession(authSession) ? (0, import_node10.redirect)("/app") : (0, import_node10.json)(
    {},
    {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session"
        })
      }
    }
  ) : (0, import_node10.json)({});
}
async function requireAuthSession(request) {
  let authSession = await getAuthSession(request);
  if (!(authSession != null && authSession.accessToken) || !(authSession != null && authSession.refreshToken))
    throw (0, import_node10.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session"
        })
      }
    });
  if (!await verifyAuthSession(authSession))
    throw (0, import_node10.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitAuthSession(request, {
          authSession: null,
          flashErrorMessage: "no-user-session"
        })
      }
    });
  return authSession;
}

// app/routes/api/delete.$promptId.tsx
async function action7({ request, params }) {
  let { promptId } = params, { accessToken } = await requireAuthSession(request), client = getSupabaseAdmin(accessToken), { data, error } = await client.from("prompts").select("*, results:prompt_results(*)").match({ uuid: promptId }).single();
  if (error)
    throw new Response("", { status: 500, statusText: "Something went wrong" });
  if (!data)
    throw new Response("", { status: 404, statusText: "Prompt not found" });
  if (data.results) {
    let deletePromises = [];
    for (let result of data.results)
      result.filename && deletePromises.push(deleteFile(result.filename)), result.designfile && deletePromises.push(deleteFile(result.designfile)), result.nobgfile && deletePromises.push(deleteFile(result.nobgfile)), result.thumbfile && deletePromises.push(deleteFile(result.thumbfile));
    deletePromises.length && await Promise.all(deletePromises);
  }
  let { error: deleteError } = await client.from("prompts").delete().match({ uuid: promptId });
  if (deleteError)
    throw new Response("", { status: 500, statusText: "Something went wrong" });
  return (0, import_node11.json)({
    success: !0
  });
}

// app/routes/api/generate/notify.tsx
var notify_exports = {};
__export(notify_exports, {
  action: () => action8
});
var import_node12 = require("@remix-run/node");
async function action8({ request }) {
  let data = await request.json(), { promptId } = data;
  if (!promptId)
    return (0, import_node12.json)({
      error: "Prompt ID is required"
    });
  let client = getSupabaseAdmin(), { data: prompt, error } = await client.from("prompts").select("*, results:prompt_results(*)").match({ id: promptId }).single();
  if (error)
    return (0, import_node12.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  if (!prompt)
    return (0, import_node12.json)(
      {
        error: "No prompt found"
      },
      { status: 500 }
    );
  try {
    let origin = new URL(request.url).origin;
    return await sendNotification({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: prompt.prompt
          }
        },
        ...prompt.results.map((result) => ({
          type: "image",
          image_url: resolveCdn(result.thumbfile),
          alt_text: `result id: ${result.id}`
        })),
        {
          type: "actions",
          elements: prompt.results.map(
            (result, index2) => ({
              type: "button",
              text: {
                type: "plain_text",
                text: `Approve #${index2 + 1}`,
                emoji: !0
              },
              value: `${result.id}`,
              action_id: `result-${result.id}`,
              url: `${origin}/api/webhooks/slack?resultId=${result.id}&status=approved&key=${SLACK_TOKEN}`
            })
          )
        }
      ]
    }), (0, import_node12.json)({
      success: !0
    });
  } catch (error2) {
    return (0, import_node12.json)(
      {
        error: error2.message
      },
      { status: 500 }
    );
  }
}

// app/routes/api/generate/upload.tsx
var upload_exports = {};
__export(upload_exports, {
  action: () => action9
});
var import_node13 = require("@remix-run/node"), import_sharp4 = __toESM(require("sharp"));
async function action9({ request }) {
  let data = await request.json(), { resultId } = data;
  if (!resultId)
    return (0, import_node13.json)({
      error: "Prompt ID is required"
    });
  let client = getSupabaseAdmin(), { data: result, error } = await client.from("prompt_results").select("*, prompt:prompts(*)").match({ id: resultId }).single();
  if (error)
    return (0, import_node13.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  if (!result)
    return (0, import_node13.json)(
      {
        error: "No prompt results found"
      },
      { status: 500 }
    );
  let { filename, prompt } = result;
  if (!filename || !filename.startsWith("http"))
    return (0, import_node13.json)({
      success: !0
    });
  let fileName = new URL(resolveUrl(filename)).pathname.split("/").pop(), filePath = [
    "generated",
    `prompt-${prompt.id}`,
    `result-${result.id}`,
    fileName
  ].join("/"), thumbPath = filePath.replace("img-", "thumb-").replace(".png", ".webp");
  try {
    let imageBuffer = await (await fetch(resolveUrl(filename))).arrayBuffer(), thumbBuffer = await (0, import_sharp4.default)(Buffer.from(imageBuffer)).resize().webp({ quality: 70 }).toBuffer();
    await Promise.all([
      uploadFile(filePath, imageBuffer),
      uploadFile(thumbPath, thumbBuffer)
    ]);
  } catch {
    return (0, import_node13.json)(
      {
        error: "Error transferring image"
      },
      { status: 500 }
    );
  }
  return await client.from("prompt_results").upsert({
    id: resultId,
    prompt_id: result.prompt_id,
    filename: filePath,
    thumbfile: thumbPath
  }).select("*"), (0, import_node13.json)({
    success: !0
  });
}

// app/routes/api/webhooks/stripe.ts
var stripe_exports = {};
__export(stripe_exports, {
  action: () => action10
});
var import_node14 = require("@remix-run/node");
async function action10({ request }) {
  let event6;
  try {
    let payload = await request.text(), signature = request.headers.get("stripe-signature");
    event6 = stripe.webhooks.constructEvent(
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
            text: `[Stripe] ${event6.type} hook called`,
            emoji: !0
          }
        }
      ]
    });
  } catch {
  }
  switch (event6.type) {
    case "checkout.session.completed":
      await onCheckoutSessionCompleted(
        event6.data.object
      );
      break;
    default:
      console.log(`Unhandled event type ${event6.type}`);
  }
  return (0, import_node14.json)({
    status: "OK"
  });
}

// app/routes/api/generate/hires.tsx
var hires_exports = {};
__export(hires_exports, {
  action: () => action11
});
var import_node15 = require("@remix-run/node"), import_base2 = require("openai/dist/base");
async function action11({ request }) {
  let data = await request.json(), { imageId } = data;
  if (!imageId)
    return (0, import_node15.json)({
      error: "Prompt ID is required"
    });
  let client = getSupabaseAdmin(), { data: result, error } = await client.from("prompt_results").select("*").match({ id: imageId }).single();
  if (error)
    return (0, import_node15.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  if (!result)
    return (0, import_node15.json)(
      {
        error: "No result found"
      },
      { status: 500 }
    );
  try {
    let image = result.filename.startsWith("http") ? result.filename : resolveUrl(result.filename), imageBuffer = await resizeImage(image, {
      height: 4e3,
      width: 4e3
    }), filename = result.filename.split("/").pop(), filePath = ["hi-res", `result-${result.id}`, filename].join("/");
    return await uploadFile(filePath, imageBuffer), await client.from("prompt_results").update({
      designfile: filePath
    }).match({ id: result.id }), (0, import_node15.json)({
      designfile: resolveUrl(filePath)
    });
  } catch (e) {
    return console.log("error", e), e instanceof import_base2.RequiredError ? (0, import_node15.json)(
      {
        error: e.message
      },
      { status: 500 }
    ) : (0, import_node15.json)(
      {
        error: (e == null ? void 0 : e.message) ?? "Unknown error"
      },
      { status: 500 }
    );
  }
}

// app/routes/api/generate/image.tsx
var image_exports = {};
__export(image_exports, {
  action: () => action12
});
var import_node16 = require("@remix-run/node"), import_base3 = require("openai/dist/base");

// app/lib/openai.server.ts
var import_openai = require("openai"), configuration = new import_openai.Configuration({
  organization: "org-iN39Zb2XmkCZFv5jY4TmYcNF",
  apiKey: process.env.OPENAI_API_KEY
}), openai = new import_openai.OpenAIApi(configuration), openai_server_default = openai;

// app/routes/api/generate/image.tsx
async function action12({ request }) {
  let data = await request.json(), authSession = await getAuthSession(request), session = await getSession(request), openAiSessionKey = (authSession == null ? void 0 : authSession.userId) ?? session.get(ANON_SESSION_KEY), { promptId, imageCount = 1 } = data;
  if (!promptId)
    return (0, import_node16.json)({
      error: "Prompt ID is required"
    });
  let client = getSupabaseAdmin(), { data: prompt, error } = await client.from("prompts").update({ session_key: openAiSessionKey }).match({ id: promptId }).select("*").single();
  if (error)
    return (0, import_node16.json)(
      {
        error: error.message
      },
      { status: 500 }
    );
  if (!prompt)
    return (0, import_node16.json)(
      {
        error: "No prompt found"
      },
      { status: 500 }
    );
  try {
    let { data: data2 } = await openai_server_default.createImage({
      prompt: prompt.prompt,
      n: Number(imageCount),
      size: "1024x1024",
      user: openAiSessionKey
    }), { data: results } = await client.from("prompt_results").insert(
      data2.data.map((image) => ({
        prompt_id: promptId,
        filename: image.url
      }))
    ).select("*");
    return (0, import_node16.json)({
      results
    });
  } catch (e) {
    return console.log("error", e), e instanceof import_base3.RequiredError ? (0, import_node16.json)(
      {
        error: e.message
      },
      { status: 500 }
    ) : (0, import_node16.json)(
      {
        error: (e == null ? void 0 : e.message) ?? "Unknown error"
      },
      { status: 500 }
    );
  }
}

// app/routes/api/webhooks/slack.ts
var slack_exports = {};
__export(slack_exports, {
  action: () => action13,
  loader: () => loader5
});
var import_node17 = require("@remix-run/node");
async function loader5({ request }) {
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
  return await client.from("prompts").update({ featured: !0, approved: !0 }).match({ id: data.prompt.id }), (0, import_node17.redirect)(`/explore/${data.prompt.uuid}`);
}
function action13() {
  return { ok: !0 };
}

// app/routes/api/printful/mock.ts
var mock_exports = {};
__export(mock_exports, {
  loader: () => loader6
});
var import_sharp5 = __toESM(require("sharp")), import_zod4 = require("zod");
var MockSchema = import_zod4.z.object({
  productId: import_zod4.z.string(),
  variantId: import_zod4.z.string(),
  imageUrl: import_zod4.z.string().optional(),
  printShape: import_zod4.z.enum(["rectangle", "square"]).optional().default("square")
});
function hexToRgbA2(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))
    return c = hex.substring(1).split(""), c.length == 3 && (c = [c[0], c[0], c[1], c[1], c[2], c[2]]), c = "0x" + c.join(""), {
      r: c >> 16 & 255,
      g: c >> 8 & 255,
      b: c & 255,
      alpha: 1
    };
  throw new Error("Bad Hex");
}
async function placeholder2() {
  return await (0, import_sharp5.default)({
    create: {
      width: 1024,
      height: 1024,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  }).png().toBuffer();
}
async function loader6({ request }) {
  let { searchParams } = new URL(request.url), validation = MockSchema.safeParse(Object.fromEntries(searchParams));
  if (!validation.success)
    return await placeholder2();
  let {
    productId,
    variantId,
    imageUrl,
    printShape = "square"
  } = validation.data, forceSquare = Number(productId) === 2, [template] = await Promise.all([
    getProductTemplates2(Number(productId))
  ]), templatePlacement = template.variant_mapping.find(
    (vt) => vt.variant_id === Number(variantId)
  ).templates.find(
    (tm) => tm.placement === PRODUCT_PRINTFILES_PLACEMENT[Number(productId)]
  ), selectedTemplate = template.templates.find(
    (t) => t.template_id === templatePlacement.template_id
  ), printWidth = Math.floor(
    selectedTemplate.print_area_width * (forceSquare ? 1 : 0.95)
  ), printHeight = printShape === "square" ? printWidth : Math.floor(
    selectedTemplate.print_area_height * (forceSquare ? 1 : 0.95)
  ), offset2 = printShape === "square" ? (selectedTemplate.print_area_height - printHeight) / 2 : (printHeight - printWidth) / 2, offsetX = (selectedTemplate.print_area_width - printWidth) / 2, offsetLeft = selectedTemplate.print_area_left + offsetX, rgba = hexToRgbA2(selectedTemplate.background_color), shirt = await fetch(selectedTemplate.image_url), shirtBuff = Buffer.from(await shirt.arrayBuffer()), composites = [{ input: await (0, import_sharp5.default)(shirtBuff).resize(selectedTemplate.template_width, selectedTemplate.template_height).toBuffer() }];
  if (imageUrl) {
    let ai = await fetch(resolveUrl(imageUrl)), aiBuff = Buffer.from(await ai.arrayBuffer()), aiFix = await (0, import_sharp5.default)(aiBuff).resize(printWidth, printHeight).toBuffer();
    composites.push({
      input: aiFix,
      top: Math.floor(selectedTemplate.print_area_top + offset2),
      left: Math.floor(offsetLeft)
    });
  }
  let image = await (0, import_sharp5.default)({
    create: {
      width: selectedTemplate.template_width,
      height: selectedTemplate.template_height,
      channels: 4,
      background: rgba
    }
  }).composite(composites).withMetadata().webp({ quality: 60 }).toBuffer();
  return new Response(image, {
    headers: {
      "Content-type": "image/webp"
    }
  });
}

// app/routes/__index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => MainLayout,
  loader: () => loader7
});
var import_node18 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_jotai2 = require("jotai");

// app/lib/atoms/root.tsx
var import_jotai = require("jotai"), rootScope = Symbol("__root"), sbAtom = (0, import_jotai.atom)(null), accessTokenAtom = (0, import_jotai.atom)(""), userAtom = (0, import_jotai.atom)(null), profileAtom = (0, import_jotai.atom)(
  null
), colorSchemeAtom = (0, import_jotai.atom)("dark"), showAuthModalAtom = (0, import_jotai.atom)(!1);

// app/routes/__index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  var _a;
  let authSession = await getAuthSession(request);
  if (authSession != null && authSession.accessToken && await verifyAuthSession(authSession)) {
    let { accessToken } = authSession, supabase2 = getSupabaseAdmin(accessToken), { data } = await supabase2.auth.getUser(accessToken), { data: profile } = await supabase2.from("profiles").select("*").match({ id: (_a = data.user) == null ? void 0 : _a.id }).single();
    return (0, import_node18.json)({
      accessToken,
      user: data.user,
      profile
    });
  }
  return (0, import_node18.json)({
    accessToken: null,
    user: null,
    profile: null
  });
}
function MainLayout() {
  let { accessToken, user, profile } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jotai2.Provider, {
    initialValues: [
      [accessTokenAtom, accessToken],
      [userAtom, user],
      [profileAtom, profile]
    ],
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
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
var import_core5 = require("@mantine/core"), import_react16 = require("@remix-run/react"), import_react_query4 = require("@tanstack/react-query"), import_jotai8 = require("jotai"), import_react17 = require("react"), import_tabler_icons_react5 = require("tabler-icons-react");

// app/components/Footer.tsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "bg-white border-t border-gray-200 py-24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container mx-auto",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            to: "/",
            className: "font-bold text-xl",
            children: [
              "Designed ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "text-indigo-600 font-black",
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
                className: "px-2",
                to: "/explore",
                children: "Explore"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 12,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
                className: "px-2",
                to: "/login",
                children: "Login"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 15,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
                className: "px-2",
                to: "/privacy",
                children: "Privacy"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 18,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
                className: "px-2",
                to: "/terms",
                children: "Terms"
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 21,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
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
var import_react11 = require("@headlessui/react"), import_core3 = require("@mantine/core"), import_react12 = require("@remix-run/react"), import_jotai5 = require("jotai"), import_react13 = require("react"), import_tabler_icons_react2 = require("tabler-icons-react");

// app/components/AvatarMenu.tsx
var import_core2 = require("@mantine/core"), import_react10 = require("@remix-run/react");

// app/lib/hooks/useUserData.tsx
var import_jotai3 = require("jotai");
function useUserData() {
  let user = (0, import_jotai3.useAtomValue)(userAtom), profile = (0, import_jotai3.useAtomValue)(profileAtom);
  return {
    user,
    profile
  };
}

// app/components/primitives/DropdownMenu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu")), import_react9 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DropdownMenu = (0, import_react9.forwardRef)(function({ trigger: trigger2, children: children2, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Root, {
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Trigger, {
        asChild: !0,
        children: trigger2
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
            children2
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
  children: children2
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuPrimitive.Item, {
  asChild: !0,
  className: "px-4 py-2 bg-white hover:bg-gray-100 outline-none text-sm",
  children: children2
}, void 0, !1, {
  fileName: "app/components/primitives/DropdownMenu.tsx",
  lineNumber: 50,
  columnNumber: 3
}, this), DropdownMenu_default = DropdownMenu;

// app/components/AvatarMenu.tsx
var import_jotai4 = require("jotai");
var import_tabler_icons_react = require("tabler-icons-react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AvatarMenu({ links: links3 }) {
  let { profile } = useUserData(), setUser = (0, import_jotai4.useSetAtom)(userAtom), setProfile = (0, import_jotai4.useSetAtom)(profileAtom);
  if (!profile)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Avatar, {
      component: import_react10.Link,
      to: "/login",
      radius: "xl",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react.User, {}, void 0, !1, {
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
    trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Avatar, {
      component: "button",
      radius: "xl",
      variant: "outline",
      color: "dark",
      src: profile.avatar_url ? profile.avatar_url : `https://avatars.dicebear.com/api/miniavs/${profile.email}.svg`,
      alt: profile.full_name,
      sx: (theme2) => ({
        border: `1px solid ${theme2.colors.dark[6]}`
      })
    }, void 0, !1, {
      fileName: "app/components/AvatarMenu.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    children: [
      links3 && links3.length > 0 && (links3 == null ? void 0 : links3.map(({ label, to }) => {
        let isExternal = to.startsWith("http"), menuItemProps = {
          component: import_react10.Link,
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
            lineNumber: 76,
            columnNumber: 15
          }, this)
        }, to, !1, {
          fileName: "app/components/AvatarMenu.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this);
      })),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
          to: "/signout",
          className: "block",
          onClick: () => signout(),
          children: "Logout"
        }, void 0, !1, {
          fileName: "app/components/AvatarMenu.tsx",
          lineNumber: 84,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/AvatarMenu.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/AvatarMenu.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/lib/classNames.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// app/components/Header.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), mainLinks = [
  { to: "/explore", label: "Explore" },
  { to: "/designer", label: "Designer" }
], extraLinks = [
  { to: "/app/account", label: "Account" }
];
function Header({ fullWidth = !1 }) {
  let { user } = useUserData(), location = (0, import_react12.useLocation)(), [opened, setOpened] = (0, import_react13.useState)(!1), [searchOpened, setSearchOpened] = (0, import_react13.useState)(!1), colorScheme = (0, import_jotai5.useAtomValue)(colorSchemeAtom), finalLinks = mainLinks.concat(
    user ? [{ to: "/app", label: "My Designs", end: !0 }] : [{ to: "/login", label: "Login" }]
  ), searchEndpoint = location.pathname.includes("app") ? "/app" : "/explore";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: classNames(
          "flex h-20 items-center px-4 relative z-50 lg:justify-between",
          colorScheme === "light" ? "text-white" : "text-slate-800"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center lg:w-1/2 lg:flex-shrink-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Link, {
                to: "/",
                className: "relative font-bold text-xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: [
                      "Designed ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-indigo-600 font-black",
                        children: "/ AI"
                      }, void 0, !1, {
                        fileName: "app/components/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 24
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.Tooltip, {
                    label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: "We're excited to announce our beta launch!"
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 60,
                      columnNumber: 22
                    }, this),
                    withinPortal: !0,
                    position: "bottom-start",
                    multiline: !0,
                    width: 220,
                    withArrow: !0,
                    transition: "fade",
                    transitionDuration: 200,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "absolute top-full left-0 transform -translate-y-1 bg-indigo-600 rounded-md px-1 py-1 uppercase text-[10px] text-white leading-none",
                      children: "Beta"
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 69,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Header.tsx",
                lineNumber: 55,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
                className: "hidden lg:flex lg:space-x-4 ml-8",
                children: [
                  mainLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                    to: link.to,
                    end: link.end ?? !1,
                    className: ({ isActive }) => `transition-all duration-150 ${isActive ? "font-black tracking-tighter" : ""}`,
                    children: link.label
                  }, link.to, !1, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 77,
                    columnNumber: 15
                  }, this)),
                  user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                        to: "/app",
                        className: ({ isActive }) => `transition-all duration-150 ${isActive ? "font-black tracking-tighter" : ""}`,
                        end: !0,
                        children: "My Designs"
                      }, void 0, !1, {
                        fileName: "app/components/Header.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                        to: "/app/create",
                        className: ({ isActive }) => `transition-all duration-150 ${isActive ? "font-black tracking-tighter" : ""}`,
                        children: "Create"
                      }, void 0, !1, {
                        fileName: "app/components/Header.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Header.tsx",
                    lineNumber: 91,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Header.tsx",
                lineNumber: 75,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ml-auto flex lg:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "mr-4 h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center",
                onClick: () => setSearchOpened(!0),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react2.Search, {
                  size: 16,
                  className: "text-gray-800",
                  strokeWidth: 3
                }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 124,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 120,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center",
                onClick: () => setOpened(!0),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react2.Menu, {
                  size: 16,
                  className: "text-gray-800",
                  strokeWidth: 3
                }, void 0, !1, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 130,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 126,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 119,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "hidden lg:flex lg:justify-end lg:w-1/3 lg:flex-shrink-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mr-4 w-full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Form, {
                  action: searchEndpoint,
                  className: "relative flex-1 lg:w-full lg:max-w-md mx-auto",
                  onSubmitCapture: () => setSearchOpened(!1),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "search",
                      placeholder: "Search Images...",
                      name: "q",
                      className: classNames(
                        "pl-10 pr-4 h-10  rounded-full w-full shadow-md focus-within:border-none text-slate-800",
                        colorScheme === "light" ? "bg-white " : "bg-white/50"
                      )
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 142,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react2.Search, {
                      size: 16,
                      className: "text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2",
                      strokeWidth: 3
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 151,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 137,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 136,
                columnNumber: 11
              }, this),
              user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarMenu, {
                links: extraLinks
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 171,
                columnNumber: 13
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.Button, {
                component: import_react12.Link,
                variant: "gradient",
                gradient: { from: "violet", to: "pink" },
                radius: "xl",
                size: "md",
                to: "/signup",
                children: "Create Account"
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 160,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Header.tsx",
            lineNumber: 134,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Transition, {
        appear: !0,
        as: import_react13.Fragment,
        show: searchOpened,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex h-20 items-center px-4 fixed top-0 inset-x-0 z-50",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Form, {
              action: searchEndpoint,
              className: "flex-1 mr-4 focus:outline-indigo-600 focus:ring-indigo-600",
              onSubmitCapture: () => setSearchOpened(!1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "search",
                placeholder: "Search Images...",
                name: "q",
                className: "px-4 h-10 bg-gray-200 rounded-full w-full shadow-md"
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 184,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 179,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "ml-auto h-9 w-9 rounded-full shadow-md border border-gray-200 flex items-center justify-center",
              onClick: () => setSearchOpened(!1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react2.X, {
                size: 16,
                className: "text-gray-800",
                strokeWidth: 3
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 191,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 178,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 177,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Transition, {
        appear: !0,
        as: import_react13.Fragment,
        show: opened,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fixed inset-0 z-[999]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Transition.Child, {
              as: import_react13.Fragment,
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
                lineNumber: 211,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 202,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Transition.Child, {
              as: import_react13.Fragment,
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
                    finalLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                      to: link.to,
                      className: ({ isActive }) => `text-xl ${isActive ? "font-black tracking-tighter" : ""}`,
                      onClick: () => setOpened(!1),
                      end: link.end ?? !1,
                      children: link.label
                    }, link.to, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 229,
                      columnNumber: 19
                    }, this)),
                    user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.NavLink, {
                      to: "/create",
                      className: ({ isActive }) => `text-xl ${isActive ? "font-black tracking-tighter" : ""}`,
                      onClick: () => setOpened(!1),
                      children: "Create"
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 242,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.Button, {
                      component: import_react12.Link,
                      to: "/signup",
                      fullWidth: !0,
                      variant: "gradient",
                      gradient: { from: "violet", to: "pink" },
                      radius: "xl",
                      size: "lg",
                      children: "Create Account"
                    }, void 0, !1, {
                      fileName: "app/components/Header.tsx",
                      lineNumber: 252,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 227,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 226,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Header.tsx",
              lineNumber: 217,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 201,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 200,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/components/primitives/Modal.tsx
var Dialog = __toESM(require("@radix-ui/react-dialog")), import_react14 = require("react"), import_tabler_icons_react3 = require("tabler-icons-react");

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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), sizeClass = {
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
}, Modal = (0, import_react14.forwardRef)(function({
  size = "md",
  padding = "sm",
  ariaTitle,
  title,
  description,
  children: children2,
  fullScreen = !1,
  withCloseButton = !0,
  ...props
}, ref) {
  let finalSize = fullScreen ? "w-screen max-w-screen" : sizeClass[size], finalPadding = typeof padding == "number" ? `${padding}px` : paddingClass[padding];
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
            children2,
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

// app/lib/atoms/prompts.ts
var import_jotai7 = require("jotai");

// app/lib/atoms/withLocalStorage.ts
var import_jotai6 = require("jotai"), atomWithLocalStorage = (key, initialValue) => {
  let baseAtom = (0, import_jotai6.atom)((() => {
    if (typeof window > "u")
      return initialValue;
    let item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : initialValue;
  })());
  return (0, import_jotai6.atom)(
    (get) => get(baseAtom),
    (get, set, update) => {
      let nextValue = typeof update == "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue), localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
};

// app/lib/atoms/prompts.ts
var promptScope = Symbol("__prompt"), promptsAtom = (0, import_jotai7.atom)([]), promptAtom = (0, import_jotai7.atom)({}), resetPromptAtom = (0, import_jotai7.atom)(
  null,
  (_get, set) => set(promptAtom, {})
), promptHistoryDrawerAtom = (0, import_jotai7.atom)(!1), promptHistoryAtom = atomWithLocalStorage(
  ANON_PROMPT_KEY,
  []
), pushPromptAtom = (0, import_jotai7.atom)(null, (_get, set, prompt) => {
  set(promptHistoryAtom, (prevHistory) => {
    let newPrompts = [...prevHistory], promptIndex = prevHistory.findIndex((p) => p.id === prompt.id);
    return promptIndex > -1 ? newPrompts[promptIndex] = prompt : newPrompts.push(prompt), newPrompts;
  });
});

// app/routes/__auth/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action14,
  default: () => SignupPage,
  loader: () => loader8
});
var import_core4 = require("@mantine/core"), import_form = require("@mantine/form"), import_node19 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react_query3 = require("@tanstack/react-query"), import_tabler_icons_react4 = require("tabler-icons-react"), import_zod5 = require("zod");

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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SignupSchema = import_zod5.z.object({
  email: import_zod5.z.string().email()
});
async function loader8({ request }) {
  return await requireNonAuthSession(request);
}
async function action14({ request }) {
  let promptIds = (await request.formData()).getAll("promptIds");
  if (promptIds && promptIds.length > 0) {
    let session = await getSession(request);
    return session.set(
      PROMPT_SAVE_KEY,
      JSON.stringify({
        action: "upsert",
        ids: promptIds
      })
    ), (0, import_node19.json)(
      {},
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  }
  return null;
}
function SignupPage({ asPage = !0 }) {
  let [searchParams] = (0, import_react15.useSearchParams)(), { onSubmit, getInputProps, setFieldValue, ...form } = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(SignupSchema),
    initialValues: {
      email: ""
    }
  }), createAccount = (0, import_react_query3.useMutation)(async ({ email }) => {
    let redirect12 = `${window.location.origin}/callback`;
    searchParams.has("redirect") && (redirect12 = `${redirect12}?redirectTo=${searchParams.get("redirect")}`);
    let {
      data: { user, session },
      error
    } = await getSupabase().auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirect12
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
                lineNumber: 111,
                columnNumber: 13
              }, this),
              "Welcome to ",
              APP_NAME,
              "!"
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 109,
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
                lineNumber: 117,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/signup.tsx",
        lineNumber: 108,
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
                className: "text-indigo-600 font-black",
                children: "/ AI"
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 126,
                columnNumber: 22
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 125,
            columnNumber: 11
          }, this),
          createAccount.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Alert, {
            color: "red",
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react4.AlertCircle, {}, void 0, !1, {
              fileName: "app/routes/__auth/signup.tsx",
              lineNumber: 130,
              columnNumber: 36
            }, this),
            mb: 16,
            children: createAccount.error.message
          }, void 0, !1, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 130,
            columnNumber: 11
          }, this),
          createAccount.data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mb-8",
            children: "You are all set! Check your email for the magic link to continue."
          }, void 0, !1, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 136,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "bg-white border-2 border-gray-200 rounded-full px-4 py-2 w-full transition-all duration-150 hover:border-[#4285F4]",
                    onClick: () => signInWithGoogle(),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "flex items-center justify-center space-x-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleIcon, {
                          size: 24
                        }, void 0, !1, {
                          fileName: "app/routes/__auth/signup.tsx",
                          lineNumber: 147,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "font-bold font-[Roboto] text-[#00000089]",
                          children: "Sign in with Google"
                        }, void 0, !1, {
                          fileName: "app/routes/__auth/signup.tsx",
                          lineNumber: 148,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__auth/signup.tsx",
                      lineNumber: 146,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/signup.tsx",
                    lineNumber: 142,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Divider, {
                    label: "OR",
                    labelPosition: "center",
                    my: 16
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/signup.tsx",
                    lineNumber: 154,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 141,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                method: "post",
                onSubmit: onSubmit(handleSubmit),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.TextInput, {
                      id: "email",
                      label: "Email",
                      name: "email",
                      placeholder: "you@email.com",
                      required: !0,
                      size: "md",
                      ...getInputProps("email")
                    }, void 0, !1, {
                      fileName: "app/routes/__auth/signup.tsx",
                      lineNumber: 158,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Button, {
                      type: "submit",
                      radius: "sm",
                      variant: "filled",
                      fullWidth: !0,
                      loading: createAccount.isLoading,
                      children: "Send Magic Link"
                    }, void 0, !1, {
                      fileName: "app/routes/__auth/signup.tsx",
                      lineNumber: 168,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__auth/signup.tsx",
                  lineNumber: 157,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 156,
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
                    lineNumber: 181,
                    columnNumber: 15
                  }, this),
                  "."
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/signup.tsx",
                lineNumber: 179,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/signup.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/signup.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/signup.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index.tsx
var import_gtag = __toESM(require_gtag()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SubMainLayout() {
  let [authModal, setAuthModal] = (0, import_jotai8.useAtom)(showAuthModalAtom), { user } = useUserData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__index/__index.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 32,
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
          lineNumber: 38,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      !user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptHistoryDrawer, {}, void 0, !1, {
            fileName: "app/routes/__index/__index.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptHistoryAffix, {}, void 0, !1, {
            fileName: "app/routes/__index/__index.tsx",
            lineNumber: 43,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function PromptHistoryAffix() {
  let [mounted, setMounted] = (0, import_react17.useState)(!1), [opened, setOpened] = (0, import_jotai8.useAtom)(promptHistoryDrawerAtom), prompts = (0, import_jotai8.useAtomValue)(promptHistoryAtom);
  if ((0, import_react17.useEffect)(() => {
    setMounted(!0);
  }, []), !mounted || !prompts.length)
    return null;
  let openDrawer = () => {
    setOpened((prev2) => !prev2), (0, import_gtag.event)({
      ...import_gtag.GTAG_EVENTS.OPEN_HISTORY,
      label: ""
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    onClick: () => openDrawer(),
    className: "fixed z-[999] bottom-6 right-6 h-16 w-16 rounded-full bg-indigo-600 text-white flex items-center justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "text-xs h-6 w-6 rounded-full flex items-center justify-center bg-pink-600 text-white absolute top-0 left-0",
        children: prompts.length
      }, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      opened ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react5.X, {
        size: 32
      }, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react5.History, {
        size: 32
      }, void 0, !1, {
        fileName: "app/routes/__index/__index.tsx",
        lineNumber: 78,
        columnNumber: 35
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
function PromptHistoryDrawer() {
  let [opened, setOpened] = (0, import_jotai8.useAtom)(promptHistoryDrawerAtom), [prompts, setPrompts] = (0, import_jotai8.useAtom)(promptHistoryAtom), client = (0, import_react17.useMemo)(() => getSupabase(), []);
  return (0, import_react_query4.useQuery)({
    queryKey: ["prompthistory", prompts.map((p) => p.id)],
    queryFn: async () => {
      let { data, error } = await client.from("prompts").select("*, results:prompt_results(*)").in(
        "id",
        prompts.map((p) => p.id)
      );
      if (error)
        throw error;
      return data;
    },
    enabled: opened,
    onSuccess: (data) => {
      data && setPrompts(data);
    }
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Drawer, {
    opened,
    onClose: () => setOpened(!1),
    position: "right",
    size: "xl",
    withCloseButton: !1,
    padding: 0,
    overlayBlur: 12,
    overlayColor: "#000",
    overlayOpacity: 0.5,
    lockScroll: !0,
    styles: (theme2) => ({
      drawer: {
        overflow: "auto",
        [theme2.fn.largerThan("md")]: {
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25
        }
      }
    }),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-4xl font-black text-slate-800 tracking-tighter mb-2",
          children: "Recent"
        }, void 0, !1, {
          fileName: "app/routes/__index/__index.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "p-4 rounded-lg bg-indigo-600/10 mb-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-base font-bold tracking-tighter text-indigo-600/75 mb-2",
              children: "Save Your Results"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "mb-3 text-sm leading-normal",
              children: "Login to save your prompts and images. You will also gain access to our prompt wizard with 100's of other options to build amazing prompts."
            }, void 0, !1, {
              fileName: "app/routes/__index/__index.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Form, {
              method: "post",
              action: "/signup",
              children: [
                prompts.map((prompt, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "promptIds",
                  value: prompt.id
                }, prompt.id, !1, {
                  fileName: "app/routes/__index/__index.tsx",
                  lineNumber: 147,
                  columnNumber: 15
                }, this)),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Button, {
                  variant: "gradient",
                  gradient: { from: "violet", to: "pink" },
                  size: "xs",
                  radius: "xl",
                  type: "submit",
                  children: "Create Account"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index.tsx",
                  lineNumber: 154,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index.tsx",
              lineNumber: 145,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/__index.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: prompts == null ? void 0 : prompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid grid-cols-4 gap-4 mb-4",
            children: prompt.results.map((result) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Link, {
              to: `/designer?promptId=${prompt.uuid}&resultId=${result.id}`,
              className: "aspect-1 rounded-md shadow-lg overflow-hidden relative",
              onClick: () => setOpened(!1),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  className: "h-full w-full object-cover",
                  src: resolveCdn(result.filename),
                  alt: prompt.prompt
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index.tsx",
                  lineNumber: 176,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "absolute bottom-2 left-2 flex items-end",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Button, {
                    size: "xs",
                    variant: "gradient",
                    radius: "xl",
                    gradient: { from: "violet", to: "pink" },
                    px: 8,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react5.ShoppingCart, {
                      size: 16
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index.tsx",
                      lineNumber: 189,
                      columnNumber: 23
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__index/__index.tsx",
                    lineNumber: 182,
                    columnNumber: 21
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index.tsx",
                  lineNumber: 181,
                  columnNumber: 19
                }, this)
              ]
            }, result.id, !0, {
              fileName: "app/routes/__index/__index.tsx",
              lineNumber: 170,
              columnNumber: 17
            }, this))
          }, prompt.id, !1, {
            fileName: "app/routes/__index/__index.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__index/__index.tsx",
          lineNumber: 166,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__index/__index.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__index/__index.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/collections/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => CollectionDetail,
  loader: () => loader9
});
var import_node20 = require("@remix-run/node"), import_react19 = require("@remix-run/react");

// app/components/PromptCard.tsx
var import_react18 = require("@remix-run/react"), import_tabler_icons_react6 = require("tabler-icons-react");

// app/modules/prompts/schema.ts
var import_zod6 = require("zod"), SelectionSchema = import_zod6.z.object({
  type: import_zod6.z.string().optional().nullable(),
  artist: import_zod6.z.array(import_zod6.z.string()).optional().nullable(),
  style: import_zod6.z.array(import_zod6.z.string()).optional().nullable(),
  lighting: import_zod6.z.string().optional().nullable(),
  detail: import_zod6.z.string().optional().nullable(),
  techniques: import_zod6.z.string().optional().nullable(),
  color: import_zod6.z.string().optional().nullable(),
  camera: import_zod6.z.string().optional().nullable(),
  resolution: import_zod6.z.string().optional().nullable(),
  emotion: import_zod6.z.string().optional().nullable()
}), PromptMockupSchema = import_zod6.z.object({
  id: import_zod6.z.number(),
  prompt_id: import_zod6.z.number(),
  prompt_result_id: import_zod6.z.number(),
  product_id: import_zod6.z.number(),
  filename: import_zod6.z.string()
}), PromptLikeSchema = import_zod6.z.object({
  id: import_zod6.z.number(),
  prompt_id: import_zod6.z.number(),
  user_id: import_zod6.z.string()
}), PromptResultSchema = import_zod6.z.object({
  id: import_zod6.z.number(),
  prompt_id: import_zod6.z.number(),
  filename: import_zod6.z.string(),
  designfile: import_zod6.z.string().optional().nullable(),
  nobgfile: import_zod6.z.string().optional().nullable(),
  thumbfile: import_zod6.z.string().optional().nullable(),
  mockup: import_zod6.z.array(PromptMockupSchema).optional().nullable(),
  featured: import_zod6.z.boolean().default(!1)
}), PromptSchema = import_zod6.z.object({
  id: import_zod6.z.number(),
  uuid: import_zod6.z.string().uuid(),
  created_at: import_zod6.z.string(),
  created_by: import_zod6.z.string().uuid().optional(),
  prompt: import_zod6.z.string(),
  selections: SelectionSchema.optional(),
  results: import_zod6.z.array(PromptResultSchema),
  likes: import_zod6.z.array(PromptLikeSchema).optional(),
  like_count: import_zod6.z.array(import_zod6.z.object({ likes: import_zod6.z.number() })),
  is_liked: import_zod6.z.array(import_zod6.z.object({ user_id: import_zod6.z.string() })).optional(),
  session_key: import_zod6.z.string().optional()
}), NewPromptSchema = PromptSchema.pick({
  prompt: !0,
  selections: !0,
  created_by: !0
});

// app/modules/prompts/create.ts
var import_react_query5 = require("@tanstack/react-query"), import_jotai9 = require("jotai");

// app/modules/prompts/const.ts
var TABLE_NAME = "prompts", SELECT = "*, results:prompt_results(*), like_count:likes(likes)";

// app/modules/prompts/create.ts
async function createPrompt({
  values,
  accessToken
}) {
  let client = getSupabase(accessToken), { data, error } = await client.from(TABLE_NAME).insert(values).select(SELECT).single();
  if (error)
    throw error;
  return data;
}
function useCreatePrompt(options2 = {}) {
  let accessToken = (0, import_jotai9.useAtomValue)(accessTokenAtom), user = (0, import_jotai9.useAtomValue)(userAtom);
  return (0, import_react_query5.useMutation)(
    (values) => createPrompt({
      values: { ...values, created_by: user == null ? void 0 : user.id },
      accessToken
    }),
    {
      ...options2
    }
  );
}

// app/modules/prompts/get.ts
var import_react_query6 = require("@tanstack/react-query"), import_jotai10 = require("jotai");
async function getPromptCount({
  q,
  accessToken
}) {
  let query = getSupabase(accessToken).from(TABLE_NAME).select("*", { head: !0, count: "exact" }).not("prompt", "eq", "");
  q && query.ilike("prompt", `%${q}%`);
  let { count, error } = await query;
  if (error)
    throw error;
  return count;
}
async function getPrompts({
  q,
  page = 1,
  limit,
  accessToken
}) {
  let query = getSupabase(accessToken).from(TABLE_NAME).select(SELECT).not("prompt", "eq", "").order("created_at", { ascending: !1 }), queryLimit = limit ?? PAGE_LIMIT;
  if (q && query.ilike("prompt", `%${q}%`), page) {
    let offset2 = Number(page) * queryLimit;
    query.range(offset2 - queryLimit, offset2 - 1);
  }
  query.limit(queryLimit);
  let { data, error } = await query;
  if (error)
    throw error;
  return data;
}

// app/modules/prompts/one.ts
var import_react_query7 = require("@tanstack/react-query");
var import_jotai11 = require("jotai");
async function getPrompt({
  uuid,
  user_id,
  accessToken
}) {
  let query = getSupabase(accessToken).from(TABLE_NAME).select(`${SELECT}, is_liked:prompt_likes(user_id)`).match({ uuid });
  user_id && query.eq("is_liked.user_id", user_id);
  let { data, error } = await query.single();
  if (error)
    throw error;
  return data;
}
function useGetPrompt(uuid, options2 = {}) {
  let user = (0, import_jotai11.useAtomValue)(userAtom);
  return (0, import_react_query7.useQuery)(
    ["prompts", uuid],
    () => getPrompt({ uuid, user_id: user == null ? void 0 : user.id }),
    {
      ...options2,
      enabled: Boolean(uuid)
    }
  );
}

// app/modules/prompts/update.ts
var import_react_query8 = require("@tanstack/react-query"), import_jotai12 = require("jotai");
async function updatePrompt({
  values,
  accessToken
}) {
  let client = getSupabase(accessToken), validation = PromptSchema.omit({ results: !0 }).safeParse(values);
  if (!validation.success)
    throw validation.error;
  let { id, prompt, selections, created_by } = validation.data, { data, error } = await client.from(TABLE_NAME).upsert({ id, prompt, selections, created_by }).select(SELECT).single();
  if (error)
    throw error;
  return data;
}
function useUpdatePrompt(options2 = {}) {
  let accessToken = (0, import_jotai12.useAtomValue)(accessTokenAtom), setPrompt = (0, import_jotai12.useSetAtom)(promptAtom, promptScope);
  return (0, import_react_query8.useMutation)(
    (values) => updatePrompt({ values, accessToken }),
    {
      ...options2,
      onSuccess: (data, ...args) => {
        setPrompt(data), options2.onSuccess && options2.onSuccess(data, ...args);
      }
    }
  );
}

// app/modules/prompts/delete.ts
var import_react_query9 = require("@tanstack/react-query"), import_jotai13 = require("jotai");
async function deletePrompt({
  values,
  accessToken
}) {
  let { uuid } = values, data = await (await fetch(`/api/delete/${uuid}`, {
    method: "post"
  })).json();
  if (data.error)
    throw data.error;
  return data;
}
function useDeletePrompt(options2 = {}) {
  let accessToken = (0, import_jotai13.useAtomValue)(accessTokenAtom);
  return (0, import_react_query9.useMutation)(
    (values) => deletePrompt({ values, accessToken }),
    {
      ...options2
    }
  );
}

// app/lib/timeAgo.ts
var import_dayjs = __toESM(require("dayjs")), import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
import_dayjs.default.extend(import_relativeTime.default);
function timeAgo(dt) {
  return (0, import_dayjs.default)(dt).fromNow();
}

// app/components/PromptCard.tsx
var import_core6 = require("@mantine/core"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PromptCard({
  prompt: initialPrompt,
  asCarousel = !1
}) {
  let { data: prompt } = useGetPrompt(initialPrompt.uuid, {
    initialData: initialPrompt
  });
  if (!prompt)
    return null;
  let result = prompt.results.find((r) => r.featured) ?? prompt.results[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white relative rounded-lg shadow-lg p-2 md:p-4 will-change-transform transition-all transform hover:-translate-y-1 hover:shadow-xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
        to: `/explore/${prompt.uuid}`,
        className: "absolute inset-0 z-0",
        "aria-labelledby": prompt.prompt,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "sr-only",
          children: [
            "Prompt #",
            prompt.id
          ]
        }, void 0, !0, {
          fileName: "app/components/PromptCard.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PromptCard.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "overflow-hidden rounded-lg aspect-1 bg-black/50 backdrop-blur-md relative mb-2 md:mb-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
          to: `/explore/${prompt.uuid}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: resolveThumbnail(result),
            alt: prompt.prompt,
            width: "256",
            height: "256",
            loading: "lazy",
            className: "h-full w-full object-cover"
          }, void 0, !1, {
            fileName: "app/components/PromptCard.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/PromptCard.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PromptCard.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "relative px-2 md:px-4 flex justify-between items-center pointer-events-none",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "block text-lg leading-none",
                children: [
                  "Prompt #",
                  prompt.id
                ]
              }, void 0, !0, {
                fileName: "app/components/PromptCard.tsx",
                lineNumber: 71,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-xs text-gray-600 flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react6.Clock, {
                    size: 14,
                    className: "mr-1"
                  }, void 0, !1, {
                    fileName: "app/components/PromptCard.tsx",
                    lineNumber: 73,
                    columnNumber: 13
                  }, this),
                  timeAgo(prompt.created_at)
                ]
              }, void 0, !0, {
                fileName: "app/components/PromptCard.tsx",
                lineNumber: 72,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/PromptCard.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.Button, {
            className: "pointer-events-auto",
            component: import_react18.Link,
            to: `/designer?promptId=${prompt.uuid}&resultId=${result.id}`,
            radius: "xl",
            variant: "gradient",
            gradient: { from: "violet", to: "pink" },
            children: "Shop"
          }, void 0, !1, {
            fileName: "app/components/PromptCard.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/PromptCard.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this)
    ]
  }, prompt.id, !0, {
    fileName: "app/components/PromptCard.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/collections/$slug.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader9({ request, params }) {
  let authSession = await getAuthSession(request), { slug } = params, client = getSupabaseAdmin(), { data: collection } = await client.from("collections").select("*").match({ slug }).single();
  if (!collection)
    throw new Response("", {
      status: 404,
      statusText: `Collection ${slug} not found`
    });
  let query = client.from("prompts").select(
    "*, collection:collections!inner(*), results:prompt_results!inner(*), like_count:likes(likes), is_liked:prompt_likes(user_id)"
  ).not("prompt", "eq", "").eq("collection.slug", slug);
  authSession != null && authSession.userId && query.eq("is_liked.user_id", authSession.userId);
  let { data, error } = await query;
  return console.log(data), (0, import_node20.json)({
    collection,
    prompts: data
  });
}
function CollectionDetail() {
  let { collection, prompts } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200 relative py-24 md:py-32 -mt-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container flex flex-col md:flex-row md:items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "transition-transform max-w-screen-xl relative z-10",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: classNames(
                  "text-lg uppercase tracking-wider font-bold mb-4",
                  "text-indigo-900"
                ),
                children: "Collection"
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/collections/$slug.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: classNames(
                  "text-3xl md:text-5xl font-black tracking-tighter relative",
                  "text-slate-800"
                ),
                children: collection.prompt
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/collections/$slug.tsx",
                lineNumber: 74,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__index/__index/collections/$slug.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/collections/$slug.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/collections/$slug.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "container -mt-24 mb-24 relative z-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8",
        children: prompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptCard, {
          prompt,
          asCarousel: !0
        }, prompt.id, !1, {
          fileName: "app/routes/__index/__index/collections/$slug.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/collections/$slug.tsx",
        lineNumber: 86,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/collections/$slug.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/explore/$promptId.tsx
var promptId_exports = {};
__export(promptId_exports, {
  action: () => action15,
  default: () => PromptDetailPage,
  handle: () => handle,
  loader: () => loader10,
  meta: () => meta2
});
var import_node21 = require("@remix-run/node"), import_react23 = require("@remix-run/react");

// app/components/FastColor.tsx
var import_fast_average_color = require("fast-average-color"), import_react20 = require("react"), import_jotai14 = require("jotai");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FastColor({
  image,
  children: children2,
  ...props
}) {
  let [bg, setBg] = (0, import_react20.useState)(), [fg, setFg] = (0, import_react20.useState)(), setColorScheme = (0, import_jotai14.useSetAtom)(colorSchemeAtom);
  return (0, import_react20.useEffect)(() => (new import_fast_average_color.FastAverageColor().getColorAsync(image).then((color) => {
    setBg(color.rgba), setFg(color.isDark ? "#fff" : "#000"), setColorScheme(color.isDark ? "light" : "dark");
  }), () => {
    setColorScheme("dark");
  }), [image]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    ...props,
    style: {
      background: bg,
      color: fg
    },
    children: children2
  }, void 0, !1, {
    fileName: "app/components/FastColor.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/PromptHero.tsx
var import_core8 = require("@mantine/core"), import_react22 = require("@remix-run/react"), import_jotai15 = require("jotai"), import_tabler_icons_react8 = require("tabler-icons-react");

// app/components/PublicShare.tsx
var import_core7 = require("@mantine/core"), import_hooks2 = require("@mantine/hooks"), import_notifications2 = require("@mantine/notifications"), import_react21 = require("react"), import_tabler_icons_react7 = require("tabler-icons-react"), import_react_share = require("react-share"), import_gtag2 = __toESM(require_gtag());
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PublicShare({ prompt }) {
  let { copy, copied } = (0, import_hooks2.useClipboard)(), [url, setUrl] = (0, import_react21.useState)(""), [opened, setOpened] = (0, import_react21.useState)(!1);
  return (0, import_react21.useEffect)(() => {
    copied && (0, import_notifications2.showNotification)({
      title: "Success",
      message: "Copied to your clipboard!",
      color: "green"
    });
  }, [copied]), (0, import_react21.useEffect)(() => {
    setUrl(window.location.href);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Button, {
        radius: "xl",
        variant: "filled",
        color: "pink",
        size: "lg",
        onClick: () => setOpened(!0),
        leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.Share, {}, void 0, !1, {
          fileName: "app/components/PublicShare.tsx",
          lineNumber: 58,
          columnNumber: 19
        }, this),
        children: "Share"
      }, void 0, !1, {
        fileName: "app/components/PublicShare.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        size: "sm",
        open: opened,
        onOpenChange: () => setOpened(!1),
        title: "Share",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.TextInput, {
              mb: 0,
              label: "Copy Link",
              readOnly: !0,
              value: url,
              onChange: () => {
              },
              sx: { flex: 1 },
              rightSection: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Tooltip, {
                label: "Copy",
                position: "left",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.ActionIcon, {
                  color: "dark",
                  variant: "light",
                  onClick: () => {
                    (0, import_gtag2.event)({
                      ...import_gtag2.GTAG_EVENTS.PUBLIC_SHARE_COPY,
                      label: "public"
                    }), copy(url);
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.Copy, {
                    size: 16
                  }, void 0, !1, {
                    fileName: "app/components/PublicShare.tsx",
                    lineNumber: 89,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/PublicShare.tsx",
                  lineNumber: 78,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/PublicShare.tsx",
                lineNumber: 77,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/PublicShare.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center justify-center space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_share.EmailShareButton, {
                  url,
                  className: "h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95",
                  style: {
                    background: "#1e293b",
                    color: "#ffffff"
                  },
                  onClick: () => {
                    (0, import_gtag2.event)({
                      ...import_gtag2.GTAG_EVENTS.PUBLIC_SHARE_COPY,
                      label: "email"
                    });
                  },
                  subject: `Prompt: ${prompt.prompt}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.Mail, {
                    size: 24
                  }, void 0, !1, {
                    fileName: "app/components/PublicShare.tsx",
                    lineNumber: 110,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/PublicShare.tsx",
                  lineNumber: 95,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_share.FacebookShareButton, {
                  url,
                  className: "h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95",
                  style: {
                    background: "#3b5998",
                    color: "#ffffff"
                  },
                  onClick: () => {
                    (0, import_gtag2.event)({
                      ...import_gtag2.GTAG_EVENTS.PUBLIC_SHARE_COPY,
                      label: "facebook"
                    });
                  },
                  quote: `Prompt: ${prompt.prompt}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.BrandFacebook, {
                    size: 24
                  }, void 0, !1, {
                    fileName: "app/components/PublicShare.tsx",
                    lineNumber: 127,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/PublicShare.tsx",
                  lineNumber: 112,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_share.LinkedinShareButton, {
                  url,
                  className: "h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95",
                  style: {
                    background: "#057eb1",
                    color: "#ffffff"
                  },
                  onClick: () => {
                    (0, import_gtag2.event)({
                      ...import_gtag2.GTAG_EVENTS.PUBLIC_SHARE_COPY,
                      label: "linkedin"
                    });
                  },
                  title: `Prompt: ${prompt.prompt}`,
                  source: "Designed AI",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.BrandLinkedin, {
                    size: 24
                  }, void 0, !1, {
                    fileName: "app/components/PublicShare.tsx",
                    lineNumber: 145,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/PublicShare.tsx",
                  lineNumber: 129,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_share.PinterestShareButton, {
                  url,
                  media: resolveCdn(prompt.results[0].filename),
                  className: "h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95",
                  style: {
                    background: "#cb2128",
                    color: "#ffffff"
                  },
                  description: `Prompt: ${prompt.prompt}`,
                  onClick: () => {
                    (0, import_gtag2.event)({
                      ...import_gtag2.GTAG_EVENTS.PUBLIC_SHARE_COPY,
                      label: "pinterest"
                    });
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.BrandPinterest, {
                    size: 24
                  }, void 0, !1, {
                    fileName: "app/components/PublicShare.tsx",
                    lineNumber: 163,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/PublicShare.tsx",
                  lineNumber: 147,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_share.RedditShareButton, {
                  url,
                  className: "h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95",
                  style: {
                    background: "#5f9acf",
                    color: "#ffffff"
                  },
                  title: `Prompt: ${prompt.prompt}`,
                  onClick: () => {
                    (0, import_gtag2.event)({
                      ...import_gtag2.GTAG_EVENTS.PUBLIC_SHARE_COPY,
                      label: "reddit"
                    });
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.BrandReddit, {
                    size: 24
                  }, void 0, !1, {
                    fileName: "app/components/PublicShare.tsx",
                    lineNumber: 180,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/PublicShare.tsx",
                  lineNumber: 165,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_share.TwitterShareButton, {
                  url,
                  className: "h-10 w-10 rounded-full shadow-md flex items-center justify-center transition-all duration-150 transform hover:scale-110 hover:shadow-xl active:scale-95",
                  style: {
                    background: "#08abed",
                    color: "#ffffff"
                  },
                  title: `Prompt: ${prompt.prompt}`,
                  onClick: () => {
                    (0, import_gtag2.event)({
                      ...import_gtag2.GTAG_EVENTS.PUBLIC_SHARE_COPY,
                      label: "twitter"
                    });
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react7.BrandTwitter, {
                    size: 24
                  }, void 0, !1, {
                    fileName: "app/components/PublicShare.tsx",
                    lineNumber: 197,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/PublicShare.tsx",
                  lineNumber: 182,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/PublicShare.tsx",
              lineNumber: 94,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/PublicShare.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PublicShare.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/PublicShare.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/components/PromptHero.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PromptHero({
  prompt,
  useConfig = !0
}) {
  let colorScheme = (0, import_jotai15.useAtomValue)(colorSchemeAtom), colorConfig = {
    eyebrow: useConfig && colorScheme === "light" ? "text-white" : "text-indigo-900",
    hero: useConfig && colorScheme === "light" ? "text-white" : "text-slate-800"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "transition-transform max-w-screen-xl relative z-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: classNames(
          "text-lg uppercase tracking-wider font-bold mb-4",
          colorConfig.eyebrow
        ),
        children: "The Prompt"
      }, void 0, !1, {
        fileName: "app/components/PromptHero.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: classNames(
          "text-3xl md:text-5xl font-black tracking-tighter relative mb-8",
          colorConfig.hero
        ),
        children: prompt.prompt
      }, void 0, !1, {
        fileName: "app/components/PromptHero.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-wrap",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Button, {
            component: import_react22.Link,
            to: `/designer?promptId=${prompt.uuid}`,
            radius: "xl",
            variant: "white",
            color: "pink",
            size: "lg",
            mr: 16,
            leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react8.Copy, {}, void 0, !1, {
              fileName: "app/components/PromptHero.tsx",
              lineNumber: 89,
              columnNumber: 21
            }, this),
            children: "Try Prompt"
          }, void 0, !1, {
            fileName: "app/components/PromptHero.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PublicShare, {
            prompt
          }, void 0, !1, {
            fileName: "app/components/PromptHero.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/PromptHero.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/PromptHero.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/explore/$promptId.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta2 = ({ location, data }) => {
  var _a, _b, _c;
  let prompt = (_a = data == null ? void 0 : data.prompt) == null ? void 0 : _a.prompt, ogImage = (_c = (_b = data == null ? void 0 : data.prompt) == null ? void 0 : _b.results) == null ? void 0 : _c[0].filename, title = prompt ? `${prompt.slice(0, 30)}...` : "Prompt, Design and Shop";
  return {
    charset: "utf-8",
    title: `${title}`,
    description: prompt ?? void 0,
    "og:description": prompt ?? void 0,
    viewport: "width=device-width,initial-scale=1",
    "twitter:card": "summary_large_image",
    "twitter:site": "@francoxavier33",
    "twitter:creator": "@francoxavier33",
    "twitter:image": resolveCdn(ogImage ?? "static/social/open-graph.jpg"),
    "og:image": resolveCdn(ogImage ?? "static/social/open-graph.jpg"),
    "og:type": "website",
    "og:url": `https://www.designedwithai.com${location.pathname}`
  };
};
async function loader10({ request, params }) {
  let authSession = await getAuthSession(request), { promptId } = params, query = getSupabaseAdmin().from("prompts").select(
    "*, results:prompt_results!inner(*), like_count:likes(likes), is_liked:prompt_likes(user_id)"
  ).match({ uuid: promptId });
  authSession != null && authSession.userId && query.eq("is_liked.user_id", authSession.userId);
  let { data, error } = await query.single();
  if (error)
    throw new Response("", { status: 500, statusText: error.message });
  if (!data)
    throw new Response("", { status: 404, statusText: "Prompt not found" });
  return (0, import_node21.json)({
    prompt: data
  });
}
function action15() {
  return { ok: !0 };
}
var handle = {
  outlet: "prompt-detail"
};
function PromptDetailPage() {
  let { prompt: initialPrompt } = (0, import_react23.useLoaderData)(), params = (0, import_react23.useParams)(), { data: prompt } = useGetPrompt(initialPrompt.uuid, {
    initialData: initialPrompt
  });
  if (!prompt)
    return null;
  let showHero = !params.imageId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200 relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FastColor, {
            className: "absolute inset-0",
            image: resolveUrl(prompt.results[0].filename)
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/explore/$promptId.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "container flex flex-col md:flex-row md:items-center py-20 md:py-24 -mt-20",
            children: showHero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptHero, {
              prompt
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/explore/$promptId.tsx",
              lineNumber: 103,
              columnNumber: 24
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/explore/$promptId.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__index/__index/explore/$promptId.tsx",
        lineNumber: 97,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Outlet, {
        context: { prompt }
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/explore/$promptId.tsx",
        lineNumber: 106,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/explore/$promptId.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/explore/$promptId/index.tsx
var promptId_exports2 = {};
__export(promptId_exports2, {
  default: () => PromptDetailPage2
});
var import_core10 = require("@mantine/core"), import_form2 = require("@mantine/form"), import_react25 = require("@remix-run/react"), import_tabler_icons_react9 = require("tabler-icons-react");

// app/lib/hooks/useGenerateImage.ts
var import_react_query10 = require("@tanstack/react-query");
function useGenerateImage() {
  return (0, import_react_query10.useMutation)(
    async ({
      promptId,
      imageCount
    }) => {
      let data = await (await fetch("/api/generate/image", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ promptId, imageCount })
      })).json();
      if (data.error)
        throw data.error;
      let promises = data.results.map((result) => fetch("/api/generate/upload", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ resultId: result.id })
      }));
      try {
        await Promise.all(promises), await fetch("/api/generate/notify", {
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ promptId })
        });
      } catch {
      }
      return data;
    }
  );
}

// app/routes/__index/__index/explore/$promptId/index.tsx
var import_jotai16 = require("jotai");

// app/components/Progress.tsx
var import_core9 = require("@mantine/core"), import_hooks3 = require("@mantine/hooks"), import_react24 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MAX_TICKER = 100 * 10 * 60;
function Progress({ loading }) {
  let [ticker, setTicker] = (0, import_react24.useState)(0), { start, stop } = (0, import_hooks3.useInterval)(() => {
    setTicker((prev2) => prev2 += 100);
  }, 100);
  (0, import_react24.useEffect)(() => {
    loading ? start() : (stop(), setTicker(0));
  }, [loading, start, stop]);
  let progress = (0, import_react24.useMemo)(() => ticker / MAX_TICKER * 100, [ticker]);
  return loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Progress, {
    radius: "xl",
    value: progress,
    color: "pink",
    animate: !0
  }, void 0, !1, {
    fileName: "app/components/Progress.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this) : null;
}

// app/routes/__index/__index/explore/$promptId/index.tsx
var import_react26 = require("react");
var import_gtag3 = __toESM(require_gtag()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PromptDetailPage2() {
  var _a, _b, _c;
  let { user } = useUserData(), setPromptHistory = (0, import_jotai16.useSetAtom)(pushPromptAtom), prompt = (_b = (_a = (0, import_react25.useMatches)().find(
    (m) => {
      var _a2;
      return ((_a2 = m.handle) == null ? void 0 : _a2.outlet) === "prompt-detail";
    }
  )) == null ? void 0 : _a.data) == null ? void 0 : _b.prompt, navigate = (0, import_react25.useNavigate)(), createPrompt2 = useCreatePrompt(), updatePrompt2 = useUpdatePrompt(), generateImages = useGenerateImage(), form = (0, import_form2.useForm)({
    initialValues: {
      prompt: prompt.prompt
    }
  }), updateAndGenerate = (values) => {
    (0, import_gtag3.event)({
      ...import_gtag3.GTAG_EVENTS.CREATE_PROMPT,
      label: "prompt-page"
    }), createPrompt2.mutate(
      {
        prompt: values.prompt
      },
      {
        onSuccess: (data) => {
          generateImages.mutate(
            {
              promptId: data.id,
              imageCount: 4
            },
            {
              onSuccess: (genImageData) => {
                user || setPromptHistory({
                  ...data,
                  results: [...data.results, ...genImageData.results]
                }), navigate(`/${data.uuid}`), form.resetDirty();
              }
            }
          );
        }
      }
    );
  }, isLoading = updatePrompt2.isLoading || generateImages.isLoading;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      className: "-mt-12 mb-16 md:mb-32 container relative z-10",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "-mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
          children: (_c = prompt.results) == null ? void 0 : _c.map((result, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageCard, {
            prompt,
            result
          }, result.id, !1, {
            fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-white p-6 md:p-12 rounded-lg my-12 shadow-xl max-w-screen-lg mx-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            onSubmit: form.onSubmit(updateAndGenerate),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core10.Textarea, {
                label: "Prompt",
                size: "lg",
                minRows: 3,
                autosize: !0,
                ...form.getInputProps("prompt")
              }, void 0, !1, {
                fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
                lineNumber: 98,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col lg:flex-row lg:items-center mt-3 w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core10.Button, {
                    variant: "gradient",
                    gradient: { from: "violet", to: "pink" },
                    size: "lg",
                    radius: "xl",
                    loading: isLoading,
                    loaderPosition: "right",
                    type: "submit",
                    children: form.isDirty() ? "Create New Prompt" : "Generate Images"
                  }, void 0, !1, {
                    fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: classNames(
                      "text-slate-600 ml-4 mt-6 lg:mt-0",
                      isLoading ? "block flex-1" : "hidden"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, {
                        loading: isLoading
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "mt-1 text-sm",
                        children: "Generating images may take up to one minute."
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
                    lineNumber: 117,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
                lineNumber: 105,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function ImageCard({
  prompt,
  result
}) {
  let [zoom, setZoom] = (0, import_react26.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative shadow-xl rounded-lg overflow-hidden backdrop-blur-md",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: resolveThumbnail(result),
        alt: "",
        className: "aspect-1 w-full object-cover",
        onClick: () => setZoom(!0)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
        lineNumber: 146,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute bottom-4 right-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core10.Button, {
          component: import_react25.Link,
          size: "md",
          variant: "gradient",
          radius: "xl",
          gradient: { from: "violet", to: "pink" },
          rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react9.ArrowUpRight, {
            size: 20
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
            lineNumber: 159,
            columnNumber: 22
          }, this),
          to: `/designer?promptId=${prompt.uuid}&resultId=${result.id}`,
          mr: 16,
          children: "Design"
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
          lineNumber: 153,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
        lineNumber: 152,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        padding: 0,
        open: zoom,
        fullScreen: !0,
        onOpenChange: () => setZoom(!1),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "h-full flex items-center justify-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: resolveCdn(result.filename),
            alt: "",
            className: "aspect-1 w-full object-contain max-w-screen-md"
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
            lineNumber: 173,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
          lineNumber: 172,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
        lineNumber: 166,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/explore/$promptId/index.tsx",
    lineNumber: 145,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/explore/index.tsx
var explore_exports = {};
__export(explore_exports, {
  default: () => ExplorePage,
  loader: () => loader11
});
var import_core11 = require("@mantine/core"), import_node22 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_react_query11 = require("@tanstack/react-query"), import_react28 = require("react"), import_tabler_icons_react10 = require("tabler-icons-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader11({ request }) {
  let authSession = await getAuthSession(request), client = getSupabaseAdmin(), url = new URL(request.url), { searchParams } = url, query = client.from("prompts").select(
    "*, results:prompt_results!inner(*), like_count:likes(likes), is_liked:prompt_likes(user_id)"
  ).not("prompt", "eq", "").eq("approved", !0).order("created_at", { ascending: !1 }).limit(PAGE_LIMIT), countQuery = client.from("prompts").select("*, results:prompt_results!inner(id)", {
    head: !0,
    count: "exact"
  }).eq("approved", !0).not("prompt", "eq", "");
  if (searchParams.has("q") && (query.ilike("prompt", `%${searchParams.get("q")}%`), countQuery.ilike("prompt", `%${searchParams.get("q")}%`)), searchParams.has("page")) {
    let offset2 = Number(searchParams.get("page")) * PAGE_LIMIT;
    query.range(offset2 - PAGE_LIMIT, offset2 - 1);
  }
  authSession != null && authSession.userId && query.eq("is_liked.user_id", authSession.userId);
  let { data, error } = await query, { count } = await countQuery;
  if (error)
    throw new Response("", { status: 500, statusText: error.message });
  return (0, import_node22.json)({
    products: data,
    count
  });
}
function ExplorePage() {
  let queryClient = (0, import_react_query11.useQueryClient)(), { products, count } = (0, import_react27.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react27.useSearchParams)(), searchRef = (0, import_react28.useRef)(null), page = Number(searchParams.get("page") ?? 1);
  return (0, import_react28.useEffect)(() => {
    products.forEach((prompt) => {
      queryClient.setQueryData(["prompts", prompt.uuid], prompt);
    });
  }, [queryClient, products]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container flex flex-col justify-center py-28 md:py-48 -mt-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              className: "text-6xl md:text-8xl font-black tracking-tighter max-w-screen-lg text-gray-800",
              children: "Discover AI Generated Images"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/explore/index.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Form, {
              id: "searchForm",
              method: "get",
              className: "flex items-center pt-6 pb-12 space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative rounded-full border border-gray-200 overflow-hidden flex-1 max-w-md h-12 outline-1 focus-within:outline focus-within:outline-indigo-600",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "absolute left-0 inset-y-0 flex items-center justify-center w-12 text-gray-400",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react10.Search, {
                        size: 24
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/explore/index.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/explore/index.tsx",
                      lineNumber: 108,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      "aria-label": "Search",
                      type: "text",
                      name: "q",
                      defaultValue: searchParams.get("q") ?? "",
                      placeholder: "Search Prompts...",
                      className: "h-full w-full px-12 text-lg rounded-full outline-none"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/explore/index.tsx",
                      lineNumber: 111,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "absolute right-0 inset-y-0 flex items-center",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core11.ActionIcon, {
                        size: "lg",
                        radius: "xl",
                        variant: "filled",
                        color: "violet",
                        mr: 10,
                        type: "submit",
                        className: "transform will-change-transform transition-transform hover:scale-125",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react10.ArrowRight, {
                          size: 24
                        }, void 0, !1, {
                          fileName: "app/routes/__index/__index/explore/index.tsx",
                          lineNumber: 129,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__index/__index/explore/index.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/explore/index.tsx",
                      lineNumber: 119,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/explore/index.tsx",
                  lineNumber: 107,
                  columnNumber: 13
                }, this),
                [...searchParams.keys()].length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core11.Button, {
                  component: import_react27.Link,
                  size: "lg",
                  radius: "xl",
                  variant: "light",
                  leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react10.X, {
                    size: 24
                  }, void 0, !1, {
                    fileName: "app/routes/__index/__index/explore/index.tsx",
                    lineNumber: 140,
                    columnNumber: 27
                  }, this),
                  onClick: () => {
                    searchRef.current.value = "";
                  },
                  to: "/discover",
                  children: "Clear"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/explore/index.tsx",
                  lineNumber: 135,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/explore/index.tsx",
              lineNumber: 102,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/__index/explore/index.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/explore/index.tsx",
        lineNumber: 97,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "product-grid",
        className: "-mt-28 md:-mt-48 mb-24",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8",
            children: products.map((prompt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptCard, {
              prompt,
              asCarousel: !0
            }, prompt.id, !1, {
              fileName: "app/routes/__index/__index/explore/index.tsx",
              lineNumber: 156,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/explore/index.tsx",
            lineNumber: 154,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "container flex justify-center mt-12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core11.Pagination, {
              page,
              color: "violet",
              radius: "lg",
              total: Math.ceil(count / PAGE_LIMIT),
              styles: (theme2) => ({
                item: {
                  "&[data-active]": {
                    backgroundImage: theme2.fn.gradient({
                      from: "violet",
                      to: "pink"
                    })
                  }
                }
              }),
              onChange: (nextPage) => {
                setSearchParams({
                  ...searchParams,
                  page: `${nextPage}`
                });
              }
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/explore/index.tsx",
              lineNumber: 160,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/explore/index.tsx",
            lineNumber: 159,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__index/__index/explore/index.tsx",
        lineNumber: 153,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/explore/index.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/confirmation.tsx
var confirmation_exports = {};
__export(confirmation_exports, {
  default: () => ConfirmationPage,
  loader: () => loader12
});
var import_core12 = require("@mantine/core"), import_node23 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), import_jotai17 = require("jotai"), import_tabler_icons_react11 = require("tabler-icons-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader12({ request }) {
  let session = await getSession(request), url = new URL(request.url);
  if (!url.searchParams.has("hash"))
    return (0, import_node23.redirect)("/", {
      headers: {
        "Set-Cookie": await sessionStorage2.destroySession(session)
      }
    });
  let hash = Buffer.from(url.searchParams.get("hash"), "base64").toString(
    "utf-8"
  ), client = getSupabaseAdmin(), { variantId, imageId, printImage } = JSON.parse(hash), { data: result } = await client.from("prompt_results").select("*, prompt:prompts(*)").match({ id: Number(imageId) }).single(), productId = Object.keys(PRODUCT_VARIANTS).find((k) => PRODUCT_VARIANTS[Number(k)].includes(variantId));
  return (0, import_node23.json)({
    result,
    productId,
    printImage
  });
}
function ConfirmationPage() {
  let { result } = (0, import_react29.useLoaderData)(), { user } = useUserData(), prompts = (0, import_jotai17.useAtomValue)(promptHistoryAtom);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container max-w-screen-lg flex items-center justify-center py-48 -mt-20",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-6xl md:text-8xl font-black tracking-tighter text-slate-800",
            children: "Thank you \u{1F973}"
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/confirmation.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/__index/confirmation.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/confirmation.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "content",
        className: "-mt-20 pb-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container max-w-screen-lg bg-white p-6 md:p-12 rounded-lg grid grid-cols-2 gap-8 shadow-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: resolveCdn(result.filename),
              alt: result.prompt.prompt,
              className: "rounded-lg shadow-xl"
            }, void 0, !1, {
              fileName: "app/routes/__index/__index/confirmation.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative self-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                  className: "text-3xl md:text-4xl font-black tracking-tighter text-slate-800 mb-6",
                  children: [
                    result.prompt.prompt,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react11.Quote, {
                      size: 256,
                      className: "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-900/25"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/confirmation.tsx",
                      lineNumber: 74,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/confirmation.tsx",
                  lineNumber: 72,
                  columnNumber: 13
                }, this),
                user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core12.Button, {
                  component: import_react29.Link,
                  to: "/app",
                  variant: "gradient",
                  gradient: { from: "violet", to: "pink" },
                  size: "lg",
                  radius: "xl",
                  type: "submit",
                  children: "My Account"
                }, void 0, !1, {
                  fileName: "app/routes/__index/__index/confirmation.tsx",
                  lineNumber: 100,
                  columnNumber: 15
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Form, {
                  method: "post",
                  action: "/signup",
                  children: [
                    prompts.map((prompt, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "hidden",
                      name: "promptIds",
                      value: prompt.id
                    }, prompt.id, !1, {
                      fileName: "app/routes/__index/__index/confirmation.tsx",
                      lineNumber: 82,
                      columnNumber: 19
                    }, this)),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core12.Button, {
                      variant: "gradient",
                      gradient: { from: "violet", to: "pink" },
                      size: "lg",
                      radius: "xl",
                      type: "submit",
                      children: "Create Account"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/__index/confirmation.tsx",
                      lineNumber: 89,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/__index/confirmation.tsx",
                  lineNumber: 80,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/__index/confirmation.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/__index/confirmation.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/confirmation.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/confirmation.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/designer.tsx
var designer_exports = {};
__export(designer_exports, {
  action: () => action16,
  default: () => DesignerPage,
  handle: () => handle2,
  loader: () => loader13,
  meta: () => meta3
});

// app/components/designer/PromptForm.tsx
var import_core13 = require("@mantine/core"), import_form3 = require("@mantine/form"), import_notifications3 = require("@mantine/notifications"), import_jotai18 = require("jotai"), import_zod7 = require("zod");
var import_gtag4 = __toESM(require_gtag());

// app/lib/randomizePrompt.ts
function randomizePrompt() {
  return promptExamples[Math.floor(Math.random() * promptExamples.length)].replace(
    /{animal}/g,
    options.animal[Math.floor(Math.random() * options.animal.length)]
  ).replace(
    /{emotion}/g,
    options.emotion[Math.floor(Math.random() * options.emotion.length)]
  ).replace(
    /{color}/g,
    options.color[Math.floor(Math.random() * options.color.length)]
  ).replace(
    /{object}/g,
    options.object[Math.floor(Math.random() * options.object.length)]
  ).replace(
    /{icon}/g,
    options.icon[Math.floor(Math.random() * options.icon.length)]
  ).replace(
    /{emoji}/g,
    options.emoji[Math.floor(Math.random() * options.emoji.length)]
  ).replace(
    /{material}/g,
    options.material[Math.floor(Math.random() * options.material.length)]
  );
}

// app/components/designer/PromptForm.tsx
var import_react31 = require("@remix-run/react");

// app/components/designer/useDesigner.tsx
var import_react30 = require("@remix-run/react");
function useDesigner() {
  let match = (0, import_react30.useMatches)().find(
    (match2) => {
      var _a;
      return ((_a = match2.handle) == null ? void 0 : _a.context) === "designer";
    }
  );
  if (!match)
    throw new Error(
      "Must be inside designer context to use `useDesigner` hook"
    );
  return match.data;
}

// app/components/designer/PromptForm.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PromptSchema2 = import_zod7.z.object({
  prompt: import_zod7.z.string().transform((val, ctx) => !val || val.split(" ").length < 3 ? (ctx.addIssue({
    code: import_zod7.z.ZodIssueCode.custom,
    message: "Prompt is required and must be greater than 3 words"
  }), import_zod7.z.NEVER) : val)
});
function PromptForm() {
  let { prompt } = useDesigner(), setPrompts = (0, import_jotai18.useSetAtom)(pushPromptAtom), [searchParams, setSearchParams] = (0, import_react31.useSearchParams)(), { values, ...form } = (0, import_form3.useForm)({
    validate: (0, import_form3.zodResolver)(PromptSchema2),
    initialValues: {
      prompt: (prompt == null ? void 0 : prompt.prompt) ?? ""
    }
  }), generateImage = useGenerateImage(), createPrompt2 = useCreatePrompt({
    onSuccess: (data) => {
      generateImage.mutate(
        {
          promptId: data.id,
          imageCount: 4
        },
        {
          onSuccess: (genImageData) => {
            let newPrompt = {
              ...data,
              results: genImageData.results
            };
            setPrompts(newPrompt), setSearchParams({
              ...Object.fromEntries(searchParams),
              promptId: data.uuid,
              resultId: genImageData.results[0].id.toString()
            });
          },
          onError(error, variables, context) {
            (0, import_notifications3.showNotification)({
              title: "Whoops",
              message: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Text, {
                children: [
                  "Something went wrong. Please review your prompt and try again. Ensure your prompt follows the DALL-E",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Anchor, {
                    href: "https://labs.openai.com/policies/content-policy",
                    target: "_blank",
                    rel: "noopener",
                    children: "content policy"
                  }, void 0, !1, {
                    fileName: "app/components/designer/PromptForm.tsx",
                    lineNumber: 72,
                    columnNumber: 19
                  }, this),
                  "",
                  "."
                ]
              }, void 0, !0, {
                fileName: "app/components/designer/PromptForm.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this),
              color: "red"
            });
          }
        }
      );
    }
  }), randomize = () => {
    (0, import_gtag4.event)({
      ...import_gtag4.GTAG_EVENTS.SURPRISE_ME,
      label: "home"
    });
    let prompt2 = randomizePrompt();
    form.setFieldValue("prompt", prompt2);
  }, onSubmit = (formValues) => {
    (0, import_gtag4.event)({
      ...import_gtag4.GTAG_EVENTS.CREATE_PROMPT,
      label: "home"
    }), createPrompt2.mutate({
      prompt: formValues.prompt
    });
  }, isLoading = generateImage.isLoading || createPrompt2.isLoading;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit: form.onSubmit(onSubmit),
    className: "bg-white p-6 rounded-lg shadow-xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Textarea, {
        label: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center mb-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-base",
              children: "Start with a detailed description, or "
            }, void 0, !1, {
              fileName: "app/components/designer/PromptForm.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Button, {
              compact: !0,
              size: "sm",
              ml: 6,
              variant: "gradient",
              gradient: { from: "violet", to: "pink" },
              onClick: () => randomize(),
              children: "Surprise Me"
            }, void 0, !1, {
              fileName: "app/components/designer/PromptForm.tsx",
              lineNumber: 122,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/designer/PromptForm.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        variant: "filled",
        size: "xl",
        placeholder: "icon of a F1 car, synthwave vector art, gradients, vibrant color, 8K",
        radius: "md",
        minRows: 2,
        autosize: !0,
        ...form.getInputProps("prompt")
      }, void 0, !1, {
        fileName: "app/components/designer/PromptForm.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col lg:flex-row lg:items-center mt-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Button, {
            variant: "outline",
            color: "pink",
            size: "md",
            radius: "xl",
            type: "submit",
            mr: 16,
            loading: isLoading,
            loaderPosition: "right",
            children: "Generate Image"
          }, void 0, !1, {
            fileName: "app/components/designer/PromptForm.tsx",
            lineNumber: 143,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: classNames(
              "text-slate-600 ml-4 mt-6 lg:mt-0",
              isLoading ? "block flex-1" : "hidden"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, {
                loading: isLoading
              }, void 0, !1, {
                fileName: "app/components/designer/PromptForm.tsx",
                lineNumber: 163,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "mt-1 text-sm",
                children: "Generating images may take up to one minute."
              }, void 0, !1, {
                fileName: "app/components/designer/PromptForm.tsx",
                lineNumber: 164,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/designer/PromptForm.tsx",
            lineNumber: 157,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/designer/PromptForm.tsx",
        lineNumber: 142,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/designer/PromptForm.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}

// app/components/designer/ProductSelector.tsx
var import_react32 = require("@remix-run/react"), import_jotai20 = require("jotai");

// app/lib/atoms/printful.ts
var import_jotai19 = require("jotai"), printfulDataAtom = (0, import_jotai19.atom)({
  products: [],
  templates: []
});

// app/components/designer/ProductSelector.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProductSelector() {
  let { product: selectedProduct } = useDesigner(), [searchParams, setSearchParams] = (0, import_react32.useSearchParams)(), setPrintfulData = (0, import_jotai20.useSetAtom)(printfulDataAtom), { data: products, isLoading } = useGetProducts(AVAILABLE_PRODUCT_IDS, {
    onSuccess: (data) => {
      setPrintfulData((prev2) => ({
        ...prev2,
        products: data.map((d) => {
          let allowedVariants = PRODUCT_VARIANTS[d.product.id];
          return {
            ...d,
            variants: d.variants.filter(
              (variant) => typeof allowedVariants[0] == "string" && allowedVariants[0] === "*" ? !0 : allowedVariants.includes(variant.id)
            )
          };
        })
      }));
    }
  });
  return isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex overflow-x-auto -mx-2 pb-4",
    children: Array.from({ length: 4 }).map((_, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "aspect-[1/1] w-1/4 flex-none px-2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-gray-200 h-full w-full animate-pulse rounded-lg"
      }, void 0, !1, {
        fileName: "app/components/designer/ProductSelector.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    }, index2, !1, {
      fileName: "app/components/designer/ProductSelector.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this))
  }, void 0, !1, {
    fileName: "app/components/designer/ProductSelector.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex overflow-x-auto -mx-2 pb-6",
    children: products == null ? void 0 : products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "aspect-[1/1] w-1/4 flex-none p-2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        type: "button",
        onClick: () => {
          setSearchParams({
            ...Object.fromEntries(searchParams),
            productId: product.product.id.toString(),
            variantId: product.variants.find(
              (v) => v.id === PRODUCT_VARIANTS[product.product.id][0]
            ).id.toString()
          });
        },
        className: classNames(
          "bg-white group h-full w-full self-start text-left group relative flex flex-col items-start justify-start rounded-lg shadow-lg overflow-hidden transition-all duration-150 hover:shadow-xl",
          selectedProduct.product.id === product.product.id ? "ring-2 ring-offset-2 ring-violet-600" : ""
        ),
        children: product.product.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: product.product.image,
          alt: product.product.title,
          className: "object-cover h-full w-full"
        }, void 0, !1, {
          fileName: "app/components/designer/ProductSelector.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      }, void 0, !1, {
        fileName: "app/components/designer/ProductSelector.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    }, product.product.id, !1, {
      fileName: "app/components/designer/ProductSelector.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/designer/ProductSelector.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/components/designer/ProductPreview.tsx
var import_core14 = require("@mantine/core"), import_react36 = require("@remix-run/react"), import_react37 = require("react"), import_tabler_icons_react12 = require("tabler-icons-react");

// app/lib/hooks/useRemoveBg.ts
var import_react_query12 = require("@tanstack/react-query");
function useRemoveBg() {
  return (0, import_react_query12.useMutation)(
    async ({
      imageId
    }) => {
      let data = await (await fetch("/api/generate/remove-bg", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ imageId })
      })).json();
      if (data.error)
        throw data.error;
      return data;
    }
  );
}

// app/lib/hooks/useRevalidate.ts
var import_react33 = require("@remix-run/react"), import_react34 = require("react");
function useRevalidate(path) {
  let fetcher = (0, import_react33.useFetcher)(), revalidate = (0, import_react34.useCallback)(
    () => {
      fetcher.submit(null, { action: path, method: "post" });
    },
    [path]
  );
  return (0, import_react34.useMemo)(() => ({ revalidate }), [revalidate]);
}

// app/components/designer/Mock.tsx
var import_hooks4 = require("@mantine/hooks"), import_react35 = require("react");

// app/lib/hooks/useProductTemplate.tsx
function useProductTemplate(productId, variantId) {
  var _a;
  let { data: templates, isLoading } = useGetProductTemplates(productId, {
    enabled: Boolean(productId)
  });
  if (!templates || !productId)
    return {
      data: null,
      isLoading,
      error: "No templates found for product/variant"
    };
  let placement = PRODUCT_PRINTFILES_PLACEMENT[productId], variantMap = templates.variant_mapping.find(
    (vm) => vm.variant_id === variantId
  );
  if (!variantMap)
    return {
      data: null,
      isLoading
    };
  let templateId = (_a = variantMap.templates.find(
    (vm) => vm.placement === placement
  )) == null ? void 0 : _a.template_id;
  return {
    data: templates.templates.find((t) => t.template_id === templateId),
    isLoading
  };
}

// app/components/designer/Mock.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Mock() {
  let { product, variant, result, printShape, printImage } = useDesigner(), { data: templates } = useProductTemplate(
    product.product.id,
    variant.id
  ), [position, setPosition] = (0, import_react35.useState)({ top: 0, left: 0, width: 0, height: 0 }), [ref, bounds] = (0, import_hooks4.useResizeObserver)();
  return (0, import_react35.useEffect)(() => {
    if (!templates || !ref.current)
      return;
    let widthRatio = bounds.width / templates.template_width, heightRatio = bounds.height / templates.template_height, printWidth = Math.floor(templates.print_area_width * widthRatio), printHeight = printShape === "square" ? printWidth : Math.floor(templates.print_area_height * heightRatio), offsetY = printShape === "square" ? (templates.print_area_height * heightRatio - printHeight) / 2 : (printHeight - printWidth) / 2, offsetTop = (templates.print_area_top + offsetY) * heightRatio, offsetLeft = templates.print_area_left * widthRatio;
    setPosition({
      top: offsetTop,
      left: offsetLeft,
      width: printWidth,
      height: printHeight
    });
  }, [ref, bounds, templates, printShape]), templates ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    ref,
    className: "relative h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute inset-0",
        style: { background: templates.background_color }
      }, void 0, !1, {
        fileName: "app/components/designer/Mock.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: templates.image_url,
        className: classNames(
          "absolute inset-0 h-full w-full object-cover",
          templates.is_template_on_front ? "z-20" : "z-10"
        ),
        alt: ""
      }, void 0, !1, {
        fileName: "app/components/designer/Mock.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      result && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: resolveCdn(
          printImage === "nobgfile" ? result.nobgfile : result.filename
        ),
        className: classNames(
          "absolute object-cover",
          templates.is_template_on_front ? "z-10" : "z-20"
        ),
        style: position,
        alt: ""
      }, void 0, !1, {
        fileName: "app/components/designer/Mock.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/designer/Mock.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this) : null;
}

// app/components/designer/ProductPreview.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProductPreview() {
  let { product, result, printShape } = useDesigner(), [searchParams, setSearchParams] = (0, import_react36.useSearchParams)(), revalidate = useRevalidate("/designer"), generateWithoutBg = useRemoveBg(), transition2 = (0, import_react36.useTransition)(), printImage = searchParams.get("printImage"), removeBg2 = printImage === "nobgfile", toggleBgPreference = () => {
    !result || (result.nobgfile ? setSearchParams({
      ...Object.fromEntries(searchParams),
      printImage: printImage === "designfile" ? "nobgfile" : "designfile"
    }) : generateWithoutBg.mutate(
      {
        imageId: result.id
      },
      {
        onSuccess() {
          revalidate.revalidate(), setSearchParams({
            ...Object.fromEntries(searchParams),
            printImage: "nobgfile"
          });
        }
      }
    ));
  }, imageUrl = (0, import_react37.useMemo)(() => result ? removeBg2 ? result.nobgfile : result.thumbfile ?? result.filename : "", [removeBg2, result]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative aspect-1 w-full bg-gray-200 rounded-lg shadow-xl overflow-hidden flex items-center justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        form: "checkoutform",
        type: "hidden",
        name: "printShape",
        value: printShape
      }, void 0, !1, {
        fileName: "app/components/designer/ProductPreview.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        form: "checkoutform",
        type: "hidden",
        name: "printImage",
        value: removeBg2 ? "nobgfile" : "designfile"
      }, void 0, !1, {
        fileName: "app/components/designer/ProductPreview.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this),
      ["loading", "submitting"].includes(transition2.state) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Loader, {
        size: "lg",
        className: "absolute z-10"
      }, void 0, !1, {
        fileName: "app/components/designer/ProductPreview.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mock, {}, void 0, !1, {
        fileName: "app/components/designer/ProductPreview.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          product.product.id !== 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute top-2 left-2 md:top-4 md:left-4 z-50",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button.Group, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Tooltip, {
                  label: "Square",
                  position: "bottom",
                  withinPortal: !0,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button, {
                    size: "xs",
                    variant: printShape === "square" ? "filled" : "default",
                    onClick: () => {
                      setSearchParams({
                        ...Object.fromEntries(searchParams),
                        printShape: "square"
                      });
                    },
                    color: "pink",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react12.Square, {
                      size: 16
                    }, void 0, !1, {
                      fileName: "app/components/designer/ProductPreview.tsx",
                      lineNumber: 94,
                      columnNumber: 21
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/designer/ProductPreview.tsx",
                    lineNumber: 83,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/designer/ProductPreview.tsx",
                  lineNumber: 82,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Tooltip, {
                  label: "Rectangle",
                  position: "bottom",
                  withinPortal: !0,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button, {
                    size: "xs",
                    variant: printShape === "rectangle" ? "filled" : "default",
                    onClick: () => {
                      setSearchParams({
                        ...Object.fromEntries(searchParams),
                        printShape: "rectangle"
                      });
                    },
                    color: "pink",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react12.RectangleVertical, {
                      size: 16
                    }, void 0, !1, {
                      fileName: "app/components/designer/ProductPreview.tsx",
                      lineNumber: 109,
                      columnNumber: 21
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/designer/ProductPreview.tsx",
                    lineNumber: 98,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/designer/ProductPreview.tsx",
                  lineNumber: 97,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/designer/ProductPreview.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/designer/ProductPreview.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute top-2 right-2 md:top-4 md:right-4 z-50",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button, {
              size: "xs",
              radius: "xl",
              variant: "filled",
              color: "pink",
              onClick: () => toggleBgPreference(),
              loading: generateWithoutBg.isLoading,
              children: removeBg2 ? "Revert" : "Remove BG"
            }, void 0, !1, {
              fileName: "app/components/designer/ProductPreview.tsx",
              lineNumber: 116,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/designer/ProductPreview.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/designer/ProductPreview.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/designer/ProductPreview.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/components/designer/ProductDetails.tsx
var import_react38 = require("@headlessui/react"), import_core15 = require("@mantine/core"), import_react39 = require("@remix-run/react"), import_jotai21 = require("jotai"), import_react40 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProductDetails() {
  let { product, variant } = useDesigner(), transition2 = (0, import_react39.useTransition)(), printfulData = (0, import_jotai21.useAtomValue)(printfulDataAtom), [searchParams, setSearchParams] = (0, import_react39.useSearchParams)(), activeProduct = printfulData.products.find(
    (p) => p.product.id === product.product.id
  ), colors2 = (0, import_react40.useMemo)(() => activeProduct != null && activeProduct.variants ? activeProduct.variants.reduce((acc, variant2) => variant2.color in acc ? {
    ...acc
  } : {
    ...acc,
    [variant2.color]: variant2
  }, {}) : {}, [activeProduct]), sizes = (0, import_react40.useMemo)(() => activeProduct != null && activeProduct.variants ? activeProduct.variants.sort((a, b) => a.id - b.id).reduce((acc, variant2) => variant2.size in acc ? {
    ...acc
  } : {
    ...acc,
    [variant2.size]: variant2
  }, {}) : {}, [activeProduct]), setColorVariant = (color) => {
    let newVariant = activeProduct == null ? void 0 : activeProduct.variants.find((v) => v.size === variant.size && v.color_code === color);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      variantId: newVariant.id.toString()
    });
  }, setSizeVariant = (size) => {
    let newVariant = activeProduct == null ? void 0 : activeProduct.variants.find((v) => v.size === size && v.color_code === variant.color_code);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      variantId: newVariant.id.toString()
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col items-start lg:flex-row lg:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:w-1/2 mb-2 md:mb-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              className: "text-2xl font-black tracking-tighter text-gray-800 sm:text-3xl",
              children: product.product.title.split("|")[0]
            }, void 0, !1, {
              fileName: "app/components/designer/ProductDetails.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/designer/ProductDetails.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Button, {
            size: "lg",
            radius: "xl",
            variant: "gradient",
            gradient: { from: "violet", to: "pink" },
            form: "checkoutform",
            type: "submit",
            loading: transition2.state === "submitting",
            children: [
              "Buy Now ",
              variant && PRODUCT_RETAIL_PRICING[variant.id]
            ]
          }, void 0, !0, {
            fileName: "app/components/designer/ProductDetails.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/designer/ProductDetails.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-row mb-8 space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-1/3 md:w-1/2 mb-4 md:mb-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "text-sm font-medium text-gray-800",
                    children: "Color"
                  }, void 0, !1, {
                    fileName: "app/components/designer/ProductDetails.tsx",
                    lineNumber: 96,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup, {
                    value: (variant == null ? void 0 : variant.color_code) ?? "",
                    onChange: setColorVariant,
                    className: "mt-2 md:mt-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup.Label, {
                        className: "sr-only",
                        children: [
                          " ",
                          "Choose a color",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/designer/ProductDetails.tsx",
                        lineNumber: 103,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center space-x-3",
                        children: Object.values(colors2).map((color) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup.Option, {
                          value: color.color_code,
                          className: ({ active, checked }) => classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup.Label, {
                              as: "span",
                              className: "sr-only",
                              children: [
                                " ",
                                color.name,
                                " "
                              ]
                            }, void 0, !0, {
                              fileName: "app/components/designer/ProductDetails.tsx",
                              lineNumber: 121,
                              columnNumber: 21
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              "aria-hidden": "true",
                              className: classNames(
                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                              ),
                              style: {
                                background: color.color_code
                              }
                            }, void 0, !1, {
                              fileName: "app/components/designer/ProductDetails.tsx",
                              lineNumber: 125,
                              columnNumber: 21
                            }, this)
                          ]
                        }, color.color_code, !0, {
                          fileName: "app/components/designer/ProductDetails.tsx",
                          lineNumber: 109,
                          columnNumber: 19
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/components/designer/ProductDetails.tsx",
                        lineNumber: 107,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/designer/ProductDetails.tsx",
                    lineNumber: 98,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/designer/ProductDetails.tsx",
                lineNumber: 95,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-2/3 md:w-1/2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center justify-between",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                      className: "text-sm font-medium text-gray-800",
                      children: "Size"
                    }, void 0, !1, {
                      fileName: "app/components/designer/ProductDetails.tsx",
                      lineNumber: 143,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/designer/ProductDetails.tsx",
                    lineNumber: 142,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup, {
                    value: (variant == null ? void 0 : variant.size) ?? "",
                    onChange: setSizeVariant,
                    className: "mt-2 md:mt-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup.Label, {
                        className: "sr-only",
                        children: [
                          " ",
                          "Choose a size",
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/designer/ProductDetails.tsx",
                        lineNumber: 151,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex flex-wrap items-center",
                        children: Object.values(sizes).map((size) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup.Option, {
                          value: size.size,
                          disabled: !size.in_stock,
                          className: ({ active }) => classNames(
                            size.in_stock ? "bg-white shadow-sm text-gray-800 cursor-pointer" : "bg-gray-50 text-gray-200 cursor-not-allowed",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group min-w-[48px] relative border rounded-md mx-px mb-px py-2 px-2 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                          ),
                          children: ({ active, checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.RadioGroup.Label, {
                                as: "span",
                                children: size.size
                              }, void 0, !1, {
                                fileName: "app/components/designer/ProductDetails.tsx",
                                lineNumber: 173,
                                columnNumber: 25
                              }, this),
                              size.in_stock ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: classNames(
                                  active ? "border" : "border-2",
                                  checked ? "border-indigo-500" : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                ),
                                "aria-hidden": "true"
                              }, void 0, !1, {
                                fileName: "app/components/designer/ProductDetails.tsx",
                                lineNumber: 177,
                                columnNumber: 27
                              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                "aria-hidden": "true",
                                className: "pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                  className: "absolute inset-0 h-full w-full stroke-2 text-gray-200",
                                  viewBox: "0 0 100 100",
                                  preserveAspectRatio: "none",
                                  stroke: "currentColor",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                                    x1: 0,
                                    y1: 100,
                                    x2: 100,
                                    y2: 0,
                                    vectorEffect: "non-scaling-stroke"
                                  }, void 0, !1, {
                                    fileName: "app/components/designer/ProductDetails.tsx",
                                    lineNumber: 198,
                                    columnNumber: 31
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/components/designer/ProductDetails.tsx",
                                  lineNumber: 192,
                                  columnNumber: 29
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/components/designer/ProductDetails.tsx",
                                lineNumber: 188,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/components/designer/ProductDetails.tsx",
                            lineNumber: 172,
                            columnNumber: 23
                          }, this)
                        }, size.size, !1, {
                          fileName: "app/components/designer/ProductDetails.tsx",
                          lineNumber: 157,
                          columnNumber: 19
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/components/designer/ProductDetails.tsx",
                        lineNumber: 155,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/designer/ProductDetails.tsx",
                    lineNumber: 146,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/designer/ProductDetails.tsx",
                lineNumber: 141,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/designer/ProductDetails.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "sr-only",
                  children: "Description"
                }, void 0, !1, {
                  fileName: "app/components/designer/ProductDetails.tsx",
                  lineNumber: 218,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "space-y-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-base text-gray-800",
                    dangerouslySetInnerHTML: {
                      __html: product.product.description
                    }
                  }, void 0, !1, {
                    fileName: "app/components/designer/ProductDetails.tsx",
                    lineNumber: 221,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/designer/ProductDetails.tsx",
                  lineNumber: 220,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/designer/ProductDetails.tsx",
              lineNumber: 217,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/designer/ProductDetails.tsx",
            lineNumber: 216,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/designer/ProductDetails.tsx",
        lineNumber: 93,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/designer/ProductDetails.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/components/designer/ImageSelector.tsx
var import_react41 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ImageSelector() {
  let { prompt } = useDesigner(), [searchParams, setSearchParams] = (0, import_react41.useSearchParams)();
  if (!prompt)
    return null;
  let selectedResult = searchParams.get("resultId");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-20 lg:w-auto flex-none flex flex-col justify-center pl-2 lg:pl-0 lg:justify-start lg:flex-row lg:py-6 lg:-mx-2",
    children: prompt.results.map((result) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "lg:px-2 w-full lg:w-1/4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        type: "button",
        className: classNames(
          "relative h-16 lg:h-36 w-full flex-none rounded-lg overflow-hidden shadow-lg",
          selectedResult && Number(selectedResult) === result.id ? "ring-2 ring-offset-2 ring-violet-600" : ""
        ),
        onClick: () => {
          setSearchParams({
            ...Object.fromEntries(searchParams),
            printImage: "designfile",
            resultId: result.id.toString()
          });
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: resolveCdn(result.filename),
          alt: prompt.prompt,
          className: "h-full w-full object-cover rounded-lg shadow-lg"
        }, void 0, !1, {
          fileName: "app/components/designer/ImageSelector.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this)
      }, void 0, !1, {
        fileName: "app/components/designer/ImageSelector.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    }, result.id, !1, {
      fileName: "app/components/designer/ImageSelector.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this))
  }, void 0, !1, {
    fileName: "app/components/designer/ImageSelector.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/__index/__index/designer.tsx
var import_node24 = require("@remix-run/node");
var import_react42 = require("@remix-run/react"), import_zod8 = require("zod"), import_notifications4 = require("@mantine/notifications"), import_core16 = require("@mantine/core");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta3 = ({ data }) => data != null && data.result ? {
  title: "Design Studio | Designed AI",
  "twitter:image": resolveCdn(data.result.filename),
  "og:image": resolveCdn(data.result.filename)
} : {
  title: "Design Studio | Designed AI"
};
async function loader13({ request }) {
  let { searchParams } = new URL(request.url), defaultProduct = AVAILABLE_PRODUCT_IDS[0], defaultVariant = PRODUCT_VARIANTS[defaultProduct][0], promptId = searchParams.get("promptId"), resultId = searchParams.get("resultId"), productId = searchParams.get("productId") ?? defaultProduct, variantId = searchParams.get("variantId") ?? defaultVariant, printShape = searchParams.get("printShape") ?? "rectangle", printImage = searchParams.get("printImage") ?? "designfile";
  if (!AVAILABLE_PRODUCT_IDS.includes(Number(productId)))
    throw new Response("", {
      status: 500,
      statusText: "Product not available"
    });
  let product = await getProduct2(Number(productId)), variant = product.variants.find((v) => v.id === Number(variantId));
  if (promptId) {
    let client = getSupabaseAdmin(), { data } = await client.from("prompts").select("*, results:prompt_results(*)").match({ uuid: promptId }).single();
    if (data)
      return (0, import_node24.json)({
        product,
        variant,
        prompt: data,
        printShape,
        printImage,
        result: resultId ? data.results.find((r) => r.id === Number(resultId)) : data.results[0]
      });
  }
  return (0, import_node24.json)({
    prompt: null,
    result: null,
    product,
    printShape,
    printImage,
    variant
  });
}
function action16() {
  return { ok: !0 };
}
var handle2 = {
  context: "designer"
}, CheckoutFormSchema = import_zod8.z.object({
  productId: import_zod8.z.string(),
  variantId: import_zod8.z.string(),
  promptId: import_zod8.z.string(),
  imageId: import_zod8.z.string()
});
function DesignerPage() {
  let { product, variant, prompt, result } = (0, import_react42.useLoaderData)(), submit2 = (0, import_react42.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        id: "checkoutform",
        onSubmit: (e) => {
          e.preventDefault(), console.log(e.target);
          let formData = new FormData(e.currentTarget), validation = CheckoutFormSchema.safeParse(
            Object.fromEntries(formData)
          );
          if (!validation.success) {
            let missingPrompt = !!validation.error.errors.find(
              (e2) => e2.path.includes("promptId")
            ), missingImage = !!validation.error.errors.find(
              (e2) => e2.path.includes("imageId")
            );
            (0, import_notifications4.showNotification)({
              title: "Whoops",
              message: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Text, {
                    children: "Order cannot be placed. Looks like there are missing items."
                  }, void 0, !1, {
                    fileName: "app/routes/__index/__index/designer.tsx",
                    lineNumber: 138,
                    columnNumber: 13
                  }, this),
                  missingPrompt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Text, {
                    children: "You must first write a prompt."
                  }, void 0, !1, {
                    fileName: "app/routes/__index/__index/designer.tsx",
                    lineNumber: 141,
                    columnNumber: 31
                  }, this),
                  missingImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Text, {
                    children: "You must select a generated image."
                  }, void 0, !1, {
                    fileName: "app/routes/__index/__index/designer.tsx",
                    lineNumber: 142,
                    columnNumber: 30
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__index/__index/designer.tsx",
                lineNumber: 137,
                columnNumber: 11
              }, this)
            });
            return;
          }
          submit2(formData, {
            method: "post",
            action: "/api/purchase/initiate"
          });
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "productId",
            value: `${product.product.id}`
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/designer.tsx",
            lineNumber: 158,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "variantId",
            value: `${variant.id}`
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/designer.tsx",
            lineNumber: 159,
            columnNumber: 9
          }, this),
          prompt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "promptId",
            value: `${prompt.id}`
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/designer.tsx",
            lineNumber: 161,
            columnNumber: 11
          }, this),
          result && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "imageId",
            value: `${result.id}`
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/designer.tsx",
            lineNumber: 164,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__index/__index/designer.tsx",
        lineNumber: 157,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "container grid grid-rows-8 lg:grid-cols-2 lg:grid-rows-3 gap-6 xl:gap-12 my-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptForm, {}, void 0, !1, {
              fileName: "app/routes/__index/__index/designer.tsx",
              lineNumber: 170,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__index/__index/designer.tsx",
            lineNumber: 169,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "row-span-4 lg:col-start-1 lg:row-start-2 lg:row-span-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductSelector, {}, void 0, !1, {
                fileName: "app/routes/__index/__index/designer.tsx",
                lineNumber: 173,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductDetails, {}, void 0, !1, {
                fileName: "app/routes/__index/__index/designer.tsx",
                lineNumber: 174,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__index/__index/designer.tsx",
            lineNumber: 172,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "row-start-2 row-span-3 lg:col-start-2 lg:row-start-1 lg:row-span-3 flex md:block",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductPreview, {}, void 0, !1, {
                fileName: "app/routes/__index/__index/designer.tsx",
                lineNumber: 177,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageSelector, {}, void 0, !1, {
                fileName: "app/routes/__index/__index/designer.tsx",
                lineNumber: 178,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__index/__index/designer.tsx",
            lineNumber: 176,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__index/__index/designer.tsx",
        lineNumber: 168,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/designer.tsx",
    lineNumber: 156,
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
  loader: () => loader14
});
var import_node25 = require("@remix-run/node"), import_react46 = require("@remix-run/react"), import_react_query13 = require("@tanstack/react-query"), import_react47 = require("react");

// app/components/HomePageHero.tsx
var import_core17 = require("@mantine/core"), import_react43 = require("@remix-run/react"), import_tabler_icons_react13 = require("tabler-icons-react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function HomePageHero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "relative",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container flex items-center justify-between py-16 md:py-40",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-screen-md relative z-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-7xl md:text-8xl font-black text-gray-800 mb-6 tracking-tighter",
            children: "Design Your Next Shirt With AI"
          }, void 0, !1, {
            fileName: "app/components/HomePageHero.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                component: import_react43.Link,
                to: "/designer",
                variant: "gradient",
                gradient: { from: "violet", to: "pink" },
                size: "lg",
                radius: "xl",
                children: "Get Started"
              }, void 0, !1, {
                fileName: "app/components/HomePageHero.tsx",
                lineNumber: 15,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                component: import_react43.Link,
                to: "/explore",
                variant: "subtle",
                color: "violet",
                size: "lg",
                radius: "xl",
                rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react13.ArrowRight, {
                  size: 20
                }, void 0, !1, {
                  fileName: "app/components/HomePageHero.tsx",
                  lineNumber: 32,
                  columnNumber: 26
                }, this),
                children: "Explore"
              }, void 0, !1, {
                fileName: "app/components/HomePageHero.tsx",
                lineNumber: 25,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/HomePageHero.tsx",
            lineNumber: 14,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/HomePageHero.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/HomePageHero.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/HomePageHero.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/OverflowGrid.tsx
var import_react44 = require("@remix-run/react"), import_tabler_icons_react14 = require("tabler-icons-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OverflowGrid({ prompts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "overflow-x-visible mt-12 md:mt-16 py-12 md:py-16  relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-pink-600/25 h-2/3 absolute inset-0 z-0"
      }, void 0, !1, {
        fileName: "app/components/OverflowGrid.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "relative z-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "container flex flex-col md:flex-row md:justify-between md:items-end mb-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-5xl md:text-5xl font-black tracking-tighter mb-2 md:mb-0 text-gray-800",
                children: "Latest Creations"
              }, void 0, !1, {
                fileName: "app/components/OverflowGrid.tsx",
                lineNumber: 13,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Link, {
                to: "/explore",
                className: "text-xl flex items-center group md:mb-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "mr-2",
                    children: "See All"
                  }, void 0, !1, {
                    fileName: "app/components/OverflowGrid.tsx",
                    lineNumber: 20,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react14.ArrowRight, {
                    size: 32,
                    className: "transition-transform transform duration-150 ease-in-out group-hover:translate-x-1/2"
                  }, void 0, !1, {
                    fileName: "app/components/OverflowGrid.tsx",
                    lineNumber: 21,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/OverflowGrid.tsx",
                lineNumber: 16,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/OverflowGrid.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 pb-12",
            children: prompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptCard, {
                prompt
              }, void 0, !1, {
                fileName: "app/components/OverflowGrid.tsx",
                lineNumber: 32,
                columnNumber: 17
              }, this)
            }, prompt.id, !1, {
              fileName: "app/components/OverflowGrid.tsx",
              lineNumber: 31,
              columnNumber: 15
            }, this))
          }, void 0, !1, {
            fileName: "app/components/OverflowGrid.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/OverflowGrid.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/OverflowGrid.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/CollectionPreview.tsx
var import_core18 = require("@mantine/core"), import_react45 = require("@remix-run/react"), import_tabler_icons_react15 = require("tabler-icons-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function CollectionPreview({
  theme: theme2 = "dark",
  slug,
  prompt = "",
  prompts
}) {
  let bgColor = theme2 === "dark" ? "bg-gray-900" : "", eyebrowColor = theme2 === "dark" ? "text-gray-300" : "", textColor = theme2 === "dark" ? "text-gray-100" : "", reverse = theme2 !== "dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: classNames(
      "flex flex-col lg:flex-row lg:items-center container p-6 lg:p-12 sm:rounded-xl",
      bgColor,
      reverse ? "lg:flex-row-reverse" : ""
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: classNames(
          "w-full lg:w-1/2 flex-none",
          reverse ? "lg:pl-6" : ""
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: classNames(
              "block text-base md:text-lg tracking-wide uppercase font-bold mb-2",
              eyebrowColor
            ),
            children: "Collections"
          }, void 0, !1, {
            fileName: "app/components/CollectionPreview.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: classNames(
              "text-3xl md:text-5xl font-black tracking-tighter max-w-screen-lg mb-4",
              textColor
            ),
            children: prompt
          }, void 0, !1, {
            fileName: "app/components/CollectionPreview.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Button, {
            component: import_react45.Link,
            to: `/collections/${slug}`,
            size: "md",
            radius: "xl",
            variant: "gradient",
            gradient: { from: "violet", to: "pink" },
            rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react15.ArrowRight, {
              size: 16
            }, void 0, !1, {
              fileName: "app/components/CollectionPreview.tsx",
              lineNumber: 65,
              columnNumber: 22
            }, this),
            children: "Shop The Prompt"
          }, void 0, !1, {
            fileName: "app/components/CollectionPreview.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/CollectionPreview.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-6 -mx-6 px-6 lg:mx-0 lg:px-0 lg:mt-0 overflow-x-auto scrollbar-hide",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex -mx-4 md:mx-0 lg:grid lg:grid-cols-2 lg:gap-8",
          children: prompts.map((prompt2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "px-4 w-2/3 lg:w-auto lg:px-0 flex-none",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative rounded-lg shadow-xl overflow-hidden group",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react45.Link, {
                  to: `/designer?promptId=${prompt2.uuid}&resultId=${prompt2.result}`,
                  className: "absolute inset-0 cursor-pointer z-10",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "sr-only",
                    children: [
                      "Link to ",
                      prompt2.result
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/CollectionPreview.tsx",
                    lineNumber: 82,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/CollectionPreview.tsx",
                  lineNumber: 78,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  alt: "",
                  src: prompt2.image,
                  className: "group-hover:scale-110 transition-transform duration-500"
                }, void 0, !1, {
                  fileName: "app/components/CollectionPreview.tsx",
                  lineNumber: 84,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "absolute z-10 bottom-4 right-4 flex items-end justify-end",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Button, {
                    component: import_react45.Link,
                    to: `/designer?promptId=${prompt2.uuid}&resultId=${prompt2.result}`,
                    size: "md",
                    radius: "xl",
                    variant: "gradient",
                    gradient: { from: "violet", to: "pink" },
                    children: [
                      "Buy ",
                      PRODUCT_RETAIL_PRICING[71]
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/CollectionPreview.tsx",
                    lineNumber: 90,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/CollectionPreview.tsx",
                  lineNumber: 89,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/CollectionPreview.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, prompt2.result, !1, {
            fileName: "app/components/CollectionPreview.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/components/CollectionPreview.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/CollectionPreview.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/CollectionPreview.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/lib/collections.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), collections = [
  {
    theme: "dark",
    slug: "animals-in-suits",
    prompt: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "bg-violet-800 px-2",
          children: "Animals"
        }, void 0, !1, {
          fileName: "app/lib/collections.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        " wearing a suit. 4k. 60mm. Lightroom. White Background."
      ]
    }, void 0, !0, {
      fileName: "app/lib/collections.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    prompts: [
      {
        uuid: "5cd8cfc2-96ab-454a-a3f9-85bb313331ac",
        result: "850",
        image: resolveCdn("static/collections/animal-suit/panda.png")
      },
      {
        uuid: "9d847b76-b88b-44cf-b3fd-aa24040f721e",
        result: "851",
        image: resolveCdn("static/collections/animal-suit/dog.png")
      },
      {
        uuid: "1aedaca8-3368-4e33-82a3-f669fa5a4823",
        result: "857",
        image: resolveCdn("static/collections/animal-suit/penguin.png")
      },
      {
        uuid: "8241e5d4-500f-4375-a0c6-238cc07bac9e",
        result: "519",
        image: resolveCdn("static/collections/animal-suit/shark.png")
      }
    ]
  },
  {
    theme: "light",
    slug: "synthwave",
    prompt: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        "picture of a",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "bg-violet-800 text-white px-2",
          children: "thing"
        }, void 0, !1, {
          fileName: "app/lib/collections.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        ", synthwave vector art, gradients, vibrant color, 8K, featured on 99designs"
      ]
    }, void 0, !0, {
      fileName: "app/lib/collections.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    prompts: [
      {
        uuid: "d7a28be7-0f43-406c-845e-d3a46cf91f95",
        result: "321",
        image: resolveCdn("static/collections/synthwave/f1car.png")
      },
      {
        uuid: "2324cfe4-8fbd-4648-a8b7-3da6e7e0820d",
        result: "937",
        image: resolveCdn("static/collections/synthwave/astronaut.png")
      },
      {
        uuid: "41a071d3-bc58-4703-948b-95612e2af48d",
        result: "953",
        image: resolveCdn("static/collections/synthwave/city.png")
      },
      {
        uuid: "7f8e1ae0-b9a1-4ca4-90bd-58a32d858c96",
        result: "934",
        image: resolveCdn("static/collections/synthwave/delorean.png")
      }
    ]
  },
  {
    theme: "dark",
    slug: "gansta-animals",
    prompt: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        "Gangsta ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "bg-violet-800 px-2",
          children: "animal"
        }, void 0, !1, {
          fileName: "app/lib/collections.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        ", perfect composition, beautiful detailed intricate insanely detailed octane render..."
      ]
    }, void 0, !0, {
      fileName: "app/lib/collections.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    prompts: [
      {
        uuid: "d2fe2ed3-0a23-40c7-b604-ca7717640c88",
        result: "998",
        image: resolveCdn("static/collections/gangsta/dog.png")
      },
      {
        uuid: "4b97d056-b3ba-4113-b3f4-32383d901585",
        result: "1001",
        image: resolveCdn("static/collections/gangsta/mouse.png")
      },
      {
        uuid: "a1ab11e3-dc2e-4bec-bf1c-4a375c6f5f32",
        result: "1011",
        image: resolveCdn("static/collections/gangsta/cow.png")
      },
      {
        uuid: "d330bf96-ae9a-4f39-a417-e142647b4b3f",
        result: "1017",
        image: resolveCdn("static/collections/gangsta/cat.png")
      }
    ]
  }
];

// app/routes/__index/__index/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader14({ request }) {
  let query = getSupabaseAdmin().from("featured_prompts").select("*, results:prompt_results!inner(*)").not("prompt", "eq", "").order("created_at", { ascending: !1 }).limit(16), { data, error } = await query;
  return error ? (0, import_node25.json)({
    featured: []
  }) : (0, import_node25.json)({
    featured: data
  });
}
function HomePage() {
  let queryClient = (0, import_react_query13.useQueryClient)(), { featured } = (0, import_react46.useLoaderData)();
  return (0, import_react47.useEffect)(() => {
    featured.forEach((prompt) => {
      queryClient.setQueryData(["prompts", prompt.uuid], prompt);
    });
  }, [queryClient, featured]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomePageHero, {}, void 0, !1, {
        fileName: "app/routes/__index/__index/index.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      collections.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionPreview, {
        ...collection
      }, collection.slug, !1, {
        fileName: "app/routes/__index/__index/index.tsx",
        lineNumber: 51,
        columnNumber: 16
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverflowGrid, {
        prompts: featured
      }, void 0, !1, {
        fileName: "app/routes/__index/__index/index.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/__index/index.tsx",
    lineNumber: 47,
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
  action: () => action17,
  default: () => AppLayout,
  links: () => links2,
  loader: () => loader15
});

// node_modules/swiper/swiper-bundle.css
var swiper_bundle_default = "/build/_assets/swiper-bundle-7FA7VZSO.css";

// app/routes/__index/app.tsx
var import_node26 = require("@remix-run/node"), import_react48 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links2() {
  return [{ rel: "stylesheet", href: swiper_bundle_default }];
}
async function loader15({ request }) {
  return await requireAuthSession(request), (0, import_node26.json)({});
}
function action17() {
  return { ok: !0 };
}
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
        fullWidth: !0
      }, void 0, !1, {
        fileName: "app/routes/__index/app.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react48.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__index/app.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/app.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/routes/__index/app.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/app.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/__index/app/$promptId.tsx
var promptId_exports3 = {};
__export(promptId_exports3, {
  action: () => action18,
  default: () => PromptEditorPage,
  loader: () => loader16
});
var import_core19 = require("@mantine/core"), import_form4 = require("@mantine/form"), import_node27 = require("@remix-run/node"), import_react49 = require("@remix-run/react"), import_tabler_icons_react16 = require("tabler-icons-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader16({ request, params }) {
  let authSession = await getAuthSession(request), { promptId } = params, query = getSupabaseAdmin().from("prompts").select(
    "*, results:prompt_results(*), like_count:likes(likes), is_liked:prompt_likes(user_id)"
  ).match({ uuid: promptId });
  authSession != null && authSession.userId && query.eq("is_liked.user_id", authSession.userId);
  let { data, error } = await query.single();
  if (error)
    throw new Response("", { status: 500, statusText: error.message });
  if (!data)
    throw new Response("", { status: 404, statusText: "Prompt not found" });
  return (0, import_node27.json)({
    prompt: data
  });
}
function action18() {
  return { ok: !0 };
}
function PromptEditorPage() {
  var _a;
  let navigate = (0, import_react49.useNavigate)(), { prompt } = (0, import_react49.useLoaderData)(), createPrompt2 = useCreatePrompt(), updatePrompt2 = useUpdatePrompt(), generateImages = useGenerateImage(), form = (0, import_form4.useForm)({
    initialValues: {
      prompt: prompt.prompt
    }
  }), updateAndGenerate = (values) => {
    createPrompt2.mutate(
      {
        prompt: values.prompt
      },
      {
        onSuccess: (data) => {
          generateImages.mutate(
            {
              promptId: data.id,
              imageCount: 4
            },
            {
              onSuccess: () => {
                navigate(`/app/${data.uuid}`), form.resetDirty();
              }
            }
          );
        }
      }
    );
  }, isLoading = updatePrompt2.isLoading || generateImages.isLoading;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200 relative",
        children: [
          prompt.results && prompt.results.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FastColor, {
            className: "absolute inset-0 z-0",
            image: resolveUrl(prompt.results[0].filename)
          }, void 0, !1, {
            fileName: "app/routes/__index/app/$promptId.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "container flex flex-col md:flex-row md:items-center py-20 md:py-24 -mt-20",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptHero, {
              prompt
            }, void 0, !1, {
              fileName: "app/routes/__index/app/$promptId.tsx",
              lineNumber: 103,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__index/app/$promptId.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__index/app/$promptId.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "-mt-12 mb-16 md:mb-32 container relative z-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-white p-12 rounded-lg pb-24",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
              onSubmit: form.onSubmit(updateAndGenerate),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Textarea, {
                  label: "Prompt",
                  size: "lg",
                  ...form.getInputProps("prompt")
                }, void 0, !1, {
                  fileName: "app/routes/__index/app/$promptId.tsx",
                  lineNumber: 110,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col lg:flex-row lg:items-center mt-3 w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                      variant: "gradient",
                      gradient: { from: "violet", to: "pink" },
                      size: "lg",
                      radius: "xl",
                      loading: isLoading,
                      loaderPosition: "right",
                      type: "submit",
                      children: form.isDirty() ? "Create New Prompt" : "Generate Images"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/app/$promptId.tsx",
                      lineNumber: 116,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: classNames(
                        "text-slate-600 ml-4 mt-6 lg:mt-0",
                        isLoading ? "block flex-1" : "hidden"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, {
                          loading: isLoading
                        }, void 0, !1, {
                          fileName: "app/routes/__index/app/$promptId.tsx",
                          lineNumber: 133,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mt-1 text-sm",
                          children: "Generating images may take up to one minute."
                        }, void 0, !1, {
                          fileName: "app/routes/__index/app/$promptId.tsx",
                          lineNumber: 134,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__index/app/$promptId.tsx",
                      lineNumber: 127,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__index/app/$promptId.tsx",
                  lineNumber: 115,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__index/app/$promptId.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__index/app/$promptId.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "px-12 -mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
            children: (_a = prompt.results) == null ? void 0 : _a.map((result, index2) => {
              let image = resolveThumbnail(result);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative shadow-xl rounded-lg overflow-hidden backdrop-blur-md",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: image,
                    alt: "",
                    className: "aspect-1 w-full object-cover "
                  }, void 0, !1, {
                    fileName: "app/routes/__index/app/$promptId.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "absolute bottom-4 right-4",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                      component: import_react49.Link,
                      size: "md",
                      variant: "gradient",
                      radius: "xl",
                      gradient: { from: "violet", to: "pink" },
                      rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react16.ShoppingCart, {
                        size: 20
                      }, void 0, !1, {
                        fileName: "app/routes/__index/app/$promptId.tsx",
                        lineNumber: 162,
                        columnNumber: 32
                      }, this),
                      to: `/designer?promptId=${prompt.uuid}&resultId=${result.id}`,
                      mr: 16,
                      children: "Shop"
                    }, void 0, !1, {
                      fileName: "app/routes/__index/app/$promptId.tsx",
                      lineNumber: 156,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__index/app/$promptId.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                  }, this)
                ]
              }, index2, !0, {
                fileName: "app/routes/__index/app/$promptId.tsx",
                lineNumber: 146,
                columnNumber: 15
              }, this);
            })
          }, void 0, !1, {
            fileName: "app/routes/__index/app/$promptId.tsx",
            lineNumber: 142,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__index/app/$promptId.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/app/$promptId.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

// app/routes/__index/app/account.tsx
var account_exports = {};
__export(account_exports, {
  action: () => action19,
  default: () => AccountPage,
  loader: () => loader17
});
var import_core20 = require("@mantine/core"), import_form5 = require("@mantine/form"), import_node28 = require("@remix-run/node"), import_react50 = require("@remix-run/react"), import_react51 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader17({ request }) {
  let { userId, accessToken } = await requireAuthSession(request), client = getSupabaseAdmin(accessToken), { data } = await client.from("profiles").select("*").match({ id: userId }).single();
  return (0, import_node28.json)({
    profile: data
  });
}
async function action19({ request }) {
  let { userId, email, accessToken } = await requireAuthSession(request), formData = Object.fromEntries(await request.formData()), client = getSupabaseAdmin(accessToken);
  return await client.from("profiles").update({
    full_name: formData.full_name,
    email: formData.email
  }).match({ id: userId }), email !== formData.email && await client.auth.updateUser({
    email: formData.email
  }), (0, import_node28.json)({
    success: !0
  });
}
function AccountPage() {
  let { profile } = (0, import_react50.useLoaderData)(), submit2 = (0, import_react50.useSubmit)(), formRef = (0, import_react51.useRef)(null), transition2 = (0, import_react50.useTransition)(), form = (0, import_form5.useForm)({
    initialValues: {
      full_name: profile.full_name,
      email: profile.email
    }
  }), onSubmit = (values) => {
    submit2(formRef.current, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "hero",
        className: "bg-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container max-w-screen-md flex items-center justify-center py-32 -mt-20",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-6xl md:text-8xl font-black tracking-tighter max-w-screen-lg text-slate-800 text-center",
            children: "Your Account"
          }, void 0, !1, {
            fileName: "app/routes/__index/app/account.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/app/account.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/app/account.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        id: "content",
        className: "-mt-20 pb-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container max-w-screen-md bg-white p-6 md:p-12 rounded-lg",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react50.Form, {
            ref: formRef,
            method: "post",
            onSubmit: form.onSubmit(onSubmit),
            className: "space-y-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.TextInput, {
                name: "full_name",
                label: "Full Name",
                ...form.getInputProps("full_name")
              }, void 0, !1, {
                fileName: "app/routes/__index/app/account.tsx",
                lineNumber: 91,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.TextInput, {
                name: "email",
                label: "Email",
                description: "Changing your email will require you to verify your email again.",
                ...form.getInputProps("email")
              }, void 0, !1, {
                fileName: "app/routes/__index/app/account.tsx",
                lineNumber: 96,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.Button, {
                variant: "gradient",
                gradient: { from: "violet", to: "pink" },
                size: "md",
                radius: "xl",
                type: "submit",
                loading: transition2.state === "submitting",
                children: "Save"
              }, void 0, !1, {
                fileName: "app/routes/__index/app/account.tsx",
                lineNumber: 102,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__index/app/account.tsx",
            lineNumber: 85,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/app/account.tsx",
          lineNumber: 84,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__index/app/account.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__index/app/account.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/__index/app/create.tsx
var create_exports2 = {};
__export(create_exports2, {
  action: () => action20,
  default: () => CreateLayout,
  loader: () => loader18
});
var import_node29 = require("@remix-run/node"), import_react53 = require("@remix-run/react"), import_react54 = require("react");

// app/components/steps/Camera.tsx
var import_core21 = require("@mantine/core");

// app/lib/promptGenerator.ts
var import_colors = __toESM(require("tailwindcss/colors")), contentTypes = [
  { label: "Picture", value: "a picture of" },
  { label: "Drawing", value: "a drawing of" },
  { label: "Sketch", value: "a sketch of" },
  { label: "3D Render", value: "a 3D render of" },
  { label: "Photo", value: "a photograph of" },
  { label: "Icon", value: "an icon of" }
], artist = [
  {
    label: "Blender Guru",
    value: "blender-guru"
  },
  {
    label: "@beeple_crap",
    value: "@beeple-crap"
  },
  {
    label: "Pablo Picasso",
    value: "pablo-picasso"
  },
  {
    label: "Annie Leibovitz",
    value: "annie-leibovitz"
  },
  {
    label: "@antonitudisco",
    value: "@antonitudisco"
  },
  {
    label: "Leonardo da Vinci",
    value: "leonardo-da-vinci"
  },
  {
    label: "Gregory Crewdson",
    value: "gregory-crewdson"
  },
  {
    label: "@combrisi",
    value: "@combrisi"
  },
  {
    label: "Vincent van Gogh",
    value: "vincent-van-gogh"
  },
  {
    label: "Richard Avedon",
    value: "richard-avedon"
  },
  {
    label: "@hoodass",
    value: "@hoodass"
  },
  {
    label: "Salvador Dal\xED",
    value: "salvador-dal\xED"
  },
  {
    label: "Elliott Erwitt",
    value: "elliott-erwitt"
  },
  {
    label: "@chadknight",
    value: "@chadknight"
  },
  {
    label: "Andy Warhol",
    value: "andy-warhol"
  },
  {
    label: "Steve McCurry",
    value: "steve-mccurry"
  },
  {
    label: "@ianhubertz",
    value: "@ianhubertz"
  },
  {
    label: "Roy Lichtenstein",
    value: "roy-lichtenstein"
  },
  {
    label: "Irving Penn",
    value: "irving-penn"
  },
  {
    label: "@fergemanden",
    value: "@fergemanden"
  },
  {
    label: "Jackson Pollock",
    value: "jackson-pollock"
  },
  {
    label: "David LaChapelle",
    value: "david-lachapelle"
  },
  {
    label: "@baran.sarper",
    value: "@baran.sarper"
  },
  {
    label: "Ray Caesar",
    value: "ray-caesar"
  },
  {
    label: "Mario Testino",
    value: "mario-testino"
  },
  {
    label: "@jellygummies",
    value: "@jellygummies"
  },
  {
    label: "Ren\xE9 Magritte",
    value: "ren\xE9-magritte"
  },
  {
    label: "Pierre and Gilles",
    value: "pierre-and-gilles"
  },
  {
    label: "@cool3dworld",
    value: "@cool3dworld"
  },
  {
    label: "Marc Chagall",
    value: "marc-chagall"
  },
  {
    label: "Martin Schoeller",
    value: "martin-schoeller"
  },
  {
    label: "Stephen Wilkes",
    value: "stephen-wilkes"
  },
  {
    label: "@rikoosten broek",
    value: "@rikoosten-broek"
  },
  {
    label: "Mark Ryden",
    value: "mark-ryden"
  },
  {
    label: "Dorothea Lange",
    value: "dorothea-lange"
  },
  {
    label: "@extraweg",
    value: "@extraweg"
  },
  {
    label: "Hieronymus Bosch",
    value: "hieronymus-bosch"
  },
  {
    label: "William Eggleston",
    value: "william-eggleston"
  },
  {
    label: "Yves Klein",
    value: "yves-klein"
  },
  {
    label: "Cindy Sherman",
    value: "cindy-sherman"
  },
  {
    label: "Rembrandt",
    value: "rembrandt"
  },
  {
    label: "Solve Sundsbo",
    value: "solve-sundsbo"
  },
  {
    label: "Sandro Botticelli",
    value: "sandro-botticelli"
  },
  {
    label: "German Larkin",
    value: "german-larkin"
  },
  {
    label: "Edward Hopper",
    value: "edward-hopper"
  },
  {
    label: "David Bailey",
    value: "david-bailey"
  },
  {
    label: "Piet Mondrian",
    value: "piet-mondrian"
  },
  {
    label: "Erik Almas",
    value: "erik-almas"
  },
  {
    label: "Jean-Michel Basquiat",
    value: "jean-michel-basquiat"
  },
  {
    label: "Henri Cartier-Bresson",
    value: "henri-cartier-bresson"
  },
  {
    label: "Wassily Kandinsky",
    value: "wassily-kandinsky"
  },
  {
    label: "Helmut Newton",
    value: "helmut-newton"
  },
  {
    label: "Kazimir Malevich",
    value: "kazimir-malevich"
  },
  {
    label: "Martin Parr",
    value: "martin-parr"
  },
  {
    label: "Takashi Murakami",
    value: "takashi-murakami"
  },
  {
    label: "Steven Meisel",
    value: "steven-meisel"
  },
  {
    label: "Edvard Munch",
    value: "edvard-munch"
  },
  {
    label: "Patrick Demarchelier",
    value: "patrick-demarchelier"
  },
  {
    label: "Frida Kahlo",
    value: "frida-kahlo"
  },
  {
    label: "Mick Rock",
    value: "mick-rock"
  },
  {
    label: "Paul C\xE9zanne",
    value: "paul-c\xE9zanne"
  },
  {
    label: "Gary Baseman",
    value: "gary-baseman"
  },
  {
    label: "David Hockney",
    value: "david-hockney"
  },
  {
    label: "James Rosenquist",
    value: "james rosenquist"
  },
  {
    label: "Ernst Ludwig Kirchner",
    value: "ernst-ludwig-kirchner"
  }
], lighting = [
  { label: "Accent Lighting", value: "accent lighting" },
  { label: "Backlight", value: "backlight" },
  { label: "Blacklight", value: "blacklight" },
  { label: "Blinding Light", value: "blinding light" },
  { label: "Candlelight", value: "candlelight" },
  { label: "Concert Lighting", value: "concert lighting" },
  { label: "Crepuscular Rays", value: "crepuscular rays" },
  { label: "Direct Sunlight", value: "direct sunlight" },
  { label: "Dusk", value: "dusk" },
  { label: "Edison Bulb", value: "Edison bulb" },
  { label: "Electric Arc", value: "electric arc" },
  { label: "Fire", value: "fire" },
  { label: "Fluorescent", value: "fluorescent" },
  { label: "Glowing", value: "glowing" },
  { label: "Glowing Radioactively", value: "glowing radioactively" },
  { label: "Glow-Stick", value: "glow-stick" },
  { label: "Lava Glow", value: "lava glow" },
  { label: "Moonlight", value: "moonlight" },
  { label: "Natural Lighting", value: "natural lighting" },
  { label: "Neon Lamp", value: "neon lamp" },
  { label: "Nightclub Lighting", value: "nightclub lighting" },
  { label: "Nuclear Waste Glow", value: "nuclear waste glow" },
  { label: "Quantum Dot Display", value: "quantum dot display" },
  { label: "Spotlight", value: "spotlight" },
  { label: "Strobe", value: "strobe" },
  { label: "Sunlight", value: "sunlight" },
  { label: "Ultraviolet", value: "ultraviolet" },
  { label: "Dramatic Lighting", value: "dramatic lighting" },
  { label: "Dark Lighting", value: "dark lighting" },
  { label: "Soft Lighting", value: "soft lighting" }
], detail = [
  { label: "Highly Detailed", value: "highly detailed" },
  { label: "Grainy", value: "grainy" },
  { label: "Realistic", value: "realistic" },
  { label: "Unreal Engine", value: "unreal engine" },
  { label: "Octane Render", value: "octane render" },
  { label: "Bokeh", value: "bokeh" },
  { label: "Vray", value: "vray" },
  { label: "Houdini Render", value: "houdini render" },
  { label: "Quixel Megascans", value: "quixel megascans" },
  { label: "Depth Of Field", value: "depth of field" },
  { label: "Arnold Render", value: "arnold render" },
  { label: "8k Uhd", value: "8k uhd" },
  { label: "Raytracing", value: "raytracing" },
  { label: "Cgi", value: "cgi" },
  { label: "Lumen Reflections", value: "lumen reflections" },
  { label: "Cgsociety", value: "cgsociety" },
  { label: "Ultra Realistic", value: "ultra realistic" },
  { label: "Volumetric Fog", value: "volumetric fog" },
  { label: "Overglaze", value: "overglaze" },
  { label: "Analog Photo", value: "analog photo" },
  { label: "Polaroid", value: "polaroid" },
  { label: "100mm", value: "100mm" },
  { label: "Film Photography", value: "film photography" },
  { label: "Dslr", value: "dslr" },
  { label: "Cinema4d", value: "cinema4d" },
  { label: "Studio Quality", value: "studio quality" }
], artStyle = [
  { label: "Abstract", value: "abstract" },
  { label: "Medieval art", value: "medieval art" },
  { label: "Renaissance", value: "renaissance" },
  { label: "Baroque", value: "baroque" },
  { label: "Rococo", value: "rococo" },
  { label: "Neoclassicism", value: "neoclassicism" },
  { label: "Romanticism", value: "romanticism" },
  { label: "Impressionism", value: "impressionism" },
  { label: "post-Expression", value: "post-expression" },
  { label: "Cubism", value: "cubism" },
  { label: "Futurism", value: "futurism" },
  { label: "Art Deco", value: "art deco" },
  { label: "Abstract Expressionism", value: "abstract expressionism" },
  { label: "Contemporary", value: "contemporary" },
  { label: "pop art", value: "pop art" },
  { label: "surrealism", value: "surrealism" },
  { label: "fantasy", value: "fantasy" }
], techniques = [
  { label: "Award Winning", value: "award winning" },
  { label: "Celestial", value: "celestial" },
  { label: "Character Design", value: "character design" },
  { label: "Color Page", value: "color page" },
  { label: "Concept Art", value: "concept art" },
  { label: "Digital Art", value: "digital art" },
  { label: "Digital Painting", value: "digital painting" },
  { label: "Divine", value: "divine" },
  { label: "Elegant", value: "elegant" },
  { label: "Evocative", value: "evocative" },
  { label: "Fascinating", value: "fascinating" },
  { label: "Featured On Pixiv", value: "featured on pixiv" },
  { label: "Fine Art", value: "fine art" },
  { label: "Golden Ratio", value: "golden ratio" },
  { label: "Oil Painting", value: "oil painting" },
  { label: "Precise Line-Art", value: "precise line-art" },
  { label: "Shiny", value: "shiny" },
  { label: "Smooth", value: "smooth" },
  { label: "Soft", value: "soft" },
  { label: "Surreal", value: "surreal" },
  { label: "Synthwave", value: "synthwave vector art" },
  { label: "Symmetry", value: "symmetry" },
  { label: "Tarot Card", value: "tarot card" },
  { label: "Trending On Artstation", value: "trending on artstation" }
], styleTypes = {
  artist,
  lighting,
  detail,
  artStyle,
  techniques
}, cameraView = [
  { label: "Ultra wide angle", value: "ultra-wide-angle" },
  { label: "Macro", value: "macro" },
  { label: "Slow shutter speed", value: "slow-shutter-speed" },
  { label: "Fast shutter speed", value: "fast-shutter-speed" },
  { label: "Bokeh", value: "bokeh" },
  { label: "Fisheye", value: "fisheye" },
  { label: "Dutch angle", value: "dutch-angle" },
  { label: "Aerial view", value: "aerial-view" },
  { label: "Low angle", value: "low-angle" },
  { label: "Extreme long-shot", value: "extreme-long-shot" },
  { label: "Long shot", value: "long-shot" },
  { label: "Medium shot", value: "medium-shot" },
  { label: "Close-up", value: "close-up" },
  { label: "Extreme close-up", value: "extreme-close-up" }
], resolution = [
  { label: "Highly Detailed", value: "highly detailed" },
  { label: "Depth Of Field", value: "depth of field" },
  { label: "4k", value: "4k" },
  { label: "8k Uhd", value: "8k uhd" },
  { label: "Ultra Realistic", value: "ultra realistic" },
  { label: "Studio Quality", value: "studio quality" }
];
var cleanColorKeys = Object.keys(import_colors.default).filter(
  (c) => ![
    "inherit",
    "current",
    "transparent",
    "black",
    "white",
    "lightBlue",
    "warmGray",
    "trueGray",
    "coolGray",
    "blueGray"
  ].includes(c)
), colorTypes = [
  {
    label: "Black and White",
    value: "black-white",
    type: "filter",
    image: "https://project-ai.sfo3.cdn.digitaloceanspaces.com/static/colors/bw.png"
  },
  {
    label: "Sephia",
    value: "sephia",
    type: "filter",
    image: "https://project-ai.sfo3.cdn.digitaloceanspaces.com/static/colors/sephia.png"
  },
  ...cleanColorKeys.map((key) => ({
    label: key,
    value: key,
    type: "color",
    hex: import_colors.default[key][800]
  }))
];
function composePrompt(values) {
  let {
    type,
    description,
    artist: artist2,
    style,
    lighting: lighting2,
    detail: detail2,
    techniques: techniques2,
    color,
    camera,
    resolution: resolution2
  } = values, promptString = [];
  return type && promptString.push(` ${type}`), description && promptString.push(` ${description}`), artist2 && promptString.push(artist2.map((a) => ` by ${a}`).join(", ")), style && promptString.push(`, ${style}`), techniques2 && promptString.push(`, ${techniques2}`), lighting2 && promptString.push(`, ${lighting2}`), detail2 && promptString.push(`, ${detail2}`), color && promptString.push(`, ${color}`), camera && promptString.push(`, ${camera}`), resolution2 && promptString.push(`, ${resolution2}`), promptString.join("");
}

// app/components/steps/FormProvider.tsx
var import_form6 = require("@mantine/form"), [FormProvider, useFormContext, useForm6] = (0, import_form6.createFormContext)(), FormProvider_default = FormProvider;

// app/components/steps/Camera.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function StepCamera() {
  let form = useFormContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "font-black tracking-tighter text-2xl",
            children: "What Camera Setting"
          }, void 0, !1, {
            fileName: "app/components/steps/Camera.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-gray-600",
            children: "Choose the right camera settings for your image."
          }, void 0, !1, {
            fileName: "app/components/steps/Camera.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/steps/Camera.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-2 gap-8 mt-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Select, {
            label: "Camera View",
            multiple: !0,
            searchable: !0,
            clearable: !0,
            placeholder: "Choose One",
            data: cameraView,
            ...form.getInputProps("camera")
          }, void 0, !1, {
            fileName: "app/components/steps/Camera.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Select, {
            label: "Resolution",
            multiple: !0,
            searchable: !0,
            clearable: !0,
            placeholder: "Choose One",
            data: resolution,
            ...form.getInputProps("resolution")
          }, void 0, !1, {
            fileName: "app/components/steps/Camera.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/steps/Camera.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/steps/Camera.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/steps/Color.tsx
var import_core22 = require("@mantine/core");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function StepColor() {
  let form = useFormContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "font-black tracking-tighter text-2xl",
            children: "Pick a Color"
          }, void 0, !1, {
            fileName: "app/components/steps/Color.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-gray-600",
            children: "What color of the result do you want?"
          }, void 0, !1, {
            fileName: "app/components/steps/Color.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/steps/Color.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-wrap mt-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.Group, {
          children: colorTypes.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.Tooltip, {
            label: option.label,
            position: "bottom",
            styles: { tooltip: { textTransform: "capitalize" } },
            children: option.type === "color" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.ColorSwatch, {
              component: "button",
              type: "button",
              size: 38,
              color: option.hex ?? "white",
              onClick: () => form.setFieldValue("color", option.value),
              sx: { color: "#fff", cursor: "pointer" },
              children: form.values.color === option.value && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.CheckIcon, {
                width: 16
              }, void 0, !1, {
                fileName: "app/components/steps/Color.tsx",
                lineNumber: 34,
                columnNumber: 23
              }, this)
            }, void 0, !1, {
              fileName: "app/components/steps/Color.tsx",
              lineNumber: 25,
              columnNumber: 19
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.Avatar, {
                  component: "button",
                  type: "button",
                  src: option.image,
                  radius: "xl",
                  onClick: () => form.setFieldValue("color", option.value),
                  sx: { color: "#fff", cursor: "pointer" }
                }, void 0, !1, {
                  fileName: "app/components/steps/Color.tsx",
                  lineNumber: 39,
                  columnNumber: 21
                }, this),
                form.values.color === option.value && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "absolute inset-0 flex items-center justify-center text-white",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.CheckIcon, {
                    width: 16
                  }, void 0, !1, {
                    fileName: "app/components/steps/Color.tsx",
                    lineNumber: 49,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/steps/Color.tsx",
                  lineNumber: 48,
                  columnNumber: 23
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/steps/Color.tsx",
              lineNumber: 38,
              columnNumber: 19
            }, this)
          }, option.value, !1, {
            fileName: "app/components/steps/Color.tsx",
            lineNumber: 18,
            columnNumber: 15
          }, this))
        }, void 0, !1, {
          fileName: "app/components/steps/Color.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/steps/Color.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/steps/Color.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/steps/Description.tsx
var import_core23 = require("@mantine/core");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function StepDescription() {
  let form = useFormContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "font-black tracking-tighter text-2xl",
            children: "Describe Your Object"
          }, void 0, !1, {
            fileName: "app/components/steps/Description.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-gray-600",
            children: "Describe the object you want to generate. Follow the indicators below to get a good result."
          }, void 0, !1, {
            fileName: "app/components/steps/Description.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/steps/Description.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-lg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core23.Textarea, {
            "aria-label": "Prompt Description",
            size: "lg",
            placeholder: "a red car parked in the garage",
            radius: "md",
            autosize: !0,
            minRows: 3,
            ...form.getInputProps("description")
          }, void 0, !1, {
            fileName: "app/components/steps/Description.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-sm text-gray-600 mt-1",
            children: "Example: a red car parked in the garage"
          }, void 0, !1, {
            fileName: "app/components/steps/Description.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-3",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              className: "list-disc pl-4 text-gray-800",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "At least 3 words"
                }, void 0, !1, {
                  fileName: "app/components/steps/Description.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "At least one noun"
                }, void 0, !1, {
                  fileName: "app/components/steps/Description.tsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "No negations"
                }, void 0, !1, {
                  fileName: "app/components/steps/Description.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "At least one adjective"
                }, void 0, !1, {
                  fileName: "app/components/steps/Description.tsx",
                  lineNumber: 36,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: "At least one dependent object"
                }, void 0, !1, {
                  fileName: "app/components/steps/Description.tsx",
                  lineNumber: 37,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/steps/Description.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/steps/Description.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/steps/Description.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/steps/Description.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/steps/Style.tsx
var import_core24 = require("@mantine/core"), import_react52 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function StepStyle() {
  let form = useFormContext(), [artStyleType, setArtStyleType] = (0, import_react52.useState)("artist"), { setFieldValue } = form, changeArtStyle = (type) => {
    ["artist", "style", "techniques"].filter((o) => o !== type).forEach((u) => setFieldValue(u, null)), setArtStyleType(type);
  }, { artist: artist2, lighting: lighting2, detail: detail2, artStyle: artStyle2, techniques: techniques2 } = styleTypes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "font-black tracking-tighter text-2xl",
        children: "Choose Style"
      }, void 0, !1, {
        fileName: "app/components/steps/Style.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-gray-600",
        children: "The art style plays a huge factor in the rendition, we like to think of style in three sub-categories: Lighting, Detail, and Art styles."
      }, void 0, !1, {
        fileName: "app/components/steps/Style.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid md:grid-cols-2 gap-4 mt-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Select, {
              label: "Lighting",
              multiple: !0,
              searchable: !0,
              clearable: !0,
              placeholder: "Choose One",
              data: lighting2,
              ...form.getInputProps("lighting")
            }, void 0, !1, {
              fileName: "app/components/steps/Style.tsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/steps/Style.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Select, {
              label: "Detail",
              multiple: !0,
              searchable: !0,
              clearable: !0,
              placeholder: "Choose One",
              data: detail2,
              ...form.getInputProps("detail")
            }, void 0, !1, {
              fileName: "app/components/steps/Style.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/steps/Style.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Radio.Group, {
              value: artStyleType,
              onChange: (val) => changeArtStyle(val),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Radio, {
                  value: "artist",
                  label: "Style by Artist"
                }, void 0, !1, {
                  fileName: "app/components/steps/Style.tsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Radio, {
                  value: "style",
                  label: "Style by Historical Era"
                }, void 0, !1, {
                  fileName: "app/components/steps/Style.tsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Radio, {
                  value: "techniques",
                  label: "Style by Technique and Material"
                }, void 0, !1, {
                  fileName: "app/components/steps/Style.tsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/steps/Style.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/steps/Style.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              artStyleType === "artist" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.MultiSelect, {
                label: "Artists",
                multiple: !0,
                searchable: !0,
                clearable: !0,
                placeholder: "Choose one or more",
                data: artist2,
                ...form.getInputProps("artist")
              }, void 0, !1, {
                fileName: "app/components/steps/Style.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this),
              artStyleType === "style" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Select, {
                label: "Historical Era",
                multiple: !0,
                searchable: !0,
                clearable: !0,
                placeholder: "Choose one",
                data: artStyle2,
                ...form.getInputProps("style")
              }, void 0, !1, {
                fileName: "app/components/steps/Style.tsx",
                lineNumber: 77,
                columnNumber: 13
              }, this),
              artStyleType === "techniques" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Select, {
                label: "Technique and Material",
                multiple: !0,
                searchable: !0,
                clearable: !0,
                placeholder: "Choose one",
                data: techniques2,
                ...form.getInputProps("techniques")
              }, void 0, !1, {
                fileName: "app/components/steps/Style.tsx",
                lineNumber: 89,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/steps/Style.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/steps/Style.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/steps/Style.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/steps/Type.tsx
var import_core25 = require("@mantine/core");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function StepType() {
  let form = useFormContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "font-black tracking-tighter text-2xl",
            children: "Choose Content Type"
          }, void 0, !1, {
            fileName: "app/components/steps/Type.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-gray-600",
            children: "Choose what style content do you want to get. Keep in mind that photo realistic renders don't look great on apparel."
          }, void 0, !1, {
            fileName: "app/components/steps/Type.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/steps/Type.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-wrap mt-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core25.Chip.Group, {
          ...form.getInputProps("type"),
          children: contentTypes.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core25.Chip, {
            value: option.value,
            color: "violet",
            size: "md",
            children: option.label
          }, option.value, !1, {
            fileName: "app/components/steps/Type.tsx",
            lineNumber: 23,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/components/steps/Type.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/steps/Type.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/steps/Type.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/steps/index.tsx
var STEP_ARRAY = [
  {
    key: "type",
    label: "Content Type",
    description: "Get started",
    component: StepType
  },
  {
    key: "description",
    label: "Description",
    description: "Get started",
    component: StepDescription
  },
  {
    key: "style",
    label: "Style",
    description: "Get started",
    component: StepStyle
  },
  {
    key: "color",
    label: "Color",
    description: "Get started",
    component: StepColor
  },
  {
    key: "camera",
    label: "Camera",
    description: "Get started",
    component: StepCamera
  }
];

// app/routes/__index/app/create.tsx
var import_core26 = require("@mantine/core"), import_tabler_icons_react17 = require("tabler-icons-react");
var import_zod9 = require("zod"), import_form7 = require("@mantine/form");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader18({ request }) {
  let { accessToken } = await requireAuthSession(request), session = await getSession(request);
  if (session.has(PROMPT_SESSION_KEY)) {
    let uuid = session.get(PROMPT_SESSION_KEY), prompt = await getPrompt({
      uuid,
      accessToken
    });
    return (0, import_node29.json)({
      prompt
    });
  }
  return null;
}
async function action20({ request }) {
  await requireAuthSession(request);
  let session = await getSession(request), data = Object.fromEntries(await request.formData());
  return data.uuid ? (session.set(PROMPT_SESSION_KEY, data.uuid), (0, import_node29.json)(
    {},
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  )) : null;
}
var PromptFormSchema = SelectionSchema.extend({
  prompt: import_zod9.z.string(),
  description: import_zod9.z.string().optional().nullable().transform((val, ctx) => val && val.split(" ").length < 3 ? (ctx.addIssue({
    code: import_zod9.z.ZodIssueCode.custom,
    message: "Must be greater than 3 words"
  }), import_zod9.z.NEVER) : val)
});
function CreateLayout() {
  let [promptValue, setPromptValue] = (0, import_react54.useState)(""), [mode, setMode] = (0, import_react54.useState)("wizard" /* WIZARD */), createPrompt2 = useCreatePrompt(), generateImage = useGenerateImage(), navigate = (0, import_react53.useNavigate)(), form = useForm6({
    validate: (0, import_form7.zodResolver)(PromptFormSchema),
    initialValues: {
      prompt: "",
      description: "",
      type: null,
      artist: null,
      style: null,
      lighting: null,
      detail: null,
      techniques: null,
      color: null,
      camera: null,
      resolution: null,
      emotion: null
    }
  });
  (0, import_react54.useEffect)(() => {
    setPromptValue(composePrompt(form.values));
  }, [form.values]);
  let onSubmit = (values) => {
    let { prompt, description: _, ...selections } = values;
    createPrompt2.mutate(
      {
        prompt: promptValue,
        selections
      },
      {
        onSuccess: (data) => {
          generateImage.mutate(
            {
              promptId: data.id,
              imageCount: 4
            },
            {
              onSuccess: () => {
                navigate(`/app/${data.uuid}`);
              }
            }
          );
        }
      }
    );
  }, isLoading = createPrompt2.isLoading || generateImage.isLoading;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormProvider_default, {
    form,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      className: "container max-w-screen-xl md:grid md:grid-cols-3 md:gap-12 md:my-24",
      onSubmit: form.onSubmit(onSubmit),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "sticky top-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Textarea, {
                label: "Prompt",
                size: "xl",
                radius: "lg",
                description: "As you make selections, the prompt will be updated and optimized",
                minRows: 3,
                mb: 16,
                autosize: !0,
                value: promptValue,
                onFocus: () => setMode("live" /* LIVE */),
                onBlur: () => setMode("wizard" /* WIZARD */),
                onChange: (e) => {
                  mode === "live" /* LIVE */ ? setPromptValue(e.target.value) : form.setFieldValue("prompt", e.target.value);
                }
              }, void 0, !1, {
                fileName: "app/routes/__index/app/create.tsx",
                lineNumber: 170,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Button, {
                    variant: "gradient",
                    gradient: { from: "violet", to: "pink" },
                    size: "md",
                    radius: "xl",
                    type: "submit",
                    rightIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react17.Windmill, {
                      size: 24,
                      className: isLoading ? "animate-spin" : ""
                    }, void 0, !1, {
                      fileName: "app/routes/__index/app/create.tsx",
                      lineNumber: 197,
                      columnNumber: 19
                    }, this),
                    children: "Generate Images"
                  }, void 0, !1, {
                    fileName: "app/routes/__index/app/create.tsx",
                    lineNumber: 190,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Tooltip, {
                    label: "Reset form",
                    position: "bottom",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Button, {
                      variant: "outline",
                      color: "pink",
                      size: "md",
                      radius: "xl",
                      type: "reset",
                      onClick: () => form.reset(),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react17.RefreshDot, {
                        size: 24
                      }, void 0, !1, {
                        fileName: "app/routes/__index/app/create.tsx",
                        lineNumber: 214,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__index/app/create.tsx",
                      lineNumber: 206,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__index/app/create.tsx",
                    lineNumber: 205,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__index/app/create.tsx",
                lineNumber: 189,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__index/app/create.tsx",
            lineNumber: 169,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/app/create.tsx",
          lineNumber: 168,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "col-span-2 bg-white rounded-lg p-6 md:p-12",
          children: STEP_ARRAY.map((step) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "border-b pb-6 mb-6 last-of-type:border-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(step.component, {}, void 0, !1, {
              fileName: "app/routes/__index/app/create.tsx",
              lineNumber: 226,
              columnNumber: 15
            }, this)
          }, step.key, !1, {
            fileName: "app/routes/__index/app/create.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__index/app/create.tsx",
          lineNumber: 220,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__index/app/create.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__index/app/create.tsx",
    lineNumber: 163,
    columnNumber: 5
  }, this);
}

// app/routes/__index/app/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  default: () => AppMainPage,
  loader: () => loader19
});
var import_node30 = require("@remix-run/node"), import_react67 = require("@remix-run/react");
var import_core30 = require("@mantine/core");
var import_react68 = require("react");

// app/components/PromptCardOwner.tsx
var import_core29 = require("@mantine/core"), import_react66 = require("@remix-run/react"), import_tabler_icons_react19 = require("tabler-icons-react");

// node_modules/swiper/react/swiper.js
var import_react60 = __toESM(require("react"), 1);

// node_modules/ssr-window/ssr-window.esm.js
function isObject(obj) {
  return obj !== null && typeof obj == "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  Object.keys(src).forEach((key) => {
    typeof target[key] > "u" ? target[key] = src[key] : isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0 && extend(target[key], src[key]);
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  let doc = typeof document < "u" ? document : {};
  return extend(doc, ssrDocument), doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    return typeof setTimeout > "u" ? (callback(), null) : setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    typeof setTimeout > "u" || clearTimeout(id);
  }
};
function getWindow() {
  let win = typeof window < "u" ? window : {};
  return extend(win, ssrWindow), win;
}

// node_modules/dom7/dom7.esm.js
function makeReactive(obj) {
  let proto = obj.__proto__;
  Object.defineProperty(obj, "__proto__", {
    get() {
      return proto;
    },
    set(value) {
      proto.__proto__ = value;
    }
  });
}
var Dom7 = class extends Array {
  constructor(items) {
    typeof items == "number" ? super(items) : (super(...items || []), makeReactive(this));
  }
};
function arrayFlat(arr = []) {
  let res = [];
  return arr.forEach((el) => {
    Array.isArray(el) ? res.push(...arrayFlat(el)) : res.push(el);
  }), res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1)
    uniqueArray.indexOf(arr[i]) === -1 && uniqueArray.push(arr[i]);
  return uniqueArray;
}
function qsa(selector, context) {
  if (typeof selector != "string")
    return [selector];
  let a = [], res = context.querySelectorAll(selector);
  for (let i = 0; i < res.length; i += 1)
    a.push(res[i]);
  return a;
}
function $(selector, context) {
  let window2 = getWindow(), document2 = getDocument(), arr = [];
  if (!context && selector instanceof Dom7)
    return selector;
  if (!selector)
    return new Dom7(arr);
  if (typeof selector == "string") {
    let html2 = selector.trim();
    if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
      let toCreate = "div";
      html2.indexOf("<li") === 0 && (toCreate = "ul"), html2.indexOf("<tr") === 0 && (toCreate = "tbody"), (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0) && (toCreate = "tr"), html2.indexOf("<tbody") === 0 && (toCreate = "table"), html2.indexOf("<option") === 0 && (toCreate = "select");
      let tempParent = document2.createElement(toCreate);
      tempParent.innerHTML = html2;
      for (let i = 0; i < tempParent.childNodes.length; i += 1)
        arr.push(tempParent.childNodes[i]);
    } else
      arr = qsa(selector.trim(), context || document2);
  } else if (selector.nodeType || selector === window2 || selector === document2)
    arr.push(selector);
  else if (Array.isArray(selector)) {
    if (selector instanceof Dom7)
      return selector;
    arr = selector;
  }
  return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
function addClass(...classes) {
  let classNames2 = arrayFlat(classes.map((c) => c.split(" ")));
  return this.forEach((el) => {
    el.classList.add(...classNames2);
  }), this;
}
function removeClass(...classes) {
  let classNames2 = arrayFlat(classes.map((c) => c.split(" ")));
  return this.forEach((el) => {
    el.classList.remove(...classNames2);
  }), this;
}
function toggleClass(...classes) {
  let classNames2 = arrayFlat(classes.map((c) => c.split(" ")));
  this.forEach((el) => {
    classNames2.forEach((className) => {
      el.classList.toggle(className);
    });
  });
}
function hasClass(...classes) {
  let classNames2 = arrayFlat(classes.map((c) => c.split(" ")));
  return arrayFilter(this, (el) => classNames2.filter((className) => el.classList.contains(className)).length > 0).length > 0;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs == "string")
    return this[0] ? this[0].getAttribute(attrs) : void 0;
  for (let i = 0; i < this.length; i += 1)
    if (arguments.length === 2)
      this[i].setAttribute(attrs, value);
    else
      for (let attrName in attrs)
        this[i][attrName] = attrs[attrName], this[i].setAttribute(attrName, attrs[attrName]);
  return this;
}
function removeAttr(attr2) {
  for (let i = 0; i < this.length; i += 1)
    this[i].removeAttribute(attr2);
  return this;
}
function transform(transform2) {
  for (let i = 0; i < this.length; i += 1)
    this[i].style.transform = transform2;
  return this;
}
function transition(duration) {
  for (let i = 0; i < this.length; i += 1)
    this[i].style.transitionDuration = typeof duration != "string" ? `${duration}ms` : duration;
  return this;
}
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  typeof args[1] == "function" && ([eventType, listener, capture] = args, targetSelector = void 0), capture || (capture = !1);
  function handleLiveEvent(e) {
    let target = e.target;
    if (!target)
      return;
    let eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0 && eventData.unshift(e), $(target).is(targetSelector))
      listener.apply(target, eventData);
    else {
      let parents2 = $(target).parents();
      for (let k = 0; k < parents2.length; k += 1)
        $(parents2[k]).is(targetSelector) && listener.apply(parents2[k], eventData);
    }
  }
  function handleEvent(e) {
    let eventData = e && e.target ? e.target.dom7EventData || [] : [];
    eventData.indexOf(e) < 0 && eventData.unshift(e), listener.apply(this, eventData);
  }
  let events2 = eventType.split(" "), j;
  for (let i = 0; i < this.length; i += 1) {
    let el = this[i];
    if (targetSelector)
      for (j = 0; j < events2.length; j += 1) {
        let event6 = events2[j];
        el.dom7LiveListeners || (el.dom7LiveListeners = {}), el.dom7LiveListeners[event6] || (el.dom7LiveListeners[event6] = []), el.dom7LiveListeners[event6].push({
          listener,
          proxyListener: handleLiveEvent
        }), el.addEventListener(event6, handleLiveEvent, capture);
      }
    else
      for (j = 0; j < events2.length; j += 1) {
        let event6 = events2[j];
        el.dom7Listeners || (el.dom7Listeners = {}), el.dom7Listeners[event6] || (el.dom7Listeners[event6] = []), el.dom7Listeners[event6].push({
          listener,
          proxyListener: handleEvent
        }), el.addEventListener(event6, handleEvent, capture);
      }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  typeof args[1] == "function" && ([eventType, listener, capture] = args, targetSelector = void 0), capture || (capture = !1);
  let events2 = eventType.split(" ");
  for (let i = 0; i < events2.length; i += 1) {
    let event6 = events2[i];
    for (let j = 0; j < this.length; j += 1) {
      let el = this[j], handlers;
      if (!targetSelector && el.dom7Listeners ? handlers = el.dom7Listeners[event6] : targetSelector && el.dom7LiveListeners && (handlers = el.dom7LiveListeners[event6]), handlers && handlers.length)
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          let handler = handlers[k];
          listener && handler.listener === listener || listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener ? (el.removeEventListener(event6, handler.proxyListener, capture), handlers.splice(k, 1)) : listener || (el.removeEventListener(event6, handler.proxyListener, capture), handlers.splice(k, 1));
        }
    }
  }
  return this;
}
function trigger(...args) {
  let window2 = getWindow(), events2 = args[0].split(" "), eventData = args[1];
  for (let i = 0; i < events2.length; i += 1) {
    let event6 = events2[i];
    for (let j = 0; j < this.length; j += 1) {
      let el = this[j];
      if (window2.CustomEvent) {
        let evt = new window2.CustomEvent(event6, {
          detail: eventData,
          bubbles: !0,
          cancelable: !0
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0), el.dispatchEvent(evt), el.dom7EventData = [], delete el.dom7EventData;
      }
    }
  }
  return this;
}
function transitionEnd(callback) {
  let dom = this;
  function fireCallBack(e) {
    e.target === this && (callback.call(this, e), dom.off("transitionend", fireCallBack));
  }
  return callback && dom.on("transitionend", fireCallBack), this;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      let styles2 = this.styles();
      return this[0].offsetWidth + parseFloat(styles2.getPropertyValue("margin-right")) + parseFloat(styles2.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      let styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(styles2.getPropertyValue("margin-top")) + parseFloat(styles2.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    let window2 = getWindow(), document2 = getDocument(), el = this[0], box = el.getBoundingClientRect(), body = document2.body, clientTop = el.clientTop || body.clientTop || 0, clientLeft = el.clientLeft || body.clientLeft || 0, scrollTop = el === window2 ? window2.scrollY : el.scrollTop, scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  return null;
}
function styles() {
  let window2 = getWindow();
  return this[0] ? window2.getComputedStyle(this[0], null) : {};
}
function css(props, value) {
  let window2 = getWindow(), i;
  if (arguments.length === 1)
    if (typeof props == "string") {
      if (this[0])
        return window2.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1)
        for (let prop in props)
          this[i].style[prop] = props[prop];
      return this;
    }
  if (arguments.length === 2 && typeof props == "string") {
    for (i = 0; i < this.length; i += 1)
      this[i].style[props] = value;
    return this;
  }
  return this;
}
function each(callback) {
  return callback ? (this.forEach((el, index2) => {
    callback.apply(el, [el, index2]);
  }), this) : this;
}
function filter(callback) {
  let result = arrayFilter(this, callback);
  return $(result);
}
function html(html2) {
  if (typeof html2 > "u")
    return this[0] ? this[0].innerHTML : null;
  for (let i = 0; i < this.length; i += 1)
    this[i].innerHTML = html2;
  return this;
}
function text(text2) {
  if (typeof text2 > "u")
    return this[0] ? this[0].textContent.trim() : null;
  for (let i = 0; i < this.length; i += 1)
    this[i].textContent = text2;
  return this;
}
function is(selector) {
  let window2 = getWindow(), document2 = getDocument(), el = this[0], compareWith, i;
  if (!el || typeof selector > "u")
    return !1;
  if (typeof selector == "string") {
    if (el.matches)
      return el.matches(selector);
    if (el.webkitMatchesSelector)
      return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector)
      return el.msMatchesSelector(selector);
    for (compareWith = $(selector), i = 0; i < compareWith.length; i += 1)
      if (compareWith[i] === el)
        return !0;
    return !1;
  }
  if (selector === document2)
    return el === document2;
  if (selector === window2)
    return el === window2;
  if (selector.nodeType || selector instanceof Dom7) {
    for (compareWith = selector.nodeType ? [selector] : selector, i = 0; i < compareWith.length; i += 1)
      if (compareWith[i] === el)
        return !0;
    return !1;
  }
  return !1;
}
function index() {
  let child = this[0], i;
  if (child) {
    for (i = 0; (child = child.previousSibling) !== null; )
      child.nodeType === 1 && (i += 1);
    return i;
  }
}
function eq(index2) {
  if (typeof index2 > "u")
    return this;
  let length = this.length;
  if (index2 > length - 1)
    return $([]);
  if (index2 < 0) {
    let returnIndex = length + index2;
    return returnIndex < 0 ? $([]) : $([this[returnIndex]]);
  }
  return $([this[index2]]);
}
function append(...els) {
  let newChild, document2 = getDocument();
  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];
    for (let i = 0; i < this.length; i += 1)
      if (typeof newChild == "string") {
        let tempDiv = document2.createElement("div");
        for (tempDiv.innerHTML = newChild; tempDiv.firstChild; )
          this[i].appendChild(tempDiv.firstChild);
      } else if (newChild instanceof Dom7)
        for (let j = 0; j < newChild.length; j += 1)
          this[i].appendChild(newChild[j]);
      else
        this[i].appendChild(newChild);
  }
  return this;
}
function prepend(newChild) {
  let document2 = getDocument(), i, j;
  for (i = 0; i < this.length; i += 1)
    if (typeof newChild == "string") {
      let tempDiv = document2.createElement("div");
      for (tempDiv.innerHTML = newChild, j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
    } else if (newChild instanceof Dom7)
      for (j = 0; j < newChild.length; j += 1)
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
    else
      this[i].insertBefore(newChild, this[i].childNodes[0]);
  return this;
}
function next(selector) {
  return this.length > 0 ? selector ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector) ? $([this[0].nextElementSibling]) : $([]) : this[0].nextElementSibling ? $([this[0].nextElementSibling]) : $([]) : $([]);
}
function nextAll(selector) {
  let nextEls = [], el = this[0];
  if (!el)
    return $([]);
  for (; el.nextElementSibling; ) {
    let next2 = el.nextElementSibling;
    selector ? $(next2).is(selector) && nextEls.push(next2) : nextEls.push(next2), el = next2;
  }
  return $(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    let el = this[0];
    return selector ? el.previousElementSibling && $(el.previousElementSibling).is(selector) ? $([el.previousElementSibling]) : $([]) : el.previousElementSibling ? $([el.previousElementSibling]) : $([]);
  }
  return $([]);
}
function prevAll(selector) {
  let prevEls = [], el = this[0];
  if (!el)
    return $([]);
  for (; el.previousElementSibling; ) {
    let prev2 = el.previousElementSibling;
    selector ? $(prev2).is(selector) && prevEls.push(prev2) : prevEls.push(prev2), el = prev2;
  }
  return $(prevEls);
}
function parent(selector) {
  let parents2 = [];
  for (let i = 0; i < this.length; i += 1)
    this[i].parentNode !== null && (selector ? $(this[i].parentNode).is(selector) && parents2.push(this[i].parentNode) : parents2.push(this[i].parentNode));
  return $(parents2);
}
function parents(selector) {
  let parents2 = [];
  for (let i = 0; i < this.length; i += 1) {
    let parent2 = this[i].parentNode;
    for (; parent2; )
      selector ? $(parent2).is(selector) && parents2.push(parent2) : parents2.push(parent2), parent2 = parent2.parentNode;
  }
  return $(parents2);
}
function closest(selector) {
  let closest2 = this;
  return typeof selector > "u" ? $([]) : (closest2.is(selector) || (closest2 = closest2.parents(selector).eq(0)), closest2);
}
function find(selector) {
  let foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    let found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1)
      foundElements.push(found[j]);
  }
  return $(foundElements);
}
function children(selector) {
  let children2 = [];
  for (let i = 0; i < this.length; i += 1) {
    let childNodes = this[i].children;
    for (let j = 0; j < childNodes.length; j += 1)
      (!selector || $(childNodes[j]).is(selector)) && children2.push(childNodes[j]);
  }
  return $(children2);
}
function remove() {
  for (let i = 0; i < this.length; i += 1)
    this[i].parentNode && this[i].parentNode.removeChild(this[i]);
  return this;
}
var noTrigger = "resize scroll".split(" ");
function shortcut(name) {
  function eventHandler(...args) {
    if (typeof args[0] > "u") {
      for (let i = 0; i < this.length; i += 1)
        noTrigger.indexOf(name) < 0 && (name in this[i] ? this[i][name]() : $(this[i]).trigger(name));
      return this;
    }
    return this.on(name, ...args);
  }
  return eventHandler;
}
var click = shortcut("click"), blur = shortcut("blur"), focus = shortcut("focus"), focusin = shortcut("focusin"), focusout = shortcut("focusout"), keyup = shortcut("keyup"), keydown = shortcut("keydown"), keypress = shortcut("keypress"), submit = shortcut("submit"), change = shortcut("change"), mousedown = shortcut("mousedown"), mousemove = shortcut("mousemove"), mouseup = shortcut("mouseup"), mouseenter = shortcut("mouseenter"), mouseleave = shortcut("mouseleave"), mouseout = shortcut("mouseout"), mouseover = shortcut("mouseover"), touchstart = shortcut("touchstart"), touchend = shortcut("touchend"), touchmove = shortcut("touchmove"), resize = shortcut("resize"), scroll = shortcut("scroll");

// node_modules/swiper/shared/dom.js
var Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  transform,
  transition,
  on,
  off,
  trigger,
  transitionEnd,
  outerWidth,
  outerHeight,
  styles,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove
};
Object.keys(Methods).forEach((methodName) => {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: !0
  });
});
var dom_default = $;

// node_modules/swiper/shared/utils.js
function deleteProps(obj) {
  let object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch {
    }
    try {
      delete object[key];
    } catch {
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  let window2 = getWindow(), style;
  return window2.getComputedStyle && (style = window2.getComputedStyle(el, null)), !style && el.currentStyle && (style = el.currentStyle), style || (style = el.style), style;
}
function getTranslate(el, axis = "x") {
  let window2 = getWindow(), matrix, curTransform, transformMatrix, curStyle = getComputedStyle2(el, null);
  return window2.WebKitCSSMatrix ? (curTransform = curStyle.transform || curStyle.webkitTransform, curTransform.split(",").length > 6 && (curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ")), transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform)) : (transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), matrix = transformMatrix.toString().split(",")), axis === "x" && (window2.WebKitCSSMatrix ? curTransform = transformMatrix.m41 : matrix.length === 16 ? curTransform = parseFloat(matrix[12]) : curTransform = parseFloat(matrix[4])), axis === "y" && (window2.WebKitCSSMatrix ? curTransform = transformMatrix.m42 : matrix.length === 16 ? curTransform = parseFloat(matrix[13]) : curTransform = parseFloat(matrix[5])), curTransform || 0;
}
function isObject2(o) {
  return typeof o == "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? node instanceof HTMLElement : node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2(...args) {
  let to = Object(args[0]), noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < args.length; i += 1) {
    let nextSource = args[i];
    if (nextSource != null && !isNode(nextSource)) {
      let keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        let nextKey = keysArray[nextIndex], desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        desc !== void 0 && desc.enumerable && (isObject2(to[nextKey]) && isObject2(nextSource[nextKey]) ? nextSource[nextKey].__swiper__ ? to[nextKey] = nextSource[nextKey] : extend2(to[nextKey], nextSource[nextKey]) : !isObject2(to[nextKey]) && isObject2(nextSource[nextKey]) ? (to[nextKey] = {}, nextSource[nextKey].__swiper__ ? to[nextKey] = nextSource[nextKey] : extend2(to[nextKey], nextSource[nextKey])) : to[nextKey] = nextSource[nextKey]);
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  let window2 = getWindow(), startPosition = -swiper.translate, startTime = null, time, duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none", window2.cancelAnimationFrame(swiper.cssModeFrameID);
  let dir = targetPosition > startPosition ? "next" : "prev", isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target, animate = () => {
    time = new Date().getTime(), startTime === null && (startTime = time);
    let progress = Math.max(Math.min((time - startTime) / duration, 1), 0), easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2, currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition) && (currentPosition = targetPosition), swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    }), isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden", swiper.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        swiper.wrapperEl.style.overflow = "", swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      }), window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}

// node_modules/swiper/shared/get-support.js
var support;
function calcSupport() {
  let window2 = getWindow(), document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
    passiveListener: function() {
      let supportsPassive = !1;
      try {
        let opts = Object.defineProperty({}, "passive", {
          get() {
            supportsPassive = !0;
          }
        });
        window2.addEventListener("testPassiveListener", null, opts);
      } catch {
      }
      return supportsPassive;
    }(),
    gestures: function() {
      return "ongesturestart" in window2;
    }()
  };
}
function getSupport() {
  return support || (support = calcSupport()), support;
}

// node_modules/swiper/shared/get-device.js
var deviceCached;
function calcDevice({
  userAgent
} = {}) {
  let support2 = getSupport(), window2 = getWindow(), platform = window2.navigator.platform, ua = userAgent || window2.navigator.userAgent, device = {
    ios: !1,
    android: !1
  }, screenWidth = window2.screen.width, screenHeight = window2.screen.height, android = ua.match(/(Android);?[\s\/]+([\d.]+)?/), ipad = ua.match(/(iPad).*OS\s([\d_]+)/), ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/), iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/), windows = platform === "Win32", macos = platform === "MacIntel", iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0 && (ipad = ua.match(/(Version)\/([\d.]+)/), ipad || (ipad = [0, 1, "13_0_0"]), macos = !1), android && !windows && (device.os = "android", device.android = !0), (ipad || iphone || ipod) && (device.os = "ios", device.ios = !0), device;
}
function getDevice(overrides = {}) {
  return deviceCached || (deviceCached = calcDevice(overrides)), deviceCached;
}

// node_modules/swiper/shared/get-browser.js
var browser;
function calcBrowser() {
  let window2 = getWindow();
  function isSafari() {
    let ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  return browser || (browser = calcBrowser()), browser;
}

// node_modules/swiper/core/modules/resize/resize.js
function Resize({
  swiper,
  on: on2,
  emit
}) {
  let window2 = getWindow(), observer = null, animationFrame = null, resizeHandler = () => {
    !swiper || swiper.destroyed || !swiper.initialized || (emit("beforeResize"), emit("resize"));
  }, createObserver = () => {
    !swiper || swiper.destroyed || !swiper.initialized || (observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        let {
          width,
          height
        } = swiper, newWidth = width, newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          target && target !== swiper.el || (newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize, newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize);
        }), (newWidth !== width || newHeight !== height) && resizeHandler();
      });
    }), observer.observe(swiper.el));
  }, removeObserver = () => {
    animationFrame && window2.cancelAnimationFrame(animationFrame), observer && observer.unobserve && swiper.el && (observer.unobserve(swiper.el), observer = null);
  }, orientationChangeHandler = () => {
    !swiper || swiper.destroyed || !swiper.initialized || emit("orientationchange");
  };
  on2("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver < "u") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler), window2.addEventListener("orientationchange", orientationChangeHandler);
  }), on2("destroy", () => {
    removeObserver(), window2.removeEventListener("resize", resizeHandler), window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}

// node_modules/swiper/core/modules/observer/observer.js
function Observer({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  let observers = [], window2 = getWindow(), attach = (target, options2 = {}) => {
    let ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver, observer = new ObserverFunc((mutations) => {
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      let observerUpdate = function() {
        emit("observerUpdate", mutations[0]);
      };
      window2.requestAnimationFrame ? window2.requestAnimationFrame(observerUpdate) : window2.setTimeout(observerUpdate, 0);
    });
    observer.observe(target, {
      attributes: typeof options2.attributes > "u" ? !0 : options2.attributes,
      childList: typeof options2.childList > "u" ? !0 : options2.childList,
      characterData: typeof options2.characterData > "u" ? !0 : options2.characterData
    }), observers.push(observer);
  }, init = () => {
    if (!!swiper.params.observer) {
      if (swiper.params.observeParents) {
        let containerParents = swiper.$el.parents();
        for (let i = 0; i < containerParents.length; i += 1)
          attach(containerParents[i]);
      }
      attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      }), attach(swiper.$wrapperEl[0], {
        attributes: !1
      });
    }
  }, destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    }), observers.splice(0, observers.length);
  };
  extendParams({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), on2("init", init), on2("destroy", destroy);
}

// node_modules/swiper/core/events-emitter.js
var events_emitter_default = {
  on(events2, handler, priority) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || typeof handler != "function")
      return self;
    let method = priority ? "unshift" : "push";
    return events2.split(" ").forEach((event6) => {
      self.eventsListeners[event6] || (self.eventsListeners[event6] = []), self.eventsListeners[event6][method](handler);
    }), self;
  },
  once(events2, handler, priority) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || typeof handler != "function")
      return self;
    function onceHandler(...args) {
      self.off(events2, onceHandler), onceHandler.__emitterProxy && delete onceHandler.__emitterProxy, handler.apply(self, args);
    }
    return onceHandler.__emitterProxy = handler, self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || typeof handler != "function")
      return self;
    let method = priority ? "unshift" : "push";
    return self.eventsAnyListeners.indexOf(handler) < 0 && self.eventsAnyListeners[method](handler), self;
  },
  offAny(handler) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || !self.eventsAnyListeners)
      return self;
    let index2 = self.eventsAnyListeners.indexOf(handler);
    return index2 >= 0 && self.eventsAnyListeners.splice(index2, 1), self;
  },
  off(events2, handler) {
    let self = this;
    return !self.eventsListeners || self.destroyed || !self.eventsListeners || events2.split(" ").forEach((event6) => {
      typeof handler > "u" ? self.eventsListeners[event6] = [] : self.eventsListeners[event6] && self.eventsListeners[event6].forEach((eventHandler, index2) => {
        (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) && self.eventsListeners[event6].splice(index2, 1);
      });
    }), self;
  },
  emit(...args) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || !self.eventsListeners)
      return self;
    let events2, data, context;
    return typeof args[0] == "string" || Array.isArray(args[0]) ? (events2 = args[0], data = args.slice(1, args.length), context = self) : (events2 = args[0].events, data = args[0].data, context = args[0].context || self), data.unshift(context), (Array.isArray(events2) ? events2 : events2.split(" ")).forEach((event6) => {
      self.eventsAnyListeners && self.eventsAnyListeners.length && self.eventsAnyListeners.forEach((eventHandler) => {
        eventHandler.apply(context, [event6, ...data]);
      }), self.eventsListeners && self.eventsListeners[event6] && self.eventsListeners[event6].forEach((eventHandler) => {
        eventHandler.apply(context, data);
      });
    }), self;
  }
};

// node_modules/swiper/core/update/updateSize.js
function updateSize() {
  let swiper = this, width, height, $el = swiper.$el;
  typeof swiper.params.width < "u" && swiper.params.width !== null ? width = swiper.params.width : width = $el[0].clientWidth, typeof swiper.params.height < "u" && swiper.params.height !== null ? height = swiper.params.height : height = $el[0].clientHeight, !(width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) && (width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10), height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10), Number.isNaN(width) && (width = 0), Number.isNaN(height) && (height = 0), Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  }));
}

// node_modules/swiper/core/update/updateSlides.js
function updateSlides() {
  let swiper = this;
  function getDirectionLabel(property) {
    return swiper.isHorizontal() ? property : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  let params = swiper.params, {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper, isVirtual = swiper.virtual && params.virtual.enabled, previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length, slides = $wrapperEl.children(`.${swiper.params.slideClass}`), slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length, snapGrid = [], slidesGrid = [], slidesSizesGrid = [], offsetBefore = params.slidesOffsetBefore;
  typeof offsetBefore == "function" && (offsetBefore = params.slidesOffsetBefore.call(swiper));
  let offsetAfter = params.slidesOffsetAfter;
  typeof offsetAfter == "function" && (offsetAfter = params.slidesOffsetAfter.call(swiper));
  let previousSnapGridLength = swiper.snapGrid.length, previousSlidesGridLength = swiper.slidesGrid.length, spaceBetween = params.spaceBetween, slidePosition = -offsetBefore, prevSlideSize = 0, index2 = 0;
  if (typeof swiperSize > "u")
    return;
  typeof spaceBetween == "string" && spaceBetween.indexOf("%") >= 0 && (spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize), swiper.virtualSize = -spaceBetween, rtl ? slides.css({
    marginLeft: "",
    marginBottom: "",
    marginTop: ""
  }) : slides.css({
    marginRight: "",
    marginBottom: "",
    marginTop: ""
  }), params.centeredSlides && params.cssMode && (setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", ""), setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", ""));
  let gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  gridEnabled && swiper.grid.initSlides(slidesLength);
  let slideSize, shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => typeof params.breakpoints[key].slidesPerView < "u").length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide = slides.eq(i);
    if (gridEnabled && swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel), slide.css("display") !== "none") {
      if (params.slidesPerView === "auto") {
        shouldResetSlideSize && (slides[i].style[getDirectionLabel("width")] = "");
        let slideStyles = getComputedStyle(slide[0]), currentTransform = slide[0].style.transform, currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform && (slide[0].style.transform = "none"), currentWebKitTransform && (slide[0].style.webkitTransform = "none"), params.roundLengths)
          slideSize = swiper.isHorizontal() ? slide.outerWidth(!0) : slide.outerHeight(!0);
        else {
          let width = getDirectionPropertyValue(slideStyles, "width"), paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left"), paddingRight = getDirectionPropertyValue(slideStyles, "padding-right"), marginLeft = getDirectionPropertyValue(slideStyles, "margin-left"), marginRight = getDirectionPropertyValue(slideStyles, "margin-right"), boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box")
            slideSize = width + marginLeft + marginRight;
          else {
            let {
              clientWidth,
              offsetWidth
            } = slide[0];
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        currentTransform && (slide[0].style.transform = currentTransform), currentWebKitTransform && (slide[0].style.webkitTransform = currentWebKitTransform), params.roundLengths && (slideSize = Math.floor(slideSize));
      } else
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView, params.roundLengths && (slideSize = Math.floor(slideSize)), slides[i] && (slides[i].style[getDirectionLabel("width")] = `${slideSize}px`);
      slides[i] && (slides[i].swiperSlideSize = slideSize), slidesSizesGrid.push(slideSize), params.centeredSlides ? (slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween, prevSlideSize === 0 && i !== 0 && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween), i === 0 && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween), Math.abs(slidePosition) < 1 / 1e3 && (slidePosition = 0), params.roundLengths && (slidePosition = Math.floor(slidePosition)), index2 % params.slidesPerGroup === 0 && snapGrid.push(slidePosition), slidesGrid.push(slidePosition)) : (params.roundLengths && (slidePosition = Math.floor(slidePosition)), (index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) % swiper.params.slidesPerGroup === 0 && snapGrid.push(slidePosition), slidesGrid.push(slidePosition), slidePosition = slidePosition + slideSize + spaceBetween), swiper.virtualSize += slideSize + spaceBetween, prevSlideSize = slideSize, index2 += 1;
    }
  }
  if (swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter, rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow") && $wrapperEl.css({
    width: `${swiper.virtualSize + params.spaceBetween}px`
  }), params.setWrapperSize && $wrapperEl.css({
    [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
  }), gridEnabled && swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel), !params.centeredSlides) {
    let newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      params.roundLengths && (slidesGridItem = Math.floor(slidesGridItem)), snapGrid[i] <= swiper.virtualSize - swiperSize && newSlidesGrid.push(slidesGridItem);
    }
    snapGrid = newSlidesGrid, Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1 && snapGrid.push(swiper.virtualSize - swiperSize);
  }
  if (snapGrid.length === 0 && (snapGrid = [0]), params.spaceBetween !== 0) {
    let key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => params.cssMode ? slideIndex !== slides.length - 1 : !0).css({
      [key]: `${spaceBetween}px`
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    }), allSlidesSize -= params.spaceBetween;
    let maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map((snap) => snap < 0 ? -offsetBefore : snap > maxSnap ? maxSnap + offsetAfter : snap);
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    if (slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    }), allSlidesSize -= params.spaceBetween, allSlidesSize < swiperSize) {
      let allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      }), slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  if (Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  }), params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`), setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    let addToSnapGrid = -swiper.snapGrid[0], addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid), swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength && swiper.emit("slidesLengthChange"), snapGrid.length !== previousSnapGridLength && (swiper.params.watchOverflow && swiper.checkOverflow(), swiper.emit("snapGridLengthChange")), slidesGrid.length !== previousSlidesGridLength && swiper.emit("slidesGridLengthChange"), params.watchSlidesProgress && swiper.updateSlidesOffset(), !isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    let backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`, hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
    slidesLength <= params.maxBackfaceHiddenSlides ? hasClassBackfaceClassAdded || swiper.$el.addClass(backFaceHiddenClass) : hasClassBackfaceClassAdded && swiper.$el.removeClass(backFaceHiddenClass);
  }
}

// node_modules/swiper/core/update/updateAutoHeight.js
function updateAutoHeight(speed) {
  let swiper = this, activeSlides = [], isVirtual = swiper.virtual && swiper.params.virtual.enabled, newHeight = 0, i;
  typeof speed == "number" ? swiper.setTransition(speed) : speed === !0 && swiper.setTransition(swiper.params.speed);
  let getSlideByIndex = (index2) => isVirtual ? swiper.slides.filter((el) => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index2)[0] : swiper.slides.eq(index2)[0];
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1)
    if (swiper.params.centeredSlides)
      (swiper.visibleSlides || dom_default([])).each((slide) => {
        activeSlides.push(slide);
      });
    else
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        let index2 = swiper.activeIndex + i;
        if (index2 > swiper.slides.length && !isVirtual)
          break;
        activeSlides.push(getSlideByIndex(index2));
      }
  else
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  for (i = 0; i < activeSlides.length; i += 1)
    if (typeof activeSlides[i] < "u") {
      let height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  (newHeight || newHeight === 0) && swiper.$wrapperEl.css("height", `${newHeight}px`);
}

// node_modules/swiper/core/update/updateSlidesOffset.js
function updateSlidesOffset() {
  let swiper = this, slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1)
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}

// node_modules/swiper/core/update/updateSlidesProgress.js
function updateSlidesProgress(translate = this && this.translate || 0) {
  let swiper = this, params = swiper.params, {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0)
    return;
  typeof slides[0].swiperSlideOffset > "u" && swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  rtl && (offsetCenter = translate), slides.removeClass(params.slideVisibleClass), swiper.visibleSlidesIndexes = [], swiper.visibleSlides = [];
  for (let i = 0; i < slides.length; i += 1) {
    let slide = slides[i], slideOffset = slide.swiperSlideOffset;
    params.cssMode && params.centeredSlides && (slideOffset -= slides[0].swiperSlideOffset);
    let slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween), originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween), slideBefore = -(offsetCenter - slideOffset), slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    (slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size) && (swiper.visibleSlides.push(slide), swiper.visibleSlidesIndexes.push(i), slides.eq(i).addClass(params.slideVisibleClass)), slide.progress = rtl ? -slideProgress : slideProgress, slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
  swiper.visibleSlides = dom_default(swiper.visibleSlides);
}

// node_modules/swiper/core/update/updateProgress.js
function updateProgress(translate) {
  let swiper = this;
  if (typeof translate > "u") {
    let multiplier = swiper.rtlTranslate ? -1 : 1;
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  let params = swiper.params, translatesDiff = swiper.maxTranslate() - swiper.minTranslate(), {
    progress,
    isBeginning,
    isEnd
  } = swiper, wasBeginning = isBeginning, wasEnd = isEnd;
  translatesDiff === 0 ? (progress = 0, isBeginning = !0, isEnd = !0) : (progress = (translate - swiper.minTranslate()) / translatesDiff, isBeginning = progress <= 0, isEnd = progress >= 1), Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  }), (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) && swiper.updateSlidesProgress(translate), isBeginning && !wasBeginning && swiper.emit("reachBeginning toEdge"), isEnd && !wasEnd && swiper.emit("reachEnd toEdge"), (wasBeginning && !isBeginning || wasEnd && !isEnd) && swiper.emit("fromEdge"), swiper.emit("progress", progress);
}

// node_modules/swiper/core/update/updateSlidesClasses.js
function updateSlidesClasses() {
  let swiper = this, {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper, isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;
  isVirtual ? activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`) : activeSlide = slides.eq(activeIndex), activeSlide.addClass(params.slideActiveClass), params.loop && (activeSlide.hasClass(params.slideDuplicateClass) ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass) : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass));
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  params.loop && nextSlide.length === 0 && (nextSlide = slides.eq(0), nextSlide.addClass(params.slideNextClass));
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  params.loop && prevSlide.length === 0 && (prevSlide = slides.eq(-1), prevSlide.addClass(params.slidePrevClass)), params.loop && (nextSlide.hasClass(params.slideDuplicateClass) ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass) : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass), prevSlide.hasClass(params.slideDuplicateClass) ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass) : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass)), swiper.emitSlidesClasses();
}

// node_modules/swiper/core/update/updateActiveIndex.js
function updateActiveIndex(newActiveIndex) {
  let swiper = this, translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate, {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper, activeIndex = newActiveIndex, snapIndex;
  if (typeof activeIndex > "u") {
    for (let i = 0; i < slidesGrid.length; i += 1)
      typeof slidesGrid[i + 1] < "u" ? translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2 ? activeIndex = i : translate >= slidesGrid[i] && translate < slidesGrid[i + 1] && (activeIndex = i + 1) : translate >= slidesGrid[i] && (activeIndex = i);
    params.normalizeSlideIndex && (activeIndex < 0 || typeof activeIndex > "u") && (activeIndex = 0);
  }
  if (snapGrid.indexOf(translate) >= 0)
    snapIndex = snapGrid.indexOf(translate);
  else {
    let skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1), activeIndex === previousIndex) {
    snapIndex !== previousSnapIndex && (swiper.snapIndex = snapIndex, swiper.emit("snapIndexChange"));
    return;
  }
  let realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  }), swiper.emit("activeIndexChange"), swiper.emit("snapIndexChange"), previousRealIndex !== realIndex && swiper.emit("realIndexChange"), (swiper.initialized || swiper.params.runCallbacksOnInit) && swiper.emit("slideChange");
}

// node_modules/swiper/core/update/updateClickedSlide.js
function updateClickedSlide(e) {
  let swiper = this, params = swiper.params, slide = dom_default(e).closest(`.${params.slideClass}`)[0], slideFound = !1, slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1)
      if (swiper.slides[i] === slide) {
        slideFound = !0, slideIndex = i;
        break;
      }
  }
  if (slide && slideFound)
    swiper.clickedSlide = slide, swiper.virtual && swiper.params.virtual.enabled ? swiper.clickedIndex = parseInt(dom_default(slide).attr("data-swiper-slide-index"), 10) : swiper.clickedIndex = slideIndex;
  else {
    swiper.clickedSlide = void 0, swiper.clickedIndex = void 0;
    return;
  }
  params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex && swiper.slideToClickedSlide();
}

// node_modules/swiper/core/update/index.js
var update_default = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

// node_modules/swiper/core/translate/getTranslate.js
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
  let swiper = this, {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;
  if (params.virtualTranslate)
    return rtl ? -translate : translate;
  if (params.cssMode)
    return translate;
  let currentTranslate = getTranslate($wrapperEl[0], axis);
  return rtl && (currentTranslate = -currentTranslate), currentTranslate || 0;
}

// node_modules/swiper/core/translate/setTranslate.js
function setTranslate(translate, byController) {
  let swiper = this, {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper, x = 0, y = 0, z16 = 0;
  swiper.isHorizontal() ? x = rtl ? -translate : translate : y = translate, params.roundLengths && (x = Math.floor(x), y = Math.floor(y)), params.cssMode ? wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y : params.virtualTranslate || $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z16}px)`), swiper.previousTranslate = swiper.translate, swiper.translate = swiper.isHorizontal() ? x : y;
  let newProgress, translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  translatesDiff === 0 ? newProgress = 0 : newProgress = (translate - swiper.minTranslate()) / translatesDiff, newProgress !== progress && swiper.updateProgress(translate), swiper.emit("setTranslate", swiper.translate, byController);
}

// node_modules/swiper/core/translate/minTranslate.js
function minTranslate() {
  return -this.snapGrid[0];
}

// node_modules/swiper/core/translate/maxTranslate.js
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

// node_modules/swiper/core/translate/translateTo.js
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = !0, translateBounds = !0, internal) {
  let swiper = this, {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition)
    return !1;
  let minTranslate2 = swiper.minTranslate(), maxTranslate2 = swiper.maxTranslate(), newTranslate;
  if (translateBounds && translate > minTranslate2 ? newTranslate = minTranslate2 : translateBounds && translate < maxTranslate2 ? newTranslate = maxTranslate2 : newTranslate = translate, swiper.updateProgress(newTranslate), params.cssMode) {
    let isH = swiper.isHorizontal();
    if (speed === 0)
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    else {
      if (!swiper.support.smoothScroll)
        return animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        }), !0;
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return speed === 0 ? (swiper.setTransition(0), swiper.setTranslate(newTranslate), runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal), swiper.emit("transitionEnd"))) : (swiper.setTransition(speed), swiper.setTranslate(newTranslate), runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal), swiper.emit("transitionStart")), swiper.animating || (swiper.animating = !0, swiper.onTranslateToWrapperTransitionEnd || (swiper.onTranslateToWrapperTransitionEnd = function(e) {
    !swiper || swiper.destroyed || e.target === this && (swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd), swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd), swiper.onTranslateToWrapperTransitionEnd = null, delete swiper.onTranslateToWrapperTransitionEnd, runCallbacks && swiper.emit("transitionEnd"));
  }), swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd), swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd))), !0;
}

// node_modules/swiper/core/translate/index.js
var translate_default = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

// node_modules/swiper/core/transition/setTransition.js
function setTransition(duration, byController) {
  let swiper = this;
  swiper.params.cssMode || swiper.$wrapperEl.transition(duration), swiper.emit("setTransition", duration, byController);
}

// node_modules/swiper/core/transition/transitionEmit.js
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  let {
    activeIndex,
    previousIndex
  } = swiper, dir = direction;
  if (dir || (activeIndex > previousIndex ? dir = "next" : activeIndex < previousIndex ? dir = "prev" : dir = "reset"), swiper.emit(`transition${step}`), runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`), dir === "next" ? swiper.emit(`slideNextTransition${step}`) : swiper.emit(`slidePrevTransition${step}`);
  }
}

// node_modules/swiper/core/transition/transitionStart.js
function transitionStart(runCallbacks = !0, direction) {
  let swiper = this, {
    params
  } = swiper;
  params.cssMode || (params.autoHeight && swiper.updateAutoHeight(), transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  }));
}

// node_modules/swiper/core/transition/transitionEnd.js
function transitionEnd2(runCallbacks = !0, direction) {
  let swiper = this, {
    params
  } = swiper;
  swiper.animating = !1, !params.cssMode && (swiper.setTransition(0), transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  }));
}

// node_modules/swiper/core/transition/index.js
var transition_default = {
  setTransition,
  transitionStart,
  transitionEnd: transitionEnd2
};

// node_modules/swiper/core/slide/slideTo.js
function slideTo(index2 = 0, speed = this.params.speed, runCallbacks = !0, internal, initial) {
  if (typeof index2 != "number" && typeof index2 != "string")
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index2}] given.`);
  if (typeof index2 == "string") {
    let indexAsNumber = parseInt(index2, 10);
    if (!isFinite(indexAsNumber))
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`);
    index2 = indexAsNumber;
  }
  let swiper = this, slideIndex = index2;
  slideIndex < 0 && (slideIndex = 0);
  let {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial)
    return !1;
  let skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex), snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1);
  let translate = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex)
    for (let i = 0; i < slidesGrid.length; i += 1) {
      let normalizedTranslate = -Math.floor(translate * 100), normalizedGrid = Math.floor(slidesGrid[i] * 100), normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      typeof slidesGrid[i + 1] < "u" ? normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2 ? slideIndex = i : normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext && (slideIndex = i + 1) : normalizedTranslate >= normalizedGrid && (slideIndex = i);
    }
  if (swiper.initialized && slideIndex !== activeIndex && (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate() || !swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate() && (activeIndex || 0) !== slideIndex))
    return !1;
  slideIndex !== (previousIndex || 0) && runCallbacks && swiper.emit("beforeSlideChangeStart"), swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex ? direction = "next" : slideIndex < activeIndex ? direction = "prev" : direction = "reset", rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)
    return swiper.updateActiveIndex(slideIndex), params.autoHeight && swiper.updateAutoHeight(), swiper.updateSlidesClasses(), params.effect !== "slide" && swiper.setTranslate(translate), direction !== "reset" && (swiper.transitionStart(runCallbacks, direction), swiper.transitionEnd(runCallbacks, direction)), !1;
  if (params.cssMode) {
    let isH = swiper.isHorizontal(), t = rtl ? translate : -translate;
    if (speed === 0) {
      let isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      isVirtual && (swiper.wrapperEl.style.scrollSnapType = "none", swiper._immediateVirtual = !0), wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t, isVirtual && requestAnimationFrame(() => {
        swiper.wrapperEl.style.scrollSnapType = "", swiper._swiperImmediateVirtual = !1;
      });
    } else {
      if (!swiper.support.smoothScroll)
        return animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        }), !0;
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return swiper.setTransition(speed), swiper.setTranslate(translate), swiper.updateActiveIndex(slideIndex), swiper.updateSlidesClasses(), swiper.emit("beforeTransitionStart", speed, internal), swiper.transitionStart(runCallbacks, direction), speed === 0 ? swiper.transitionEnd(runCallbacks, direction) : swiper.animating || (swiper.animating = !0, swiper.onSlideToWrapperTransitionEnd || (swiper.onSlideToWrapperTransitionEnd = function(e) {
    !swiper || swiper.destroyed || e.target === this && (swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd), swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd), swiper.onSlideToWrapperTransitionEnd = null, delete swiper.onSlideToWrapperTransitionEnd, swiper.transitionEnd(runCallbacks, direction));
  }), swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd), swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd)), !0;
}

// node_modules/swiper/core/slide/slideToLoop.js
function slideToLoop(index2 = 0, speed = this.params.speed, runCallbacks = !0, internal) {
  if (typeof index2 == "string") {
    let indexAsNumber = parseInt(index2, 10);
    if (!isFinite(indexAsNumber))
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`);
    index2 = indexAsNumber;
  }
  let swiper = this, newIndex = index2;
  return swiper.params.loop && (newIndex += swiper.loopedSlides), swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

// node_modules/swiper/core/slide/slideNext.js
function slideNext(speed = this.params.speed, runCallbacks = !0, internal) {
  let swiper = this, {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled)
    return swiper;
  let perGroup = params.slidesPerGroup;
  params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto && (perGroup = Math.max(swiper.slidesPerViewDynamic("current", !0), 1));
  let increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return !1;
    swiper.loopFix(), swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  return params.rewind && swiper.isEnd ? swiper.slideTo(0, speed, runCallbacks, internal) : swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

// node_modules/swiper/core/slide/slidePrev.js
function slidePrev(speed = this.params.speed, runCallbacks = !0, internal) {
  let swiper = this, {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return swiper;
  if (params.loop) {
    if (animating && params.loopPreventsSlide)
      return !1;
    swiper.loopFix(), swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  let translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    return val < 0 ? -Math.floor(Math.abs(val)) : Math.floor(val);
  }
  let normalizedTranslate = normalize(translate), normalizedSnapGrid = snapGrid.map((val) => normalize(val)), prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap > "u" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      normalizedTranslate >= snap && (prevSnapIndex = snapIndex);
    }), typeof prevSnapIndex < "u" && (prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex]);
  }
  let prevIndex = 0;
  if (typeof prevSnap < "u" && (prevIndex = slidesGrid.indexOf(prevSnap), prevIndex < 0 && (prevIndex = swiper.activeIndex - 1), params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto && (prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", !0) + 1, prevIndex = Math.max(prevIndex, 0))), params.rewind && swiper.isBeginning) {
    let lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

// node_modules/swiper/core/slide/slideReset.js
function slideReset(speed = this.params.speed, runCallbacks = !0, internal) {
  let swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

// node_modules/swiper/core/slide/slideToClosest.js
function slideToClosest(speed = this.params.speed, runCallbacks = !0, internal, threshold = 0.5) {
  let swiper = this, index2 = swiper.activeIndex, skip = Math.min(swiper.params.slidesPerGroupSkip, index2), snapIndex = skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup), translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    let currentSnap = swiper.snapGrid[snapIndex], nextSnap = swiper.snapGrid[snapIndex + 1];
    translate - currentSnap > (nextSnap - currentSnap) * threshold && (index2 += swiper.params.slidesPerGroup);
  } else {
    let prevSnap = swiper.snapGrid[snapIndex - 1], currentSnap = swiper.snapGrid[snapIndex];
    translate - prevSnap <= (currentSnap - prevSnap) * threshold && (index2 -= swiper.params.slidesPerGroup);
  }
  return index2 = Math.max(index2, 0), index2 = Math.min(index2, swiper.slidesGrid.length - 1), swiper.slideTo(index2, speed, runCallbacks, internal);
}

// node_modules/swiper/core/slide/slideToClickedSlide.js
function slideToClickedSlide() {
  let swiper = this, {
    params,
    $wrapperEl
  } = swiper, slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView, slideToIndex = swiper.clickedIndex, realIndex;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt(dom_default(swiper.clickedSlide).attr("data-swiper-slide-index"), 10), params.centeredSlides ? slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2 ? (swiper.loopFix(), slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index(), nextTick(() => {
      swiper.slideTo(slideToIndex);
    })) : swiper.slideTo(slideToIndex) : slideToIndex > swiper.slides.length - slidesPerView ? (swiper.loopFix(), slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index(), nextTick(() => {
      swiper.slideTo(slideToIndex);
    })) : swiper.slideTo(slideToIndex);
  } else
    swiper.slideTo(slideToIndex);
}

// node_modules/swiper/core/slide/index.js
var slide_default = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

// node_modules/swiper/core/loop/loopCreate.js
function loopCreate() {
  let swiper = this, document2 = getDocument(), {
    params,
    $wrapperEl
  } = swiper, $selector = $wrapperEl.children().length > 0 ? dom_default($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);
  if (params.loopFillGroupWithBlank) {
    let blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        let blankNode = dom_default(document2.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }
      slides = $selector.children(`.${params.slideClass}`);
    }
  }
  params.slidesPerView === "auto" && !params.loopedSlides && (params.loopedSlides = slides.length), swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10)), swiper.loopedSlides += params.loopAdditionalSlides, swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit && (swiper.loopedSlides = slides.length);
  let prependSlides = [], appendSlides = [];
  slides.each((el, index2) => {
    dom_default(el).attr("data-swiper-slide-index", index2);
  });
  for (let i = 0; i < swiper.loopedSlides; i += 1) {
    let index2 = i - Math.floor(i / slides.length) * slides.length;
    appendSlides.push(slides.eq(index2)[0]), prependSlides.unshift(slides.eq(slides.length - index2 - 1)[0]);
  }
  for (let i = 0; i < appendSlides.length; i += 1)
    $selector.append(dom_default(appendSlides[i].cloneNode(!0)).addClass(params.slideDuplicateClass));
  for (let i = prependSlides.length - 1; i >= 0; i -= 1)
    $selector.prepend(dom_default(prependSlides[i].cloneNode(!0)).addClass(params.slideDuplicateClass));
}

// node_modules/swiper/core/loop/loopFix.js
function loopFix() {
  let swiper = this;
  swiper.emit("beforeLoopFix");
  let {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper, newIndex;
  swiper.allowSlidePrev = !0, swiper.allowSlideNext = !0;
  let diff = -snapGrid[activeIndex] - swiper.getTranslate();
  activeIndex < loopedSlides ? (newIndex = slides.length - loopedSlides * 3 + activeIndex, newIndex += loopedSlides, swiper.slideTo(newIndex, 0, !1, !0) && diff !== 0 && swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)) : activeIndex >= slides.length - loopedSlides && (newIndex = -slides.length + activeIndex + loopedSlides, newIndex += loopedSlides, swiper.slideTo(newIndex, 0, !1, !0) && diff !== 0 && swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)), swiper.allowSlidePrev = allowSlidePrev, swiper.allowSlideNext = allowSlideNext, swiper.emit("loopFix");
}

// node_modules/swiper/core/loop/loopDestroy.js
function loopDestroy() {
  let swiper = this, {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove(), slides.removeAttr("data-swiper-slide-index");
}

// node_modules/swiper/core/loop/index.js
var loop_default = {
  loopCreate,
  loopFix,
  loopDestroy
};

// node_modules/swiper/core/grab-cursor/setGrabCursor.js
function setGrabCursor(moving) {
  let swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  let el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  el.style.cursor = "move", el.style.cursor = moving ? "grabbing" : "grab";
}

// node_modules/swiper/core/grab-cursor/unsetGrabCursor.js
function unsetGrabCursor() {
  let swiper = this;
  swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode || (swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "");
}

// node_modules/swiper/core/grab-cursor/index.js
var grab_cursor_default = {
  setGrabCursor,
  unsetGrabCursor
};

// node_modules/swiper/core/events/onTouchStart.js
function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow())
      return null;
    el.assignedSlot && (el = el.assignedSlot);
    let found = el.closest(selector);
    return !found && !el.getRootNode ? null : found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event6) {
  let swiper = this, document2 = getDocument(), window2 = getWindow(), data = swiper.touchEventsData, {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled || swiper.animating && params.preventInteractionOnTransition)
    return;
  !swiper.animating && params.cssMode && params.loop && swiper.loopFix();
  let e = event6;
  e.originalEvent && (e = e.originalEvent);
  let $targetEl = dom_default(e.target);
  if (params.touchEventsTarget === "wrapper" && !$targetEl.closest(swiper.wrapperEl).length || (data.isTouchEvent = e.type === "touchstart", !data.isTouchEvent && "which" in e && e.which === 3) || !data.isTouchEvent && "button" in e && e.button > 0 || data.isTouched && data.isMoved)
    return;
  let swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "", eventPath = event6.composedPath ? event6.composedPath() : event6.path;
  swipingClassHasValue && e.target && e.target.shadowRoot && eventPath && ($targetEl = dom_default(eventPath[0]));
  let noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`, isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = !0;
    return;
  }
  if (params.swipeHandler && !$targetEl.closest(params.swipeHandler)[0])
    return;
  touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX, touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
  let startX = touches.currentX, startY = touches.currentY, edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection, edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold))
    if (edgeSwipeDetection === "prevent")
      event6.preventDefault();
    else
      return;
  if (Object.assign(data, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), touches.startX = startX, touches.startY = startY, data.touchStartTime = now(), swiper.allowClick = !0, swiper.updateSize(), swiper.swipeDirection = void 0, params.threshold > 0 && (data.allowThresholdMove = !1), e.type !== "touchstart") {
    let preventDefault = !0;
    $targetEl.is(data.focusableElements) && (preventDefault = !1, $targetEl[0].nodeName === "SELECT" && (data.isTouched = !1)), document2.activeElement && dom_default(document2.activeElement).is(data.focusableElements) && document2.activeElement !== $targetEl[0] && document2.activeElement.blur();
    let shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    (params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable && e.preventDefault();
  }
  swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode && swiper.freeMode.onTouchStart(), swiper.emit("touchStart", e);
}

// node_modules/swiper/core/events/onTouchMove.js
function onTouchMove(event6) {
  let document2 = getDocument(), swiper = this, data = swiper.touchEventsData, {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled)
    return;
  let e = event6;
  if (e.originalEvent && (e = e.originalEvent), !data.isTouched) {
    data.startMoving && data.isScrolling && swiper.emit("touchMoveOpposite", e);
    return;
  }
  if (data.isTouchEvent && e.type !== "touchmove")
    return;
  let targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]), pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX, pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX, touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    dom_default(e.target).is(data.focusableElements) || (swiper.allowClick = !1), data.isTouched && (Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY
    }), data.touchStartTime = now());
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = !1, data.isMoved = !1;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      return;
  }
  if (data.isTouchEvent && document2.activeElement && e.target === document2.activeElement && dom_default(e.target).is(data.focusableElements)) {
    data.isMoved = !0, swiper.allowClick = !1;
    return;
  }
  if (data.allowTouchCallbacks && swiper.emit("touchMove", e), e.targetTouches && e.targetTouches.length > 1)
    return;
  touches.currentX = pageX, touches.currentY = pageY;
  let diffX = touches.currentX - touches.startX, diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
    return;
  if (typeof data.isScrolling > "u") {
    let touchAngle;
    swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX ? data.isScrolling = !1 : diffX * diffX + diffY * diffY >= 25 && (touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI, data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle);
  }
  if (data.isScrolling && swiper.emit("touchMoveOpposite", e), typeof data.startMoving > "u" && (touches.currentX !== touches.startX || touches.currentY !== touches.startY) && (data.startMoving = !0), data.isScrolling) {
    data.isTouched = !1;
    return;
  }
  if (!data.startMoving)
    return;
  swiper.allowClick = !1, !params.cssMode && e.cancelable && e.preventDefault(), params.touchMoveStopPropagation && !params.nested && e.stopPropagation(), data.isMoved || (params.loop && !params.cssMode && swiper.loopFix(), data.startTranslate = swiper.getTranslate(), swiper.setTransition(0), swiper.animating && swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend"), data.allowMomentumBounce = !1, params.grabCursor && (swiper.allowSlideNext === !0 || swiper.allowSlidePrev === !0) && swiper.setGrabCursor(!0), swiper.emit("sliderFirstMove", e)), swiper.emit("sliderMove", e), data.isMoved = !0;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff, diff *= params.touchRatio, rtl && (diff = -diff), swiper.swipeDirection = diff > 0 ? "prev" : "next", data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = !0, resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges && (resistanceRatio = 0), diff > 0 && data.currentTranslate > swiper.minTranslate() ? (disableParentSwiper = !1, params.resistance && (data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio)) : diff < 0 && data.currentTranslate < swiper.maxTranslate() && (disableParentSwiper = !1, params.resistance && (data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio)), disableParentSwiper && (e.preventedByNestedSwiper = !0), !swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate), !swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate), !swiper.allowSlidePrev && !swiper.allowSlideNext && (data.currentTranslate = data.startTranslate), params.threshold > 0)
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = !0, touches.startX = touches.currentX, touches.startY = touches.currentY, data.currentTranslate = data.startTranslate, touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  !params.followFinger || params.cssMode || ((params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) && (swiper.updateActiveIndex(), swiper.updateSlidesClasses()), swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.freeMode.onTouchMove(), swiper.updateProgress(data.currentTranslate), swiper.setTranslate(data.currentTranslate));
}

// node_modules/swiper/core/events/onTouchEnd.js
function onTouchEnd(event6) {
  let swiper = this, data = swiper.touchEventsData, {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled)
    return;
  let e = event6;
  if (e.originalEvent && (e = e.originalEvent), data.allowTouchCallbacks && swiper.emit("touchEnd", e), data.allowTouchCallbacks = !1, !data.isTouched) {
    data.isMoved && params.grabCursor && swiper.setGrabCursor(!1), data.isMoved = !1, data.startMoving = !1;
    return;
  }
  params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === !0 || swiper.allowSlidePrev === !0) && swiper.setGrabCursor(!1);
  let touchEndTime = now(), timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    let pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target), swiper.emit("tap click", e), timeDiff < 300 && touchEndTime - data.lastClickTime < 300 && swiper.emit("doubleTap doubleClick", e);
  }
  if (data.lastClickTime = now(), nextTick(() => {
    swiper.destroyed || (swiper.allowClick = !0);
  }), !data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = !1, data.isMoved = !1, data.startMoving = !1;
    return;
  }
  data.isTouched = !1, data.isMoved = !1, data.startMoving = !1;
  let currentPos;
  if (params.followFinger ? currentPos = rtl ? swiper.translate : -swiper.translate : currentPos = -data.currentTranslate, params.cssMode)
    return;
  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0, groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    let increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    typeof slidesGrid[i + increment2] < "u" ? currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2] && (stopIndex = i, groupSize = slidesGrid[i + increment2] - slidesGrid[i]) : currentPos >= slidesGrid[i] && (stopIndex = i, groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2]);
  }
  let rewindFirstIndex = null, rewindLastIndex = null;
  params.rewind && (swiper.isBeginning ? rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1 : swiper.isEnd && (rewindFirstIndex = 0));
  let ratio = (currentPos - slidesGrid[stopIndex]) / groupSize, increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    swiper.swipeDirection === "next" && (ratio >= params.longSwipesRatio ? swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment) : swiper.slideTo(stopIndex)), swiper.swipeDirection === "prev" && (ratio > 1 - params.longSwipesRatio ? swiper.slideTo(stopIndex + increment) : rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio ? swiper.slideTo(rewindLastIndex) : swiper.slideTo(stopIndex));
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl) ? e.target === swiper.navigation.nextEl ? swiper.slideTo(stopIndex + increment) : swiper.slideTo(stopIndex) : (swiper.swipeDirection === "next" && swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment), swiper.swipeDirection === "prev" && swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex));
  }
}

// node_modules/swiper/core/events/onResize.js
function onResize() {
  let swiper = this, {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0)
    return;
  params.breakpoints && swiper.setBreakpoint();
  let {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  swiper.allowSlideNext = !0, swiper.allowSlidePrev = !0, swiper.updateSize(), swiper.updateSlides(), swiper.updateSlidesClasses(), (params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0) : swiper.slideTo(swiper.activeIndex, 0, !1, !0), swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused && swiper.autoplay.run(), swiper.allowSlidePrev = allowSlidePrev, swiper.allowSlideNext = allowSlideNext, swiper.params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow();
}

// node_modules/swiper/core/events/onClick.js
function onClick(e) {
  let swiper = this;
  !swiper.enabled || swiper.allowClick || (swiper.params.preventClicks && e.preventDefault(), swiper.params.preventClicksPropagation && swiper.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
}

// node_modules/swiper/core/events/onScroll.js
function onScroll() {
  let swiper = this, {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate, swiper.isHorizontal() ? swiper.translate = -wrapperEl.scrollLeft : swiper.translate = -wrapperEl.scrollTop, swiper.translate === 0 && (swiper.translate = 0), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
  let newProgress, translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  translatesDiff === 0 ? newProgress = 0 : newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff, newProgress !== swiper.progress && swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate), swiper.emit("setTranslate", swiper.translate, !1);
}

// node_modules/swiper/core/events/index.js
var dummyEventAttached = !1;
function dummyEventListener() {
}
var events = (swiper, method) => {
  let document2 = getDocument(), {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support: support2
  } = swiper, capture = !!params.nested, domMethod = method === "on" ? "addEventListener" : "removeEventListener", swiperMethod = method;
  if (!support2.touch)
    el[domMethod](touchEvents.start, swiper.onTouchStart, !1), document2[domMethod](touchEvents.move, swiper.onTouchMove, capture), document2[domMethod](touchEvents.end, swiper.onTouchEnd, !1);
  else {
    let passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener), el[domMethod](touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
      passive: !1,
      capture
    } : capture), el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener), touchEvents.cancel && el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
  }
  (params.preventClicks || params.preventClicksPropagation) && el[domMethod]("click", swiper.onClick, !0), params.cssMode && wrapperEl[domMethod]("scroll", swiper.onScroll), params.updateOnWindowResize ? swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : swiper[swiperMethod]("observerUpdate", onResize, !0);
};
function attachEvents() {
  let swiper = this, document2 = getDocument(), {
    params,
    support: support2
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper), swiper.onTouchMove = onTouchMove.bind(swiper), swiper.onTouchEnd = onTouchEnd.bind(swiper), params.cssMode && (swiper.onScroll = onScroll.bind(swiper)), swiper.onClick = onClick.bind(swiper), support2.touch && !dummyEventAttached && (document2.addEventListener("touchstart", dummyEventListener), dummyEventAttached = !0), events(swiper, "on");
}
function detachEvents() {
  events(this, "off");
}
var events_default = {
  attachEvents,
  detachEvents
};

// node_modules/swiper/core/breakpoints/setBreakpoint.js
var isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
function setBreakpoint() {
  let swiper = this, {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper, breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0)
    return;
  let breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  let breakpointParams = (breakpoint in breakpoints ? breakpoints[breakpoint] : void 0) || swiper.originalParams, wasMultiRow = isGridEnabled(swiper, params), isMultiRow = isGridEnabled(swiper, breakpointParams), wasEnabled = params.enabled;
  wasMultiRow && !isMultiRow ? ($el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`), swiper.emitContainerClasses()) : !wasMultiRow && isMultiRow && ($el.addClass(`${params.containerModifierClass}grid`), (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") && $el.addClass(`${params.containerModifierClass}grid-column`), swiper.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    let wasModuleEnabled = params[prop] && params[prop].enabled, isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    wasModuleEnabled && !isModuleEnabled && swiper[prop].disable(), !wasModuleEnabled && isModuleEnabled && swiper[prop].enable();
  });
  let directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction, needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  directionChanged && initialized && swiper.changeDirection(), extend2(swiper.params, breakpointParams);
  let isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  }), wasEnabled && !isEnabled ? swiper.disable() : !wasEnabled && isEnabled && swiper.enable(), swiper.currentBreakpoint = breakpoint, swiper.emit("_beforeBreakpoint", breakpointParams), needsReLoop && initialized && (swiper.loopDestroy(), swiper.loopCreate(), swiper.updateSlides(), swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, !1)), swiper.emit("breakpoint", breakpointParams);
}

// node_modules/swiper/core/breakpoints/getBreakpoint.js
function getBreakpoint(breakpoints, base = "window", containerEl) {
  if (!breakpoints || base === "container" && !containerEl)
    return;
  let breakpoint = !1, window2 = getWindow(), currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight, points = Object.keys(breakpoints).map((point) => {
    if (typeof point == "string" && point.indexOf("@") === 0) {
      let minRatio = parseFloat(point.substr(1));
      return {
        value: currentHeight * minRatio,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    let {
      point,
      value
    } = points[i];
    base === "window" ? window2.matchMedia(`(min-width: ${value}px)`).matches && (breakpoint = point) : value <= containerEl.clientWidth && (breakpoint = point);
  }
  return breakpoint || "max";
}

// node_modules/swiper/core/breakpoints/index.js
var breakpoints_default = {
  setBreakpoint,
  getBreakpoint
};

// node_modules/swiper/core/classes/addClasses.js
function prepareClasses(entries, prefix) {
  let resultClasses = [];
  return entries.forEach((item) => {
    typeof item == "object" ? Object.keys(item).forEach((classNames2) => {
      item[classNames2] && resultClasses.push(prefix + classNames2);
    }) : typeof item == "string" && resultClasses.push(prefix + item);
  }), resultClasses;
}
function addClasses() {
  let swiper = this, {
    classNames: classNames2,
    params,
    rtl,
    $el,
    device,
    support: support2
  } = swiper, suffixes = prepareClasses(["initialized", params.direction, {
    "pointer-events": !support2.touch
  }, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    autoheight: params.autoHeight
  }, {
    rtl
  }, {
    grid: params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    android: device.android
  }, {
    ios: device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    centered: params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames2.push(...suffixes), $el.addClass([...classNames2].join(" ")), swiper.emitContainerClasses();
}

// node_modules/swiper/core/classes/removeClasses.js
function removeClasses() {
  let swiper = this, {
    $el,
    classNames: classNames2
  } = swiper;
  $el.removeClass(classNames2.join(" ")), swiper.emitContainerClasses();
}

// node_modules/swiper/core/classes/index.js
var classes_default = {
  addClasses,
  removeClasses
};

// node_modules/swiper/core/images/loadImage.js
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  let window2 = getWindow(), image;
  function onReady() {
    callback && callback();
  }
  !dom_default(imageEl).parent("picture")[0] && (!imageEl.complete || !checkForComplete) && src ? (image = new window2.Image(), image.onload = onReady, image.onerror = onReady, sizes && (image.sizes = sizes), srcset && (image.srcset = srcset), src && (image.src = src)) : onReady();
}

// node_modules/swiper/core/images/preloadImages.js
function preloadImages() {
  let swiper = this;
  swiper.imagesToLoad = swiper.$el.find("img");
  function onReady() {
    typeof swiper > "u" || swiper === null || !swiper || swiper.destroyed || (swiper.imagesLoaded !== void 0 && (swiper.imagesLoaded += 1), swiper.imagesLoaded === swiper.imagesToLoad.length && (swiper.params.updateOnImagesReady && swiper.update(), swiper.emit("imagesReady")));
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    let imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), !0, onReady);
  }
}

// node_modules/swiper/core/images/index.js
var images_default = {
  loadImage,
  preloadImages
};

// node_modules/swiper/core/check-overflow/index.js
function checkOverflow() {
  let swiper = this, {
    isLocked: wasLocked,
    params
  } = swiper, {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    let lastSlideIndex = swiper.slides.length - 1, lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else
    swiper.isLocked = swiper.snapGrid.length === 1;
  params.allowSlideNext === !0 && (swiper.allowSlideNext = !swiper.isLocked), params.allowSlidePrev === !0 && (swiper.allowSlidePrev = !swiper.isLocked), wasLocked && wasLocked !== swiper.isLocked && (swiper.isEnd = !1), wasLocked !== swiper.isLocked && swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
var check_overflow_default = {
  checkOverflow
};

// node_modules/swiper/core/defaults.js
var defaults_default = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: !1,
  userAgent: null,
  url: null,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !0,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: 0.85,
  watchSlidesProgress: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  preloadImages: !0,
  updateOnImagesReady: !0,
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: !0,
  loopFillGroupWithBlank: !1,
  loopPreventsSlide: !0,
  rewind: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  runCallbacksOnInit: !0,
  _emitClasses: !1
};

// node_modules/swiper/core/moduleExtendParams.js
function moduleExtendParams(params, allModulesParams) {
  return function(obj = {}) {
    let moduleParamName = Object.keys(obj)[0], moduleParams = obj[moduleParamName];
    if (typeof moduleParams != "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === !0 && (params[moduleParamName] = {
      auto: !0
    }), !(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    params[moduleParamName] === !0 && (params[moduleParamName] = {
      enabled: !0
    }), typeof params[moduleParamName] == "object" && !("enabled" in params[moduleParamName]) && (params[moduleParamName].enabled = !0), params[moduleParamName] || (params[moduleParamName] = {
      enabled: !1
    }), extend2(allModulesParams, obj);
  };
}

// node_modules/swiper/core/core.js
var prototypes = {
  eventsEmitter: events_emitter_default,
  update: update_default,
  translate: translate_default,
  transition: transition_default,
  slide: slide_default,
  loop: loop_default,
  grabCursor: grab_cursor_default,
  events: events_default,
  breakpoints: breakpoints_default,
  checkOverflow: check_overflow_default,
  classes: classes_default,
  images: images_default
}, extendedDefaults = {}, Swiper = class {
  constructor(...args) {
    let el, params;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object" ? params = args[0] : [el, params] = args, params || (params = {}), params = extend2({}, params), el && !params.el && (params.el = el), params.el && dom_default(params.el).length > 1) {
      let swipers = [];
      return dom_default(params.el).each((containerEl) => {
        let newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      }), swipers;
    }
    let swiper = this;
    swiper.__swiper__ = !0, swiper.support = getSupport(), swiper.device = getDevice({
      userAgent: params.userAgent
    }), swiper.browser = getBrowser(), swiper.eventsListeners = {}, swiper.eventsAnyListeners = [], swiper.modules = [...swiper.__modules__], params.modules && Array.isArray(params.modules) && swiper.modules.push(...params.modules);
    let allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    let swiperParams = extend2({}, defaults_default, allModulesParams);
    return swiper.params = extend2({}, swiperParams, extendedDefaults, params), swiper.originalParams = extend2({}, swiper.params), swiper.passedParams = extend2({}, params), swiper.params && swiper.params.on && Object.keys(swiper.params.on).forEach((eventName) => {
      swiper.on(eventName, swiper.params.on[eventName]);
    }), swiper.params && swiper.params.onAny && swiper.onAny(swiper.params.onAny), swiper.$ = dom_default, Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      classNames: [],
      slides: dom_default(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      touchEvents: function() {
        let touch = ["touchstart", "touchmove", "touchend", "touchcancel"], desktop = ["pointerdown", "pointermove", "pointerup"];
        return swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        }, swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        }, swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: swiper.params.focusableElements,
        lastClickTime: now(),
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      allowClick: !0,
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), swiper.emit("_swiper"), swiper.params.init && swiper.init(), swiper;
  }
  enable() {
    let swiper = this;
    swiper.enabled || (swiper.enabled = !0, swiper.params.grabCursor && swiper.setGrabCursor(), swiper.emit("enable"));
  }
  disable() {
    let swiper = this;
    !swiper.enabled || (swiper.enabled = !1, swiper.params.grabCursor && swiper.unsetGrabCursor(), swiper.emit("disable"));
  }
  setProgress(progress, speed) {
    let swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    let min = swiper.minTranslate(), current = (swiper.maxTranslate() - min) * progress + min;
    swiper.translateTo(current, typeof speed > "u" ? 0 : speed), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    let swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    let cls = swiper.el.className.split(" ").filter((className) => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0);
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    let swiper = this;
    return swiper.destroyed ? "" : slideEl.className.split(" ").filter((className) => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    let swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    let updates = [];
    swiper.slides.each((slideEl) => {
      let classNames2 = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames: classNames2
      }), swiper.emit("_slideClass", slideEl, classNames2);
    }), swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view = "current", exact = !1) {
    let swiper = this, {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper, spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize, breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1)
        slides[i] && !breakLoop && (slideSize += slides[i].swiperSlideSize, spv += 1, slideSize > swiperSize && (breakLoop = !0));
      for (let i = activeIndex - 1; i >= 0; i -= 1)
        slides[i] && !breakLoop && (slideSize += slides[i].swiperSlideSize, spv += 1, slideSize > swiperSize && (breakLoop = !0));
    } else if (view === "current")
      for (let i = activeIndex + 1; i < slides.length; i += 1)
        (exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) && (spv += 1);
    else
      for (let i = activeIndex - 1; i >= 0; i -= 1)
        slidesGrid[activeIndex] - slidesGrid[i] < swiperSize && (spv += 1);
    return spv;
  }
  update() {
    let swiper = this;
    if (!swiper || swiper.destroyed)
      return;
    let {
      snapGrid,
      params
    } = swiper;
    params.breakpoints && swiper.setBreakpoint(), swiper.updateSize(), swiper.updateSlides(), swiper.updateProgress(), swiper.updateSlidesClasses();
    function setTranslate2() {
      let translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate, newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
    }
    let translated;
    swiper.params.freeMode && swiper.params.freeMode.enabled ? (setTranslate2(), swiper.params.autoHeight && swiper.updateAutoHeight()) : ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides ? translated = swiper.slideTo(swiper.slides.length - 1, 0, !1, !0) : translated = swiper.slideTo(swiper.activeIndex, 0, !1, !0), translated || setTranslate2()), params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow(), swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate = !0) {
    let swiper = this, currentDirection = swiper.params.direction;
    return newDirection || (newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal"), newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical" || (swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`), swiper.emitContainerClasses(), swiper.params.direction = newDirection, swiper.slides.each((slideEl) => {
      newDirection === "vertical" ? slideEl.style.width = "" : slideEl.style.height = "";
    }), swiper.emit("changeDirection"), needUpdate && swiper.update()), swiper;
  }
  changeLanguageDirection(direction) {
    let swiper = this;
    swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr" || (swiper.rtl = direction === "rtl", swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl, swiper.rtl ? (swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`), swiper.el.dir = "rtl") : (swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`), swiper.el.dir = "ltr"), swiper.update());
  }
  mount(el) {
    let swiper = this;
    if (swiper.mounted)
      return !0;
    let $el = dom_default(el || swiper.params.el);
    if (el = $el[0], !el)
      return !1;
    el.swiper = swiper;
    let getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`, $wrapperEl = (() => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        let res = dom_default(el.shadowRoot.querySelector(getWrapperSelector()));
        return res.children = (options2) => $el.children(options2), res;
      }
      return $el.children ? $el.children(getWrapperSelector()) : dom_default($el).children(getWrapperSelector());
    })();
    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      let wrapper = getDocument().createElement("div");
      $wrapperEl = dom_default(wrapper), wrapper.className = swiper.params.wrapperClass, $el.append(wrapper), $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
        $wrapperEl.append(slideEl);
      });
    }
    return Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: !0,
      rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
      wrongRTL: $wrapperEl.css("display") === "-webkit-box"
    }), !0;
  }
  init(el) {
    let swiper = this;
    return swiper.initialized || swiper.mount(el) === !1 || (swiper.emit("beforeInit"), swiper.params.breakpoints && swiper.setBreakpoint(), swiper.addClasses(), swiper.params.loop && swiper.loopCreate(), swiper.updateSize(), swiper.updateSlides(), swiper.params.watchOverflow && swiper.checkOverflow(), swiper.params.grabCursor && swiper.enabled && swiper.setGrabCursor(), swiper.params.preloadImages && swiper.preloadImages(), swiper.params.loop ? swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, !1, !0) : swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, !1, !0), swiper.attachEvents(), swiper.initialized = !0, swiper.emit("init"), swiper.emit("afterInit")), swiper;
  }
  destroy(deleteInstance = !0, cleanStyles = !0) {
    let swiper = this, {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;
    return typeof swiper.params > "u" || swiper.destroyed || (swiper.emit("beforeDestroy"), swiper.initialized = !1, swiper.detachEvents(), params.loop && swiper.loopDestroy(), cleanStyles && (swiper.removeClasses(), $el.removeAttr("style"), $wrapperEl.removeAttr("style"), slides && slides.length && slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), swiper.emit("destroy"), Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    }), deleteInstance !== !1 && (swiper.$el[0].swiper = null, deleteProps(swiper)), swiper.destroyed = !0), null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults_default;
  }
  static installModule(mod) {
    Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
    let modules = Swiper.prototype.__modules__;
    typeof mod == "function" && modules.indexOf(mod) < 0 && modules.push(mod);
  }
  static use(module2) {
    return Array.isArray(module2) ? (module2.forEach((m) => Swiper.installModule(m)), Swiper) : (Swiper.installModule(module2), Swiper);
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);
var core_default = Swiper;

// node_modules/swiper/shared/create-element-if-not-defined.js
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  let document2 = getDocument();
  return swiper.params.createElements && Object.keys(checkProps).forEach((key) => {
    if (!params[key] && params.auto === !0) {
      let element = swiper.$el.children(`.${checkProps[key]}`)[0];
      element || (element = document2.createElement("div"), element.className = checkProps[key], swiper.$el.append(element)), params[key] = element, originalParams[key] = element;
    }
  }), params;
}

// node_modules/swiper/modules/navigation/navigation.js
function Navigation({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };
  function getEl(el) {
    let $el;
    return el && ($el = dom_default(el), swiper.params.uniqueNavElements && typeof el == "string" && $el.length > 1 && swiper.$el.find(el).length === 1 && ($el = swiper.$el.find(el))), $el;
  }
  function toggleEl($el, disabled) {
    let params = swiper.params.navigation;
    $el && $el.length > 0 && ($el[disabled ? "addClass" : "removeClass"](params.disabledClass), $el[0] && $el[0].tagName === "BUTTON" && ($el[0].disabled = disabled), swiper.params.watchOverflow && swiper.enabled && $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass));
  }
  function update() {
    if (swiper.params.loop)
      return;
    let {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind), toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault(), !(swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) && (swiper.slidePrev(), emit("navigationPrev"));
  }
  function onNextClick(e) {
    e.preventDefault(), !(swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) && (swiper.slideNext(), emit("navigationNext"));
  }
  function init() {
    let params = swiper.params.navigation;
    if (swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(params.nextEl || params.prevEl))
      return;
    let $nextEl = getEl(params.nextEl), $prevEl = getEl(params.prevEl);
    $nextEl && $nextEl.length > 0 && $nextEl.on("click", onNextClick), $prevEl && $prevEl.length > 0 && $prevEl.on("click", onPrevClick), Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    }), swiper.enabled || ($nextEl && $nextEl.addClass(params.lockClass), $prevEl && $prevEl.addClass(params.lockClass));
  }
  function destroy() {
    let {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    $nextEl && $nextEl.length && ($nextEl.off("click", onNextClick), $nextEl.removeClass(swiper.params.navigation.disabledClass)), $prevEl && $prevEl.length && ($prevEl.off("click", onPrevClick), $prevEl.removeClass(swiper.params.navigation.disabledClass));
  }
  on2("init", () => {
    swiper.params.navigation.enabled === !1 ? disable() : (init(), update());
  }), on2("toEdge fromEdge lock unlock", () => {
    update();
  }), on2("destroy", () => {
    destroy();
  }), on2("enable disable", () => {
    let {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    $nextEl && $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass), $prevEl && $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
  }), on2("click", (_s, e) => {
    let {
      $nextEl,
      $prevEl
    } = swiper.navigation, targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !dom_default(targetEl).is($prevEl) && !dom_default(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      $nextEl ? isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass) : $prevEl && (isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass)), emit(isHidden === !0 ? "navigationShow" : "navigationHide"), $nextEl && $nextEl.toggleClass(swiper.params.navigation.hiddenClass), $prevEl && $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
    }
  });
  let enable = () => {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass), init(), update();
  }, disable = () => {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass), destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}

// node_modules/swiper/shared/classes-to-selector.js
function classesToSelector(classes = "") {
  return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
}

// node_modules/swiper/modules/pagination/pagination.js
function Pagination2({
  swiper,
  extendParams,
  on: on2,
  emit
}) {
  let pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  }), swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize, dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }
  function setSideBullets($bulletEl, position) {
    let {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }
  function update() {
    let rtl = swiper.rtl, params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length, $el = swiper.pagination.$el, current, total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop ? (current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup), current > slidesLength - 1 - swiper.loopedSlides * 2 && (current -= slidesLength - swiper.loopedSlides * 2), current > total - 1 && (current -= total), current < 0 && swiper.params.paginationType !== "bullets" && (current = total + current)) : typeof swiper.snapIndex < "u" ? current = swiper.snapIndex : current = swiper.activeIndex || 0, params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      let bullets = swiper.pagination.bullets, firstIndex, lastIndex, midIndex;
      if (params.dynamicBullets && (bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](!0), $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`), params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0 && (dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0), dynamicBulletIndex > params.dynamicMainBullets - 1 ? dynamicBulletIndex = params.dynamicMainBullets - 1 : dynamicBulletIndex < 0 && (dynamicBulletIndex = 0)), firstIndex = Math.max(current - dynamicBulletIndex, 0), lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1), midIndex = (lastIndex + firstIndex) / 2), bullets.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`).join(" ")), $el.length > 1)
        bullets.each((bullet) => {
          let $bullet = dom_default(bullet), bulletIndex = $bullet.index();
          bulletIndex === current && $bullet.addClass(params.bulletActiveClass), params.dynamicBullets && (bulletIndex >= firstIndex && bulletIndex <= lastIndex && $bullet.addClass(`${params.bulletActiveClass}-main`), bulletIndex === firstIndex && setSideBullets($bullet, "prev"), bulletIndex === lastIndex && setSideBullets($bullet, "next"));
        });
      else {
        let $bullet = bullets.eq(current), bulletIndex = $bullet.index();
        if ($bullet.addClass(params.bulletActiveClass), params.dynamicBullets) {
          let $firstDisplayedBullet = bullets.eq(firstIndex), $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1)
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          if (swiper.params.loop)
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1)
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else
              setSideBullets($firstDisplayedBullet, "prev"), setSideBullets($lastDisplayedBullet, "next");
          else
            setSideBullets($firstDisplayedBullet, "prev"), setSideBullets($lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        let dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4), bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize, offsetProp = rtl ? "right" : "left";
        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
      }
    }
    if (params.type === "fraction" && ($el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1)), $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total))), params.type === "progressbar") {
      let progressbarDirection;
      params.progressbarOpposite ? progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal" : progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
      let scale = (current + 1) / total, scaleX = 1, scaleY = 1;
      progressbarDirection === "horizontal" ? scaleX = scale : scaleY = scale, $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    params.type === "custom" && params.renderCustom ? ($el.html(params.renderCustom(swiper, current + 1, total)), emit("paginationRender", $el[0])) : emit("paginationUpdate", $el[0]), swiper.params.watchOverflow && swiper.enabled && $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
  }
  function render() {
    let params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length, $el = swiper.pagination.$el, paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength && (numberOfBullets = slidesLength);
      for (let i = 0; i < numberOfBullets; i += 1)
        params.renderBullet ? paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass) : paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
      $el.html(paginationHTML), swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
    }
    params.type === "fraction" && (params.renderFraction ? paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass) : paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`, $el.html(paginationHTML)), params.type === "progressbar" && (params.renderProgressbar ? paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass) : paginationHTML = `<span class="${params.progressbarFillClass}"></span>`, $el.html(paginationHTML)), params.type !== "custom" && emit("paginationRender", swiper.pagination.$el[0]);
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    let params = swiper.params.pagination;
    if (!params.el)
      return;
    let $el = dom_default(params.el);
    $el.length !== 0 && (swiper.params.uniqueNavElements && typeof params.el == "string" && $el.length > 1 && ($el = swiper.$el.find(params.el), $el.length > 1 && ($el = $el.filter((el) => dom_default(el).parents(".swiper")[0] === swiper.el))), params.type === "bullets" && params.clickable && $el.addClass(params.clickableClass), $el.addClass(params.modifierClass + params.type), $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass), params.type === "bullets" && params.dynamicBullets && ($el.addClass(`${params.modifierClass}${params.type}-dynamic`), dynamicBulletIndex = 0, params.dynamicMainBullets < 1 && (params.dynamicMainBullets = 1)), params.type === "progressbar" && params.progressbarOpposite && $el.addClass(params.progressbarOppositeClass), params.clickable && $el.on("click", classesToSelector(params.bulletClass), function(e) {
      e.preventDefault();
      let index2 = dom_default(this).index() * swiper.params.slidesPerGroup;
      swiper.params.loop && (index2 += swiper.loopedSlides), swiper.slideTo(index2);
    }), Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    }), swiper.enabled || $el.addClass(params.lockClass));
  }
  function destroy() {
    let params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass), $el.removeClass(params.modifierClass + params.type), $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass), swiper.pagination.bullets && swiper.pagination.bullets.removeClass && swiper.pagination.bullets.removeClass(params.bulletActiveClass), params.clickable && $el.off("click", classesToSelector(params.bulletClass));
  }
  on2("init", () => {
    swiper.params.pagination.enabled === !1 ? disable() : (init(), render(), update());
  }), on2("activeIndexChange", () => {
    (swiper.params.loop || typeof swiper.snapIndex > "u") && update();
  }), on2("snapIndexChange", () => {
    swiper.params.loop || update();
  }), on2("slidesLengthChange", () => {
    swiper.params.loop && (render(), update());
  }), on2("snapGridLengthChange", () => {
    swiper.params.loop || (render(), update());
  }), on2("destroy", () => {
    destroy();
  }), on2("enable disable", () => {
    let {
      $el
    } = swiper.pagination;
    $el && $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
  }), on2("lock unlock", () => {
    update();
  }), on2("click", (_s, e) => {
    let targetEl = e.target, {
      $el
    } = swiper.pagination;
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom_default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        return;
      let isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
      emit(isHidden === !0 ? "paginationShow" : "paginationHide"), $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });
  let enable = () => {
    swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass), swiper.pagination.$el && swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass), init(), render(), update();
  }, disable = () => {
    swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass), swiper.pagination.$el && swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass), destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}

// node_modules/swiper/components-shared/utils.js
function isObject3(o) {
  return typeof o == "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend3(target, src) {
  let noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    typeof target[key] > "u" ? target[key] = src[key] : isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0 ? src[key].__swiper__ ? target[key] = src[key] : extend3(target[key], src[key]) : target[key] = src[key];
  });
}
function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl > "u" && typeof params.navigation.prevEl > "u";
}
function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el > "u";
}
function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el > "u";
}
function uniqueClasses(classNames2 = "") {
  let classes = classNames2.split(" ").map((c) => c.trim()).filter((c) => !!c), unique = [];
  return classes.forEach((c) => {
    unique.indexOf(c) < 0 && unique.push(c);
  }), unique.join(" ");
}

// node_modules/swiper/components-shared/params-list.js
var paramsList = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom"
];

// node_modules/swiper/components-shared/get-params.js
function getParams(obj = {}, splitEvents = !0) {
  let params = {
    on: {}
  }, events2 = {}, passedParams = {};
  extend3(params, core_default.defaults), extend3(params, core_default.extendedDefaults), params._emitClasses = !0, params.init = !1;
  let rest = {}, allowedParams = paramsList.map((key) => key.replace(/_/, "")), plainObj = Object.assign({}, obj);
  return Object.keys(plainObj).forEach((key) => {
    typeof obj[key] > "u" || (allowedParams.indexOf(key) >= 0 ? isObject3(obj[key]) ? (params[key] = {}, passedParams[key] = {}, extend3(params[key], obj[key]), extend3(passedParams[key], obj[key])) : (params[key] = obj[key], passedParams[key] = obj[key]) : key.search(/on[A-Z]/) === 0 && typeof obj[key] == "function" ? splitEvents ? events2[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key] : params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key] : rest[key] = obj[key]);
  }), ["navigation", "pagination", "scrollbar"].forEach((key) => {
    params[key] === !0 && (params[key] = {}), params[key] === !1 && delete params[key];
  }), {
    params,
    passedParams,
    rest,
    events: events2
  };
}

// node_modules/swiper/components-shared/mount-swiper.js
function mountSwiper({
  el,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl,
  swiper
}, swiperParams) {
  needsNavigation(swiperParams) && nextEl && prevEl && (swiper.params.navigation.nextEl = nextEl, swiper.originalParams.navigation.nextEl = nextEl, swiper.params.navigation.prevEl = prevEl, swiper.originalParams.navigation.prevEl = prevEl), needsPagination(swiperParams) && paginationEl && (swiper.params.pagination.el = paginationEl, swiper.originalParams.pagination.el = paginationEl), needsScrollbar(swiperParams) && scrollbarEl && (swiper.params.scrollbar.el = scrollbarEl, swiper.originalParams.scrollbar.el = scrollbarEl), swiper.init(el);
}

// node_modules/swiper/react/loop.js
var import_react55 = __toESM(require("react"), 1);

// node_modules/swiper/shared/calc-looped-slides.js
var calcLoopedSlides = (slides, swiperParams) => {
  let slidesPerViewParams = swiperParams.slidesPerView;
  if (swiperParams.breakpoints) {
    let breakpoint = core_default.prototype.getBreakpoint(swiperParams.breakpoints), breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : void 0;
    breakpointOnlyParams && breakpointOnlyParams.slidesPerView && (slidesPerViewParams = breakpointOnlyParams.slidesPerView);
  }
  let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  return loopedSlides += swiperParams.loopAdditionalSlides, loopedSlides > slides.length && swiperParams.loopedSlidesLimit && (loopedSlides = slides.length), loopedSlides;
};

// node_modules/swiper/react/loop.js
function renderLoop(swiper, slides, swiperParams) {
  let modifiedSlides = slides.map((child, index2) => /* @__PURE__ */ import_react55.default.cloneElement(child, {
    swiper,
    "data-swiper-slide-index": index2
  }));
  function duplicateSlide(child, index2, position) {
    return /* @__PURE__ */ import_react55.default.cloneElement(child, {
      key: `${child.key}-duplicate-${index2}-${position}`,
      className: `${child.props.className || ""} ${swiperParams.slideDuplicateClass}`
    });
  }
  if (swiperParams.loopFillGroupWithBlank) {
    let blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;
    if (blankSlidesNum !== swiperParams.slidesPerGroup)
      for (let i = 0; i < blankSlidesNum; i += 1) {
        let blankSlide = /* @__PURE__ */ import_react55.default.createElement("div", {
          className: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
        });
        modifiedSlides.push(blankSlide);
      }
  }
  swiperParams.slidesPerView === "auto" && !swiperParams.loopedSlides && (swiperParams.loopedSlides = modifiedSlides.length);
  let loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams), prependSlides = [], appendSlides = [];
  for (let i = 0; i < loopedSlides; i += 1) {
    let index2 = i - Math.floor(i / modifiedSlides.length) * modifiedSlides.length;
    appendSlides.push(duplicateSlide(modifiedSlides[index2], i, "append")), prependSlides.unshift(duplicateSlide(modifiedSlides[modifiedSlides.length - index2 - 1], i, "prepend"));
  }
  return swiper && (swiper.loopedSlides = loopedSlides), [...prependSlides, ...modifiedSlides, ...appendSlides];
}

// node_modules/swiper/components-shared/get-changed-params.js
function getChangedParams(swiperParams, oldParams, children2, oldChildren, getKey) {
  let keys = [];
  if (!oldParams)
    return keys;
  let addKey = (key) => {
    keys.indexOf(key) < 0 && keys.push(key);
  };
  if (children2 && oldChildren) {
    let oldChildrenKeys = oldChildren.map(getKey), childrenKeys = children2.map(getKey);
    oldChildrenKeys.join("") !== childrenKeys.join("") && addKey("children"), oldChildren.length !== children2.length && addKey("children");
  }
  return paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, "")).forEach((key) => {
    if (key in swiperParams && key in oldParams)
      if (isObject3(swiperParams[key]) && isObject3(oldParams[key])) {
        let newKeys = Object.keys(swiperParams[key]), oldKeys = Object.keys(oldParams[key]);
        newKeys.length !== oldKeys.length ? addKey(key) : (newKeys.forEach((newKey) => {
          swiperParams[key][newKey] !== oldParams[key][newKey] && addKey(key);
        }), oldKeys.forEach((oldKey) => {
          swiperParams[key][oldKey] !== oldParams[key][oldKey] && addKey(key);
        }));
      } else
        swiperParams[key] !== oldParams[key] && addKey(key);
  }), keys;
}

// node_modules/swiper/react/get-children.js
var import_react56 = __toESM(require("react"), 1);
function isChildSwiperSlide(child) {
  return child.type && child.type.displayName && child.type.displayName.includes("SwiperSlide");
}
function processChildren(c) {
  let slides = [];
  return import_react56.default.Children.toArray(c).forEach((child) => {
    isChildSwiperSlide(child) ? slides.push(child) : child.props && child.props.children && processChildren(child.props.children).forEach((slide) => slides.push(slide));
  }), slides;
}
function getChildren(c) {
  let slides = [], slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return import_react56.default.Children.toArray(c).forEach((child) => {
    if (isChildSwiperSlide(child))
      slides.push(child);
    else if (child.props && child.props.slot && slots[child.props.slot])
      slots[child.props.slot].push(child);
    else if (child.props && child.props.children) {
      let foundSlides = processChildren(child.props.children);
      foundSlides.length > 0 ? foundSlides.forEach((slide) => slides.push(slide)) : slots["container-end"].push(child);
    } else
      slots["container-end"].push(child);
  }), {
    slides,
    slots
  };
}

// node_modules/swiper/components-shared/update-swiper.js
function updateSwiper({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  scrollbarEl,
  paginationEl
}) {
  let updateParams = changedParams.filter((key) => key !== "children" && key !== "direction"), {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper, needThumbsInit, needControllerInit, needPaginationInit, needScrollbarInit, needNavigationInit;
  changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper && (needThumbsInit = !0), changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control && (needControllerInit = !0), changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === !1) && pagination && !pagination.el && (needPaginationInit = !0), changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === !1) && scrollbar && !scrollbar.el && (needScrollbarInit = !0), changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === !1) && navigation && !navigation.prevEl && !navigation.nextEl && (needNavigationInit = !0);
  let destroyModule = (mod) => {
    !swiper[mod] || (swiper[mod].destroy(), mod === "navigation" ? (currentParams[mod].prevEl = void 0, currentParams[mod].nextEl = void 0, swiper[mod].prevEl = void 0, swiper[mod].nextEl = void 0) : (currentParams[mod].el = void 0, swiper[mod].el = void 0));
  };
  updateParams.forEach((key) => {
    if (isObject3(currentParams[key]) && isObject3(passedParams[key]))
      extend3(currentParams[key], passedParams[key]);
    else {
      let newValue = passedParams[key];
      (newValue === !0 || newValue === !1) && (key === "navigation" || key === "pagination" || key === "scrollbar") ? newValue === !1 && destroyModule(key) : currentParams[key] = passedParams[key];
    }
  }), updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control && (swiper.controller.control = currentParams.controller.control), changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled ? (virtual.slides = slides, virtual.update(!0)) : changedParams.includes("children") && swiper.lazy && swiper.params.lazy.enabled && swiper.lazy.load(), needThumbsInit && thumbs.init() && thumbs.update(!0), needControllerInit && (swiper.controller.control = currentParams.controller.control), needPaginationInit && (paginationEl && (currentParams.pagination.el = paginationEl), pagination.init(), pagination.render(), pagination.update()), needScrollbarInit && (scrollbarEl && (currentParams.scrollbar.el = scrollbarEl), scrollbar.init(), scrollbar.updateSize(), scrollbar.setTranslate()), needNavigationInit && (nextEl && (currentParams.navigation.nextEl = nextEl), prevEl && (currentParams.navigation.prevEl = prevEl), navigation.init(), navigation.update()), changedParams.includes("allowSlideNext") && (swiper.allowSlideNext = passedParams.allowSlideNext), changedParams.includes("allowSlidePrev") && (swiper.allowSlidePrev = passedParams.allowSlidePrev), changedParams.includes("direction") && swiper.changeDirection(passedParams.direction, !1), swiper.update();
}

// node_modules/swiper/react/virtual.js
var import_react57 = __toESM(require("react"), 1);
function renderVirtual(swiper, slides, virtualData) {
  if (!virtualData)
    return null;
  let style = swiper.isHorizontal() ? {
    [swiper.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  return slides.filter((child, index2) => index2 >= virtualData.from && index2 <= virtualData.to).map((child) => /* @__PURE__ */ import_react57.default.cloneElement(child, {
    swiper,
    style
  }));
}

// node_modules/swiper/components-shared/update-on-virtual-data.js
var updateOnVirtualData = (swiper) => {
  !swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled || (swiper.updateSlides(), swiper.updateProgress(), swiper.updateSlidesClasses(), swiper.lazy && swiper.params.lazy.enabled && swiper.lazy.load(), swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled && swiper.parallax.setTranslate());
};

// node_modules/swiper/react/use-isomorphic-layout-effect.js
var import_react58 = require("react");
function useIsomorphicLayoutEffect(callback, deps) {
  return typeof window > "u" ? (0, import_react58.useEffect)(callback, deps) : (0, import_react58.useLayoutEffect)(callback, deps);
}

// node_modules/swiper/react/context.js
var import_react59 = require("react"), SwiperSlideContext = /* @__PURE__ */ (0, import_react59.createContext)(null);
var SwiperContext = /* @__PURE__ */ (0, import_react59.createContext)(null);

// node_modules/swiper/react/swiper.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
var Swiper2 = /* @__PURE__ */ (0, import_react60.forwardRef)(function(_temp, externalElRef) {
  let {
    className,
    tag: Tag = "div",
    wrapperTag: WrapperTag = "div",
    children: children2,
    onSwiper,
    ...rest
  } = _temp === void 0 ? {} : _temp, eventsAssigned = !1, [containerClasses, setContainerClasses] = (0, import_react60.useState)("swiper"), [virtualData, setVirtualData] = (0, import_react60.useState)(null), [breakpointChanged, setBreakpointChanged] = (0, import_react60.useState)(!1), initializedRef = (0, import_react60.useRef)(!1), swiperElRef = (0, import_react60.useRef)(null), swiperRef = (0, import_react60.useRef)(null), oldPassedParamsRef = (0, import_react60.useRef)(null), oldSlides = (0, import_react60.useRef)(null), nextElRef = (0, import_react60.useRef)(null), prevElRef = (0, import_react60.useRef)(null), paginationElRef = (0, import_react60.useRef)(null), scrollbarElRef = (0, import_react60.useRef)(null), {
    params: swiperParams,
    passedParams,
    rest: restProps,
    events: events2
  } = getParams(rest), {
    slides,
    slots
  } = getChildren(children2), onBeforeBreakpoint = () => {
    setBreakpointChanged(!breakpointChanged);
  };
  Object.assign(swiperParams.on, {
    _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }
  });
  let initSwiper = () => {
    if (Object.assign(swiperParams.on, events2), eventsAssigned = !0, swiperRef.current = new core_default(swiperParams), swiperRef.current.loopCreate = () => {
    }, swiperRef.current.loopDestroy = () => {
    }, swiperParams.loop && (swiperRef.current.loopedSlides = calcLoopedSlides(slides, swiperParams)), swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      let extendWith = {
        cache: !1,
        slides,
        renderExternal: setVirtualData,
        renderExternalUpdate: !1
      };
      extend3(swiperRef.current.params.virtual, extendWith), extend3(swiperRef.current.originalParams.virtual, extendWith);
    }
  };
  swiperElRef.current || initSwiper(), swiperRef.current && swiperRef.current.on("_beforeBreakpoint", onBeforeBreakpoint);
  let attachEvents2 = () => {
    eventsAssigned || !events2 || !swiperRef.current || Object.keys(events2).forEach((eventName) => {
      swiperRef.current.on(eventName, events2[eventName]);
    });
  }, detachEvents2 = () => {
    !events2 || !swiperRef.current || Object.keys(events2).forEach((eventName) => {
      swiperRef.current.off(eventName, events2[eventName]);
    });
  };
  (0, import_react60.useEffect)(() => () => {
    swiperRef.current && swiperRef.current.off("_beforeBreakpoint", onBeforeBreakpoint);
  }), (0, import_react60.useEffect)(() => {
    !initializedRef.current && swiperRef.current && (swiperRef.current.emitSlidesClasses(), initializedRef.current = !0);
  }), useIsomorphicLayoutEffect(() => {
    if (externalElRef && (externalElRef.current = swiperElRef.current), !!swiperElRef.current)
      return swiperRef.current.destroyed && initSwiper(), mountSwiper({
        el: swiperElRef.current,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        paginationEl: paginationElRef.current,
        scrollbarEl: scrollbarElRef.current,
        swiper: swiperRef.current
      }, swiperParams), onSwiper && onSwiper(swiperRef.current), () => {
        swiperRef.current && !swiperRef.current.destroyed && swiperRef.current.destroy(!0, !1);
      };
  }, []), useIsomorphicLayoutEffect(() => {
    attachEvents2();
    let changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, (c) => c.key);
    return oldPassedParamsRef.current = passedParams, oldSlides.current = slides, changedParams.length && swiperRef.current && !swiperRef.current.destroyed && updateSwiper({
      swiper: swiperRef.current,
      slides,
      passedParams,
      changedParams,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      scrollbarEl: scrollbarElRef.current,
      paginationEl: paginationElRef.current
    }), () => {
      detachEvents2();
    };
  }), useIsomorphicLayoutEffect(() => {
    updateOnVirtualData(swiperRef.current);
  }, [virtualData]);
  function renderSlides() {
    return swiperParams.virtual ? renderVirtual(swiperRef.current, slides, virtualData) : !swiperParams.loop || swiperRef.current && swiperRef.current.destroyed ? slides.map((child) => /* @__PURE__ */ import_react60.default.cloneElement(child, {
      swiper: swiperRef.current
    })) : renderLoop(swiperRef.current, slides, swiperParams);
  }
  return /* @__PURE__ */ import_react60.default.createElement(Tag, _extends({
    ref: swiperElRef,
    className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`)
  }, restProps), /* @__PURE__ */ import_react60.default.createElement(SwiperContext.Provider, {
    value: swiperRef.current
  }, slots["container-start"], /* @__PURE__ */ import_react60.default.createElement(WrapperTag, {
    className: "swiper-wrapper"
  }, slots["wrapper-start"], renderSlides(), slots["wrapper-end"]), needsNavigation(swiperParams) && /* @__PURE__ */ import_react60.default.createElement(import_react60.default.Fragment, null, /* @__PURE__ */ import_react60.default.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ import_react60.default.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), needsScrollbar(swiperParams) && /* @__PURE__ */ import_react60.default.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), needsPagination(swiperParams) && /* @__PURE__ */ import_react60.default.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), slots["container-end"]));
});
Swiper2.displayName = "Swiper";

// node_modules/swiper/react/swiper-slide.js
var import_react61 = __toESM(require("react"), 1);
function _extends2() {
  return _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends2.apply(this, arguments);
}
var SwiperSlide = /* @__PURE__ */ (0, import_react61.forwardRef)(function(_temp, externalRef) {
  let {
    tag: Tag = "div",
    children: children2,
    className = "",
    swiper,
    zoom,
    virtualIndex,
    ...rest
  } = _temp === void 0 ? {} : _temp, slideElRef = (0, import_react61.useRef)(null), [slideClasses, setSlideClasses] = (0, import_react61.useState)("swiper-slide");
  function updateClasses(_s, el, classNames2) {
    el === slideElRef.current && setSlideClasses(classNames2);
  }
  useIsomorphicLayoutEffect(() => {
    if (externalRef && (externalRef.current = slideElRef.current), !(!slideElRef.current || !swiper)) {
      if (swiper.destroyed) {
        slideClasses !== "swiper-slide" && setSlideClasses("swiper-slide");
        return;
      }
      return swiper.on("_slideClass", updateClasses), () => {
        !swiper || swiper.off("_slideClass", updateClasses);
      };
    }
  }), useIsomorphicLayoutEffect(() => {
    swiper && slideElRef.current && !swiper.destroyed && setSlideClasses(swiper.getSlideClasses(slideElRef.current));
  }, [swiper]);
  let slideData = {
    isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
    isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
    isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
    isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
    isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
  }, renderChildren = () => typeof children2 == "function" ? children2(slideData) : children2;
  return /* @__PURE__ */ import_react61.default.createElement(Tag, _extends2({
    ref: slideElRef,
    className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`),
    "data-swiper-slide-index": virtualIndex
  }, rest), /* @__PURE__ */ import_react61.default.createElement(SwiperSlideContext.Provider, {
    value: slideData
  }, zoom ? /* @__PURE__ */ import_react61.default.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom == "number" ? zoom : void 0
  }, renderChildren()) : renderChildren()));
});
SwiperSlide.displayName = "SwiperSlide";

// app/components/CardCarousel.tsx
var import_react63 = require("react"), import_tabler_icons_react18 = require("tabler-icons-react");
var import_react64 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function CardCarousel({
  prompt,
  images,
  navigate
}) {
  let swiperRef = (0, import_react63.useRef)(), navigationPrevRef = (0, import_react63.useRef)(null), navigationNextRef = (0, import_react63.useRef)(null), shouldSwipe = images && images.length > 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Swiper2, {
    slidesPerView: 1,
    navigation: shouldSwipe ? {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current
    } : !1,
    onBeforeInit: (swiper) => {
      swiperRef.current = swiper;
    },
    pagination: shouldSwipe ? { clickable: !0 } : !1,
    modules: shouldSwipe ? [Navigation, Pagination2] : [],
    lazy: !0,
    children: [
      images == null ? void 0 : images.map((image, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwiperSlide, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react64.Link, {
          to: navigate || `/${prompt.uuid}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: resolveThumbnail(image),
            alt: "",
            width: "256",
            height: "256",
            className: "h-full w-full object-cover"
          }, void 0, !1, {
            fileName: "app/components/CardCarousel.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/components/CardCarousel.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      }, index2, !1, {
        fileName: "app/components/CardCarousel.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)),
      shouldSwipe && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            ref: navigationPrevRef,
            className: "cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2 z-50 h-8 w-8 flex items-center justify-center rounded-tr-md rounded-br-md bg-white",
            onClick: () => {
              var _a;
              (_a = swiperRef.current) == null || _a.slidePrev();
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react18.ChevronLeft, {
              size: 24
            }, void 0, !1, {
              fileName: "app/components/CardCarousel.tsx",
              lineNumber: 70,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/CardCarousel.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            ref: navigationNextRef,
            className: "cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 z-50 h-8 w-8 flex items-center justify-center rounded-tl-md rounded-bl-md bg-white",
            onClick: () => {
              var _a;
              (_a = swiperRef.current) == null || _a.slideNext();
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react18.ChevronRight, {
              size: 24
            }, void 0, !1, {
              fileName: "app/components/CardCarousel.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/CardCarousel.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/CardCarousel.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/CardCarousel.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/lib/hooks/useConfirmationModal.tsx
var import_core28 = require("@mantine/core"), import_react65 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function useConfirmationModal() {
  let [opened, setOpened] = (0, import_react65.useState)(!1);
  return {
    openConfirmModal: () => setOpened(!0),
    modal: ({
      title,
      onCancel,
      onConfirm,
      children: children2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
      title,
      open: opened,
      onOpenChange: () => setOpened(!1),
      withCloseButton: !1,
      size: "sm",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Stack, {
          mb: 24,
          children: children2
        }, void 0, !1, {
          fileName: "app/lib/hooks/useConfirmationModal.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Group, {
          position: "right",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Button, {
              variant: "outline",
              radius: "lg",
              onClick: () => {
                onCancel && onCancel(), setOpened(!1);
              },
              children: "Cancel"
            }, void 0, !1, {
              fileName: "app/lib/hooks/useConfirmationModal.tsx",
              lineNumber: 29,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Button, {
              color: "red",
              radius: "lg",
              onClick: () => {
                onConfirm && onConfirm(), setOpened(!1);
              },
              children: "Confirm"
            }, void 0, !1, {
              fileName: "app/lib/hooks/useConfirmationModal.tsx",
              lineNumber: 41,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/lib/hooks/useConfirmationModal.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/lib/hooks/useConfirmationModal.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  };
}

// app/components/PromptCardOwner.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PromptCardOwner({
  prompt: initialPrompt
}) {
  let revalidator = useRevalidate("/app"), { openConfirmModal, modal: ConfirmationModal } = useConfirmationModal(), { data: prompt } = useGetPrompt(initialPrompt.uuid, {
    initialData: initialPrompt
  }), deletePrompt2 = useDeletePrompt({
    onSuccess: () => {
      revalidator.revalidate();
    }
  });
  return prompt ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white rounded-lg shadow-xl p-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "overflow-hidden rounded-lg aspect-1 bg-black/50 backdrop-blur-md relative",
        children: prompt.results && prompt.results.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardCarousel, {
          navigate: `/app/${prompt.uuid}`,
          prompt,
          images: prompt.results
        }, void 0, !1, {
          fileName: "app/components/PromptCardOwner.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react66.Link, {
          to: `/app/${prompt.uuid}`,
          className: "h-full w-full flex flex-col items-center justify-center bg-gray-50",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl font-black tracking-tighter mb-4",
            children: "No Images Generated"
          }, void 0, !1, {
            fileName: "app/components/PromptCardOwner.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/PromptCardOwner.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PromptCardOwner.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "relative p-4 flex flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react66.Link, {
            to: `/app/${prompt.uuid}`,
            className: "block text-lg mb-2",
            children: [
              "Prompt #",
              prompt.id
            ]
          }, void 0, !0, {
            fileName: "app/components/PromptCardOwner.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core29.Text, {
            mb: 12,
            lineClamp: 3,
            children: prompt.prompt
          }, void 0, !1, {
            fileName: "app/components/PromptCardOwner.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center justify-between mt-auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core29.Button, {
                component: import_react66.Link,
                variant: "gradient",
                gradient: { from: "violet", to: "pink" },
                radius: "xl",
                to: `/app/${prompt.uuid}`,
                children: "View"
              }, void 0, !1, {
                fileName: "app/components/PromptCardOwner.tsx",
                lineNumber: 60,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core29.Menu, {
                position: "bottom-end",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core29.Menu.Target, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core29.ActionIcon, {
                      radius: "xl",
                      size: "lg",
                      variant: "subtle",
                      color: "violet",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react19.DotsVertical, {
                        size: 16
                      }, void 0, !1, {
                        fileName: "app/components/PromptCardOwner.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/PromptCardOwner.tsx",
                      lineNumber: 71,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/PromptCardOwner.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core29.Menu.Dropdown, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core29.Menu.Item, {
                      color: "red",
                      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react19.Trash, {
                        size: 16
                      }, void 0, !1, {
                        fileName: "app/components/PromptCardOwner.tsx",
                        lineNumber: 78,
                        columnNumber: 23
                      }, this),
                      onClick: () => openConfirmModal(),
                      children: "Delete"
                    }, void 0, !1, {
                      fileName: "app/components/PromptCardOwner.tsx",
                      lineNumber: 76,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/PromptCardOwner.tsx",
                    lineNumber: 75,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/PromptCardOwner.tsx",
                lineNumber: 69,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/PromptCardOwner.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/PromptCardOwner.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConfirmationModal, {
        title: "Please confirm your action",
        onConfirm: () => {
          deletePrompt2.mutate({ uuid: prompt.uuid });
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-sm",
          children: "Are you sure you want to delete this prompt? This action cannot be undone."
        }, void 0, !1, {
          fileName: "app/components/PromptCardOwner.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PromptCardOwner.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this)
    ]
  }, prompt.id, !0, {
    fileName: "app/components/PromptCardOwner.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this) : null;
}

// app/routes/__index/app/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader19({ request }) {
  let { userId, accessToken } = await requireAuthSession(request), session = await getSession(request);
  session.unset(PROMPT_SESSION_KEY);
  let promptIdsToSave = session.get(PROMPT_SAVE_KEY);
  if (promptIdsToSave) {
    let { action: action24 = "upsert", ids = [] } = JSON.parse(promptIdsToSave), client = getSupabaseAdmin();
    if (action24 === "upsert")
      await client.from("prompts").upsert(
        ids.map((pId) => ({
          id: Number(pId),
          created_by: userId
        }))
      );
    else {
      let [id] = ids, { data } = await client.from("prompts").select("*").match({ id }).single();
      if (data) {
        let { data: newPrompt } = await client.from("prompts").insert({
          prompt: data.prompt,
          created_by: userId
        }).select("uuid").single();
        if (session.unset(PROMPT_SAVE_KEY), newPrompt)
          return (0, import_node30.redirect)(`/app/${newPrompt.uuid}`, {
            headers: {
              "Set-Cookie": await commitSession(session)
            }
          });
      }
    }
    session.unset(PROMPT_SAVE_KEY);
  }
  let url = new URL(request.url), { searchParams } = url, prompts = await getPrompts({
    accessToken,
    q: searchParams.get("q"),
    limit: PAGE_LIMIT,
    page: Number(searchParams.get("page") ?? 1)
  }), count = await getPromptCount({ q: searchParams.get("q"), accessToken });
  return (0, import_node30.json)(
    {
      prompts,
      count
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
function AppMainPage() {
  let { prompts, count } = (0, import_react67.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react67.useSearchParams)(), page = Number(searchParams.get("page") ?? 1);
  return (0, import_react68.useEffect)(() => {
    window.localStorage.getItem(ANON_PROMPT_KEY) && window.localStorage.removeItem(ANON_PROMPT_KEY);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container my-12",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
          className: "text-6xl font-black tracking-tighter mb-8",
          children: [
            "My Designs (",
            count,
            ")"
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/app/index.tsx",
          lineNumber: 123,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
          children: prompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PromptCardOwner, {
            prompt
          }, prompt.id, !1, {
            fileName: "app/routes/__index/app/index.tsx",
            lineNumber: 128,
            columnNumber: 20
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__index/app/index.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this),
        prompts.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container flex justify-center mt-12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core30.Pagination, {
            page,
            color: "violet",
            radius: "lg",
            total: Math.ceil(count / PAGE_LIMIT),
            styles: (theme2) => ({
              item: {
                "&[data-active]": {
                  backgroundImage: theme2.fn.gradient({
                    from: "violet",
                    to: "pink"
                  })
                }
              }
            }),
            onChange: (nextPage) => {
              setSearchParams({
                ...searchParams,
                page: `${nextPage}`
              });
            }
          }, void 0, !1, {
            fileName: "app/routes/__index/app/index.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__index/app/index.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        prompts.length <= 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "h-96 flex flex-col items-center justify-center bg-white rounded-xl shadow-xl",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-4xl md:text-6xl font-black tracking-tighter mb-4",
              children: "You have no designs"
            }, void 0, !1, {
              fileName: "app/routes/__index/app/index.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core30.Button, {
              component: import_react67.Link,
              variant: "gradient",
              gradient: { from: "violet", to: "pink" },
              size: "lg",
              radius: "xl",
              to: "/app/create",
              children: "Start Creating"
            }, void 0, !1, {
              fileName: "app/routes/__index/app/index.tsx",
              lineNumber: 163,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__index/app/index.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__index/app/index.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__index/app/index.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout
});
var import_react69 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "bg-gray-100 h-screen w-screen flex flex-col items-center justify-center px-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-6xl md:text-8xl font-bold tracking-tighter mb-8",
        children: [
          "Designed ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-indigo-600 font-black",
            children: "/ AI"
          }, void 0, !1, {
            fileName: "app/routes/__auth.tsx",
            lineNumber: 7,
            columnNumber: 18
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full max-w-screen-md rounded-xl shadow-2xl bg-white border border-gray-200",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react69.Outlet, {}, void 0, !1, {
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
  action: () => action21,
  default: () => CallbackProviderPage,
  loader: () => loader20
});
var import_node31 = require("@remix-run/node"), import_react70 = require("@remix-run/react"), import_react71 = require("react"), import_zod10 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader20({ request }) {
  return await getAuthSession(request) ? (0, import_node31.redirect)("/") : (0, import_node31.json)({});
}
async function action21({ request }) {
  let schema = import_zod10.z.object({
    accessToken: import_zod10.z.string(),
    refreshToken: import_zod10.z.string(),
    redirectTo: import_zod10.z.string().optional()
  }), formData = Object.fromEntries(await request.formData()), form = schema.safeParse(formData);
  if (!form.success)
    return (0, import_node31.json)(
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
  return authSession ? (0, import_node31.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession: mapAuthSession(authSession)
      })
    }
  }) : (0, import_node31.json)(
    {
      message: "invalid-refresh-token"
    },
    { status: 401 }
  );
}
function CallbackProviderPage() {
  let error = (0, import_react70.useActionData)(), fetcher = (0, import_react70.useFetcher)(), [searchParams] = (0, import_react70.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? "/app", supabase2 = (0, import_react71.useMemo)(() => getSupabase(), []);
  return (0, import_react71.useEffect)(() => {
    let {
      data: { subscription }
    } = supabase2.auth.onAuthStateChange((event6, supabaseSession) => {
      if (event6 === "SIGNED_IN") {
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
  action: () => action22,
  default: () => CallbackRecoveryPage,
  loader: () => loader21
});
var import_node32 = require("@remix-run/node"), import_react72 = require("@remix-run/react"), import_react73 = require("react"), import_zod11 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader21({ request }) {
  return await getAuthSession(request) ? (0, import_node32.redirect)("/") : (0, import_node32.json)({});
}
async function action22({ request }) {
  let schema = import_zod11.z.object({
    accessToken: import_zod11.z.string(),
    refreshToken: import_zod11.z.string(),
    redirectTo: import_zod11.z.string().optional()
  }), formData = Object.fromEntries(await request.formData()), form = schema.safeParse(formData);
  if (!form.success)
    return (0, import_node32.json)(
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
  return authSession ? (0, import_node32.redirect)("/recovery", {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession: mapAuthSession(authSession)
      })
    }
  }) : (0, import_node32.json)(
    {
      message: "invalid-refresh-token"
    },
    { status: 401 }
  );
}
function CallbackRecoveryPage() {
  let error = (0, import_react72.useActionData)(), fetcher = (0, import_react72.useFetcher)(), [searchParams] = (0, import_react72.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? "/", supabase2 = (0, import_react73.useMemo)(() => getSupabase(), []);
  return (0, import_react73.useEffect)(() => {
    let {
      data: { subscription }
    } = supabase2.auth.onAuthStateChange((event6, supabaseSession) => {
      if (event6 === "SIGNED_IN" || event6 === "PASSWORD_RECOVERY") {
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
  action: () => action23,
  default: () => CallbackPage,
  loader: () => loader22
});
var import_node33 = require("@remix-run/node"), import_react74 = require("@remix-run/react"), import_react75 = require("react"), import_zod12 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader22({ request }) {
  return await getAuthSession(request) ? (0, import_node33.redirect)("/") : (0, import_node33.json)({});
}
async function action23({ request }) {
  let schema = import_zod12.z.object({
    accessToken: import_zod12.z.string(),
    refreshToken: import_zod12.z.string(),
    redirectTo: import_zod12.z.string().optional()
  }), formData = Object.fromEntries(await request.formData()), form = schema.safeParse(formData);
  if (!form.success)
    return (0, import_node33.json)(
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
  return authSession ? (0, import_node33.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession: mapAuthSession(authSession)
      })
    }
  }) : (0, import_node33.json)(
    {
      message: "invalid-refresh-token"
    },
    { status: 401 }
  );
}
function CallbackPage() {
  let error = (0, import_react74.useActionData)(), fetcher = (0, import_react74.useFetcher)(), [searchParams] = (0, import_react74.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? "/", supabase2 = (0, import_react75.useMemo)(() => getSupabase(), []);
  return (0, import_react75.useEffect)(() => {
    let {
      data: { subscription }
    } = supabase2.auth.onAuthStateChange((event6, supabaseSession) => {
      if (event6 === "SIGNED_IN") {
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
  loader: () => loader23
});
var import_core31 = require("@mantine/core"), import_form8 = require("@mantine/form"), import_notifications5 = require("@mantine/notifications"), import_node34 = require("@remix-run/node"), import_react76 = require("@remix-run/react"), import_react77 = require("react"), import_zod13 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LoginSchema = import_zod13.z.object({
  email: import_zod13.z.string().email(),
  password: import_zod13.z.string().min(8)
});
async function loader23({ request }) {
  let { email, accessToken, refreshToken } = await requireAuthSession(
    request
  );
  return console.log(email, accessToken), (0, import_node34.json)({
    email,
    accessToken,
    refreshToken
  });
}
function RecoveryPage() {
  let navigate = (0, import_react76.useNavigate)(), { accessToken, refreshToken, email } = (0, import_react76.useLoaderData)(), supabase2 = (0, import_react77.useMemo)(() => getSupabase(accessToken), [accessToken]), [loading, setLoading] = (0, import_react77.useState)(!1), { onSubmit, getInputProps, ...form } = (0, import_form8.useForm)({
    validate: (0, import_form8.zodResolver)(LoginSchema),
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
                lineNumber: 74,
                columnNumber: 11
              }, this),
              "Complete your password reset."
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/recovery.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mt-8",
            children: [
              "Here by mistake?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react76.Link, {
                to: "/login",
                className: "text-fuchsia-600",
                children: "Go Back"
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 80,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/recovery.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/recovery.tsx",
        lineNumber: 71,
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
              setLoading(!1), (0, import_notifications5.showNotification)({
                title: "Whoops",
                message: error.message,
                color: "red"
              });
              return;
            }
            navigate("/");
          }),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core31.TextInput, {
                label: "Email",
                type: "email",
                name: "email",
                placeholder: "you@email.com",
                size: "md",
                disabled: !0,
                required: !0,
                ...getInputProps("email")
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 88,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core31.PasswordInput, {
                label: "Password",
                name: "password",
                placeholder: "********",
                autoComplete: "new-password",
                size: "md",
                required: !0,
                ...getInputProps("password")
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 98,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core31.Button, {
                type: "submit",
                loading,
                children: "Reset Password"
              }, void 0, !1, {
                fileName: "app/routes/__auth/recovery.tsx",
                lineNumber: 107,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/recovery.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__auth/recovery.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/recovery.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/recovery.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/signout.tsx
var signout_exports = {};
__export(signout_exports, {
  loader: () => loader24
});
async function loader24({ request }) {
  return destroyAuthSession(request);
}

// app/routes/__auth/forgot.tsx
var forgot_exports = {};
__export(forgot_exports, {
  default: () => ForgotPage,
  loader: () => loader25
});
var import_core32 = require("@mantine/core"), import_form9 = require("@mantine/form"), import_notifications6 = require("@mantine/notifications"), import_react78 = require("@remix-run/react"), import_react79 = require("react"), import_tabler_icons_react20 = require("tabler-icons-react"), import_zod14 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ForgotSchema = import_zod14.z.object({
  email: import_zod14.z.string().email()
});
async function loader25({ request }) {
  return await requireNonAuthSession(request);
}
function ForgotPage() {
  let [loading, setLoading] = (0, import_react79.useState)(!1), [success, setSuccess] = (0, import_react79.useState)(!1), { onSubmit, getInputProps, ...form } = (0, import_form9.useForm)({
    validate: (0, import_form9.zodResolver)(ForgotSchema),
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
                lineNumber: 59,
                columnNumber: 11
              }, this),
              "Reset your password."
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/forgot.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mt-8",
            children: [
              "Here by mistake?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react78.Link, {
                to: "/login",
                className: "text-fuchsia-600",
                children: "Go Back"
              }, void 0, !1, {
                fileName: "app/routes/__auth/forgot.tsx",
                lineNumber: 65,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/forgot.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/forgot.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-8 md:p-12",
        children: success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core32.Alert, {
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react20.Check, {
            size: 24
          }, void 0, !1, {
            fileName: "app/routes/__auth/forgot.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this),
          title: "Success",
          mt: 16,
          color: "green",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core32.Text, {
            children: "Please check your email for further instructions"
          }, void 0, !1, {
            fileName: "app/routes/__auth/forgot.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__auth/forgot.tsx",
          lineNumber: 72,
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
              setLoading(!1), (0, import_notifications6.showNotification)({
                title: "Whoops",
                message: error.message,
                color: "red"
              });
              return;
            }
            setSuccess(!0), setLoading(!1);
          }),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core32.TextInput, {
              id: "email",
              label: "Email",
              name: "email",
              placeholder: "you@email.com",
              required: !0,
              ...getInputProps("email")
            }, void 0, !1, {
              fileName: "app/routes/__auth/forgot.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core32.Button, {
              type: "submit",
              fullWidth: !0,
              mt: "xl",
              loading,
              children: "Reset Password"
            }, void 0, !1, {
              fileName: "app/routes/__auth/forgot.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__auth/forgot.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/forgot.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/forgot.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => LoginPage,
  loader: () => loader26
});
var import_core33 = require("@mantine/core"), import_form10 = require("@mantine/form"), import_react80 = require("@remix-run/react"), import_react_query14 = require("@tanstack/react-query"), import_tabler_icons_react21 = require("tabler-icons-react"), import_zod15 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SigninSchema = import_zod15.z.object({
  email: import_zod15.z.string().email()
});
async function loader26({ request }) {
  return await requireNonAuthSession(request);
}
function LoginPage() {
  let { onSubmit, getInputProps, setFieldValue, ...form } = (0, import_form10.useForm)({
    validate: (0, import_form10.zodResolver)(SigninSchema),
    initialValues: {
      email: ""
    }
  }), createAccount = (0, import_react_query14.useMutation)(async ({ email }) => {
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react80.Link, {
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
          createAccount.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core33.Alert, {
            color: "red",
            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_tabler_icons_react21.AlertCircle, {}, void 0, !1, {
              fileName: "app/routes/__auth/login.tsx",
              lineNumber: 88,
              columnNumber: 36
            }, this),
            mb: 16,
            children: createAccount.error.message
          }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 88,
            columnNumber: 11
          }, this),
          createAccount.data ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-slate-600 mb-8",
            children: "Please use the magic link in your email to continue."
          }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 94,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "bg-white border-2 border-gray-200 rounded-full px-4 py-2 w-full transition-all duration-150 hover:border-[#4285F4]",
                    onClick: () => signInWithGoogle(),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "flex items-center justify-center space-x-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleIcon, {
                          size: 24
                        }, void 0, !1, {
                          fileName: "app/routes/__auth/login.tsx",
                          lineNumber: 105,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "font-bold font-[Roboto] text-[#00000089]",
                          children: "Sign in with Google"
                        }, void 0, !1, {
                          fileName: "app/routes/__auth/login.tsx",
                          lineNumber: 106,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__auth/login.tsx",
                      lineNumber: 104,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 100,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core33.Divider, {
                    label: "OR",
                    labelPosition: "center",
                    my: 16
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 112,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 99,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                method: "post",
                onSubmit: onSubmit(handleSubmit),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core33.TextInput, {
                      id: "email",
                      label: "Email",
                      name: "email",
                      placeholder: "you@email.com",
                      required: !0,
                      size: "md",
                      ...getInputProps("email")
                    }, void 0, !1, {
                      fileName: "app/routes/__auth/login.tsx",
                      lineNumber: 116,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core33.Button, {
                      type: "submit",
                      radius: "sm",
                      variant: "filled",
                      fullWidth: !0,
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
                  lineNumber: 115,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 114,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react80.Link, {
                  to: "/forgot",
                  className: "text-sm text-slate-600",
                  children: "Forgot password?"
                }, void 0, !1, {
                  fileName: "app/routes/__auth/login.tsx",
                  lineNumber: 138,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 137,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 98,
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
var assets_manifest_default = { version: "5d715ebb", entry: { module: "/build/entry.client-27GVGG5V.js", imports: ["/build/_shared/chunk-R2EWCHA6.js", "/build/_shared/chunk-SGI2ZQFT.js", "/build/_shared/chunk-P3JRW6KJ.js", "/build/_shared/chunk-BPQL3L3K.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7ERRM335.js", imports: ["/build/_shared/chunk-DY5NY5ZG.js", "/build/_shared/chunk-UHA2KH4K.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-MSPVOXW5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/callback": { id: "routes/__auth/callback", parentId: "routes/__auth", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/callback-XU66QWAL.js", imports: ["/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/callback.provider": { id: "routes/__auth/callback.provider", parentId: "routes/__auth", path: "callback/provider", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/callback.provider-74EK7D7P.js", imports: ["/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/callback.recovery": { id: "routes/__auth/callback.recovery", parentId: "routes/__auth", path: "callback/recovery", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/callback.recovery-P5VDODS4.js", imports: ["/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/forgot": { id: "routes/__auth/forgot", parentId: "routes/__auth", path: "forgot", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/forgot-Z2GIHZ6M.js", imports: ["/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-YZ2OGBXA.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-DY5NY5ZG.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-PX4OZVDX.js", imports: ["/build/_shared/chunk-LMVDFF73.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-YZ2OGBXA.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/recovery": { id: "routes/__auth/recovery", parentId: "routes/__auth", path: "recovery", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/recovery-WKLYYGTV.js", imports: ["/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-DY5NY5ZG.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/signout": { id: "routes/__auth/signout", parentId: "routes/__auth", path: "signout", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/signout-NII5LUPE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/signup": { id: "routes/__auth/signup", parentId: "routes/__auth", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/signup-H2ERBTNE.js", imports: ["/build/_shared/chunk-Y7HQMSNT.js", "/build/_shared/chunk-LMVDFF73.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-YZ2OGBXA.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index": { id: "routes/__index", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__index-TRY5HVWW.js", imports: ["/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index": { id: "routes/__index/__index", parentId: "routes/__index", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index-J434FWF2.js", imports: ["/build/_shared/chunk-Y7HQMSNT.js", "/build/_shared/chunk-LMVDFF73.js", "/build/_shared/chunk-YDCGPIPL.js", "/build/_shared/chunk-DP2AZY5L.js", "/build/_shared/chunk-U6PZZZP5.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-RHJSSEGV.js", "/build/_shared/chunk-ESXVL3B5.js", "/build/_shared/chunk-FUCRVRRQ.js", "/build/_shared/chunk-BJMEVMZV.js", "/build/_shared/chunk-CLIXEDZK.js", "/build/_shared/chunk-YZ2OGBXA.js", "/build/_shared/chunk-UHA2KH4K.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/collections/$slug": { id: "routes/__index/__index/collections/$slug", parentId: "routes/__index/__index", path: "collections/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/collections/$slug-VFPGSOOJ.js", imports: ["/build/_shared/chunk-WFRT3CSZ.js", "/build/_shared/chunk-E36EGN5V.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/confirmation": { id: "routes/__index/__index/confirmation", parentId: "routes/__index/__index", path: "confirmation", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/confirmation-CJ3UNPB7.js", imports: ["/build/_shared/chunk-L3S4ZZXZ.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/designer": { id: "routes/__index/__index/designer", parentId: "routes/__index/__index", path: "designer", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/designer-63F5M22H.js", imports: ["/build/_shared/chunk-754SB2CE.js", "/build/_shared/chunk-L3S4ZZXZ.js", "/build/_shared/chunk-GL5Z4T5N.js", "/build/_shared/chunk-MHCOR7KS.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js", "/build/_shared/chunk-DY5NY5ZG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/explore/$promptId": { id: "routes/__index/__index/explore/$promptId", parentId: "routes/__index/__index", path: "explore/:promptId", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/explore/$promptId-U5AZ2YIZ.js", imports: ["/build/_shared/chunk-K6IXRLER.js", "/build/_shared/chunk-E36EGN5V.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js", "/build/_shared/chunk-DY5NY5ZG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/explore/$promptId/index": { id: "routes/__index/__index/explore/$promptId/index", parentId: "routes/__index/__index/explore/$promptId", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__index/__index/explore/$promptId/index-44IVV3DQ.js", imports: ["/build/_shared/chunk-CPIH3BMU.js", "/build/_shared/chunk-BEOBVQLS.js", "/build/_shared/chunk-GL5Z4T5N.js", "/build/_shared/chunk-MHCOR7KS.js", "/build/_shared/chunk-U6PZZZP5.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-RHJSSEGV.js", "/build/_shared/chunk-ESXVL3B5.js", "/build/_shared/chunk-FUCRVRRQ.js", "/build/_shared/chunk-BJMEVMZV.js", "/build/_shared/chunk-CLIXEDZK.js", "/build/_shared/chunk-YZ2OGBXA.js", "/build/_shared/chunk-UHA2KH4K.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/explore/index": { id: "routes/__index/__index/explore/index", parentId: "routes/__index/__index", path: "explore", index: !0, caseSensitive: void 0, module: "/build/routes/__index/__index/explore/index-KKCDOVPQ.js", imports: ["/build/_shared/chunk-WFRT3CSZ.js", "/build/_shared/chunk-E36EGN5V.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/index": { id: "routes/__index/__index/index", parentId: "routes/__index/__index", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__index/__index/index-EPPH5RSN.js", imports: ["/build/_shared/chunk-L3S4ZZXZ.js", "/build/_shared/chunk-WFRT3CSZ.js", "/build/_shared/chunk-E36EGN5V.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/privacy": { id: "routes/__index/__index/privacy", parentId: "routes/__index/__index", path: "privacy", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/privacy-LPVTNXAH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/returns": { id: "routes/__index/__index/returns", parentId: "routes/__index/__index", path: "returns", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/returns-2HJEIAFZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/__index/terms": { id: "routes/__index/__index/terms", parentId: "routes/__index/__index", path: "terms", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/__index/terms-G66QSR7C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/app": { id: "routes/__index/app", parentId: "routes/__index", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/app-BBFIEWWY.js", imports: ["/build/_shared/chunk-YDCGPIPL.js", "/build/_shared/chunk-DP2AZY5L.js", "/build/_shared/chunk-U6PZZZP5.js", "/build/_shared/chunk-FUCRVRRQ.js", "/build/_shared/chunk-BJMEVMZV.js", "/build/_shared/chunk-YZ2OGBXA.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/app/$promptId": { id: "routes/__index/app/$promptId", parentId: "routes/__index/app", path: ":promptId", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/app/$promptId-57FLY5AV.js", imports: ["/build/_shared/chunk-K6IXRLER.js", "/build/_shared/chunk-CPIH3BMU.js", "/build/_shared/chunk-BEOBVQLS.js", "/build/_shared/chunk-GL5Z4T5N.js", "/build/_shared/chunk-MHCOR7KS.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-RHJSSEGV.js", "/build/_shared/chunk-ESXVL3B5.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-CLIXEDZK.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js", "/build/_shared/chunk-DY5NY5ZG.js", "/build/_shared/chunk-UHA2KH4K.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/app/account": { id: "routes/__index/app/account", parentId: "routes/__index/app", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/app/account-L7S4MZPJ.js", imports: ["/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/app/create": { id: "routes/__index/app/create", parentId: "routes/__index/app", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/__index/app/create-KHQJBEMR.js", imports: ["/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-BEOBVQLS.js", "/build/_shared/chunk-MHCOR7KS.js", "/build/_shared/chunk-LK73WBB4.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-E36EGN5V.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__index/app/index": { id: "routes/__index/app/index", parentId: "routes/__index/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__index/app/index-OWDPH7LQ.js", imports: ["/build/_shared/chunk-754SB2CE.js", "/build/_shared/chunk-NEDCVTLV.js", "/build/_shared/chunk-ESXVL3B5.js", "/build/_shared/chunk-E36EGN5V.js", "/build/_shared/chunk-YTKCPPSU.js", "/build/_shared/chunk-Y5A6OLJ4.js", "/build/_shared/chunk-CLIXEDZK.js", "/build/_shared/chunk-EJOHPGSH.js", "/build/_shared/chunk-SPUIDVFV.js", "/build/_shared/chunk-2YZYVPD3.js", "/build/_shared/chunk-UAAYLD5M.js", "/build/_shared/chunk-OCQ35KJ5.js", "/build/_shared/chunk-JPM4DHBZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/delete.$promptId": { id: "routes/api/delete.$promptId", parentId: "root", path: "api/delete/:promptId", index: void 0, caseSensitive: void 0, module: "/build/routes/api/delete.$promptId-ACZ63ZNH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/duplicate.$promptId": { id: "routes/api/duplicate.$promptId", parentId: "root", path: "api/duplicate/:promptId", index: void 0, caseSensitive: void 0, module: "/build/routes/api/duplicate.$promptId-6JW4CVOV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/generate/hires": { id: "routes/api/generate/hires", parentId: "root", path: "api/generate/hires", index: void 0, caseSensitive: void 0, module: "/build/routes/api/generate/hires-MQVDDTEA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/generate/image": { id: "routes/api/generate/image", parentId: "root", path: "api/generate/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/generate/image-QUQO6HNF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/generate/image-test": { id: "routes/api/generate/image-test", parentId: "root", path: "api/generate/image-test", index: void 0, caseSensitive: void 0, module: "/build/routes/api/generate/image-test-W3YUBIRV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/generate/notify": { id: "routes/api/generate/notify", parentId: "root", path: "api/generate/notify", index: void 0, caseSensitive: void 0, module: "/build/routes/api/generate/notify-QNW5FBPO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/generate/remove-bg": { id: "routes/api/generate/remove-bg", parentId: "root", path: "api/generate/remove-bg", index: void 0, caseSensitive: void 0, module: "/build/routes/api/generate/remove-bg-LPZXBM5L.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/generate/upload": { id: "routes/api/generate/upload", parentId: "root", path: "api/generate/upload", index: void 0, caseSensitive: void 0, module: "/build/routes/api/generate/upload-EQF6NLQD.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/printful/mock": { id: "routes/api/printful/mock", parentId: "root", path: "api/printful/mock", index: void 0, caseSensitive: void 0, module: "/build/routes/api/printful/mock-IRBHZLNC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/printful/orders/create": { id: "routes/api/printful/orders/create", parentId: "root", path: "api/printful/orders/create", index: void 0, caseSensitive: void 0, module: "/build/routes/api/printful/orders/create-EAWKL5AP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/printful/products/$id": { id: "routes/api/printful/products/$id", parentId: "root", path: "api/printful/products/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api/printful/products/$id-ZU4AN3HJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/printful/products/$id.templates": { id: "routes/api/printful/products/$id.templates", parentId: "root", path: "api/printful/products/:id/templates", index: void 0, caseSensitive: void 0, module: "/build/routes/api/printful/products/$id.templates-LZXJWH5K.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/purchase/initiate": { id: "routes/api/purchase/initiate", parentId: "root", path: "api/purchase/initiate", index: void 0, caseSensitive: void 0, module: "/build/routes/api/purchase/initiate-MBURHL6X.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/transform/thumbnail.$id": { id: "routes/api/transform/thumbnail.$id", parentId: "root", path: "api/transform/thumbnail/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/api/transform/thumbnail.$id-VMYIJ4LM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhooks/slack": { id: "routes/api/webhooks/slack", parentId: "root", path: "api/webhooks/slack", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhooks/slack-YOTSG24W.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhooks/stripe": { id: "routes/api/webhooks/stripe", parentId: "root", path: "api/webhooks/stripe", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhooks/stripe-AQAE6M4P.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-5D715EBB.js" };

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
  "routes/api/printful/products/$id.templates": {
    id: "routes/api/printful/products/$id.templates",
    parentId: "root",
    path: "api/printful/products/:id/templates",
    index: void 0,
    caseSensitive: void 0,
    module: id_templates_exports
  },
  "routes/api/transform/thumbnail.$id": {
    id: "routes/api/transform/thumbnail.$id",
    parentId: "root",
    path: "api/transform/thumbnail/:id",
    index: void 0,
    caseSensitive: void 0,
    module: thumbnail_id_exports
  },
  "routes/api/printful/orders/create": {
    id: "routes/api/printful/orders/create",
    parentId: "root",
    path: "api/printful/orders/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/api/printful/products/$id": {
    id: "routes/api/printful/products/$id",
    parentId: "root",
    path: "api/printful/products/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/api/duplicate.$promptId": {
    id: "routes/api/duplicate.$promptId",
    parentId: "root",
    path: "api/duplicate/:promptId",
    index: void 0,
    caseSensitive: void 0,
    module: duplicate_promptId_exports
  },
  "routes/api/generate/image-test": {
    id: "routes/api/generate/image-test",
    parentId: "root",
    path: "api/generate/image-test",
    index: void 0,
    caseSensitive: void 0,
    module: image_test_exports
  },
  "routes/api/generate/remove-bg": {
    id: "routes/api/generate/remove-bg",
    parentId: "root",
    path: "api/generate/remove-bg",
    index: void 0,
    caseSensitive: void 0,
    module: remove_bg_exports
  },
  "routes/api/purchase/initiate": {
    id: "routes/api/purchase/initiate",
    parentId: "root",
    path: "api/purchase/initiate",
    index: void 0,
    caseSensitive: void 0,
    module: initiate_exports
  },
  "routes/api/delete.$promptId": {
    id: "routes/api/delete.$promptId",
    parentId: "root",
    path: "api/delete/:promptId",
    index: void 0,
    caseSensitive: void 0,
    module: delete_promptId_exports
  },
  "routes/api/generate/notify": {
    id: "routes/api/generate/notify",
    parentId: "root",
    path: "api/generate/notify",
    index: void 0,
    caseSensitive: void 0,
    module: notify_exports
  },
  "routes/api/generate/upload": {
    id: "routes/api/generate/upload",
    parentId: "root",
    path: "api/generate/upload",
    index: void 0,
    caseSensitive: void 0,
    module: upload_exports
  },
  "routes/api/webhooks/stripe": {
    id: "routes/api/webhooks/stripe",
    parentId: "root",
    path: "api/webhooks/stripe",
    index: void 0,
    caseSensitive: void 0,
    module: stripe_exports
  },
  "routes/api/generate/hires": {
    id: "routes/api/generate/hires",
    parentId: "root",
    path: "api/generate/hires",
    index: void 0,
    caseSensitive: void 0,
    module: hires_exports
  },
  "routes/api/generate/image": {
    id: "routes/api/generate/image",
    parentId: "root",
    path: "api/generate/image",
    index: void 0,
    caseSensitive: void 0,
    module: image_exports
  },
  "routes/api/webhooks/slack": {
    id: "routes/api/webhooks/slack",
    parentId: "root",
    path: "api/webhooks/slack",
    index: void 0,
    caseSensitive: void 0,
    module: slack_exports
  },
  "routes/api/printful/mock": {
    id: "routes/api/printful/mock",
    parentId: "root",
    path: "api/printful/mock",
    index: void 0,
    caseSensitive: void 0,
    module: mock_exports
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
  "routes/__index/__index/collections/$slug": {
    id: "routes/__index/__index/collections/$slug",
    parentId: "routes/__index/__index",
    path: "collections/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/__index/__index/explore/$promptId": {
    id: "routes/__index/__index/explore/$promptId",
    parentId: "routes/__index/__index",
    path: "explore/:promptId",
    index: void 0,
    caseSensitive: void 0,
    module: promptId_exports
  },
  "routes/__index/__index/explore/$promptId/index": {
    id: "routes/__index/__index/explore/$promptId/index",
    parentId: "routes/__index/__index/explore/$promptId",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: promptId_exports2
  },
  "routes/__index/__index/explore/index": {
    id: "routes/__index/__index/explore/index",
    parentId: "routes/__index/__index",
    path: "explore",
    index: !0,
    caseSensitive: void 0,
    module: explore_exports
  },
  "routes/__index/__index/confirmation": {
    id: "routes/__index/__index/confirmation",
    parentId: "routes/__index/__index",
    path: "confirmation",
    index: void 0,
    caseSensitive: void 0,
    module: confirmation_exports
  },
  "routes/__index/__index/designer": {
    id: "routes/__index/__index/designer",
    parentId: "routes/__index/__index",
    path: "designer",
    index: void 0,
    caseSensitive: void 0,
    module: designer_exports
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
  "routes/__index/app/$promptId": {
    id: "routes/__index/app/$promptId",
    parentId: "routes/__index/app",
    path: ":promptId",
    index: void 0,
    caseSensitive: void 0,
    module: promptId_exports3
  },
  "routes/__index/app/account": {
    id: "routes/__index/app/account",
    parentId: "routes/__index/app",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/__index/app/create": {
    id: "routes/__index/app/create",
    parentId: "routes/__index/app",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports2
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
