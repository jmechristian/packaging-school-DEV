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
      case 'Industry':
        return 'red-800';
      case 'Design':
        return 'green-800';
      case 'Food & Beverage':
        return 'cyan-900';
      case 'Supply Chain & Logistics':
        return 'fuchsia-700';
      case 'Business':
        return 'violet-800';
    }
  };

  return (
    <motion.div className='flex flex-col bg-white rounded-md p-3 drop-shadow-lg gap-4 w-72 h-full snap-start cursor-grab'>
      <motion.div className='grid grid-cols-6 gap-3 lg:gap-5 border-b border-b-slate-300 pb-3'>
        <CourseHero video={video} bgcolor={backgroundColor()} />
        <CourseTitle
          title={title}
          hours={hours}
          lessons={lessons}
          price={price}
          desc={desc}
          slug={slug}
          data={data}
        />
      </motion.div>
      <div className='grid grid-cols-6 pb-1 h-full items-stretch lg:grid'>
        <CourseDesc desc={desc} slug={slug} data={data} reset={reset} />
      </div>
    </motion.div>
  );
};

export default CourseCard;
