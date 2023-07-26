import React from 'react';
import BMWHero from '../components/bmw/BMWHero';
import BMWSteps from '../components/bmw/BMWSteps';

const Page = () => {
  return (
    <div className='flex flex-col gap-16 md:gap-24 pb-16'>
      <BMWHero />
      <BMWSteps />
    </div>
  );
};

export default Page;
