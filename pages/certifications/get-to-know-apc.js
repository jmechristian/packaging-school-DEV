import React from 'react';
import CMPMReviews from '../../components/certifications/cmpm/CMPMReviews';
import Testimonial from '../../components/shared/Testimonial';
import GradientCTA from '../../components/GradientCTA';
import APCHero from '../../components/certifications/aps/APCHero';
import APCNavigation from '../../components/certifications/aps/APCNav';
import APCAbout from '../../components/certifications/aps/APCAbout';
import APCVideo from '../../components/certifications/aps/APCVideo';
import APCHow from '../../components/certifications/aps/APCHow';
import APSExperts from '../../components/certifications/APSExperts';
import APCStart from '../../components/certifications/aps/APCStart';
import APCAPS from '../../components/certifications/aps/APCAPS';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Packaging School | Automotive Packaging Certificate</title>
        <meta
          property='og:title'
          content='Packaging School | Automotive Packaging Certificate'
          key='title'
        />
      </Head>
      <div className='flex flex-col dark:bg-dark-dark'>
        <APCHero />
        <APCNavigation />
        <APCAbout />
        <Testimonial
          id='tommy-stroman'
          author={{
            name: 'Lauren McDonald',
            role: 'Packaging Specialist / Volkswagen Group of America, Inc.',
          }}
        >
          <p>
            “I was interested to see what this program had to offer versus my
            knowledge and experience working as a packaging engineer at an OEM.
            This course offered much more than I expected and I would highly
            recommend this certificate course for those interested in pursuing
            an automotive packaging career!”
          </p>
        </Testimonial>
        <APCVideo />
        <APCHow />
        <APSExperts />
        <APCStart />
        <CMPMReviews />
        <APCAPS />
        <GradientCTA
          headline={'Not sure if this is for you or your team?'}
          subheadline={'There is no cost to begin.  Try a free demo today.'}
          buttonLink={'https://learn.packagingschool.com/enroll/38965?et=free'}
          buttonText={'Take me to my demo.'}
        />
      </div>
    </>
  );
};

export default Page;
