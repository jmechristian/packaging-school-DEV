import React from 'react';

const Scroller = ({ children, rows }) => {
  return (
    <div
      className={`w-screen relative grid grid-flow-col grid-rows-${rows} gap-4  overflow-y-hidden overflow-auto snap-x snap-mandatory overscroll-contain  touch-manipulation px-6 scroll-p-6 md:px-24 md:scroll-p-24`}
      id='scrollers'
    >
      {children}
    </div>
  );
};

export default Scroller;
