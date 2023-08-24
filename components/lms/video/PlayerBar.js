import React from 'react';
import {
  PlayIcon,
  SpeakerWaveIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/solid';

const PlayerBar = () => {
  return (
    <div className='absolute left-0 right-0 bottom-0 h-20 bg-black'>
      <div className='flex flex-col mt-2 px-6 gap-4'>
        <div className='w-full grid grid-cols-12 gap-1'>
          <div className='bg-base-brand h-2 rounded-full col-span-3 relative'>
            <div className='absolute left-0 rounded-full aspect-square h-2 bg-white'></div>
          </div>
          <div className='bg-base-brand h-2 rounded-full col-span-2'></div>
          <div className='bg-gray-800 h-2 rounded-full col-span-2'></div>
          <div className='bg-gray-800 h-2 rounded-full col-span-5'></div>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <div>
              <PlayIcon className='fill-white w-7 h-7' />
            </div>
            <div className='text-white text-lg'>
              1:36 <span className='text-gray-600'>/ 12:34</span>
            </div>
            <div className='bg-gray-700 text-xs text-white p-1 px-3 rounded'>
              Speed - 1x
            </div>
          </div>
          <div className='flex gap-2'>
            <div>
              <SpeakerWaveIcon className='fill-white w-7 h-7' />
            </div>
            <div>
              <ArrowsPointingOutIcon className='fill-white w-7 h-7' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
