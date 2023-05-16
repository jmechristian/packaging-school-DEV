import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import TextInput from '../layout/TextInput';

const HomeHero = () => {
  return (
    <div className='flex flex-col lg:flex-col-reverse gap-12 container__inner '>
      <div className='w-full flex flex-col gap-4 lg:max-w-4xl lg:mx-auto'>
        <TextInput />
        <div className='flex flex-wrap gap-2'>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 text-slate-500 text-sm md:text-lg'>
            Sustainability
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 text-slate-500 text-sm md:text-lg'>
            Corrugated
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 text-slate-500 text-sm md:text-lg'>
            Glass
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 text-slate-500 text-sm md:text-lg'>
            Shipping
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 text-slate-500 text-sm md:text-lg'>
            Design Process
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 text-slate-500 text-sm md:text-lg'>
            Certifications
          </div>
          <div className='rounded-lg border border-slate-300 p-2 flex gap-1 text-slate-500 text-sm md:text-lg'>
            Automotive
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-9 md:gap-12 lg:max-w-5xl lg:mx-auto lg:text-center lg:pt-24'>
        <div className='w-full flex flex-col gap-1 items-start md:items-center'>
          <div className='font-greycliff font-bold text-5xl md:text-6xl lg:text-8xl'>
            Become a
          </div>
          <TypeAnimation
            sequence={[
              'Packaging Consultant', // Types 'One'
              1000, // Waits 1s
              'Packaging Engineer', // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              'Sustainability Expert', // Types 'Three' without deleting 'Two',
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
            className='font-greycliff text-5xl font-bold md:text-6xl lg:text-8xl'
          />
        </div>
        <div className='text-slate-600 text-lg md:text-xl lg:text-2xl leading-relaxed'>
          Join the tens of thousands of people across the globe that have
          leveraged the expert-led cirriculum of The Packaging School to stand
          out amongst their peers, accelerate their teams, and develop
          cost-effecient, packing solutions for their companies and startups.
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
