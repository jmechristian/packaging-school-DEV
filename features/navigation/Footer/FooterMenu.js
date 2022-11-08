import React from 'react';
import FooterCerts from './FooterCerts';
import FooterCourses from './FooterCourses';

const FooterMenu = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      <FooterCerts />
      <FooterCourses />
    </div>
  );
};

export default FooterMenu;
