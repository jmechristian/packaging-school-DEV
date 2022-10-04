import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const CirriculumBody = ({ description }) => {
  return (
    <div className='body__text text-base-light'>
      <PrismicRichText field={description} />
    </div>
  );
};

export default CirriculumBody;
