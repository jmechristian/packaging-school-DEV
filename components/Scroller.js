import React from 'react';
import CourseCard from './course-card/CourseCard';

const Scroller = ({ children }) => {
  return (
    <div
      className='w-screen relative left-1/2 right-1/2 px-6 scroll-p-10 grid grid-flow-col grid-rows-2 auto-cols-max gap-6 overflow-auto overflow-y-hidden snap-x snap-mandatory snap-always touch-manipulation'
      style={{ marginLeft: '-50vw', right: '-50vw' }}
    >
      {children}
    </div>
  );
};

export default Scroller;
