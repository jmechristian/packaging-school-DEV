import React from 'react';

const GradientCTA = ({
  headline,
  subheadline,
  buttonText,
  secondaryButtonText,
  buttonLink,
  secondaryButtonLink,
}) => {
  return (
    <div className='bg-gradient-to-tr from-clemson via-base-dark to-base-brand'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <h2 className='text-3xl font-bold font-greycliff tracking-tight text-white sm:text-5xl'>
          {headline}
          <br />
          {subheadline}
        </h2>
        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <a
            href={buttonLink}
            className='rounded-md bg-clemson font-greycliff px-5 py-4 cursor-pointer text-sm md:text-xl font-bold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {buttonText}
          </a>
          {secondaryButtonLink && (
            <a
              href={secondaryButtonLink}
              className='text-sm md:text-lg font-greycliff font-semibold cursor-pointer leading-6 text-white'
            >
              {secondaryButtonText} <span aria-hidden='true'>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradientCTA;
