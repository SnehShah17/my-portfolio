/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, 
  reactStrictMode: true,
  images: {
    domains: ['prod.spline.design'],
  },
}

module.exports = nextConfig
