import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import CSPHero from '../../components/certifications/csp/CSPHero';
import CPSMissionStatement from '../../components/certifications/csp/CPSMissionStatement';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-12 lg:gap-16 xl:gap-32 pt-6 md:pt-16 pb-16'>
      <CSPHero />
      <CPSMissionStatement />
    </div>
  );
};

export default Page;
