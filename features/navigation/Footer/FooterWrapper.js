import React from 'react';
import FooterAbout from './FooterAbout';
import FooterCopyright from './FooterCopyright';
import FooterMenu from './FooterMenu';

const FooterWrapper = () => {
  return (
    <div className='container__inner py-12'>
      <div className='flex flex-col gap-8'>
        <FooterAbout />
        <div className='border-b border-b-slate-500 w-full'></div>
        <FooterMenu />
        <div className='border-b border-b-slate-500 w-full'></div>
        <FooterCopyright />
      </div>
    </div>
  );
};

export default FooterWrapper;
