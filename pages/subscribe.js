import React from 'react';
import FooterEmailSignup from '../features/navigation/Footer/FooterEmailSignup';
import Meta from '../components/shared/Meta';

const Page = () => {
  return (
    <>
      <Meta
        title={'Subscribe to Packaging School Content'}
        description={
          'Stay connected with the Packaging School community and be the first to take part in exciting updates and the latest learning experiences.'
        }
      />
      <div className='overflow-hidden bg-white py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
            <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-16'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Building Community.
              </h2>
              <p className='mt-6 text-xl leading-8 text-gray-600 mb-9'>
                Stay connected with the Packaging School community and be the
                first to take part in exciting updates and the latest learning
                experiences.
              </p>
              <FooterEmailSignup />
            </div>
            <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
              <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
                <img
                  src='https://packschool.s3.amazonaws.com/packaging-bootcamp-101-page-header.webp'
                  alt=''
                  className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
                <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                  <img
                    src='https://packschool.s3.amazonaws.com/BMW-Packaging-School-Background-HERO-1.webp'
                    alt=''
                    className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
                <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                  <img
                    src='https://packschool.s3.amazonaws.com/glass-and-metal-packaging-hero-image02.webp'
                    alt=''
                    className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
                <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                  <img
                    src='https://packschool.s3.amazonaws.com/cardb.webp'
                    alt=''
                    className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
