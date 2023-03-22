import React from 'react';
import CourseHero from './CourseHero';
import CourseTitle from './CourseTitle';
import CourseDesc from './CourseDesc';
import { motion } from 'framer-motion';

const CourseCard = ({
  title,
  desc,
  video,
  hours,
  lessons,
  price,
  slug,
  reset,
  category,
  newWidth,
}) => {
  const data = {
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['#1f97bf', '#e2e8f0'],
      },
    ],
  };

  const backgroundColor = () => {
    switch (category) {
      case 'Materials':
        return 'blue-900';
      case 'MATERIALS':
        return 'blue-900';
      case 'Industry':
        return 'red-800';
      case 'INDUSTRY':
        return 'red-800';
      case 'Design':
        return 'green-800';
      case 'DESIGN':
        return 'green-800';
      case 'FOODANDBEVERAGE':
        return 'cyan-900';
      case 'Food & Beverage':
        return 'cyan-900';
      case 'Supply Chain & Logistics':
        return 'fuchsia-700';
      case 'SUPPLYCHAIN':
        return 'fuchsia-700';
      case 'Business':
        return 'violet-800';
      case 'BUSINESS':
        return 'violet-800';
    }
  };

  return (
    <motion.div
      className={`flex flex-col bg-white rounded-md p-3 drop-shadow-lg gap-4 ${
        newWidth ? newWidth : 'w-72'
      } h-full snap-start cursor-grab`}
    >
      <motion.div className='grid grid-cols-6 gap-3 lg:gap-5 border-b border-b-slate-300 pb-3'>
        <CourseHero
          video={video}
          bgcolor={backgroundColor()}
          newWidth={newWidth}
        />
        <CourseTitle
          title={title}
          hours={hours}
          lessons={lessons}
          price={price}
          desc={desc}
          slug={slug}
          data={data}
          newWidth={newWidth}
        />
      </motion.div>
      <div className='grid grid-cols-6 pb-1 h-full items-stretch lg:grid'>
        <CourseDesc
          desc={desc}
          slug={slug}
          data={data}
          reset={reset}
          newWidth={newWidth}
        />
      </div>
    </motion.div>
  );
};

export default CourseCard;
