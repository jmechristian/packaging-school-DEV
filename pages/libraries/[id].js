import React from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { listCustomerLibaries } from '../../src/graphql/queries';

const Page = () => {
  return (
    <>
      <Head>
        <title>Packaging School | Dev Libraries Template</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div></div>
    </>
  );
};

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const getLibraries = await API.graphql({ query: listCustomerLibaries });
  const paths = getLibraries.data.listCustomerLibaries.items.map((lib) => {
    return {
      params: { id: lib.displayName },
    };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.slug
//   const getCurrentLibrary = await ;
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export default Page;
