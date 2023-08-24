import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Timestamp from '../Timestamp';

const CourseItem = ({ title, time }) => {
  return (
    <div className='w-full py-5 pl-6 pr-4 rounded-r-lg'>
      <div className='flex justify-between gap-6'>
        <div className='flex gap-4'>
          <div>
            <CheckCircleIcon className='fill-yellow-100 w-7 h-7' />
          </div>
          <div className='text-white/70'>{title}</div>
        </div>
        <Timestamp time={time} />
      </div>
    </div>
  );
};

export default CourseItem;
