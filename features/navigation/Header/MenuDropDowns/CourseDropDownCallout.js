import React from 'react';
import BootcampCTA from '../../../all_courses/BootcampCTA';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const CourseDropDownCallout = () => {
  return (
    <div className='bg-slate-300 rounded-br-lg'>
      <div className='px-8 py-10 flex flex-col gap-8'>
        <BootcampCTA />
        <div className='flex flex-col gap-2'>
          <div className='font-semibold w-full border-b border-b-slate-400 pb-2'>
            Not Sure Where to Start?
          </div>
          <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700'>
              Take Our Skills Assesment
            </div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
          <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700'>Browse the Library</div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
          <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700'>Contact Our Team</div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDropDownCallout;
