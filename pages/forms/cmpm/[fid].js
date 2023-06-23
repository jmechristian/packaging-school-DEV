import React from 'react';
import { getCMPMForm } from '../../../src/graphql/queries';
import { API } from 'aws-amplify';
import CenteredTextHeader from '../../../components/layout/CenteredTextHeader';
import CMPMWrapper from '../../../components/forms/cmpm/CMPMWrapper';

const Page = ({ pageData }) => {
  return (
    <div className='flex flex-col gap-16 md:gap-16'>
      <CenteredTextHeader
        headline='Certificate of Mastery in Packaging Management'
        heading='Student Application'
        subhead='Distinguish yourself from your colleagues by acquiring a tangible solution that can be presented to both management and peers. Take your first step below and tell us a little bit about yourself to proceed with your application. You will receive a confirmation email within 1-3 business days of your complete application submission. We are looking forward to getting to know you better and can not wait to share our perspective with you on how packaging is an awesome industry full of opportunity.'
      />
      <CMPMWrapper params={pageData.getCMPMForm} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { fid } = params;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;
  const res = await API.graphql({
    query: getCMPMForm,
    variables: { id: fid },
  });
  const pageData = res.data;

  // Pass data to the page via props
  return { props: { pageData } };
};

export default Page;
