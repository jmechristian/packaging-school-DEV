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
      {
        source: '/corrugated-containers',
        destination: '/courses/corrugated-containers',
        permanent: true,
      },
      {
        source: '/courses-corrugated-containers-101',
        destination: '/courses/corrugated-containers',
        permanent: true,
      },
      {
        source: '/corrugated-design',
        destination: '/courses/introduction-to-corrugated-design',
        permanent: true,
      },
      {
        source: '/courses-package-printing-101',
        destination: '/courses/packaging-printing',
        permanent: true,
      },
      {
        source: '/courses-sustainable-packaging-101',
        destination: '/courses/sustainable-packaging',
        permanent: true,
      },
      {
        source: '/hazmat-packaging',
        destination:
          '/courses/hazmat-packaging-certificate-for-automotive-applications',
        permanent: true,
      },
      {
        source: '/packaging-boot-camp',
        destination: '/courses/packaging-boot-camp-101',
        permanent: true,
      },
      {
        source: '/packaging-design-workflow',
        destination: '/courses/packdesign-workshop',
        permanent: true,
      },
      {
        source: '/packaging-foundations',
        destination: '/courses/packaging-foundations',
        permanent: true,
      },
      {
        source: '/packaging-regulations',
        destination: '/courses/packaging-laws-and-regulations',
        permanent: true,
      },
      {
        source: '/packaging-science-certificate',
        destination: '/certifications/get-to-know-cps',
        permanent: true,
      },
      {
        source: '/packaging-science-certificate',
        destination: '/certifications/get-to-know-cps',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
