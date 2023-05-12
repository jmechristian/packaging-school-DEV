import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import TextInput from '../layout/TextInput';

const HomeHero = () => {
  return (
    <div className='flex flex-col gap-16 container__inner '>
      <div className='w-full flex flex-col gap-3'>
        <TextInput />
        <div className='flex flex-wrap gap-2'>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 bg-slate-200 text-slate-500 text-sm'>
            Sustainability
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 bg-slate-200 text-slate-500 text-sm'>
            Corrugated
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 bg-slate-200 text-slate-500 text-sm'>
            Glass
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 bg-slate-200 text-slate-500 text-sm'>
            Shipping
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 bg-slate-200 text-slate-500 text-sm'>
            Design Process
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 bg-slate-200 text-slate-500 text-sm'>
            Certifications
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 bg-slate-200 text-slate-500 text-sm'>
            Automotive
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-9'>
        <div className='w-full flex flex-col gap-1 items-center  border-b border-b-slate-500'>
          <div className='font-greycliff font-bold text-3xl'>Become a</div>
          <TypeAnimation
            sequence={[
              'Packaging Consultant', // Types 'One'
              1000, // Waits 1s
              'Packaging Engineer', // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              'Sustainable Expert', // Types 'Three' without deleting 'Two',
              1000,
              'Logistics Expert',
              1000,
              'Startup Champion',
              1000,
              'Knowledge Leader',
              1000,
              () => {},
            ]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
            className='font-greycliff text-3xl font-bold pb-1'
          />
        </div>
        <div className='text-slate-600 text-lg text-center'>
          Join the tens of thousands of people across the globe that have
          leveraged the expert-led cirriculum of The Packaging School to stand
          out amongst their peers, get their teams update to date, or develop
          cost-effecient, packing solutions for their companies and startups.
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
