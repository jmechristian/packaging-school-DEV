import React, { useState } from 'react';
import Link from 'next/link';
import CertIcon from '../icons/CertIcon';
import { AnimatePresence, motion } from 'framer-motion';
import HomeCertItem from './HomeCertItem';

const certs = [
  {
    name: 'Certificate of Mastery in Packaging Management',
    body: 'Offered by the world renowned Clemson University Center for Corporate Learning and facilitated by PhDs, this certificate showcases the latest technologies accelerating the packaging field and provides a structured approach to deliver proactive learning in the space of packaging development, material procurement, and organizational management.',
    link: 'certifications/get-to-know-cmpm',
    apply: '/certificate-of-mastery-in-packaging-management',
    image:
      'https://packschool.s3.amazonaws.com/certifications/Packaging-School-Blank-CMPM-1.png',
    background: 'bg-gradient-to-br from-base-brand to-slate-700',
  },
  {
    name: 'Certificate of Packaging Science',
    link: 'certifications/get-to-know-cps',
    apply: '/certificate-of-packaging-science-application',
    body: 'The Certificate of Packaging Science is a one year online program that teaches the materials, processes, and influences shaping the advancement of the industry. From design conception to production and end-of-life, learn how to speak the language of packaging and utilize it as a key differentiator for you and your company.',
    image:
      'https://packschool.s3.amazonaws.com/certifications/Packaging-School-Blank-CPS-Julie-Suggs.png',
    background: 'bg-gradient-to-br from-base-dark to-slate-900',
  },
  {
    name: 'Automotive Packaging Certificate',
    link: 'certifications/get-to-know-apc',
    apply: 'https://learn.packagingschool.com/enroll/735516',
    body: 'The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field We’ve collaborated with subject matter experts and state-of-the-art facilities so you’ll understand the unique roles of Tier 1s, OEMs, and packaging suppliers.',
    image:
      'https://packschool.s3.amazonaws.com/certifications/NEW-Packaging-School-Blank-APC-Julie-Suggs.png',
    background: 'bg-gradient-to-br from-clemson to-orange-800',
  },
];

const HomeCerts = () => {
  return (
    <div className='flex flex-col gap-9 container__inner'>
      <div className='flex flex-row justify-between w-full items-center'>
        <div className='font-greycliff font-bold text-2xl md:text-3xl'>
          PhD-Developed, Comprehensive Certificate Programs
        </div>
        <div className='bg-white border border-slate-600 rounded-lg p-3 font-greycliff hidden lg:block font-semibold'>
          <Link href={'/certifications'}>Explore Certificates</Link>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {certs.map((cert, i) => (
          <div key={cert.name}>
            <HomeCertItem cert={cert} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCerts;
