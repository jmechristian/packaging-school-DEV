import React, { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import RotatingCaret from '../../components/RotatingCaret';

const CirriculumBlock = ({ week, title, description }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <div className='flex flex-col gap-3 bg-base-mid px-6 md:px-8 py-6 rounded min-h-full'>
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
            <div onClick={() => setShowContent(!showContent)}>
              <RotatingCaret
                styling={'h-7 w-7 fill-white'}
                open={showContent}
              />
            </div>
          </div>
        </div>
        {showContent && (
          <div className='body__text text-base-light max-h-min'>
            <PrismicRichText field={description} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CirriculumBlock;
