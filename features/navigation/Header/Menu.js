import React from 'react';
import CertNav from './MenuItems/CertNav';
import CourseNav from './MenuItems/CourseNav';

const Menu = () => {
  return (
    <div className='flex gap-6 text-sm font-medium xl:text-base cursor-pointer h-full items-center'>
      <div>About</div>
      <CertNav />
      <CourseNav />
      <div>For Teams</div>
      <div>Library</div>
      <div>Campus Store</div>
    </div>
  );
};

export default Menu;
