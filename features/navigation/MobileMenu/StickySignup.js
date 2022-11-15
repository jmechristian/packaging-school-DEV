import React from 'react';

const StickySignup = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-center gap-4 py-4'>
        <button className='bg-base-brand py-1.5 w-36 md:w-60 rounded'>
          <div className=' text-white font-semibold text-sm md:text-lg'>
            Log In
          </div>
        </button>
        <button className='bg-white border border-base-brand w-36 md:w-60 py-1.5 rounded'>
          <div className=' text-base-brand font-semibold text-sm md:text-lg'>
            Join For Free
          </div>
        </button>
      </div>
    </div>
  );
};

export default StickySignup;
