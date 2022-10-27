import React from 'react';

const Scroller = ({ children, rows }) => {
  return (
    <div
      className={`grid grid-flow-col grid-rows-${rows} auto-cols-max gap-4 overflow-auto overflow-y-hidden snap-x snap-mandatory snap-always overscroll-contain touch-manipulation px-6 scroll-p-6 md:px-24 md:scroll-p-24`}
      id='scrollers'
    >
      {children}
    </div>
  );
};

export default Scroller;
