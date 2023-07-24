import React from 'react';
import FadeIn from '../../helpers/FadeIn';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const CTAButton = ({ text, click }) => {
  return (
    <FadeIn>
      <div className='flex flex-col md:flex-row items-center gap-6 mt-4 w-full'>
        <button
          className='w-full px-9 bg-clemson rounded-lg py-4 text-white font-semibold font-greycliff leading-tight lg:text-lg'
          onClick={click}
        >
          {text}
        </button>
      </div>
    </FadeIn>
  );
};

export default CTAButton;
