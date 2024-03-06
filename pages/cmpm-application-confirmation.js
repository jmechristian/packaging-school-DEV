import React from 'react';
import CenteredTextHeader from '../components/layout/CenteredTextHeader';
import Head from 'next/head';
import Meta from '../components/shared/Meta';

const Page = () => {
  return (
    <>
      <Meta
        title={'Certificate of Mastery in Packaging Management Confirmation'}
        description={
          'One of our Education Specialists will be in touch shortly.  We are very excited you have chosen to take this step in your professional career. Any questions, please reach out to info@packagingschool.com'
        }
      />
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
