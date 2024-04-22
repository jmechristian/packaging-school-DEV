import React from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import {
  customerLibariesByDisplayName,
  listCustomerLibaries,
} from '../../src/graphql/queries';

const Page = ({ lib }) => {
  return (
    <>
      <Head>
        <title>Packaging School | Dev Libraries Template</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div>WTF</div>
    </>
  );
};

// export async function getStaticPaths() {
//   // Get the paths we want to pre-render based on posts
//   const getLibraries = await API.graphql({ query: listCustomerLibaries });
//   const paths = getLibraries.data.listCustomerLibaries.items.map((lib) => {
//     return {
//       params: { id: lib.displayName },
//     };
//   });
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.slug
//   const getCurrentLibrary = await API.graphql({
//     query: customerLibariesByDisplayName,
//     variables: { displayName: params.id },
//   });

//   const lib = getCurrentLibrary.data.getCurrentLibrary;
//   return {
//     props: {
//       lib,
//     },
//   };
// }

export default Page;
