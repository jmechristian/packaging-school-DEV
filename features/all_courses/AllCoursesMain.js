import React from 'react';
import AllCourseFilter from './AllCourseFilter';
import AllCourseBody from './AllCourseBody';

const AllCoursesMain = () => {
  return (
    <section className='flex flex-col gap-6'>
      <AllCourseFilter />
      <AllCourseBody />
    </section>
  );
};

export default AllCoursesMain;
