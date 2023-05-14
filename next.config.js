/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

// next config production only
const nextConfig =
  process.env.NODE_ENV === "production"
    ? withPWA({
        reactStrictMode: true,
        ...nextTranslate(),
      })
    : {
        reactStrictMode: true,
        ...nextTranslate(),
      };

module.exports = nextConfig;
