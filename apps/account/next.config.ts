import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TODO: for docker image. otherwise comment this
  output: "standalone",

  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  }, 

  async rewrites() {
    const rewrites = [
      {
        source: "/sign-in",
        destination: "/login",
      },
      {
        source: "/signin",
        destination: "/login",
      },
      {
        source: "/register",
        destination: "/signup",
      },
      {
        source: "/sign-up",
        destination: "/signup",
      },
      {
        source: "/log-in",
        destination: "/login",
      },
    ];

    return rewrites;
  },
};

export default nextConfig;
