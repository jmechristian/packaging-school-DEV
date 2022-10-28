import React from 'react';

const Scroller = ({ rows, children, scroll }) => {
  return (
    <div
      className='grid grid-flow-col auto-cols-max gap-4 overflow-auto overflow-y-hidden snap-x snap-mandatory snap-always touch-manipulation px-6 scroll-p-6 md:px-24 md:scroll-p-24'
      id='scrollers'
      style={{ gridTemplateRows: `repeat(${rows},minmax(0,1fr))` }}
      ref={scroll}
    >
      {children}
    </div>
  );
};

export default Scroller;
