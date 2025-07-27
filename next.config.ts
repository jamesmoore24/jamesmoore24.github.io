import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Uncomment these lines if CSS still doesn't load after .nojekyll fix
  // assetPrefix: './',
  // basePath: '',
};

export default nextConfig;
