import React from 'react';
import FooterAbout from './FooterAbout';
import FooterCopyright from './FooterCopyright';
import FooterMenu from './FooterMenu';

const FooterWrapper = () => {
  return (
    <div className='py-12 max-w-7xl mx-auto'>
      <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-x-24 cursor-pointer'>
        <FooterAbout />
        <FooterMenu />
        <div className='hidden lg:inline-grid col-span-2 border-b border-b-gray-500'></div>
        <FooterCopyright />
      </div>
    </div>
  );
};

export default FooterWrapper;
