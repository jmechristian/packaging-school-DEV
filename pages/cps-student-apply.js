import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import { useRouter } from 'next/router';
import CPSWrapperFree from '../components/forms/cps/CPSWrapperFree';
import Meta from '../components/shared/Meta';

const Page = () => {
  const router = useRouter();
  const params = router.query ? router.query : null;

  return (
    <>
      <Meta
        title={'Certificate of Packaging Science Student Application'}
        description={
          'Boost your packaging career with 24/7 access to essential tools and content. Ideal for onboarding, career growth, and retention. Empower success now!'
        }
      />
      <div className='flex flex-col gap-16 md:gap-16'>
        <CenteredTextHeader
          headline='Certificate of Packaging Science'
          heading='Student Application'
          subhead='Empower yourself with the essential tools for success in the packaging profession, providing 24/7 access to review relevant content on-demand. Set your employees up for success, supporting their career advancement, and utilize this program for effective onboarding and retention strategies.'
        />
        <CPSWrapperFree params={params} free={true} />
      </div>
    </>
  );
};

export default Page;
