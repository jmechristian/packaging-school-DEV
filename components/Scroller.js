import React from 'react';
import CourseCard from './course-card/CourseCard';

const Scroller = ({ children, rows }) => {
  return (
    <div
      className={`w-screen relative left-1/2 right-1/2 px-6 scroll-p-6 grid grid-flow-col grid-rows-${rows} auto-cols-max gap-4 overflow-auto overflow-y-hidden snap-x snap-start snap-always touch-manipulation overscroll-contain`}
      style={{ marginLeft: '-50vw', right: '-50vw' }}
      id='scrollers'
    >
      {children}
    </div>
  );
};

export default Scroller;
