import React from 'react';
import AllCourseFilter from './AllCourseFilter';
import AllCourseBody from './AllCourseBody';
import BootcampCTA from './BootcampCTA';

const AllCoursesMain = () => {
  return (
    <div className='flex flex-col gap-6'>
      <section className='bg-slate-200 dark:bg-slate-900 container__inner course__filter-padding flex flex-col gap-6'>
        <AllCourseFilter />
        <BootcampCTA />
      </section>
      <section className='container__inner'>
        <AllCourseBody />
      </section>
    </div>
  );
};

export default AllCoursesMain;
