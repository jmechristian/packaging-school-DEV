import React from 'react';

const Scroller = ({ rows, children }) => {
  return (
    <div
      className={`grid grid-flow-col grid-rows-${2} auto-cols-max gap-4 overflow-auto overflow-y-hidden snap-x snap-mandatory snap-always touch-manipulation px-6 scroll-p-6 md:px-24 md:scroll-p-24`}
      id='scrollers'
    >
      {children}
    </div>
  );
};

export default Scroller;
