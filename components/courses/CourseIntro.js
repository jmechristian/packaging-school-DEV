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
  let backgroundColor;

  if (categories[0].category === 'Material') {
    backgroundColor = 'bg-blue-700';
  }

  if (categories[0].category === 'Industry') {
    backgroundColor = 'bg-red-800';
  }

  return (
    <div className='flex flex-col gap-5 lg:max-w-prose'>
      <div className='flex flex-row gap-3'>
        <div className='bg-base-dark max-w-fit rounded-md'>
          <div className=' text-white text-sm flex py-1 px-3'>{id}</div>
        </div>
        <div className={` ${backgroundColor} max-w-fit rounded-md`}>
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
