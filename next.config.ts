import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.akuvox.com',
      },
      {
        protocol: 'https',
        hostname: 'akuvox.com',
      },
      {
        protocol: 'https',
        hostname: 'www.doorbird.com',
      },
      {
        protocol: 'https',
        hostname: 'doorbird.com',
      },
      {
        protocol: 'https',
        hostname: 'www.butterflymx.com',
      },
      {
        protocol: 'https',
        hostname: 'butterflymx.com',
      },
      {
        protocol: 'https',
        hostname: 'grow.butterflymx.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
};

export default nextConfig;
