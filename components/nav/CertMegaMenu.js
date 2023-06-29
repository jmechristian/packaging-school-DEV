import React from 'react';
import Link from 'next/link';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/solid';
import CertMenuItem from '../shared/CertMenuItem';

const CertMegaMenu = ({ onClose }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='grid grid-cols-1 col-span-1 gap-3 lg:gap-6 lg:h-full'>
        <CertMenuItem
          title='Certificate of Mastery in Packaging Management'
          apply='/certificate-of-mastery-in-packaging-management'
          learnMore='/'
          content='A 12-month, PhD-led program teaching you the latest technologies accelerating the packaging field in the space of packaging development, material procurement, and organizational management.'
          bgColor='bg-base-brand'
          icon={'academicHat'}
          onClose={() => onClose()}
        />

        <CertMenuItem
          title='Automotive Packaging Certificate'
          bgColor='bg-green-700'
          content='The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field.'
          apply='/'
          learnMore='/'
          icon='cog'
          onClose={() => onClose()}
        />
      </div>
      <div className='grid grid-cols-1 col-span-1 gap-3 lg:gap-6 lg:h-full'>
        <CertMenuItem
          title='Certificate of Packaging Science'
          apply='/certificate-of-packaging-science-application'
          learnMore='/'
          bgColor='bg-slate-700'
          content='A 12-month, online program teaching the materials, processes, and influences shaping the advancement of the industry. Speak the language of packaging and be a key differentiator for you and your company.'
          icon='beaker'
          onClose={() => onClose()}
        />
        <CertMenuItem
          title='Food Packaging Certificate'
          apply='/'
          bgColor='bg-indigo-900'
          learnMore='/'
          content='In Development! Want to be a part? Interested In Sponsoring? Leave your mark on the packaging industry. Click below to apply or reach out to our Academic Director Dr. Julie Suggs'
          icon='food'
          onClose={() => onClose()}
        />
      </div>
    </div>
  );
};

export default CertMegaMenu;
