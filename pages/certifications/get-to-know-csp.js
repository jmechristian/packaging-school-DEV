import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import CSP from '../../components/certifications/csp/CPSHero';
import CPSMissionStatement from '../../components/certifications/csp/CPSMissionStatement';
import CPSNav from '../../components/certifications/cps/CPSNav';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-12 lg:gap-16 xl:gap-32 pt-6 md:pt-16 pb-16'>
      <CSP />
      <CPSMissionStatement />
      <CPSNav />
    </div>
  );
};

export default Page;
