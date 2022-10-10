import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Instructor from './Instructor';
import CourseItems from './CourseItems';

const CourseIntro = ({
  title,
  instructor,
  subtitle,
  items,
  preview,
  infoSheet,
}) => {
  return (
    <div className='flex flex-col gap-7 lg:gap-5 lg:max-w-prose'>
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
