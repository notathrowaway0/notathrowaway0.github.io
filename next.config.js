// next.config.js

const withPWA = require("@ducanh2912/next-pwa").default({
  // Optional: These settings are good for 'output: export'
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Settings for GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },

  // We don't need basePath or assetPrefix for your
  // 'notathrowaway0.github.io' repo.
};

module.exports = withPWA(nextConfig);
