/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "reqres.in",
  //       pathname: "**",api/register,
  //     },
  //   ],
  // },
  images: {
    domains: ['reqres.in'],
  },
}

module.exports = nextConfig
