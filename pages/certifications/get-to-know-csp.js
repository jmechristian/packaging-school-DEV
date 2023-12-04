import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import CSPHero from '../../components/certifications/csp/CSPHero';
import CSPMissionStatement from '../../components/certifications/csp/CSPMissionStatement';
import CSPNav from '../../components/certifications/csp/CSPNav';
import CSPWhat from '../../components/certifications/csp/CSPWhat';
import CSPHow from '../../components/certifications/csp/CSPHow';
import CSPWhere from '../../components/certifications/csp/CSPWhere';
import CSPBio from '../../components/certifications/csp/CSPBio';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-12 lg:gap-36 pt-6 md:pt-20 pb-20'>
      <CSPHero />
      <CSPNav />
      <div className='flex flex-col gap-12 md:gap-48'>
        <CSPWhat />
        <CSPHow />
        <CSPWhere />
        <CSPBio />
      </div>
    </div>
  );
};

export default Page;
