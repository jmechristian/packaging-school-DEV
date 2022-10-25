import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileFilterOpen } from './courseFilterSlice';
import { Bars3Icon } from '@heroicons/react/24/outline';

import AllCourseMobileMenu from './AllCourseMobileMenu';

const AllCourseFilter = () => {
  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state) => state.course_filter);

  return (
    <>
      <div className='grid grid-cols-6 overflow-hidden items-center'>
        <div className='font-medium text-lg leading-tight col-span-4'>
          Browse <span className='font-bold'>{selectedFilter.name}&nbsp;</span>
          Courses
        </div>
        <button
          className='flex flex-row gap-1 justify-end items-center w-full col-span-2 ml-auto'
          onClick={() => dispatch(setMobileFilterOpen())}
        >
          <div>
            <Bars3Icon className='w-5 h-5 stroke-slate-900' />
          </div>
          <div className='text-lg text-slate-900'>Filter</div>
        </button>
      </div>
      <AllCourseMobileMenu />
    </>
  );
};

export default AllCourseFilter;
