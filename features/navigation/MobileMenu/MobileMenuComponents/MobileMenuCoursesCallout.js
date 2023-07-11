import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const MobileMenuCoursesCallout = () => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <div className='font-semibold w-full border-b border-b-slate-400 pb-2 dark:text-white'>
          Not Sure Where to Start?
        </div>
        <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
          <div className='text-sm text-slate-700 dark:text-gray-400'>
            New to Packaging? Start Here!
          </div>
          <div>
            <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
          </div>
        </div>
        <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
          <div className='text-sm text-slate-700 dark:text-gray-400'>
            Take Our Skills Assesment
          </div>
          <div>
            <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
          </div>
        </div>
        <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
          <div className='text-sm text-slate-700 dark:text-gray-400'>
            Browse the Library
          </div>
          <div>
            <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
          </div>
        </div>
        <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
          <div className='text-sm text-slate-700 dark:text-gray-400'>
            Contact Our Team
          </div>
          <div>
            <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuCoursesCallout;
