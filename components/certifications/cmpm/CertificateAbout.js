import React from 'react';
import { SectionHeading } from '../../shared/SectionHeading';
import FadeIn from '../../../helpers/FadeIn';
import StatCard from '../../shared/StatCard';
import {
  DocumentPlusIcon,
  AcademicCapIcon,
  MagnifyingGlassPlusIcon,
} from '@heroicons/react/24/outline';

const CertificateAbout = () => {
  return (
    <section className='py-32 container-7xl' id='about'>
      <div className='grid lg:grid-cols-2 gap-9 lg:gap-28 justify-end'>
        <div className='flex flex-col gap-9'>
          <FadeIn>
            <SectionHeading number='1'>What is CMPM?</SectionHeading>
          </FadeIn>
          <h2 className='text-4xl lg:text-5xl max-w-2xl dark:text-white'>
            <FadeIn>
              Executive-level education design to be agile giving you the
              competitive edge.
            </FadeIn>
          </h2>
          <div>
            <p className='dark:text-gray-500 text-slate-700 text-xl font-greycliff tracking-wide'>
              Distinguish yourself from your colleagues by acquiring a tangible
              solution that can be presented to both management and peers. The
              exceptional feature of this program lies in its{' '}
              <span className='dark:text-white text-base-mid font-bold'>
                Packaging Development Plan (PDP)
              </span>{' '}
              and{' '}
              <span className='dark:text-white text-base-mid font-bold'>
                personalized 1-1 coaching
              </span>
              , enabling students to apply course teachings to their own
              organizational or personal projects. The PDP, an ongoing project
              within the certificate, becomes an invaluable asset to share with
              stakeholders involved in realizing your projects, and it offers
              endless possibilities as it can be tailored to your unique
              requirements.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-9 lg:gap-12 justify-end'>
          <FadeIn>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9'>
              <StatCard stat='80' title='Certificate Hours' />
              <StatCard stat='14' title='Certificate Courses' />
              <StatCard stat='8' title={`CEU \nCredits`} />
              <StatCard
                stat={
                  <AcademicCapIcon className='w-12 h-12 stroke-white dark:stroke-clemson' />
                }
                title='PhD-led Project'
              />
              <StatCard
                stat={
                  <DocumentPlusIcon className='w-12 h-12 stroke-white dark:stroke-clemson' />
                }
                title='Application Required'
              />
              <StatCard
                stat={
                  <MagnifyingGlassPlusIcon className='w-12 h-12 stroke-white dark:stroke-clemson' />
                }
                title='Rigorous Examination'
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div className='w-full py-6 lg:p-9 flex gap-9 items-center border-t border-b border-slate-800'>
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
      </div>
    </section>
  );
};

export default CertificateAbout;
