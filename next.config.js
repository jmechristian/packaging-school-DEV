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
        source: '/automotive/:id',
        destination: '/certifications/get-to-know-apc',
        permanent: true,
      },
      {
        source: '/automotive',
        destination: '/certifications/get-to-know-apc',
        permanent: true,
      },
      {
        source: '/automotive-counter',
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
      {
        source: '/sustainable-packaging',
        destination: '/courses/sustainable-packaging',
        permanent: true,
      },
      {
        source: '/sustainability',
        destination: '/courses/sustainable-packaging',
        permanent: true,
      },
      {
        source: '/sustainable',
        destination: '/courses/sustainable-packaging',
        permanent: true,
      },
      {
        source: '/beauty-and-health',
        destination:
          'https://library.packagingschool.com/articles/beauty-and-health',
        permanent: true,
      },
      {
        source: '/beauty-and-health',
        destination:
          'https://library.packagingschool.com/articles/beauty-and-health',
        permanent: true,
      },
      {
        source: '/bev-tech-fundamentals/',
        destination: '/courses/fundamentals-of-beverage-technology',
        permanent: true,
      },
      {
        source: '/beverage-institute/',
        destination: '/collections/beverage-institute-value-bundle',
        permanent: true,
      },
      {
        source: '/careers-in-packaging-packaging-compliance-specialist/',
        destination: '/careers-in-packaging-consumer-behavior-analyst',
        permanent: true,
      },
      {
        source: '/certificates',
        destination: '/certifications',
        permanent: true,
      },
      {
        source: '/cmpm-automotive',
        destination: '/certifications',
        permanent: true,
      },
      {
        source: '/courses/packdesign-workshop',
        destination: 'https://library.packagingschool.com/packdesign-workshop',
        permanent: true,
      },
      {
        source: '/corrugated-design-scholarship-application/',
        destination: '/forms/scholarship-application-form',
        permanent: true,
      },
      {
        source: '/courses-bmw-distribution-testing',
        destination: '/courses/bmw-distribution-testing',
        permanent: true,
      },
      {
        source: '/courses-pet-preform-to-bottle/',
        destination: '/courses/preform-design',
        permanent: true,
      },
      {
        source: '/courses-preform-heating/',
        destination: '/courses/preform-heating',
        permanent: true,
      },
      {
        source: '/courses-solidworks-basics/',
        destination: '/courses/solidworks-for-packaging-basic',
        permanent: true,
      },
      {
        source: '/solidworks-for-packaging-basic',
        destination: '/courses/solidworks-for-packaging-basic',
        permanent: true,
      },
      {
        source: '/design',
        destination: 'https://library.packagingschool.com/packdesign-workshop',
        permanent: true,
      },
      {
        source: '/flexographic-print-fundamentals/',
        destination: '/courses/flexographic-print-fundamentals',
        permanent: true,
      },
      {
        source: '/human-factors-in-packaging-design',
        destination: '/courses/leveraging-human-factors-in-packaging-design',
        permanent: true,
      },
      {
        source: '/project-management-essentials',
        destination: '/courses/project-management-essentials',
        permanent: true,
      },
      {
        source: '/cannabis-packaging',
        destination: '/courses/cannabis-packaging',
        permanent: true,
      },
      {
        source: '/cannabis-packaging',
        destination: '/courses/cannabis-packaging',
        permanent: true,
      },
      {
        source: '/pressure-sensitive-labels-101',
        destination: '/courses/pressure-sensitive-labels-101',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
