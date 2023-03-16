import React from 'react';
import PatternBackground from './PatternBackground';

const CenteredTextHero = ({
  subhead,
  heading,
  headline,
  buttonText,
  buttonLink,
  secondaryText,
  secondaryLink,
}) => {
  return (
    <div className='bg-white relative isolate'>
      <div className='px-6 lg:px-8 py-8'>
        <PatternBackground />
        <div className='mx-auto max-w-3xl py-32 sm:py-44'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              {heading}
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-greycliff'>
              {headline}
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>{subhead}</p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href={buttonLink}
                className='rounded-md bg-clemson px-4 py-3 text-lg  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-greycliff font-bold'
              >
                {buttonText}
              </a>
              <a
                href={secondaryLink}
                className='text-lg font-semibold leading-6 text-gray-900'
              >
                {secondaryText} <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredTextHero;
