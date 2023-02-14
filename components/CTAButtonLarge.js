import { useRouter } from 'next/router';
import React from 'react';

const CTAButtonLarge = ({ link }) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(link);
  };

  return (
    <button
      className='w-full bg-clemson hover:bg-clemson-dark text-center rounded-md'
      onClick={clickHandler}
    >
      <div className='w-full py-4 uppercase font-bold text-xl text-white'>
        Enroll Now!
      </div>
    </button>
  );
};

export default CTAButtonLarge;
