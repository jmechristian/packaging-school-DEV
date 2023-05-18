import React, { useContext, useEffect } from 'react';
import { getCMPMForm } from '../../../src/graphql/queries';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import CMPMContextProvider, {
  CMPMContext,
} from '../../../components/forms/cmpm/CMPMContextProvider';
import CMPMWrapper from '../../../components/forms/cmpm/CMPMWrapper';

import awsExports from '../../../src/aws-exports';
Amplify.configure(awsExports);

const Page = ({ pageData }) => {
  return (
    <CMPMContextProvider pageData={pageData}>
      <CMPMWrapper />
    </CMPMContextProvider>
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
