import React from 'react';

const CareerCTA = () => {
  return (
    <div className='bg-gradient-to-tr from-clemson via-base-dark to-base-brand'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <h2 className='text-3xl font-bold font-greycliff tracking-tight text-white sm:text-5xl'>
          Ready to dive in?
          <br />
          Try a course, risk-free.
        </h2>
        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <a
            href='#'
            className='rounded-md bg-clemson px-5 py-4 text-sm md:text-xl font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Get Started For Free
          </a>
          <a
            href='#'
            className='text-sm md:text-lg font-semibold leading-6 text-white'
          >
            Explore Careers <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerCTA;
