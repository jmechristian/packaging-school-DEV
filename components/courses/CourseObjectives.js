import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const CourseObjectives = ({ what, items }) => {
  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  return (
    <div className='flex flex-col gap-10 lg:max-w-prose'>
      <div className='flex flex-col gap-4'>
        <div className='font-semibold text-xl text-white '>
          What You Will Learn
        </div>
        <div className='text-white'>
          <PrismicRichText field={what} />
        </div>
      </div>
      {items.length > 1 && (
        <div className='flex flex-col gap-4 xl:grid xl:grid-cols-2 w-full'>
          <div className='flex flex-col gap-6'>
            {firstHalf &&
              firstHalf.map((item, i) => (
                <div className='flex gap-3 w-full' key={i}>
                  <div>
                    <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
                  </div>
                  <div className='text-white'>{item.overview_items}</div>
                </div>
              ))}
          </div>
          <div className='flex flex-col gap-6'>
            {secondHalf &&
              secondHalf.map((item, i) => (
                <div className='flex gap-3 w-full' key={i}>
                  <div>
                    <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
                  </div>
                  <div className='text-white'>{item.overview_items}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseObjectives;
