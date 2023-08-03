import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Packaging School | CMPM Form</title>
        <meta
          property='og:title'
          content='Packaging School | CMPM Confirmation'
          key='title'
        />
      </Head>
      <div className='pb-40'>
        <CenteredTextHeader
          headline='Thank you for your submission.'
          heading='Certificate of Mastery in Packaging Management'
          subhead='One of our Education Specialists will be in touch shortly.  We are very excited you have chosen to take this step in your professional career. Any questions, please reach out to info@packagingschool.com'
        />
      </div>
    </>
  );
};

export default Page;
