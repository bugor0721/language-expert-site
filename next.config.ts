import type { NextConfig } from "next";

const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || "";
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  ...(githubPagesBasePath && {
    basePath: githubPagesBasePath,
    assetPrefix: `${githubPagesBasePath}/`,
  }),
  images: {
    unoptimized: true,
  },

  ...(isDevelopment && {
    async headers() {
      return [
        {
          source: "/:path*",
          basePath: false,
          headers: [
            {
              key: "X-Robots-Tag",
              value: "noindex, nofollow",
            },
          ],
        },
      ];
    },
  }),

  allowedDevOrigins: ["*"],
  devIndicators: false,
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverSourceMaps: false,
    turbopackSourceMaps: false,
  },
};

export default nextConfig;
