import React from 'react';
import CourseCard from './course-card/CourseCard';

const Scroller = ({ children, rows }) => {
  return (
    <div
      className={`grid grid-flow-col gap-4 auto-cols-max overflow-y-hidden overflow-auto snap-x snap-mandatory overscroll-contain grid-rows-${rows} touch-manipulation px-6 scroll-p-6 md:px-24 md:scroll-p-24`}
      id='scrollers'
    >
      {children}
    </div>
  );
};

export default Scroller;
