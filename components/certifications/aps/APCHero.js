import React from 'react';
import HeadlineMotion from '../../../helpers/HeadlineMotion';
import FadeIn from '../../../helpers/FadeIn';
import CertHeroImage from '../../../slices/CertificateHero/components/CertHeroImage';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const APCHero = () => {
  return (
    <div className='grid lg:grid-cols-2 items-center gap-6 overflow-hidden py-12 md:py-24 container-7xl'>
      <div>
        <Image
          src={'https://packschool.s3.amazonaws.com/apc.png'}
          width={600}
          height={600}
          alt='Automotive Packaging Certificate'
        />
      </div>
      <div className='flex flex-col gap-9'>
        <div>
          <FadeIn>
            <h1 className='text-4xl xl:text-5xl leading-tight dark:text-white'>
              Automotive Packaging Certificate (APC)
            </h1>
          </FadeIn>
        </div>
        <div>
          <FadeIn>
            <p className='text-xl font-greycliff text-slate-700 dark:text-gray-500 tracking-wide'>
              The first and only 100% online academic program that will enable
              you to develop the professional skill set you need to be
              successful in the automotive packaging field. Ideal for packaging
              and logistics employees at automotive suppliers and OEMs, as well
              as sales, customer service and packaging engineers that work for
              or with packaging providers produce and supply industrial and
              automotive packaging.
            </p>
          </FadeIn>
        </div>
        <div>
          <FadeIn>
            <div className='flex flex-col md:flex-row items-center gap-6 mt-4'>
              <button className='w-full md:w-fit px-9 bg-clemson rounded-lg py-4 text-white font-semibold font-greycliff text-xl'>
                Enroll Now
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default APCHero;
