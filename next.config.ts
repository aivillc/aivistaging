import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint config uses eslint-config-next/core-web-vitals which fails
    // on Vercel builds. Skip during build — lint locally instead.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
