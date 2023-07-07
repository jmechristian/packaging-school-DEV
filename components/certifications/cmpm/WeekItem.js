import React, { useState } from 'react';
import RotatingCaret from '../../RotatingCaret';

const WeekItem = ({ week, title, content }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className='w-full dark:bg-dark-mid rounded-lg p-6 shadow-sm h-full'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between'>
          <div className='bg-dark-dark rounded-lg text-clemson text-center uppercase py-1.5 text-xs font-semibold tracking-wider w-20'>
            Week {week}
          </div>
          <div onClick={() => setShowContent(!showContent)}>
            <RotatingCaret
              styling={'h-7 w-7 fill-gray-400'}
              open={showContent}
            />
          </div>
        </div>
        <div>
          <p className='dark:text-white font-semibold text-xl whitespace-pre-wrap'>
            {title}
          </p>
        </div>
        {showContent && (
          <div className='border-t border-t-gray-700 pt-6 flex flex-col gap-6'>
            <div className='dark:text-gray-400'>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeekItem;
