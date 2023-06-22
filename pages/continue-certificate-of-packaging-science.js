import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import { useRouter } from 'next/router';
import CPSWrapper from '../components/forms/cps/CPSWrapper';

const Page = () => {
  const router = useRouter();
  const params = router.query ? router.query : null;

  return (
    <div className='flex flex-col gap-16 md:gap-16'>
      <CenteredTextHeader
        headline='Certificate of Packaging Science'
        heading='Student Application'
        subhead='Empower yourself with the essential tools for success in the packaging profession, providing 24/7 access to review relevant content on-demand. Set your employees up for success, supporting their career advancement, and utilize this program for effective onboarding and retention strategies.'
      />
      <CPSWrapper params={params} />
    </div>
  );
};

export default Page;
