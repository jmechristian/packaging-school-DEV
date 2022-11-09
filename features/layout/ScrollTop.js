import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollTop = () => {
  return (
    <div className='fixed z-50 right-5 bottom-5'>
      <button
        className='bg-dark rounded-full w-12 h-12 flex justify-center items-center shadow-xl'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <div>
          <ChevronUpIcon className='h-5 w-5 stroke-white' />
        </div>
      </button>
    </div>
  );
};

export default ScrollTop;
