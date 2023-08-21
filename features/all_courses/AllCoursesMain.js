import React, { useEffect } from 'react';
import AllCourseBody from './AllCourseBody';
import AllCourseHeader from './AllCourseHeader';

const AllCoursesMain = () => {
  return (
    <div className='w-full flex flex-col mx-auto'>
      <AllCourseHeader />
      <AllCourseBody />
    </div>
  );
};

export default AllCoursesMain;
