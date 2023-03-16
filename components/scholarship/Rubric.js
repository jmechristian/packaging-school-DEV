import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
];

const Rubric = () => {
  return (
    <div className='bg-gray-900 py-24 sm:py-32'>
      <div className='relative isolate'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 py-16 px-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
            <img
              className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
              src='https://packschool.s3.amazonaws.com/Essay-Grading-Rubric.png'
              alt='rubric grading'
            />
            <div className='w-full flex-auto'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl font-greycliff'>
                Essay Grading Rubric
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Scholarship applications will be reviewed during the last 2
                weeks of every quarter. You may submit your application at any
                time but all decisions will go out at once.
              </p>
              <div className='mt-10 flex cursor-pointer'>
                <a
                  href='/about'
                  className='text-lg font-greycliff font-bold leading-6 text-clemson'
                >
                  Download Rubric <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
          <svg
            viewBox='0 0 1318 752'
            className='w-[82.375rem] flex-none'
            aria-hidden='true'
          >
            <path
              fill='url(#ee394704-5802-4a27-9451-3d29bf7415a3)'
              fillOpacity='.25'
              d='m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z'
            />
            <defs>
              <linearGradient
                id='ee394704-5802-4a27-9451-3d29bf7415a3'
                x1='1452.56'
                x2='-101.59'
                y1='515.446'
                y2='760.592'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4F46E5' />
                <stop offset={1} stopColor='#80CAFF' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Rubric;
