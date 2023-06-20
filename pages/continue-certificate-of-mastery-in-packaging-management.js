import React, { useEffect, useState } from 'react';
import CMPMContextProvider from '../components/forms/cmpm/CMPMContextProvider';
import CMPMWrapper from '../components/forms/cmpm/CMPMWrapper';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const [isParams, setIsParams] = useState({});

  useEffect(() => {
    router.query && setIsParams({ ...router.query });
  }, [router]);

  return (
    <CMPMContextProvider params={isParams}>
      <CMPMWrapper />
    </CMPMContextProvider>
  );
};

export default Page;
