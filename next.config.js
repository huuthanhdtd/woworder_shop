/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'default',
    domains: ['localhost', 'anphu-tpc.herokuapp.com'],
  },
};

module.exports = nextConfig;
