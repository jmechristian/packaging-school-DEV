import React from 'react';
import { getCPSForm } from '../../../src/graphql/queries';
import { API } from 'aws-amplify';
import CenteredTextHeader from '../../../components/layout/CenteredTextHeader';
import CPSWrapper from '../../../components/forms/cps/CPSWrapper';
import Head from 'next/head';

const Page = ({ pageData }) => {
  return (
    <>
      <Head>
        <title>Packaging School | CPS Form</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div className='flex flex-col gap-16 md:gap-16'>
        <CenteredTextHeader
          headline='Certificate of Packaging Science'
          heading='Student Application'
          subhead='Empower yourself with the essential tools for success in the packaging profession, providing 24/7 access to review relevant content on-demand. Set your employees up for success, supporting their career advancement, and utilize this program for effective onboarding and retention strategies.'
        />
        <CPSWrapper params={pageData.getCPSForm} />
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { fid } = params;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;
  const res = await API.graphql({
    query: getCPSForm,
    variables: { id: fid },
  });
  const pageData = res.data;

  // Pass data to the page via props
  return { props: { pageData } };
};

export default Page;
