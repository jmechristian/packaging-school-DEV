import React from 'react';

const AllCoursesCert = () => {
  return (
    <div className=' flex flex-col gap-6'>
      <div className='font-medium text-xl leading-tight col-span-4'>
        Comprehensive <span className='font-bold'>Certificate Programs</span>{' '}
        Led By Subject Matter Experts
      </div>
      <div className='relative flex flex-col gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3'>
        <div className='bg-base-brand w-full h-44 rounded-md'></div>
        <div className='bg-base-mid rounded-md h-44'></div>
        <div className='bg-base-brand w-full h-44 rounded-md'></div>
      </div>
    </div>
  );
};

export default AllCoursesCert;
