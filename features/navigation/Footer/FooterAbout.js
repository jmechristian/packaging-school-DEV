import React from 'react';
import FooterEmailSignup from './FooterEmailSignup';
import FooterAboutDetail from './FooterAboutDetail';

const FooterAbout = () => {
  return (
    <div className='flex flex-col gap-8'>
      <FooterEmailSignup />
      <FooterAboutDetail />
    </div>
  );
};

export default FooterAbout;
