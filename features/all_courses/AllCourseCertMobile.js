import React, { useRef } from 'react';
import CertificateCard from '../../components/certificate-card/CertificateCard';
import Scroller from '../../components/Scroller';

const AllCourseCertMobile = () => {
  const certRef = useRef();

  const certs = [
    {
      name: 'Certificate of Mastery in Packaging Management',
      body: 'Offered by the world renowned Clemson University Center for Corporate Learning and facilitated by PhDs, this certificate showcases the latest technologies accelerating the packaging field and provides a structured approach to deliver proactive learning in the space of packaging development, material procurement, and organizational management.',
      link: 'certifications/get-to-know-cmpm',
      apply: '/certificate-of-mastery-in-packaging-management',
      image:
        'https://packschool.s3.amazonaws.com/certifications/Packaging-School-Blank-CMPM-1.png',
      backgroundColor: 'bg-gradient-to-br from-base-brand to-slate-700',
      ring: 'slate-400',
      video: 'https://youtu.be/N_hYWvQO0Sg',
      callout: 'Deadline to Apply',
      calloutValue: 'July 28',
    },
    {
      name: 'Certificate of Packaging Science',
      link: 'certifications/get-to-know-cps',
      apply: '/certificate-of-packaging-science-application',
      body: 'The Certificate of Packaging Science is a one year online program that teaches the materials, processes, and influences shaping the advancement of the industry. From design conception to production and end-of-life, learn how to speak the language of packaging and utilize it as a key differentiator for you and your company.',
      image:
        'https://packschool.s3.amazonaws.com/certifications/Packaging-School-Blank-CPS-Julie-Suggs.png',
      backgroundColor: 'bg-gradient-to-br from-base-dark to-slate-900',
      ring: 'slate-900',
      video: 'https://www.youtube.com/watch?v=wjRIwFK8YTo',
      callout: 'Time to Complete',
      calloutValue: '12 Months',
    },
    {
      name: 'Automotive Packaging Certificate',
      link: 'certifications/get-to-know-apc',
      apply: 'https://learn.packagingschool.com/enroll/735516',
      body: 'The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field We’ve collaborated with subject matter experts and state-of-the-art facilities so you’ll understand the unique roles of Tier 1s, OEMs, and packaging suppliers.',
      image:
        'https://packschool.s3.amazonaws.com/certifications/NEW-Packaging-School-Blank-APC-Julie-Suggs.png',
      backgroundColor: 'bg-gradient-to-br from-clemson to-orange-800',
      ring: 'clemson',
      video: 'https://vimeo.com/358392462',
      callout: 'Limited!',
      calloutValue: `Workbook \nIncluded`,
    },
  ];

  return (
    <div className='flex flex-col gap-6 mt-4'>
      <div className='text-xl font-semibold font-greycliff dark:text-slate-400 leading-tight col-span-4 px-4  md:px-8  mb-2'>
        Find Your Learning Path
      </div>
      <div className='relative grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-8'>
        {certs.map((c) => (
          <div className='w-full' key={c.name}>
            <CertificateCard
              title={c.name}
              apply={c.link}
              learn={c.learn}
              backgroundColor={c.backgroundColor}
              ring={c.ring}
              desc={c.body}
              callout={c.callout}
              calloutValue={c.calloutValue}
              video={c.video}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourseCertMobile;
