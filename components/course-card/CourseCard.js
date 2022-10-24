import React from 'react';
import CourseHero from './CourseHero';
import CourseTitle from './CourseTitle';
import CourseDesc from './CourseDesc';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const CourseCard = () => {
  const data = {
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['#1f97bf', '#e2e8f0'],
      },
    ],
  };

  return (
    <div className='flex flex-col bg-white rounded-md p-3 drop-shadow-lg gap-4'>
      <div className='grid grid-cols-6 gap-3 border-b border-b-slate-300 pb-3'>
        <CourseHero />
        <CourseTitle />
      </div>
      <div className='grid grid-cols-6 pb-1'>
        <CourseDesc />
        <div className='col-span-1'>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
