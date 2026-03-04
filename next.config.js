/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify
  output: 'export',

  // Image optimization (unoptimized for static export)
  images: {
    unoptimized: true,
  },

  // Strict mode for better development
  reactStrictMode: true,
}

module.exports = nextConfig
