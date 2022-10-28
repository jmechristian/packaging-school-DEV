import React, { useState } from 'react';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

const CourseTitle = ({ title, hours, lessons, price, desc, data, slug }) => {
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
      <div className='font-bold text-slate-900 md:text-base leading-snug md:leading-tight'>
        {title}
      </div>
      <div className='font-medium text-slate-900 text-sm leading-snug'>
        ${price}
      </div>
      <div className='text-slate-600 text-sm hidden lg:line-clamp-3 max-w-prose pr-8'>
        {desc}
      </div>
      <div className=' hidden lg:grid xl:hidden grid-cols-6 items-center h-auto'>
        <div className='flex gap-1 col-span-5'>
          <div className='font-bold text-sm text-slate-900'>
            <Link href={`/courses/${slug}`}>View Course</Link>
          </div>
          <ArrowLongRightIcon className='w-5 h-5 stoke-slate-900' />
        </div>
        <div className='col-span-1 w-2/3 lg:w-1/2 ml-auto'>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
