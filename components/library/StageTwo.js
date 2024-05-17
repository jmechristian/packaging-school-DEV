import React from 'react';
import BrutalButton from '../shared/BrutalButton';
import BrutalFunctionButton from '../shared/BrutalFunctionButton';

const StageTwo = ({ cancel, forward }) => {
  return (
    <div className='absolute inset-0 z-[100] bg-black/50 flex justify-center items-center'>
      <div className='w-full max-w-2xl bg-white border-2 border-black p-10 flex flex-col gap-5 items-center'>
        <div className='h2-base'>Welcome to Stage 2</div>
        <div className='text-center'>
          Here, your employees can easily access all their custom Packaging
          School content in one convenient place. Explore tailored courses,
          resources, and materials designed to enhance skills and knowledge in
          the packaging industry. Enjoy seamless learning!
        </div>
        <div className='grid grid-cols-2 gap-5 items-center mt-5'>
          <div className='w-fit cursor-pointer'>
            <BrutalFunctionButton
              text={'Skip Tour'}
              background={'bg-neutral-400'}
              textColor={'text-white/60'}
              fn={() => cancel()}
            />
          </div>
          <div className='w-full cursor-pointer'>
            <BrutalFunctionButton
              text={'Continue'}
              background={'bg-clemson'}
              textColor={'text-white'}
              fn={() => forward()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageTwo;
