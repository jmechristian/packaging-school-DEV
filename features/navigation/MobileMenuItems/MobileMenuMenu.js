import React from 'react';
import MobileMenuItemWrapper from './MobileMenuItemWrapper';

const MobileMenuMenu = () => {
  return (
    <div className='p-6 md:p-9'>
      <MobileMenuItemWrapper title='Certifications' dropdown />
      <MobileMenuItemWrapper title='Courses' dropdown />
      <MobileMenuItemWrapper title='Library' dropdown />
      <MobileMenuItemWrapper title='For Teams' />
      <MobileMenuItemWrapper title='About' />
      <MobileMenuItemWrapper title='Campus Store' />
    </div>
  );
};

export default MobileMenuMenu;
