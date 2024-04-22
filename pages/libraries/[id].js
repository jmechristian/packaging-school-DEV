import React from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import {
  customerLibariesByDisplayName,
  listCustomerLibaries,
  customerLibariesBySlug,
} from '../../src/graphql/queries';
import LibraryHeader from '../../components/library/LibraryHeader';
import BrutalFullWidthDropDown from '../../components/shared/BrutalFullWidthDropdown';
import {
  BoltIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';

const Page = ({ lib }) => {
  return (
    <>
      <Head>
        <title>Packaging School | Dev Libraries Template</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div className='max-w-7xl mx-auto px-4 xl:px-0'>
        <div className='flex flex-col gap-16 lg:gap-28 py-10 lg:py-16'>
          <LibraryHeader
            displayName={'Acme'}
            email={'Bobbo@acme.com'}
            logo={'https://packschool.s3.amazonaws.com/acme-logo.png'}
          />
          <div className='flex flex-col gap-5'>
            <BrutalFullWidthDropDown
              title={'SPC Knowledge Library Topics'}
              Icon={AcademicCapIcon}
              bg='bg-gb-main'
              bgdark='bg-gradient-to-r from-gb-main to-gb-green'
              highlight={'bg-gb-green'}
              content={<></>}
              bgContent={'bg-neutral-200 border'}
              open={true}
            />
            <BrutalFullWidthDropDown
              title={`${lib.displayName} Knowledge Library Topics`}
              Icon={AcademicCapIcon}
              bg='bg-gb-main'
              bgdark='bg-gradient-to-r from-gb-main to-gb-green'
              highlight={'bg-gb-green'}
              content={<></>}
              bgContent={'bg-neutral-200 border'}
              open={false}
            />
            <BrutalFullWidthDropDown
              title={'SPC Knowledge Library Topics'}
              Icon={AcademicCapIcon}
              bg='bg-gb-main'
              bgdark='bg-gradient-to-r from-gb-main to-gb-green'
              highlight={'bg-gb-green'}
              content={<></>}
              bgContent={'bg-neutral-200 border'}
              open={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const getLibraries = await API.graphql({ query: listCustomerLibaries });
  const paths = getLibraries.data.listCustomerLibaries.items.map((lib) => {
    return {
      params: { id: lib.slug },
    };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.slug
  const getCurrentLibrary = await API.graphql({
    query: customerLibariesBySlug,
    variables: { slug: params.id },
  });

  const lib = getCurrentLibrary.data.customerLibariesBySlug.items;
  return {
    props: {
      lib,
    },
  };
}

export default Page;
