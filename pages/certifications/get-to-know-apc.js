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
import APCHero from '../../components/certifications/aps/APCHero';

const Page = () => {
  return (
    <div className='flex flex-col dark:bg-dark-dark'>
      <APCHero />
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
          “I have greatly broadened my knowledge of the packaging industry as a
          whole, which was exactly what I hoped to gain from this program. I
          highly recommend this program to anyone who wants to take a deeper
          dive into the industry!”
        </p>
      </Testimonial>
      <CMPMWhere />
      <CMPMReviews />
      <CMPMPDP
        headline='Want to focus on a specific topic?'
        subheadline="Let's make CMPM fit your requirements. Enter your information to let us know what you want to focus on. Our cirriculum team will work with you to shape a program that benefits you and your company's specific needs. "
        buttonText='Get My PDP Plan'
        buttonLink='/cmpm-custom-development-plan-registration'
      />
    </div>
  );
};

export default Page;
