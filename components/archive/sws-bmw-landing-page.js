import React from 'react';
import BMWHero from '../bmw/BMWHero';
import BMWSteps from '../bmw/BMWSteps';

const Page = () => {
  return (
    <div className='flex flex-col gap-16 md:gap-24 pb-16 lg:pb-24'>
      <BMWHero />
      <BMWSteps />
    </div>
  );
};

export default Page;
