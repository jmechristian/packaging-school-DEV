import React from 'react';
import { useRouter } from 'next/router';

const CTAButtonTrial = ({ link }) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(link);
  };

  return (
    <button
      className='w-full border border-clemson hover:border-clemson-dark text-center rounded-md'
      onClick={clickHandler}
    >
      <div className='w-full py-4 uppercase font-bold text-xl text-clemson hover:text-clemson-dark'>
        Free Trial
      </div>
    </button>
  );
};

export default CTAButtonTrial;
