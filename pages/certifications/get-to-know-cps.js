import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import CertificationsFeatureStats from '../../components/certifications/CertificationsFeatureStats';
import CertificationsHero from '../../components/certifications/CertificationsHero';
import CertificationsLogos from '../../components/certifications/CertificationsLogos';
import CertificationsPricing from '../../components/certifications/CertificationsPricing';
import CertificationsSecondFeature from '../../components/certifications/CertificationsSecondFeature';
import GradientCTA from '../../components/GradientCTA';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import DoubleTestimonial from '../../components/DoubleTestimonial';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

const primaryFeatures = [
  {
    name: 'Advance Your Career',
    description:
      "This Certificate will show your employers that you're dedicated and possess a hard work ethic.",
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Keep Up With Innovation',
    description:
      "Packaging is a field of science, which means materials, processes, and technologies are constantly evolving. We'll keep you informed.",
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Find Insights & Inspiration',
    description:
      'Expanding your knowledge base is an excellent way to discover new ideas in packaging and make yourself stand out.',
    href: '#',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Learn The Market',
    description:
      'We exist in a rapidly-changing marketplace where company ownership, business cultures, and packaging responsibilities vary.',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Differentiate Yourself',
    description:
      'Apply your learning right away while you enhance your resume with a specialization in packaging.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Grow Your Network',
    description:
      'Throughout the program, you will have the opportunity to ask questions, share experiences, and learn from people who have the experience and expertise to help your business flourish.',
    href: '#',
    icon: CalendarDaysIcon,
  },
];

const features = [
  '12-Months Access',
  'Choose Your Own Electives',
  '12 Expert-led Courses',
  'Instructor Email Access',
];

const stats = [
  { id: 1, name: 'Course Hours', value: '60' },
  { id: 2, name: 'Courses Included', value: '12', link: true },
  { id: 3, name: 'CEUs Earned', value: '6' },
  { id: 4, name: 'Flexibility to Complete', value: '12 months' },
];

export const Page = ({ cert }) => {
  const { darkMode } = useSelector((state) => state.layout);
  return (
    <div className='bg-white dark:bg-slate-900'>
      <div className='flex flex-col gap-32 md:gap-48'>
        <CertificationsHero
          darkMode={darkMode}
          title_button_1_link={cert.title_button_1_link}
          title_button_1_text={cert.title_button_1_text}
          title_button_2_link={cert.title_button_2_link}
          title_button_2_text={cert.title_button_2_text}
          title_callout_1={cert.title_callout_1}
          title_callout_2={cert.title_callout_2}
          title_image={cert.title_image}
          title_text={cert.title_text}
          title={cert.title}
        />
        <CertificationsLogos darkMode={darkMode} />
        <CertificationsFeatureStats
          brochureLink={cert.brochure_link}
          whoText={cert.whoText}
          darkMode={darkMode}
          video={cert.video}
          stats={stats}
          courses={cert.courses?.items}
        />
        <CertificationsPricing
          price_full={'3,999'}
          price_monthly={'349'}
          pricing_features={features}
        />
        <CertificationsSecondFeature
          darkMode={darkMode}
          features={primaryFeatures}
        />
        <DoubleTestimonial />
        <GradientCTA
          headline='Ready to Elevate Your Career?'
          subheadline='Try a demo, risk-free.'
          buttonText='Get Started For Free'
          secondaryButtonText='Need More Info?'
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const getCourses = /* GraphQL */ `
    query MyQuery($slug: String!) {
      certificatesBySlug(slug: $slug) {
        items {
          courses {
            items {
              course {
                id
                category
                hour
                lessons
                price
                slug
                title
                video
                videos
                subhead
              }
            }
          }
          title
          title_button_1_link
          title_button_1_text
          title_button_2_link
          title_button_2_text
          title_callout_1
          title_callout_2
          title_image
          title_text
          slug
          id
          brochure_link
          ceus_total
          courses_total
          hours_total
          whoText
          video
        }
      }
    }
  `;

  const variables = {
    slug: 'certificate-of-packaging-science',
  };

  const res = await API.graphql(graphqlOperation(getCourses, variables));
  const cert = await res.data.certificatesBySlug.items[0];

  return { props: { cert }, revalidate: 10 };
}

export default Page;
