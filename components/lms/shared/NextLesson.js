import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const NextLesson = () => {
  return (
    <div className='relative w-full'>
      <div className='bg-base-mid max-w-6xl w-full mx-auto rounded-lg'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col'>
            <div className='p-12 flex flex-col'>
              <div>
                <h4 className='text-white text-2xl font-greycliff'>
                  Next Lesson
                </h4>
              </div>
              <div>
                <h2 className='text-white font-greycliff font-bold text-5xl'>
                  Market Overview
                </h2>
              </div>
            </div>
          </div>
          <div className='p-12 bg-light-blue rounded-l-xl rounded-br-lg flex flex-col justify-center gap-10'>
            <div className='flex gap-3'>
              <div className='text-light-blue flex gap-2 items-center bg-white shadow-2xl text-2xl w-fit px-6 py-3 rounded-lg font-bold font-greycliff'>
                <div>
                  <CheckIcon className='fill-light-blue h-7 w-7' />
                </div>
                <div>Complete and Continue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLesson;
