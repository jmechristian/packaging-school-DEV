import React from 'react';
import Staff from '../components/about/Staff';
import Mission from '../components/about/Mission';
import GradientCTA from '../components/GradientCTA';
import { Amplify, API } from 'aws-amplify';
import { listStaff } from '../src/graphql/queries';
import awsExports from '../src/aws-exports';
import Timeline from '../components/about/Timeline';
Amplify.configure(awsExports);

const Page = ({ pageData }) => {
  return (
    <>
      <Mission />
      <Staff staff={pageData.listStaff.items} />
      <Timeline />
      <GradientCTA
        headline='Ready to Elevate Your Career?'
        subheadline='Try a demo, risk-free.'
        buttonText='Get Started For Free'
        secondaryButtonText='Need More Info?'
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;
  const res = await API.graphql({
    query: listStaff,
  });
  const pageData = res.data;

  // Pass data to the page via props
  return { props: { pageData } };
};

export default Page;
