import React from 'react';
import { MdWavingHand, MdSnooze } from 'react-icons/md';

const StepThree = ({ snooze, next, back }) => {
  return (
    <div className='w-full max-w-2xl bg-white border-2 border-black flex flex-col shadow-2xl'>
      <div className='w-full bg-black py-2 px-3 flex items-center justify-between'>
        <div className='w-full flex gap-1 items-center'>
          <div className=' text-white h3-base'>
            Access to Licensed
            <br /> Packaging School Courses
          </div>
        </div>
        <div className='text-sm text-gray-400'>4/6</div>
      </div>
      <div className='bg-white p-5 lg:p-10 text-lg leading-snug'>
        Courses developed specifically for your company by the industry-leading
        subject-matter experts.
      </div>
      <div className='flex items-end justify-between p-3'>
        <div
          className='flex items-center gap-0.5 cursor-pointer'
          onClick={() => snooze()}
        >
          <MdSnooze size={16} color='gray' />
          <div className='font-bold text-sm text-gray-500'>Snooze</div>
        </div>
        <div className='flex items-center gap-3'>
          <div
            className='flex items-center gap-0.5 cursor-pointer bg-white text-black border border-black py-1 px-4'
            onClick={() => back()}
          >
            <div className='h4-base'>Back</div>
          </div>
          <div
            className='flex items-center gap-0.5 cursor-pointer bg-black border border-black text-white py-1 px-4'
            onClick={() => next()}
          >
            <div className='h4-base'>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
