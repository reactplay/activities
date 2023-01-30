/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'unavatar.io', // Gravatar
      'pbs.twimg.com',
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hackrplay/2022/home',
        permanent: true,
      },
    ]
  },

}

module.exports = nextConfig
