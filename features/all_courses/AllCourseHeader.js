import React from 'react';
import AllCourseHeaderMobile from './AllCourseHeaderMobile';
import AllCourseHeaderDesktop from './AllCourseHeaderDesktop';

const AllCourseHeader = () => {
  return (
    <div className='bg-slate-900 pt-20 relative overflow-y-hidden'>
      <AllCourseHeaderMobile />
      <AllCourseHeaderDesktop />
    </div>
  );
};

export default AllCourseHeader;
