import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const CourseDesc = () => {
  return (
    <div className='flex flex-col gap-2 w-full col-span-5'>
      <div className='text-slate-600 text-sm'>
        An essential introduction to the art, science, and business of
        packaging.
      </div>
      <div className='flex gap-1'>
        <div className='font-bold text-sm text-slate-900'>View Course</div>
        <ArrowLongRightIcon className='w-5 h-5 stoke-slate-900' />
      </div>
    </div>
  );
};

export default CourseDesc;
