import React from 'react';
import { PrismicLink } from '@prismicio/react';

const Instructor = ({ instructor }) => {
  return (
    instructor[0].instructor_name &&
    instructor.map((item, i) => (
      <div className='flex gap-6 items-center' key={i}>
        <div
          className='w-9 h-9 bg-white rounded-full hidden'
          style={{
            backgroundImage: `url(${item.instructor_headshot.url})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className='flex gap-2'>
          <div className='black__white'>Instructed by </div>
          <div className='underline text-slate-600 dark:text-base-brand'>
            <PrismicLink field={item.instructor_social}>
              {item.instructor_name}
            </PrismicLink>
          </div>
        </div>
      </div>
    ))
  );
};

export default Instructor;
