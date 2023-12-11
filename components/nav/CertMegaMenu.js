import React from 'react';
import Link from 'next/link';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/solid';
import CertMenuItem from '../shared/CertMenuItem';

const CertMegaMenu = ({ onClose }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-3 lg:gap-6 h-full'>
        <CertMenuItem
          title='Certificate of Mastery in Packaging Management'
          apply='/certificate-of-mastery-in-packaging-management'
          learnMore='/certifications/get-to-know-cmpm'
          content='A 12-week, PhD-led program teaching you the latest technologies accelerating the packaging field in the space of packaging development, material procurement, and organizational management.'
          bgColor='bg-base-brand'
          icon={'academicHat'}
          onClose={() => onClose()}
        />

        <CertMenuItem
          title='Automotive Packaging Certificate'
          bgColor='bg-green-700'
          content='The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field.'
          apply='https://learn.packagingschool.com/enroll/735516'
          learnMore='/certifications/get-to-know-apc'
          icon='cog'
          onClose={() => onClose()}
        />
      </div>
      <div className='flex flex-col gap-3 lg:gap-6 lg:h-full'>
        <CertMenuItem
          title='Certificate of Packaging Science'
          apply='/certificate-of-packaging-science-application'
          learnMore='/certifications/get-to-know-cps'
          bgColor='bg-slate-700'
          content='A 12-month, online program teaching the materials, processes, and influences shaping the advancement of the industry. Speak the language of packaging and be a key differentiator for you and your company.'
          icon='beaker'
          onClose={() => onClose()}
        />
        <CertMenuItem
          enroll={true}
          title='Certificate of Sustainable Packaging'
          apply='https://learn.packagingschool.com/enroll/2772370'
          learnMore='/certifications/get-to-know-csp'
          onClose={() => close()}
          bgColor='bg-gradient-to-br from-brand-green to-slate-900'
          content="Introducing a transformative program empowering industry professionals to navigate the complexities of sustainable design. This initiative equips companies with internal champions, well-versed in the dos and don'ts of sustainable packaging, fostering a positive force for change within organizations."
          callout={'Newly Released!'}
        />
      </div>
    </div>
  );
};

export default CertMegaMenu;
