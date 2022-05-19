/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://mocki.io/v1/6762917b-5d7c-45f6-b1d0-a571d84f661c'
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig
