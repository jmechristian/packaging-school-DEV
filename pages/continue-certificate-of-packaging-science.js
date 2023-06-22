import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';

import CPSWrapper from '../components/forms/cps/CPSWrapper';

const Page = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-10 pb-24'>
      <CenteredTextHeader
        headline='Certificate Application'
        heading='Certificate Of Packaging Science'
        subhead='Empower yourself with the essential tools for success in the packaging profession, providing 24/7 access to review relevant content on-demand. Set your employees up for success, supporting their career advancement, and utilize this program for effective onboarding and retention strategies.'
      />
      <CPSWrapper />
    </div>
  );
};

export default Page;
