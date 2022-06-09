/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'default',
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost', '206.189.83.92'],
  },
};
module.exports = nextConfig;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
