import React from 'react';

const CSPMissionStatement = () => {
  return (
    <div
      className='w-full max-w-7xl xl:rounded-2xl mx-auto h-full bg-cover bg-center bg-no-repeat px-6 py-16 lg:py-24 flex flex-col gap-9 items-center justify-center xl:mt-9 shadow-xl'
      style={{
        backgroundImage: `url('https://packschool.s3.amazonaws.com/packgradient-1.png')`,
      }}
    >
      <div className='uppercase font-bold tracking-[0.45em] text-white/70'>
        A SHARED PURPOSE
      </div>
      <div className='w-full text-white font-medium text-2xl lg:text-3xl text-center max-w-2xl'>
        As packaging professionals, we call on YOU to be the powerful force for
        positive change within your organization.
      </div>
    </div>
  );
};

export default CSPMissionStatement;
