import React from 'react';
import {
  listLMSCollections,
  lMSCollectionsBySlug,
} from '../../src/graphql/queries';
import { API } from 'aws-amplify';
import CTAButton from '../../components/shared/CTAButton';
import { useRouter } from 'next/router';

const Page = ({ collection }) => {
  const router = useRouter();
  return (
    <div className='relative dark:bg-dark-dark py-24'>
      <div className='flex flex-col gap-16  container-7xl'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl xl:text-5xl leading-tight max-w-3xl dark:text-white'>
            {collection.title}
          </h1>
          <h3 className='dark:text-white text-xl'>{collection.subtitle}</h3>
          <p className='dark:text-gray-400'>
            <a
              href={collection.instructorLink}
              target='_blank'
              rel='noreferrer'
            >
              {collection.instructor}
            </a>
          </p>
          <p className='text-base lg:text-lg dark:text-gray-500 text-gray-600 max-w-4xl'>
            {collection.description}
          </p>
          <CTAButton
            text={'Enroll Now'}
            click={() => router.push(collection.lmsLink)}
          />
        </div>
        <div className='flex flex-col gap-6'>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className='w-full dark:bg-dark-mid p-4'>
              <div className='flex fle'
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

export async function getStaticPaths() {
  const res = await API.graphql({ query: listLMSCollections });
  const paths = res.data.listLMSCollections.items.map((collection) => ({
    params: { uid: collection.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const slug = params.uid;
  const res = await API.graphql({
    query: lMSCollectionsBySlug,
    variables: { slug: slug },
  });
  const collection = res.data.lMSCollectionsBySlug.items[0];

  return {
    props: { collection },
  };
}
