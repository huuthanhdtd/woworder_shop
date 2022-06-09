/**
 * @type {import('next').NextConfig}
 */

const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

module.exports = withCss(withPurgeCss());
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
