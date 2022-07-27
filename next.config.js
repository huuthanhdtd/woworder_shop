/**
 * @type {import('next').NextConfig}
 */

// const withCss = require('@zeit/next-css');
// const withPurgeCss = require('next-purgecss');

// module.exports = withCss(withPurgeCss());

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});

const nextConfig = {
  images: {
    loader: 'default',
    formats: ['image/webp'],
    // domains: ['localhost', '206.189.83.92'],
    domains: ['localhost', 'anvantin.com.vn', 'anvantin.vn', '167.172.94.143'],

    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
module.exports = nextConfig;
