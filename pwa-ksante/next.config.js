// next.config.js

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",

  // Optional: PWA settings for a better static export experience
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in dev mode
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- START: Settings for GitHub Pages ---

  // 1. Set the output mode to 'export'
  output: "export",

  // 2. Disable server-side image optimization
  // (This is required for 'output: export')
  images: {
    unoptimized: true,
  },

  // NOTE: We do NOT need basePath or assetPrefix
  // because your repo is 'notathrowaway0.github.io'.

  // --- END: Settings for GitHub Pages ---

  // ... any other Next.js config you might have
};

// Wrap your Next.js config with the PWA config
module.exports = withPWA(nextConfig);
