import React from 'react';
import { useDispatch } from 'react-redux';
import { setMobileFilterOpen } from './courseFilterSlice';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import AllCourseMobileMenu from './AllCourseMobileMenu';

const AllCourseFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-full'>
      <button
        className='flex gap-2 items-center justify-center w-full button__subtle py-3 rounded-md'
        onClick={() => dispatch(setMobileFilterOpen())}
      >
        <div>Course Menu</div>
      </button>
      <AllCourseMobileMenu />
    </div>
  );
};

export default AllCourseFilter;
