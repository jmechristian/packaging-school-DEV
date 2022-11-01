import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const ScrollButtons = () => {
  return (
    <div className='flex gap-2'>
      <button>
        <ChevronLeftIcon className='w-5 h-5 stroke-slate-900' />
      </button>
      <button>
        <ChevronRightIcon className='w-5 h-5 stroke-slate-900' />
      </button>
    </div>
  );
};

export default ScrollButtons;
