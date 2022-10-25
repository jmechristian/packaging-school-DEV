import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const BootcampCTA = () => {
  return (
    <div className='bg-base-dark py-5 px-5 rounded-md flex'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <div className='text-white font-bold text-xl'>
            New to Packaging? Start Here
          </div>
          <div className='text-base-light'>
            Jumpstart your knowledge with a solid foundation in packaging
            basics.
          </div>
        </div>
        <button className='flex justify-end gap-1'>
          <div className='text-clemson font-semibold uppercase text-sm'>
            Packaging Bootcamp 101
          </div>
          <ArrowLongRightIcon className='w-6 h-6 stroke-clemson' />
        </button>
      </div>
    </div>
  );
};

export default BootcampCTA;
