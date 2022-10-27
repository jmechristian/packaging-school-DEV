import React from 'react';
import CourseCard from './course-card/CourseCard';

const Scroller = ({ children }) => {
  return (
    <div className='w-full flex grow shrink-0 basis-auto m-0'>
      <div className='w-full mx-auto pl-8 pr-8'>
        <div className='block'>
          <div>
            <div className='pt-4'>
              <div className='relative'>
                <div
                  className='w-screen relative left-1/2 right-1/2 pl-9 scroll-p-10 grid grid-flow-col grid-rows-2 auto-cols-max gap-6 overflow-auto overflow-y-hidden snap-x snap-mandatory snap-always touch-manipulation'
                  style={{ marginLeft: '-50vw', right: '-50vw' }}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
