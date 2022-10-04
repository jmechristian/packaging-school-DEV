import React, { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const CirriculumBlock = ({ week, title, description }) => {
  const [showContent, setShowContent] = useState(false);

  const iconVariant = {
    open: {},
  };

  return (
    <div className='bg-base-mid px-6 md:px-8 py-6 rounded'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col md:flex-row flex-wrap gap-1'>
          <div className='bg-clemson rounded-lg w-fit flex items-center justify-center'>
            <div className='text-white text-xs py-1 px-3 uppercase font-semibold'>
              {week}
            </div>
          </div>
          <div className='flex w-full gap-2 justify-between items-center'>
            <div className='font-semibold text-lg lg:text-xl text-white'>
              <PrismicRichText field={title} />
            </div>
            <button onClick={() => setShowContent(!showContent)}>
              <ChevronDownIcon className='w-5 h-5 text-white' />
            </button>
          </div>
        </div>
        {showContent && (
          <div className='body__text text-base-light'>
            <PrismicRichText field={description} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CirriculumBlock;
