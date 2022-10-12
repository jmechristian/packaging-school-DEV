import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Instructor from './Instructor';
import CourseItems from './CourseItems';

const CourseIntro = ({
  id,
  categories,
  title,
  instructor,
  subtitle,
  preview,
  infoSheet,
}) => {
  const backgroundColor = () => {
    switch (categories[0].category) {
      case 'Material':
        return 'bg-blue-700';
      case 'Industry':
        return 'bg-red-800';
      case 'Design':
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
    <div className='flex flex-col gap-5 lg:max-w-prose'>
      <div className='flex flex-row gap-3'>
        <div className='bg-base-dark max-w-fit rounded-md'>
          <div className=' text-white text-sm flex py-1 px-3'>{id}</div>
        </div>
        <div className={` ${backgroundColor()} max-w-fit rounded-md`}>
          <div className=' text-white text-sm flex py-1 px-3'>
            {categories[0].category}
          </div>
        </div>
      </div>
      <div className='hero__headline'>
        <PrismicRichText field={title} />
      </div>
      <Instructor instructor={instructor} />
      <div className='text-white text-xl'>
        <PrismicRichText field={subtitle} />
      </div>
      <CourseItems preview={preview} infoSheet={infoSheet} />
    </div>
  );
};

export default CourseIntro;
