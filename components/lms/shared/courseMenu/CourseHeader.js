import { HomeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useRouter } from 'next/router';

const CourseHeader = ({ course, id }) => {
  const router = useRouter();
  return (
    <div className='w-full py-5 pl-6 pr-4 bg-base-brand dark:bg-neutral-800 rounded-r-lg'>
      <div className='flex justify-between gap-3 items-center'>
        <div className='flex gap-3 items-center'>
          <div className='w-12 h-12 rounded-full border-4 border-light-yellow inline-block'>
            <div className='flex h-full justify-center items-center'>
              <div className='dark:text-green-600 text-green-400 font-semibold font-greycliff'>
                1/7
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-0'>
            <div className='font-semibold text-neutral-200 dark:text-white leading-tight'>
              {id}
            </div>
            <div className='font-greycliff font-semibold text-2xl text-white dark:text-base-brand leading-none'>
              {course}
            </div>
          </div>
        </div>
        <div
          className='w-9 h-9 rounded-full dark:bg-neutral-900 bg-base-dark flex items-center justify-center shadow-sm cursor-pointer'
          onClick={() => router.push('/curriculum/cps/cps-12/branding-basics')}
        >
          <HomeIcon className='w-5 h-5 fill-white/50' />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
