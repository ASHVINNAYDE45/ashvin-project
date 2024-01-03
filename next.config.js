/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "reqres.in",
  //       pathname: "**",
  //     },
  //   ],
  // },
  images: {
    domains: ['reqres.in'],
  },
}

module.exports = nextConfig
