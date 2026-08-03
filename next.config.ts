import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },

      // Wikimedia / Wikipedia
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
      },

      // Award images
      {
        protocol: "https",
        hostname: "prodborn.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "lightforcelaserengraving.com",
      },
      {
        protocol: "https",
        hostname: "www.mjaa.org",
      },

      // Certificate images
      {
        protocol: "https",
        hostname: "media.s-bol.com",
      },    {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "pinimg.com",
      },
    ],
  },
};

export default nextConfig;