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
      'packagingschool.com',
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
      {
        source: '/get-to-know-cmpm',
        destination: 'certifications/get-to-know-cmpm',
        permanent: true,
      },
      {
        source: '/get-to-know-cps',
        destination: '/certifications/get-to-know-cps',
        permanent: true,
      },
      {
        source: '/get-to-know-apc',
        destination: '/certifications/get-to-know-apc',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
