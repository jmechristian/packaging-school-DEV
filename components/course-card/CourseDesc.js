import React from 'react';
import { useRouter } from 'next/router';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const CourseDesc = ({ desc, slug, data, reset, newWidth }) => {
  const router = useRouter();

  const courseClickHandler = async () => {
    await router.push(`/courses/${slug}`);
    reset && reset();
  };

  return (
    <div
      className='flex flex-col gap-2 w-full col-span-6 justify-between'
      onClick={courseClickHandler}
    >
      <div
        className={`text-slate-600 line-clamp-3 ${
          newWidth ? 'text-md' : 'text-sm'
        }`}
      >
        {desc}
      </div>
      <div className='grid grid-cols-6 items-center h-auto'>
        <div className='flex gap-1 col-span-5'>
          <div
            className={`font-bold text-slate-900 ${
              newWidth ? 'text-md' : 'text-sm'
            }`}
          >
            <div>View Course</div>
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

export default CourseDesc;
