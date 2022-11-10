import React from 'react';
import Link from 'next/link';

const FooterCourses = () => {
  return (
    <div className='flex flex-col gap-1 lg:gap-2 text-sm w-full'>
      <div className='font-extrabold text-sm uppercase tracking-widest text-slate-200 font-plex'>
        Courses
      </div>
      <div className='grid grid-cols-2 gap-y-1 gap-x-8 lg:gap-x-4 justify-between'>
        <div className='flex flex-col gap-1'>
          <Link className='w-fit' href='/all_courses'>
            <div className='text-slate-500 cursor-pointer'>All Courses</div>
          </Link>
          <p className='text-slate-500 w-fit'>Materials</p>
          <p className='text-slate-500 w-fit'>Industry</p>
          <p className='text-slate-500 w-fit'>Food & Beverage</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-slate-500 w-fit'>Business</p>
          <p className='text-slate-500 w-fit'>Supply Chain & Logistics</p>
          <p className='text-slate-500 w-fit'>Design</p>
        </div>
      </div>
    </div>
  );
};

export default FooterCourses;
