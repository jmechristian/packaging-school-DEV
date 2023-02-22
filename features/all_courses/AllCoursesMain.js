import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllCourses } from './courseFilterSlice';
import AllCourseBody from './AllCourseBody';
import AllCourseHeader from './AllCourseHeader';

const AllCoursesMain = ({ courses }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    courses && dispatch(setAllCourses(courses.data.allCourses.edges));
  });

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
