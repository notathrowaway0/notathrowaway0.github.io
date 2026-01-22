import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Required for static export
  output: "export",

  // Empty string for your specific username.github.io repo
  basePath: "",

  images: {
    unoptimized: true,
  }, // This was likely the missing brace causing the error
};

export default nextConfig;
