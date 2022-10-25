import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllCourses } from './courseFilterSlice';
import AllCourseFilter from './AllCourseFilter';
import AllCourseBody from './AllCourseBody';
import AllCourseHeader from './AllCourseHeader';

const AllCoursesMain = ({ courses }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    courses && dispatch(setAllCourses(courses.data.allCourses.edges));
  }, [courses, dispatch]);

  return (
    <div className='flex flex-col'>
      <AllCourseHeader />
      <AllCourseBody />
    </div>
  );
};

export default AllCoursesMain;
