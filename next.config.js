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
  // async redirects() {
  //   return [
  //     // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
  //     {
  //       source: '/get-to-know-cmpm',
  //       destination: '/blog/:slug',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
