// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true, // <-- moved out of experimental

  images: {
    remotePatterns: [
      // { protocol: 'https', hostname: 'your-wp-host.com' },
      // { protocol: 'https', hostname: 'images.example-cdn.com' },
    ],
  },

  poweredByHeader: false,
};
export default nextConfig;
