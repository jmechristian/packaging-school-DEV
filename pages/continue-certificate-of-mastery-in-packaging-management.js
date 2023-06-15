import React, { useEffect } from 'react';
import CMPMContextProvider from '../components/forms/cmpm/CMPMContextProvider';
import CMPMWrapper from '../components/forms/cmpm/CMPMWrapper';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  const { firstName, lastName, email, phone } = router.query;

  return (
    <CMPMContextProvider params={{ firstName, lastName, email, phone }}>
      <CMPMWrapper />
    </CMPMContextProvider>
  );
};

export default Page;
