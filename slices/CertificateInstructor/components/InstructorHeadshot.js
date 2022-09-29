import React from 'react';
import { PrismicLink } from '@prismicio/react';

const InstructorHeadshot = ({
  headshot,
  name,
  title,
  social_link,
  social_image,
  social_alt,
}) => {
  return (
    <div className='flex flex-col w-full md:w-1/2 lg:w-1/4'>
      <div
        className='rounded-tr-3xl h-80 md:h-60 lg:h-80'
        style={{
          backgroundImage: `url(${headshot})`,
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
      ></div>
      <div className='bg-base-dark text-white flex flex-row justify-between items-center py-3 px-6'>
        <div className='flex flex-col'>
          <div className='font-bold text-xl'>{name}</div>
          <div>{title}</div>
        </div>
        <div className='h-7 w-7'>
          <PrismicLink field={social_link}>
            <img src={social_image} alt={social_alt} />
          </PrismicLink>
        </div>
      </div>
    </div>
  );
};

export default InstructorHeadshot;
