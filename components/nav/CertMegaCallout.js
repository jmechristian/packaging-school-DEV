import React from 'react';
import { ArrowLongRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const CertMegaCallout = () => {
  return (
    <div className='rounded-lg'>
      <div className='lg:px-8 flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <div className='font-bold font-greycliff text-lg'>
            Questions about Certifications?
          </div>
          <div
            className='w-full aspect-[3/2] relative bg-center bg-cover'
            style={{
              backgroundImage: `url('https://packschool.s3.amazonaws.com/Julie-Suggs-callout.webp')`,
            }}
          >
            <div className='absolute bottom-0 left-0 right-0'>
              <div className='grid w-full justify-between px-3 py-3'>
                <div className='flex flex-col gap-2'>
                  <div className='font-bold font-greycliff text-2xl text-white'>
                    The Doctor is In!
                  </div>
                  <div className='text-white leading-tight text-sm'>
                    Reach out to Dr. Julie Suggs for a personalized consultation
                    for yourself or your team.
                  </div>
                  <div className='bg-clemson text-white font-semibold font-greycliff w-fit py-1.5 px-3 rounded-lg cursor-pointer flex gap-1 items-center'>
                    <div>
                      <EnvelopeIcon className='w-5 h-5' />
                    </div>
                    <div>Connect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold w-full text-lg border-b border-b-slate-400 pb-2 font-greycliff'>
            Not Sure Where to Start?
          </div>
          <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700'>Compare Certificates</div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
          <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700'>
              Take our Skills Assessment
            </div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
          <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700'>Contact Our Team</div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertMegaCallout;
