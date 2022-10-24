import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllCourses } from './courseFilterSlice';
import AllCourseFilter from './AllCourseFilter';
import AllCourseBody from './AllCourseBody';
import BootcampCTA from './BootcampCTA';

const AllCoursesMain = ({ courses }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    courses && dispatch(setAllCourses(courses.data.allCourses.edges));
  }, [courses, dispatch]);

  return (
    <div className='flex flex-col'>
      <section className='bg-slate-300 dark:bg-slate-900 container__inner course__filter-padding flex flex-col gap-6'>
        <AllCourseFilter />
        <BootcampCTA />
      </section>
      <section className='container__inner pb-12 bg-slate-300'>
        <AllCourseBody />
      </section>
    </div>
  );
};

export default AllCoursesMain;
