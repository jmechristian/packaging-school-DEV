import React from 'react';

const SnapScroller = ({ children, title }) => {
  return (
    <div
      className='flex overflow-x-scroll ml-8 snap-x snap-mandatory '
      id='scrollers'
    >
      <div className='flex gap-8'>{children}</div>
    </div>
  );
};

export default SnapScroller;
