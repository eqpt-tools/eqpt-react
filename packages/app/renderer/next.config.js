/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
  images: {
    domains: ['cnrstvns.dev', 'cdn.shopify.com'],
    unoptimized: true,
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:2021/:path*',
      },
    ];
  },
};
