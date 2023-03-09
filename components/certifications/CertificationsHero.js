import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const CertificationsHero = ({ darkMode }) => {
  return (
    <div className='relative isolate overflow-hidden'>
      {darkMode ? (
        <>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg
              x='50%'
              y={-1}
              className='overflow-visible fill-slate-50 dark:fill-slate-800/20'
            >
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
            />
          </svg>
          <svg
            viewBox='0 0 1108 632'
            aria-hidden='true'
            className='absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'
          >
            <path
              fill='url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)'
              fillOpacity='.2'
              d='M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z'
            />
            <defs>
              <linearGradient
                id='175c433f-44f6-4d59-93f0-c5c51ad5566d'
                x1='1220.59'
                x2='-85.053'
                y1='432.766'
                y2='638.714'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#04607e' />
                <stop offset={1} stopColor='#04607e' />
              </linearGradient>
            </defs>
          </svg>
        </>
      ) : (
        <svg
          className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
          />
        </svg>
      )}
      <div className='mx-auto max-w-7xl px-6 pt-10 lg:flex lg:px-8 lg:pt-40'>
        <div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
          <div className='mt-24 sm:mt-32 lg:mt-16'>
            <a href='#' className='inline-flex space-x-6'>
              <span className='rounded-full bg-base-brand/10 px-3 py-1 text-sm font-bold leading-6 text-base-brand ring-1 ring-inset ring-indigo-500/20'>
                Open Enrollment
              </span>
              <span className='inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-500 dark:text-gray-300'>
                <span>Apply Anytime</span>
                <ChevronRightIcon
                  className='h-5 w-5 text-gray-500'
                  aria-hidden='true'
                />
              </span>
            </a>
          </div>
          <h1 className='mt-10 text-4xl font-bold tracking-tight dark:text-white sm:text-6xl font-greycliff'>
            Certificate of Packaging Science
          </h1>
          <p className='mt-6 text-lg lg:text-xl lg:leading-9 leading-8 text-slate-500 dark:text-gray-300'>
            The Certificate of Packaging Science is a one-year online program
            that teaches the materials, processes, and influences shaping the
            advancement of the industry. From design conception to production to
            end-of-life, learn how to speak the language of packaging and
            utilize it as a key differentiator for you and your company.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-clemson font-greycliff px-3.5 py-2.5 text-base md:text-lg font-bold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
            >
              Apply Today
            </a>
            <a
              href='#'
              className='text-base md:text-lg font-bold leading-6 font-greycliff dark:text-white'
            >
              Compare to CMPM <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32'>
          <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
            <img
              src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
              alt='App screenshot'
              width={2432}
              height={1442}
              className='w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsHero;
