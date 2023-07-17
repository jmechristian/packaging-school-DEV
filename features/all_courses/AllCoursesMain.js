import React, { useEffect } from 'react';
import AllCourseBody from './AllCourseBody';
import AllCourseHeader from './AllCourseHeader';

const AllCoursesMain = () => {
  return (
    <div className='w-full flex grow shrink-0 basis-auto m-0'>
      <div className='w-full mx-auto'>
        <AllCourseHeader />
        <AllCourseBody />
      </div>
    </div>
  );
};

export default AllCoursesMain;
