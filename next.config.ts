import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
output: 'export', // This creates a 'out' folder instead of a server build
  basePath: '/your-repo-name', // Replace with your actual repository name
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js Image Optimization API
};

export default nextConfig;
