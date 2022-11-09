import React from 'react';
import FooterAbout from './FooterAbout';
import FooterCopyright from './FooterCopyright';
import FooterMenu from './FooterMenu';

const FooterWrapper = () => {
  return (
    <div className='container__inner py-12'>
      <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-x-24'>
        <FooterAbout />
        <FooterMenu />
        <div className='hidden lg:inline-grid col-span-2 border-b border-b-slate-500'></div>
        <FooterCopyright />
      </div>
    </div>
  );
};

export default FooterWrapper;
