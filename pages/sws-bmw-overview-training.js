import React from 'react';
import BMWHero from '../components/bmw/BMWHero';
import BMWTraining from '../components/bmw/BMWTraining';
import BMWOverview from '../components/bmw/BMWOverview';
import BMWFaqs from '../components/bmw/BMWFaqs';

const Page = () => {
  return (
    <div className='flex flex-col gap-16 md:gap-24 pb-16 lg:pb-24'>
      <BMWTraining />
      <BMWOverview />
      <BMWFaqs />
    </div>
  );
};

export default Page;
