/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://mocki.io/v1/4078e3d8-acda-46b7-9015-ff3bb3050ad1'
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com']
  }
}

module.exports = nextConfig
