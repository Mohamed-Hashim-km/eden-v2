import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error - eslint is valid config but missing from types in this version
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
