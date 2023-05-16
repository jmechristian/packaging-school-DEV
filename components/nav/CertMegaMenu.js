import React from 'react';
import Link from 'next/link';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/solid';

const CertMegaMenu = () => {
  return (
    <>
      <div className='cols-span-1 bg-base-light rounded-lg p-6 flex flex-col gap-6 h-full'>
        <div className='w-16 h-16 bg-base-brand flex justify-center items-center rounded-full'>
          <AcademicCapIcon className='w-8 h-8 fill-white' />
        </div>
        <div className='font-semibold font-greycliff text-slate-600 text-xl leading-tight'>
          Certificate of Mastery in Packaging Management
        </div>
        <div className='text-bold'>
          A one-year, PhD-led program that will teach you the latest
          technologies accelerating the packaging field in the space of
          packaging development, material procurement, and organizational
          management.
        </div>
        <div className='flex gap-2'>
          <div className='rounded-lg px-3 py-1.5 font-greycliff bg-slate-400 text-white font-semibold'>
            Learn More
          </div>
          <div className='rounded-lg px-3 py-1.5 font-greycliff bg-clemson text-white font-semibold'>
            Apply Now
          </div>
        </div>
      </div>
      <div className='cols-span-1 bg-base-light rounded-lg p-6 flex flex-col justify-between gap-6 h-full'>
        <div className='w-16 h-16 bg-green-600 flex justify-center items-center rounded-full'>
          <BeakerIcon className='w-7 h-7 fill-white' />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='font-semibold font-greycliff text-slate-600 text-xl leading-tight'>
            Certificate of Packaging Science
          </div>
          <div className='text-bold'>
            A one-year, online program that teaches the materials, processes,
            and influences shaping the advancement of the industry. From design
            conception to production and end-of-life, learn how to speak the
            language of packaging and be a key differentiator for your company.
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-lg px-3 py-1.5 font-greycliff bg-slate-400 text-white font-semibold'>
            Learn More
          </div>
          <div className='rounded-lg px-3 py-1.5 font-greycliff bg-clemson text-white font-semibold'>
            Apply Now
          </div>
        </div>
      </div>
      <div className='cols-span-1 bg-base-light rounded-lg p-6 flex flex-col gap-6 h-full justify-between'>
        <div className='flex flex-col gap-3'>
          <div className='w-16 h-16 bg-base-brand flex justify-center items-center rounded-full'>
            <AcademicCapIcon className='w-8 h-8 fill-white' />
          </div>
          <div className='flex flex-col gap-3'>
            <div className='font-semibold font-greycliff text-slate-600 text-xl leading-tight'>
              Certificate of Mastery in Packaging Management
            </div>
            <div className='text-bold'>
              A one-year, PhD-led program that will teach you the latest
              technologies accelerating the packaging field in the space of
              packaging development, material procurement, and organizational
              management.
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-lg px-3 py-1.5 font-greycliff bg-slate-400 text-white font-semibold'>
            <Link href='/certificates/get-to-know-cmpm'>Learn More</Link>
          </div>
          <div className='rounded-lg px-3 py-1.5 font-greycliff bg-clemson text-white font-semibold'>
            <Link href='/forms/'>Apply Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertMegaMenu;
