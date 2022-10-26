import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const CourseDesc = ({ desc, slug, data }) => {
  return (
    <div className='flex flex-col gap-2 w-full col-span-6 justify-between'>
      <div className='text-slate-600 text-sm'>{desc}</div>
      <div className='grid grid-cols-6 items-center'>
        <div className='flex gap-1 col-span-5'>
          <div className='font-bold text-sm text-slate-900'>
            <Link href={`/courses/${slug}`}>View Course</Link>
          </div>
          <ArrowLongRightIcon className='w-5 h-5 stoke-slate-900' />
        </div>
        <div className='col-span-1 w-2/3 ml-auto'>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default CourseDesc;
