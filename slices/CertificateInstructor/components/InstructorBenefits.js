import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const InstructorBenefits = ({ slice }) => {
  return (
    <div className='bg-base-light rounded px-5 md:px-6 py-8 lg:py-4 flex flex-col justify-center md:flex-row gap-8 lg:ml-8 xl:ml-12'>
      {slice?.items?.map((item, i) => (
        <div
          key={i}
          className='flex flex-row md:flex-col md:justify-center gap-3 items-center md:items-start'
        >
          <div className='w-12 h-12 bg-base-dark rounded-full p-3 flex justify-center items-center'>
            <div className='box-border w-12 h-12 flex justify-center items-center'>
              <img
                src={item.instructor_icon.url}
                alt={item.instructor_icon.alt}
              />
            </div>
          </div>
          <div className='body__text leading-tight'>
            <PrismicRichText field={item.instructor_icon_detail} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorBenefits;
