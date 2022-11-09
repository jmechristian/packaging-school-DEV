import React from 'react';
import FooterCerts from './FooterCerts';
import FooterCourses from './FooterCourses';
import FooterLibrary from './FooterLibrary';
import FooterNav from './FooterNav';

const FooterMenu = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4'>
      <FooterCerts />
      <FooterCourses />
      <FooterLibrary />
      <FooterNav />
      <div className='border-b border-b-slate-500 w-full lg:hidden'></div>
    </div>
  );
};

export default FooterMenu;
