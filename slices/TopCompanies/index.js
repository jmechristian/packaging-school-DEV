import React from 'react';
import LogoScroller from './components/LogoScroller';

const TopCompanies = ({ slice }) => {
  return (
    <section className='lg:container__inner relative'>
      <div className='bg-base-dark lg:rounded-lg py-12 w-full'>
        <div className='flex flex-col md:w-10/12 mx-auto'>
          <div className='text-center text-white text-xl font-semibold'>
            Top Companies Trust{' '}
            <span className='text-clemson'>The Packaging School</span> for
            In-Demand Skills
          </div>
          <LogoScroller items={slice?.items} />
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
