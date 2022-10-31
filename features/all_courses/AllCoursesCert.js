import React from 'react';

const AllCoursesCert = () => {
  return (
    <div className=' flex flex-col gap-6'>
      <div className='font-medium text-xl leading-tight col-span-4'>
        Comprehensive <span className='font-bold'>Certificate Programs</span>
      </div>
      <div className='relative flex flex-col gap-6 lg:grid lg:grid-cols-2'>
        <div className='bg-dark-lg bg-cover w-full rounded-md shadow-md'>
          <div className='flex flex-col w-full justify-start p-4 gap-6'>
            <div className='font-plex font-bold text-lg text-white'>
              Certificate of Mastery in Packaging Management
            </div>
            <div className='bg-slate-500/40 p-4 rounded-md backdrop-blur-lg shadow-xl'>
              <div className='text-sm text-slate-200'>
                An online education program that provides proactive learning in
                the space of packaging development, material procurement, and
                organizational management.
              </div>
            </div>
          </div>
        </div>
        <div className='bg-base-mid rounded-md h-44'></div>
        <div className='bg-base-brand w-full h-44 rounded-md'></div>
      </div>
    </div>
  );
};

export default AllCoursesCert;
