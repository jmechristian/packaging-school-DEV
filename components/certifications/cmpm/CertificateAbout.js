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
    <section className='py-40 container-7xl' id='about'>
      <div className='grid lg:grid-cols-2 gap-28'>
        <div className='flex flex-col gap-9'>
          <SectionHeading number='1'>About CMPM</SectionHeading>
          <h2 className='text-5xl max-w-2xl'>
            <FadeIn>
              Executive-level education design to be agile giving you the
              competitive edge.
            </FadeIn>
          </h2>
          <div>
            <p className='text-gray-500 text-lg'>
              Distinguish yourself from your colleagues by acquiring a tangible
              solution that can be presented to both management and peers. The
              exceptional feature of this program lies in its Packaging
              Development Plan (PDP) and personalized 1-1 coaching, enabling
              students to apply course teachings to their own organizational or
              personal projects. The PDP, an ongoing project within the CMPM,
              becomes an invaluable asset to share with stakeholders involved in
              realizing your projects, and it offers endless possibilities as it
              can be tailored to your unique requirements.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-9'>
          <StatCard stat='80' title='Certificate Hours' />
          <StatCard stat='14' title='Certificate Courses' />
          <StatCard stat='8' title={`CEU \nCredits`} />
          <StatCard
            stat={<AcademicCapIcon className='w-12 h-12 stroke-base-brand' />}
            title='PhD-led Project'
          />
          <StatCard
            stat={<DocumentPlusIcon className='w-12 h-12 stroke-base-brand' />}
            title='Application Required'
          />
          <StatCard
            stat={
              <MagnifyingGlassPlusIcon className='w-12 h-12 stroke-base-brand' />
            }
            title='Rigorous Examination'
          />
        </div>
      </div>
    </section>
  );
};

export default CertificateAbout;
