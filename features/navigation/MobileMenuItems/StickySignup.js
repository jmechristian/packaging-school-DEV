import React from 'react';

const StickySignup = () => {
  return (
    <div className='bg-white fixed bottom-0 left-0 right-0 drop-shadow-md'>
      <div className='flex justify-center gap-4 py-6'>
        <button className='bg-base-brand py-2 w-36 md:w-60 rounded'>
          <div className=' text-white font-semibold text-sm md:text-lg'>
            Log In
          </div>
        </button>
        <button className='bg-white border border-base-brand w-36 md:w-60 py-2 rounded'>
          <div className=' text-base-brand font-semibold text-sm md:text-lg'>
            Join For Free
          </div>
        </button>
      </div>
    </div>
  );
};

export default StickySignup;
