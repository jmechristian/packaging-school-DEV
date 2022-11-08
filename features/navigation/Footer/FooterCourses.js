import React from 'react';

const FooterCourses = () => {
  return (
    <div className='flex flex-col gap-1 text-sm w-full'>
      <div className='font-extrabold text-sm uppercase tracking-widest text-slate-200'>
        Courses
      </div>
      <div className='grid grid-cols-2 gap-y-1 gap-x-8 justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-slate-500 w-fit'>All Courses</p>
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
