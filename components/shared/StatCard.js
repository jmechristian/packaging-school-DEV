import React from 'react';

const StatCard = ({ stat, title }) => {
  return (
    <div className='w-full h-full bg-dark-mid rounded-lg shadow-lg'>
      <div className='flex flex-col justify-center items-center p-6 gap-3'>
        <div className='text-5xl font-bold font-sans text-clemson'>{stat}</div>
        <div className='text-white/60 font-semibold text-lg text-center leading-5 whitespace-pre-wrap'>
          {title}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
