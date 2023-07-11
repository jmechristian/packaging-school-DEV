import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileFilterOpen } from './courseFilterSlice';
import {
  Bars3Icon,
  Funnel,
  AdjustmentsVerticalIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

import AllCourseMobileMenu from './AllCourseMobileMenu';

const AllCourseFilter = () => {
  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state) => state.course_filter);

  return (
    <>
      <div className='grid grid-cols-6 items-center container__inner'>
        <div className='font-semibold text-lg font-greycliff col-span-4 dark:text-gray-400'>
          Browse <span className='font-bold'>{selectedFilter.name}&nbsp;</span>
          Courses
        </div>
        <button
          className='flex flex-row gap-1 justify-end items-center w-full col-span-2 ml-auto'
          onClick={() => dispatch(setMobileFilterOpen())}
        >
          <div>
            <AdjustmentsVerticalIcon className='w-6 h-6 stroke-slate-900 dark:stroke-white' />
          </div>
        </button>
      </div>
      <AllCourseMobileMenu />
    </>
  );
};

export default AllCourseFilter;
