import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import InstructorBenefits from './InstructorBenefits';

const InstructorBio = ({ bio, slice }) => {
  return (
    <div className='flex flex-col gap-10 lg:w-3/4 xl:w-3/4 '>
      <div>
        <InstructorBenefits slice={slice} />
      </div>
      <div className='body__text lg:pl-8 xl:pl-12'>
        <PrismicRichText field={bio} />
      </div>
    </div>
  );
};

export default InstructorBio;
