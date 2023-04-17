/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'packschool.s3.amazonaws.com',
      'tailwindui.com',
    ],
  },
};

module.exports = nextConfig;
