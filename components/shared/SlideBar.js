import React, { useContext } from 'react';
import { LockOpenIcon } from '@heroicons/react/24/solid';

const SlideBar = ({ slides, page }) => {
  return (
    <div className='flex gap-1 items-center w-full pr-1 bg-black'>
      <div className='flex items-center gap-1 w-full h-min'>
        {slides &&
          slides.map((sl, index) => (
            <div
              key={index}
              className={`md:h-2 h-1.5 ${
                page >= index ? 'bg-clemson' : 'bg-white'
              } w-full rounded-sm`}
            />
          ))}
      </div>
      <div>
        <LockOpenIcon
          className={`w-4 h-4 ${
            page === slides.length - 1 ? 'fill-clemson' : 'fill-white'
          } `}
        />
      </div>
    </div>
  );
};

export default SlideBar;
