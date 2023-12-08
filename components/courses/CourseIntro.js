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
  const textColor = () => {
    switch (category) {
      case 'Materials':
        return 'bg-base-dark text-white';
      case 'MATERIALS':
        return 'bg-base-dark text-white';
      case 'Industry':
        return 'bg-base-brand';
      case 'INDUSTRY':
        return 'bg-base-brand text-white';
      case 'Design':
        return 'bg-clemson';
      case 'DESIGN':
        return 'bg-clemson';
      case 'FOODANDBEVERAGE':
        return 'bg-base-light text-slate-900';
      case 'Food & Beverage':
        return 'bg-base-light text-slate-900';
      case 'Supply Chain & Logistics':
        return 'bg-clemson-dark text-white';
      case 'SUPPLYCHAIN':
        return 'bg-clemson-dark text-white';
      case 'Business':
        return 'bg-green-600';
      case 'BUSINESS':
        return 'bg-green-600';
    }
  };

  const categoryText = () => {
    switch (category) {
      case 'Materials':
        return 'Materials';
      case 'MATERIALS':
        return 'Materials';
      case 'Industry':
        return 'Industry';
      case 'INDUSTRY':
        return 'Industry';
      case 'Design':
        return 'Design';
      case 'DESIGN':
        return 'Design';
      case 'FOODANDBEVERAGE':
        return 'Food & Beverage';
      case 'Food & Beverage':
        return 'Food & Beverage';
      case 'Supply Chain & Logistics':
        return 'Supply Chain & Logistics';
      case 'SUPPLYCHAIN':
        return 'Supply Chain & Logistics';
      case 'Business':
        return 'Business';
      case 'BUSINESS':
        return 'Business';
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
        <div className={` ${textColor()} max-w-fit rounded-md`}>
          <div className=' text-xs lg:text-sm flex py-1 px-3'>
            {categoryText()}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='hero__headline black__white mb-3'>
          <h1>{title}</h1>
        </div>
        <div className='text-slate-700 dark:text-gray-400 text-lg'>
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
