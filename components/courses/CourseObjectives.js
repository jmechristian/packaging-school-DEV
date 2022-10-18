import React, { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import RotatingCaret from '../RotatingCaret';

const CourseObjectives = ({ what, items }) => {
  const [showObjectives, setShowObjectives] = useState(false);

  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  return (
    <div className='flex flex-col gap-10 lg:max-w-prose'>
      <div className='flex flex-col gap-4'>
        <div className='font-semibold text-xl black__white '>
          What You Will Learn
        </div>
        <div className='gray__white text-lg'>
          <PrismicRichText field={what} />
        </div>
      </div>
      <div
        className={`${showObjectives ? '' : 'h-72 overflow-hidden'} relative`}
      >
        {items.length > 1 && (
          <div className='flex flex-col gap-4 xl:grid xl:grid-cols-2 w-full'>
            <div className='flex flex-col gap-6'>
              {firstHalf &&
                firstHalf.map((item, i) => (
                  <div className='flex gap-3 w-full' key={i}>
                    <div>
                      <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
                    </div>
                    <div className='gray__white text-lg'>
                      {item.overview_items}
                    </div>
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
                    <div className='gray__white text-lg'>
                      {item.overview_items}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div
          className={`${
            showObjectives
              ? ''
              : 'absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-white via-white dark:from-slate-900 dark:via-slate-900 h-64 '
          } flex justify-center items-end`}
        >
          <button
            className='bg-base-brand text-sm text-white font-medium px-5 py-3 rounded mb-8 uppercase flex items-center gap-2 mt-8'
            onClick={() => setShowObjectives(!showObjectives)}
          >
            <RotatingCaret open={showObjectives} styling='h-6 w-6 fill-white' />
            {showObjectives ? 'Hide All Objectives' : 'View All Objectives'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseObjectives;
