import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const CourseDesc = ({ desc, slug, data }) => {
  return (
    <div className='flex flex-col gap-2 w-full col-span-6'>
      <div className='text-slate-600 text-sm'>{desc}</div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-1 w-10/12'>
          <div className='font-bold text-sm text-slate-900'>
            <Link href={`/courses/${slug}`}>View Course</Link>
          </div>
          <ArrowLongRightIcon className='w-5 h-5 stoke-slate-900' />
        </div>
        <div className='w-2/12 ml-auto'>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default CourseDesc;
