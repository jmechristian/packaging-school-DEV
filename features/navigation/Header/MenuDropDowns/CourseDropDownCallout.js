import React from 'react';
import BootcampCTA from '../../../all_courses/BootcampCTA';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const CourseDropDownCallout = ({ onClose }) => {
  const router = useRouter();
  return (
    <div className='bg-white/50 dark:bg-dark-mid rounded-lg shadow-lg'>
      <div className='px-8 py-10 flex flex-col gap-8'>
        <BootcampCTA />
        <div className='flex flex-col gap-2'>
          <div className='font-bold w-full border-b border-b-slate-400 pb-2 font-greycliff'>
            Not Sure Where to Start?
          </div>
          {/* <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700 dark:text-slate-300'>
              Take Our Skills Assesment
            </div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div> */}
          <div
            className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2 cursor-pointer'
            onClick={() => {
              router.push('/all_courses');
              onClose();
            }}
          >
            <div className='text-sm text-slate-700 dark:text-slate-300'>
              Browse the Library
            </div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
          <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700 dark:text-slate-300'>
              Contact Our Team
            </div>
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
