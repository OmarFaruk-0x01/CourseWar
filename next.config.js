/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://mocki.io/v1/8d2161cf-b9ed-47a7-bf34-e1044c79281a'
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com']
  }
}

module.exports = nextConfig
