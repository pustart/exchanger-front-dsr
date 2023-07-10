/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'exchanger-backend.onrender.com', 'exchanger-frontend.onrender.com']
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'exchanger-backend.onrender.com',
      port: '',
    },
  ]
}

module.exports = nextConfig
