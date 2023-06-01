import Script from 'next/script';
import React from 'react';

const Page = () => {
  return (
    <div className='bg-white'>
      <div className='relative isolate'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-32 lg:pb-40 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto'>
          <div className='px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl'>
              <img
                className='w-44 h-auto mb-9'
                src='https://packschool.s3.amazonaws.com/sandler_ps-logo.png'
                alt='Sandler Sales Training'
              />
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-greycliff'>
                Great sales people aren’t born. They’re trained.
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                This introductory course is designed to give a complete overview
                of the Sandler Selling System concepts as they apply to
                packaging sales, along with actionable steps that you or your
                team can implement from the first day to immediately start to
                improve performance.
              </p>
            </div>
          </div>
          <div>
            <div class='_form_69'></div>
            <Script
              src='https://packagingschool42200.activehosted.com/f/embed.php?id=69'
              type='text/javascript'
              charset='utf-8'
            />
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
