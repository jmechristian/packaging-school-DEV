import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const BootcampCTA = () => {
  return (
    <div className='bg-base-dark py-5 px-5 rounded flex'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <div className='text-white font-bold text-xl'>
            New to Packaging? Start Here
          </div>
          <div className='text-base-light'>
            Jumpstart your knowledge with a solid foundation in packaging
            basics.
          </div>
        </div>
        <button className='flex gap-1 bg-clemson py-3 px-5 rounded-md justify-center items-center'>
          <div className='text-white font-semibold uppercase text-sm'>
            Packaging Bootcamp 101
          </div>
          <ArrowLongRightIcon className='w-6 h-6 stroke-white' />
        </button>
      </div>
    </div>
  );
};

export default BootcampCTA;
