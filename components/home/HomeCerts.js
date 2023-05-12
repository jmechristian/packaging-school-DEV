import React from 'react';
import Link from 'next/link';

const certs = [
  {
    name: 'Certificate of Mastery in Packaging Management',
    body: 'Offered by the world renowned Clemson University Center for Corporate Learning and facilitated by PhDs, this certificate showcases the latest technologies accelerating the packaging field and provides a structured approach to deliver proactive learning in the space of packaging development, material procurement, and organizational management.',
    link: 'certifications/get-to-know-cmpm',
    image:
      'https://packschool.s3.amazonaws.com/certifications/Packaging-School-Blank-CMPM-1.png',
  },
  {
    name: 'Certificate of Packaging Science',
    body: 'The Certificate of Packaging Science is a one year online program that teaches the materials, processes, and influences shaping the advancement of the industry. From design conception to production and end-of-life, learn how to speak the language of packaging and utilize it as a key differentiator for you and your company.',
    image:
      'https://packschool.s3.amazonaws.com/certifications/Packaging-School-Blank-CPS-Julie-Suggs.png',
  },
  {
    name: 'Automotive Packaging Certificate',
    body: 'The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field We’ve collaborated with subject matter experts and state-of-the-art facilities so you’ll understand the unique roles of Tier 1s, OEMs, and packaging suppliers.',
    image:
      'https://packschool.s3.amazonaws.com/certifications/NEW-Packaging-School-Blank-APC-Julie-Suggs.png',
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
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {certs.map((cert) => (
          <div className='bg-slate-200 rounded-lg py-9 px-6' key={cert.name}>
            <div className='flex flex-col gap-4'>
              <div className='w-24 h-24 rounded-full bg-base-mid'></div>
              <div className='font-semibold text-2xl font-greycliff'>
                {cert.name}
              </div>
              <div className='text-slate-600'>{cert.body}</div>
              <div className='flex gap-4'>
                <div className='bg-clemson cursor-pointer text-white font-greycliff font-semibold rounded-lg p-2'>
                  Apply Now
                </div>
                <div className='border cursor-pointer border-slate-600 text-slate-800 font-greycliff font-semibold rounded-lg p-2'>
                  More Info
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCerts;
