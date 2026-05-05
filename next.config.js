/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Only local /public/assets — no external domains
    domains: [],
  },
  // Clean URLs
  trailingSlash: false,
}

module.exports = nextConfig
