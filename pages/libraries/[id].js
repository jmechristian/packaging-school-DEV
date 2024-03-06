import React from 'react';
import LibraryWrapper from '../../components/library/LibraryWrapper';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Packaging School | Dev Libraries Template</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div>
        <LibraryWrapper />
      </div>
    </>
  );
};

export default Page;
