import React, { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import AllCourseMobileMenu from './AllCourseMobileMenu';

const AllCourseFilter = () => {
  const [courseMenu, openCourseMenu] = useState(false);

  return (
    <div className='w-full'>
      <button className='flex gap-2 items-center justify-center w-full button__subtle py-3 rounded-md'>
        <div>Course Menu</div>
        <ArrowLongRightIcon className='w-6 h-6 stroke-slate-700 dark:stroke-base-brand' />
      </button>
      <AllCourseMobileMenu />
    </div>
  );
};

export default AllCourseFilter;
