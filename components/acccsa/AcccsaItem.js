import React, { useState } from 'react';
import { ClockIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const AcccsaItem = ({ i }) => {
  const [isPreview, setIsPreview] = useState(false);
  return (
    <div
      key={i.name}
      className='aspect-[16/9] bg-gray-900 w-full rounded-lg flex flex-col justify-between p-6'
    >
      {isPreview ? (
        <span className='text-white'>{i.description}</span>
      ) : (
        <span className='text-white font-greycliff font-semibold text-xl md:text-2xl'>
          {i.name}
        </span>
      )}
      <div className='flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
          <ClockIcon className='w-5 h-5 text-white' />
          <div className='text-white/50 text-sm'>{i.duration}</div>
        </div>
        <div onClick={() => setIsPreview(!isPreview)}>
          <InformationCircleIcon className='w-7 h-7 text-white' />
        </div>
      </div>
    </div>
  );
};

export default AcccsaItem;
