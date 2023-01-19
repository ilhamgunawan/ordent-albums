/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
  },
}

module.exports = nextConfig
