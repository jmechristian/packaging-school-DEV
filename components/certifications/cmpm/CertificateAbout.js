import React from 'react';
import { SectionHeading } from '../../shared/SectionHeading';
import FadeIn from '../../../helpers/FadeIn';
import StatCard from '../../shared/StatCard';
import {
  DocumentPlusIcon,
  AcademicCapIcon,
  MagnifyingGlassPlusIcon,
} from '@heroicons/react/24/outline';
import PDPDownload from './PDPDownload';

const CertificateAbout = () => {
  return (
    <section className='container-7xl' id='about'>
      <div className='flex flex-col lg:flex-row gap-16 lg:gap-9 xl:gap-16 items-center'>
        <div className='flex flex-col gap-9'>
          <FadeIn>
            <SectionHeading number='1'>What is CMPM?</SectionHeading>
          </FadeIn>
          <h2 className='text-4xl xl:text-5xl max-w-2xl dark:text-white'>
            <FadeIn>Executive-level education design to be agile.</FadeIn>
          </h2>

          <div className='flex flex-col gap-6 dark:text-gray-500  text-lg font-greycliff tracking-wide'>
            <p className=''>
              Acquiring a tangible solution that can be presented to both
              management and peers. The exceptional feature of this program lies
              in its{' '}
              <span className='dark:text-white font-bold'>
                Packaging Development Plan (PDP)
              </span>{' '}
              and{' '}
              <span className='dark:text-white font-bold'>
                personalized 1-1 coaching
              </span>
              , enabling students to apply course teachings to their own
              organizational or personal projects.
            </p>
            <p>
              With a duration of 12 weeks and 14 comprehensive courses, this
              online program offers flexibility for individuals with full-time
              jobs, while ensuring continuous support through Dr. Suggs&apos;
              readily available office hours.
            </p>
          </div>
          <FadeIn>
            <div className='w-full py-6 lg:p-6 flex gap-5 items-center border-t border-b border-slate-800'>
              <div className='w-40'>
                <img
                  src='https://packschool.s3.amazonaws.com/01-LOGO_ClemsonCCL.png'
                  alt='Clemson University Center for Corporate Learning'
                  className='w-40'
                />
              </div>
              <div>
                <p className='w-fit dark:text-white text-sm leading-none font-greycliff'>
                  Offered through Clemson University Center for Corporate
                  Learning
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className='flex flex-col gap-9 justify-end border rounded-xl py-9 px-6 shadow-2xl shadow-base-brand bg-white h-full'>
          <div className='grid grid-cols-3 overflow-hidden'>
            <div className='flex flex-col gap-2 border-r-neutral-400 border-r last-of-type:border-r-0 pl-5'>
              <div className='text-5xl font-bold'>14</div>
              <div className='font-bold leading-none text-neutral-500 text-sm md:text-base'>
                Certificate
                <br />
                Courses
              </div>
            </div>
            <div className='flex flex-col gap-2 border-r-neutral-400 border-r last-of-type:border-r-0 pl-5'>
              <div className='text-5xl font-bold'>80</div>
              <div className='font-bold leading-none text-neutral-500 text-sm md:text-base'>
                Certificate
                <br />
                Hours
              </div>
            </div>
            <div className='flex flex-col gap-2 border-r-neutral-400 border-r last-of-type:border-r-0 pl-5'>
              <div className='text-5xl font-bold'>
                <AcademicCapIcon className='w-12' />
              </div>
              <div className='font-bold leading-none text-neutral-500 text-sm md:text-base'>
                PhD-Led
                <br />
                Project
              </div>
            </div>
          </div>
          <FadeIn>
            <PDPDownload />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CertificateAbout;
