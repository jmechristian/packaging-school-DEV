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
      'psupdatetemp.wpengine.com',
    ],
  },
  async redirects() {
    return [
      // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      {
        source: '/pack-design-camp',
        destination: 'https://library.packagingschool.com/packdesign-workshop',
        permanent: true,
      },
      {
        source: '/packcamp',
        destination: 'https://library.packagingschool.com/packdesign-workshop',
        permanent: true,
      },
      {
        source: '/pack-design-workshop',
        destination: 'https://library.packagingschool.com/packdesign-workshop',
        permanent: true,
      },
      {
        source: '/workshop',
        destination: 'https://library.packagingschool.com/packdesign-workshop',
        permanent: true,
      },
      {
        source: '/workshops',
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
      {
        source: '/about-packaging-school',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/automotive',
        destination: '/certifications/get-to-know-apc',
        permanent: true,
      },
      {
        source: '/learn-packaging-online-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/learn-packaging-online-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/library',
        permanent: true,
      },
      {
        source: '/author',
        destination: '/library',
        permanent: true,
      },
      {
        source: '/author',
        destination: '/library',
        permanent: true,
      },
      {
        source: '/shop/glass-packaging',
        destination: '/courses/glass-metal-packaging',
        permanent: true,
      },
      {
        source: '/printing',
        destination: '/courses/packaging-printing',
        permanent: true,
      },
      {
        source: '/paperboard-cartons',
        destination: '/courses/paperboard-cartons',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
