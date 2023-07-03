import React from 'react';
import Instructor from './Instructor';
import CourseItems from './CourseItems';
import CourseDetails from './CourseDetails';

const CourseIntro = ({
  id,
  category,
  title,
  instructor,
  subtitle,
  infoSheet,
  hours,
  lessons,
  videos,
}) => {
  const backgroundColor = () => {
    switch (category) {
      case 'MATERIALS':
        return 'bg-blue-900';
      case 'INDUSTRY':
        return 'bg-red-800';
      case 'DESIGN':
        return 'bg-green-800';
      case 'Food & Beverage':
        return 'bg-cyan-900';
      case 'Supply Chain & Logistics':
        return 'bg-fuchsia-700';
      case 'Business':
        return 'bg-violet-800';
    }
  };

  return (
    <div className='flex flex-col gap-4 md:gap-5 lg:max-w-prose'>
      <div className='flex flex-row gap-3'>
        <div className='bg-base-dark max-w-fit rounded-md'>
          <div className=' text-white text-xs lg:text-sm flex py-1 px-3'>
            {id}
          </div>
        </div>
        <div className={` ${backgroundColor()} max-w-fit rounded-md`}>
          <div className=' text-white text-xs lg:text-sm flex py-1 px-3'>
            {category}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='hero__headline black__white mb-3'>{title}</div>
        <div className='text-slate-500 dark:text-gray-400 text-lg'>
          {subtitle}
        </div>
      </div>
      {/* <Instructor instructor={instructor} /> */}
      <CourseDetails hours={hours} lessons={lessons} videos={videos} />
      <CourseItems infoSheet={infoSheet} />
    </div>
  );
};

export default CourseIntro;
