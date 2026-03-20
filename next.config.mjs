/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'm.discgolfscene.com',
      },
      {
        protocol: 'https',
        hostname: 'discgolfscene.com',
      },
    ],
  },
};

export default nextConfig;
