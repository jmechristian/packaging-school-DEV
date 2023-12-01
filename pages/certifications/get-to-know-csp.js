import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import CSPHero from '../../components/certifications/csp/CSPHero';
import CSPMissionStatement from '../../components/certifications/csp/CSPMissionStatement';
import CSPNav from '../../components/certifications/csp/CSPNav';
import CSPWhat from '../../components/certifications/csp/CSPWhat';
import CSPHow from '../../components/certifications/csp/CSPHow';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-12 lg:gap-24 xl:gap-40 pt-6 md:pt-16 pb-16'>
      <CSPHero />
      <CSPNav />
      <CSPWhat />
      <CSPHow />
    </div>
  );
};

export default Page;
