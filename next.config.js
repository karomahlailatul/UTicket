/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BACKEND: `https://uticket-v2-be.vercel.app/api/v1`,
  },
  images: {
    domains: ['drive.google.com'],
  },

}


module.exports = nextConfig