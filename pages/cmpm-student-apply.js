import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import { useRouter } from 'next/router';
import CMPMWrapperFree from '../components/forms/cmpm/CMPMWrapperFree';

const Page = () => {
  const router = useRouter();
  const params = router.query ? router.query : null;

  return (
    <div className='flex flex-col gap-16 md:gap-16'>
      <CenteredTextHeader
        headline='Certificate of Mastery in Packaging Management'
        heading='Student Application'
        subhead='Distinguish yourself from your colleagues by acquiring a tangible solution that can be presented to both management and peers. Take your first step below and tell us a little bit about yourself to proceed with your application. You will receive a confirmation email within 1-3 business days of your complete application submission. We are looking forward to getting to know you better and can not wait to share our perspective with you on how packaging is an awesome industry full of opportunity.'
      />
      <CMPMWrapperFree params={params} free={true} />
    </div>
  );
};

export default Page;
