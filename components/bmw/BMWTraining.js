import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { HomeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const BMWTraining = () => {
  const router = useRouter();
  return (
    <div className='relative bg-white'>
      <div className='container-7xl mx-auto'>
        <div className='w-full z-20 flex'>
          <div className='flex items-center pr-16 gap-5 font-bold text-gray-800 mt-6'>
            <div
              className='flex gap-1 items-center cursor-pointer'
              onClick={() => router.push('/sws-bmw-landing-page')}
            >
              <div>
                <HomeIcon className='w-5 h-5 stroke-gray-800' />
              </div>
              <div>Supplier Training Home</div>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
              <div>
                <AcademicCapIcon className='w-5 h-5 stroke-gray-800' />
              </div>
              <div>
                <a
                  href='https://learn.packagingschool.com/users/sign_in'
                  target='_blank'
                  rel='noreferrer'
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 overflow-hidden'>
        <div className='px-6 pb-24 pt-16 sm:pb-24 lg:col-span-7 lg:px-0 lg:pb-40 lg:pt-28 xl:col-span-6'>
          <div className='mx-auto max-w-2xl lg:pl-6 xl:pl-0 pr-16'>
            <p className='text-sm font-semibold mb-3'>In Partnership with</p>
            <img
              className='h-12'
              src='https://packschool.s3.amazonaws.com/bmw_group_logo.png'
              alt='Your Company'
            />

            <h1 className='mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-24 sm:text-6xl'>
              BMW Supplier Training for Spare Parts
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-500'>
              This training is for the onboarding of new BMW Spare Parts
              Suppliers as well as a refresher for existing Suppliers.{' '}
              <span className='font-semibold'>
                Please be aware that the BMW Aftersales Department has been
                recently renamed to BMW Customer Support.
              </span>
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#start'
                className='rounded-md text-lg bg-clemson px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'
              >
                Training
              </a>
              <a
                href='#faqs'
                className='rounded-md text-lg bg-base-mid px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-base-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-5 overflow-hidden lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
            src='https://packschool.s3.amazonaws.com/bawp-23-media-portrait.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default BMWTraining;
