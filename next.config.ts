import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/blackinnovatorsconference.github.io",
  assetPrefix: "/blackinnovatorsconference.github.io/",
};

export default nextConfig;
