import React from 'react';
import CourseNav from './MenuItems/CourseNav';

const Menu = () => {
  return (
    <div className='flex gap-6 text-sm font-medium xl:text-base cursor-pointer h-full items-center'>
      <div>About</div>
      <div>Certifications</div>
      <CourseNav />
      <div>For Teams</div>
      <div>Library</div>
      <div>Campus Store</div>
    </div>
  );
};

export default Menu;
