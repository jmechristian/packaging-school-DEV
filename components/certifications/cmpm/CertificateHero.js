import React from 'react';
import HeadlineMotion from '../../../helpers/HeadlineMotion';
import FadeIn from '../../../helpers/FadeIn';
import CertHeroImage from '../../../slices/CertificateHero/components/CertHeroImage';
import Link from 'next/link';
import { ArrowLongRightIcon, BoltIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const CertificateHero = () => {
  const router = useRouter();
  return (
    <div className='grid lg:grid-cols-2 items-center gap-6 overflow-hidden py-12 md:py-24 container-7xl'>
      <div>
        <CertHeroImage />
      </div>
      <div className='flex flex-col gap-9'>
        <div>
          <FadeIn>
            <h1 className='text-4xl xl:text-5xl leading-tight dark:text-white'>
              Certificate of Mastery in Packaging Management (CMPM)
            </h1>
          </FadeIn>
        </div>
        <div>
          <FadeIn>
            <p className='text-xl font-greycliff text-slate-700 dark:text-gray-500 tracking-wide'>
              A 12-week, PhD-led certificate program ideal for ambitious
              professionals seeking to advance their career in the packaging
              industry and for companies actively seeking future leaders and
              rising stars to lead their teams.
            </p>
          </FadeIn>
        </div>

        <div>
          <FadeIn>
            <div className='flex flex-col md:flex-row items-center gap-6 mt-4'>
              <button
                className='w-full md:w-fit px-9 bg-clemson rounded-lg py-4 text-white font-semibold font-greycliff text-xl'
                onClick={() =>
                  router.push('/certificate-of-mastery-in-packaging-management')
                }
              >
                Apply Now
              </button>
              <div
                className='flex gap-1.5 items-center cursor-pointer'
                onClick={() =>
                  window.open(
                    'https://calendar.app.google/LQVXpmyZ6vESm5wB6',
                    '_blank'
                  )
                }
              >
                <div className='font-semibold text-xl font-greycliff dark:text-base-brand'>
                  Schedule a FREE Live Demo
                </div>
                <div>
                  <ArrowLongRightIcon className='w-6 h-6 stroke-slate-900 dark:stroke-base-brand' />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default CertificateHero;
