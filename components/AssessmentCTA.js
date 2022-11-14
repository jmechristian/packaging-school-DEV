import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const AssessmentCTA = () => {
  return (
    <div className='bg-gradient-to-r from-base-dark to-clemson rounded px-4 md:px-8 py-5 md:py-8'>
      <div className='flex flex-col md:flex-row md:justify-between md:flex-wrap gap-2'>
        <div className='font-bold text-lg md:text-2xl text-white'>
          Not Sure Where to Begin?
        </div>
        <div className='flex gap-2 justify-start items-center'>
          <div className='text-white md:text-lg'>Take our assesment</div>
          <ArrowLongRightIcon className='w-5 md:w-7 h-5 md:h-7 stroke-white' />
        </div>
      </div>
    </div>
  );
};

export default AssessmentCTA;
