import React, { useState } from 'react';
import { BookmarkIcon } from '@heroicons/react/24/outline';

const CourseTitle = ({ title, hours, lessons, price }) => {
  const [bookMarked, setBookMarked] = useState(false);
  return (
    <div className='flex flex-col gap-1 col-span-4'>
      <div className='w-full flex justify-between items-end'>
        <div className='flex gap-1'>
          <div className='text-slate-500 text-xs'>{hours} Hours</div>
          <div className='text-slate-500 text-xs'>&#x25cf;</div>
          <div className='text-slate-500 text-xs'>{lessons} Lessons</div>
        </div>
        <button onClick={() => setBookMarked(!bookMarked)}>
          <BookmarkIcon
            className={`w-5 h-5  ${
              bookMarked ? 'fill-clemson stroke-clemson' : 'stroke-slate-400'
            }`}
          />
        </button>
      </div>
      <div className='font-bold text-slate-900 text-lg leading-snug'>
        {title}
      </div>
      <div className='font-medium text-slate-900 leading-snug'>${price}</div>
    </div>
  );
};

export default CourseTitle;
