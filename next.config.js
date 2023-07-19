/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'packschool.s3.amazonaws.com',
      'tailwindui.com',
      'apsmedia.s3.amazonaws.com',
    ],
  },
  async redirects() {
    return [
      // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      {
        source: '/courses/packdesign-workshop',
        destination: 'https://library.packagingschool.com/packdesign-workshop',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
