import React from 'react';
import { MdMarkUnreadChatAlt, MdSnooze } from 'react-icons/md';

const StepSix = ({ snooze, next, back }) => {
  return (
    <div className='w-full max-w-2xl bg-white border-2 border-black flex flex-col'>
      <div className='w-full bg-black py-2 px-3 flex items-center justify-between'>
        <div className='w-full flex gap-1 items-center'>
          <MdMarkUnreadChatAlt size={20} color='white' />
          <div className=' text-white h3-base'>Let&apos;s get started!</div>
        </div>
        <div
          className='text-sm text-gray-400 font-bold cursor-pointer'
          onClick={() => snooze()}
        >
          X
        </div>
      </div>
      <div className='bg-white px-3 py-5 text-lg leading-snug'>
        Meet with curriculum expert.
      </div>
      <div className='flex items-end justify-end p-3'>
        <div className='flex items-end gap-3'>
          <div
            className='flex items-center gap-0.5 cursor-pointer bg-black border border-black text-white py-1 px-4'
            onClick={() => next()}
          >
            <div className='h4-base'>Schedule Your Consult</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSix;
