/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'default',
    domains: ['localhost', '86c5-14-250-231-16.ngrok.io'],
    // domains: ['localhost', '206.189.83.92'],
  },
};

module.exports = nextConfig;
