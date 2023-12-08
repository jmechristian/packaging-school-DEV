import React from 'react';
import { SectionHeading } from '../../shared/SectionHeading';
import FadeIn from '../../../helpers/FadeIn';
import StatCard from '../../shared/StatCard';
import {
  DocumentPlusIcon,
  CalendarDaysIcon,
  MagnifyingGlassPlusIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

import CSPMissionStatement from './CSPMissionStatement';
import Image from 'next/image';

const CSPWhat = () => {
  return (
    <section
      className='max-w-7xl mx-auto flex flex-col gap-10 scroll-mt-36'
      id='about'
    >
      <div className='grid lg:grid-cols-5 gap-9 lg:gap-28 justify-end lg:pl-6 xl:pl-0'>
        <div className='flex flex-col gap-9 col-span-3 p-6 lg:p-0'>
          <FadeIn>
            <SectionHeading number='1'>What is CSP?</SectionHeading>
          </FadeIn>
          <h2 className='text-3xl lg:text-4xl max-w-2xl dark:text-white'>
            <FadeIn>
              Mastering Sustainable Packaging: From Concept to End of Life
            </FadeIn>
          </h2>
          <div className='flex flex-col gap-9'>
            <p className='dark:text-gray-500 text-slate-700 text-lg leading-normal font-greycliff tracking-wide max-w-prose'>
              In the sustainability discourse, it&apos;s more than a buzzword;
              it&apos;s a vital ongoing dialogue crucial for every industry.
              Meeting customer demands for sustainable packaging requires
              embedding this conversation into the packaging concept phase,
              considering the entire lifecycle to minimize environmental impact.
            </p>
            <p className='dark:text-gray-500 text-slate-700 text-lg leading-normal font-greycliff tracking-wide max-w-prose'>
              To that end, the Pacakging School has crafted a sustainability
              package design program that will equip learners to fluently
              communicate in sustainability language, set and achieve UN-based
              sustainability targets, design sustainable systems, measure carbon
              footprints, attain carbon neutrality through offset programs, and
              integrate a cutting-edge LCA software into their packaging concept
              development and material selection processes.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-9 lg:gap-12 justify-end col-span-2'>
          <div className='grid w-full h-full'>
            <div className='w-full h-full flex items-center justify-center'>
              <Image
                src={'https://packschool.s3.amazonaws.com/V2-Patch-4.png'}
                alt='Mastering Sustainable Packaging'
                width={600}
                height={600}
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
      </div>
      <CSPMissionStatement />
    </section>
  );
};

export default CSPWhat;
