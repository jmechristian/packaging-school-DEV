import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const CourseObjectivesFull = ({ first, second }) => {
  return (
    <div className='flex flex-col gap-4 xl:grid xl:grid-cols-2 w-full'>
      <div className='flex flex-col gap-6'>
        {first &&
          first.map((item, i) => (
            <div className='flex gap-3 w-full' key={i}>
              <div>
                <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
              </div>
              <div className='gray__white text-lg'>{item}</div>
            </div>
          ))}
      </div>
      <div className='flex flex-col gap-6'>
        {second &&
          second.map((item, i) => (
            <div className='flex gap-3 w-full' key={i}>
              <div>
                <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
              </div>
              <div className='gray__white text-lg'>{item}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseObjectivesFull;
