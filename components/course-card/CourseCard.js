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
}) => {
  const data = {
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ['#1f97bf', '#e2e8f0'],
      },
    ],
  };

  return (
    <motion.div className='flex flex-col bg-white rounded-md p-3 drop-shadow-lg gap-4 w-72 lg:w-full h-full snap-start cursor-grab'>
      <motion.div className='grid grid-cols-6 gap-3 lg:gap-5 border-b border-b-slate-300 pb-3'>
        <CourseHero video={video} />
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
