/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  serverDependenciesToBundle: [
    "swiper",
    "swiper/react",
    "swiper/react/swiper-react.js",
    "ssr-window",
    "ssr-window/ssr-window.esm.js",
    "dom7",
  ],
};
