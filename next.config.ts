import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/gml", destination: "/gml/index.html" },
      { source: "/gml/", destination: "/gml/index.html" },
    ];
  },
};

export default nextConfig;
