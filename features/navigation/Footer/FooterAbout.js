import React from 'react';
import FooterEmailSignup from './FooterEmailSignup';
import FooterAboutDetail from './FooterAboutDetail';

const FooterAbout = () => {
  return (
    <div className='flex flex-col gap-8 lg:gap-10 xl:pr-8'>
      <FooterAboutDetail />
      <FooterEmailSignup header={true} />
      <div className='border-b border-b-slate-500 w-full lg:hidden'></div>
    </div>
  );
};

export default FooterAbout;
