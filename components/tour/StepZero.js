import React from 'react';
import { MdWavingHand, MdSnooze } from 'react-icons/md';

const StepZero = ({ snooze, next }) => {
  return (
    <div className='w-full max-w-2xl bg-white border-2 border-black flex flex-col'>
      <div className='w-full bg-black py-2 px-3 flex items-center justify-between'>
        <div className='w-full flex gap-1 items-center'>
          <MdWavingHand size={20} color='white' />
          <div className=' text-white h3-base'>Hello!</div>
        </div>
        <div className='text-sm text-gray-400'>1/6</div>
      </div>
      <div className='bg-white p-5 lg:p-10 text-lg leading-snug'>
        Welcome to your branded Employee Training Library tour! Join us as we
        guide you through a custom-curated selection of courses and lessons,
        meticulously designed to enhance your skills and knowledge in one
        centralized, user-friendly location.
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
