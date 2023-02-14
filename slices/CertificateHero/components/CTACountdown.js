import React from 'react';
import CTAButtonLarge from '../../../components/CTAButtonLarge';

const CTACountdown = ({ headline }) => {
  return (
    <div className='bg-base-dark flex flex-col lg:flex-row pt-5 pb-6 px-4 lg:px-8 gap-6 rounded'>
      <div className='text-white font-greycliff font-semibold text-2xl lg:text-3xl leading-tight w-full lg:w-5/12 flex justify-center items-center'>
        {headline}
      </div>
      <div className='bg-base-light rounded flex flex-col lg:flex-row px-4 py-4 gap-3 w-full lg:w-7/12'>
        <div className='flex w-full '>
          <div className='flex flex-col  w-1/4 justify-center items-center'>
            <div className='text-base-dark font-greycliff font-bold text-3xl'>
              06
            </div>
            <div className='text-base-dark font-greycliff uppercase'>Days</div>
          </div>
          <div className='flex flex-col w-1/4 justify-center items-center'>
            <div className='text-base-dark font-greycliff font-bold text-3xl'>
              12
            </div>
            <div className='text-base-dark font-greycliff uppercase'>Hours</div>
          </div>
          <div className='flex flex-col w-1/4 justify-center items-center'>
            <div className='text-base-dark font-greycliff font-bold text-3xl'>
              41
            </div>
            <div className='text-base-dark font-greycliff uppercase'>Min</div>
          </div>
          <div className='flex flex-col w-1/4 justify-center items-center'>
            <div className='text-base-dark font-greycliff font-bold text-3xl'>
              42
            </div>
            <div className='text-base-dark font-greycliff uppercase'>Sec</div>
          </div>
        </div>
        <CTAButtonLarge />
      </div>
    </div>
  );
};

export default CTACountdown;
