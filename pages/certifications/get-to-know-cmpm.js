import React from 'react';
import CertificateHero from '../../components/certifications/cmpm/CertificateHero';
import CertificateAbout from '../../components/certifications/cmpm/CertificateAbout';
import CertificateWhat from '../../components/certifications/cmpm/CertificateWhat';
import CertificateNavigation from '../../components/certifications/cmpm/CertificateNavigation';
import CMPMHow from '../../components/certifications/cmpm/CMPMHow';
import CMPMReviews from '../../components/certifications/cmpm/CMPMReviews';
import CMPMWhere from '../../components/certifications/cmpm/CMPMWhere';
import CMPMApply from '../../components/certifications/cmpm/CMPMApply';
import CertificateCirriculum from '../../components/certifications/cmpm/CertificateCirriculum';
import Testimonial from '../../components/shared/Testimonial';
import GradientCTA from '../../components/GradientCTA';
import CMPMPDP from '../../components/forms/cmpm/CMPMPDP';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Packaging School | Certificate of Mastery in Packaging Management
        </title>
        <meta
          property='og:title'
          content={`Packaging School |  Certificate of Mastery in Packaging Management`}
          key='title'
        />
      </Head>
      <div className='flex flex-col dark:bg-dark-dark'>
        <CertificateHero />
        <CertificateNavigation />
        <CertificateAbout />
        <CertificateWhat />
        <CMPMHow />
        <CertificateCirriculum />
        <Testimonial
          id='testimonial-from-tommy-stroman'
          author={{
            name: 'Sheridyn Gasser',
            role: 'Structural / Graphic Designer',
            image: 'https://packschool.s3.amazonaws.com/sharw.jpeg',
          }}
        >
          <p>
            “I have greatly broadened my knowledge of the packaging industry as
            a whole, which was exactly what I hoped to gain from this program. I
            highly recommend this program to anyone who wants to take a deeper
            dive into the industry!”
          </p>
        </Testimonial>
        <CMPMWhere />
        <CMPMReviews />
        <CMPMPDP
          headline='Looking to sharpen your expertise in a specific area?'
          subheadline='This program has been expertly crafted to align with your unique goals. Share your information with us, and we’ll tailor the experience to your ambitions. Brace yourself for the remarkable ways this program will empower you to achieve your objectives like never before. '
          buttonText='Get My PDP Plan'
          buttonLink='/cmpm-custom-development-plan-registration'
        />
      </div>
    </>
  );
};

export default Page;
