import React from 'react';
import BodyWrapper from '../shared/BodyWrapper';

const LessonsHeader = ({ title, subhead, tags, author, date }) => {
  const newDate = new Date(date).toDateString();

  return (
    <BodyWrapper>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3 lg:pt-12'>
        {tags && (
          <div className='flex flex-wrap gap-2'>
            <span className='inline-flex items-center rounded-full bg-green-100 dark:bg-green-400/50 dark:text-white px-3 py-0.5 text-sm font-medium text-green-800'>
              Sustainability
            </span>
            <span className='inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-500 dark:text-white px-3 py-0.5 text-sm font-medium text-gray-800 '>
              Learning Of The Month
            </span>
          </div>
        )}
        <div>
          <h1 className='text-4xl font-bold tracking-tight sm:text-6xl font-greycliff dark:text-white'>
            {title}
          </h1>
          {date && (
            <div className='flex gap-2 text-sm mt-2'>
              <div className='text-gray-700 dark:text-white/60'>
                {newDate} /
              </div>
              <div className='text-clemson'>{author}</div>
            </div>
          )}
          <p className='mt-8 text-lg md:text-xl  text-gray-700 dark:text-white/60'>
            {subhead}
          </p>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default LessonsHeader;
