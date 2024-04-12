import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';

const CertCompare = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-4'>
      {/* HEADER */}
      <div></div>
      <div className='text-sm font-bold text-center'>CMPM</div>
      <div className='text-sm font-bold text-center'>CPS</div>
      <div className='col-span-3 border-b border-b-black'></div>
      {/* COST */}
      <div className='font-bold text-sm'>Cost</div>
      <div className='text-sm text-center'>
        $7,000<sup>*</sup>
      </div>
      <div className='text-sm text-center'>
        $3,999<sup>*</sup>
      </div>
      <div className='col-span-3 border-b border-b-black'></div>
      {/* TIMELINE */}
      <div className='font-bold text-sm'>Timeline</div>
      <div className='text-sm text-center'>12 Weeks, Structured</div>
      <div className='text-sm text-center'>
        12 Months to complete at your own pace
      </div>
      <div className='col-span-3 border-b border-b-black'></div>
      {/* INSTRUCTOR ACCESS */}
      <div className='font-bold text-sm'>Instructor Access</div>
      <div className='text-sm text-center'>Weekly Office Hours</div>
      <div className='text-sm text-center'>Email Only</div>
      <div className='col-span-3 border-b border-b-black'></div>
      {/* PHD */}
      <div className='flex flex-col gap-1 justify-center'>
        <div className='font-bold text-sm'>PhD Instructor-led Program</div>
        <div className='text-xs'>Personalized 1-1 coaching from Dr. Suggs.</div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <GoCheckCircleFill color='green' size={36} />
      </div>
      <div className='w-full'></div>
      <div className='col-span-3 border-b border-b-black'></div>
      {/* Parralel Project */}
      <div className='flex flex-col gap-1 justify-center'>
        <div className='font-bold text-sm'>Parallel Project</div>
        <div className='text-xs'>
          Craft a Project Development Plan (PDP) with program knowledge.
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <GoCheckCircleFill color='green' size={36} />
      </div>
      <div className='w-full'></div>
      <div className='col-span-3 border-b border-b-black'></div>
      {/* Electives */}
      <div className='flex flex-col gap-1 justify-center'>
        <div className='font-bold text-sm'>Electives</div>
        <div className='text-xs'>Choose your own electives.</div>
      </div>
      <div className='w-full '></div>
      <div className='w-full flex justify-center items-center'>
        <GoCheckCircleFill color='green' size={36} />
      </div>
      <div className='col-span-3 border-b border-b-black'></div>
    </div>
  );
};

export default CertCompare;
