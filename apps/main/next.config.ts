import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TODO: for docker image. otherwise comment this
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol
        hostname: "images.pexels.com", // Correct hostname
        port: "", // Leave empty unless a specific port is needed
        pathname: "/**", // Use `/` followed by `**` to allow all subpaths
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  // async redirects() {
  //     return [
  //       {
  //         source: "/login",
  //         destination: "/",
  //         permanent: true,
  //       }
  //     ]
  // },

  // async rewrites() {
  //     const rewrites = [
  //         {
  //           source: "/",
  //           destination: "/login"
  //         },
  //     ]

  //     return rewrites;
  // },
};

export default nextConfig;
