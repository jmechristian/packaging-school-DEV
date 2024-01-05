import React from 'react';

const StatCard = ({ stat, title }) => {
  return (
    <div className='w-full bg-slate-400 dark:bg-dark-mid rounded-lg shadow-xl'>
      <div className='flex flex-col justify-center items-center p-6 gap-3'>
        <div className='text-5xl font-semibold font-sans text-white dark:text-clemson'>
          {stat}
        </div>
        <div className='text-slate-800 dark:text-white/60 font-semibold text-lg text-center leading-5 whitespace-pre-wrap'>
          {title}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
