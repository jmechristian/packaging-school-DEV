import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const CourseObjectiveTeaser = ({ first, second }) => {
  return (
    <div className='flex flex-col gap-4 xl:grid xl:grid-cols-2 w-full'>
      <div className='flex flex-col gap-6'>
        {first && (
          <div className='flex gap-3 w-full'>
            <div>
              <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
            </div>
            <div className='gray__white text-lg line-clamp-1'>
              {first[0].overview_items}
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-6'>
        {second && (
          <div className='flex gap-3 w-full'>
            <div>
              <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
            </div>
            <div className='gray__white text-lg line-clamp-1'>
              {second[0].overview_items}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseObjectiveTeaser;
