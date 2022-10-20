import React from 'react';
import AllCourseMenu from './AllCourseMenu';

const AllCourseMobileMenu = () => {
  return (
    <>
      <div className='fixed top-0 right-0 bottom-0 left-0 bg-slate-900 opacity-90 z-40'></div>
      <div className='w-3/4 bg-slate-200 fixed top-0 left-0 z-50 h-screen'>
        <div className='pt-6 px-6'>
          <AllCourseMenu />
        </div>
      </div>
    </>
  );
};

export default AllCourseMobileMenu;
