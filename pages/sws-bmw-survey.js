import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Script from 'next/script';
import { HomeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  return (
    <div className='relative bg-white'>
      <div className='max-w-7xl mx-auto'>
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

            <div className='mt-16'>
              <div class='_form_58'></div>
              <Script
                src='https://packagingschool42200.activehosted.com/f/embed.php?id=58'
                type='text/javascript'
                charset='utf-8'
              />
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

export default Page;
