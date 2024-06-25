import React from 'react';
import { MdWavingHand, MdSnooze } from 'react-icons/md';

const StepZero = ({ snooze, next }) => {
  return (
    <div className='w-full max-w-2xl bg-white border-2 border-black flex flex-col'>
      <div className='w-full bg-black py-3 px-3 flex items-center justify-between'>
        <div className='w-full flex gap-3 items-center max-w-md'>
          <div>
            <MdWavingHand size={40} color='yellow' />
          </div>
          <div className=' text-white h3-base'>
            Welcome to your branded Employee Training Library tour!
          </div>
        </div>
        <div className='text-sm text-gray-400'>1/6</div>
      </div>
      <div className='bg-white p-5 lg:p-10 text-lg leading-snug'>
        We will guide you through an Example Library, meticulously designed to
        enhance the skills you desire in a centralized, user-friendly location.
      </div>
      <div className='flex items-center justify-between p-3'>
        <div
          className='flex items-center gap-0.5 cursor-pointer'
          onClick={() => snooze()}
        >
          <MdSnooze size={20} color='gray' />
          <div className='text-sm font-bold text-gray-500'>Snooze</div>
        </div>
        <div
          className='flex items-center gap-0.5 cursor-pointer bg-black text-white py-1.5 px-4'
          onClick={() => next()}
        >
          <div className='h4-base'>Next</div>
        </div>
      </div>
    </div>
  );
};

export default StepZero;
