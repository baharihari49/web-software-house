import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'],
    // Alternatively, you can use the newer 'remotePatterns' configuration:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;