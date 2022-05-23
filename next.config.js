/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://coursesserver.omarfaruk24.repl.co'
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com']
  }
}

module.exports = nextConfig
