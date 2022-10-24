import React from 'react';
import { useDispatch } from 'react-redux';
import { setMobileFilterOpen } from './courseFilterSlice';
import { Bars3Icon } from '@heroicons/react/24/outline';
import AllCourseMobileMenu from './AllCourseMobileMenu';

const AllCourseFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-full'>
      <button
        className='flex flex-row gap-2 items-center justify-center w-full  border border-white py-3 rounded-md'
        onClick={() => dispatch(setMobileFilterOpen())}
      >
        <Bars3Icon className='w-6 h-6 stroke-white' />
        <div className='text-white text-lg'>Course Menu</div>
      </button>
      <AllCourseMobileMenu />
    </div>
  );
};

export default AllCourseFilter;
