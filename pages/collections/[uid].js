import React, { useState, useEffect } from 'react';
import {
  listLMSCollections,
  listLMSCourses,
  lMSCollectionsBySlug,
} from '../../src/graphql/queries';
import { API } from 'aws-amplify';
import CTAButton from '../../components/shared/CTAButton';
import { useRouter } from 'next/router';
import FadeIn from '../../helpers/FadeIn';
import ShortCourseCard from '../../components/shared/ShortCourseCard';
import { UserIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import CTAButtonLarge from '../../components/CTAButtonLarge';
import CTAButtonTrial from '../../components/CTAButtonTrial';

const Page = ({ collection, courses }) => {
  const router = useRouter();
  console.log('collection', collection);
  return (
    <>
      <Head>
        <title>Packaging School | {collection && collection.title}</title>
        <meta
          property='og:title'
          content={`Packaging School | ${collection && collection.title}`}
          key='title'
        />
      </Head>
      <div className='relative dark:bg-dark-dark py-24'>
        <div className='flex flex-col gap-24  container-7xl'>
          <div className='grid grid-cols-1 lg:grid-cols-7 lg:gap-24'>
            <div className='flex flex-col gap-6 max-w-3xl lg:col-span-5 w-full'>
              <h1 className='text-4xl xl:text-5xl leading-tight max-w-3xl dark:text-white'>
                {collection && collection.title}
              </h1>
              <h3 className='dark:text-white text-xl max-w-3xl'>
                {collection && collection.subtitle}
              </h3>
              <div className='dark:text-gray-400 flex gap-1 items-center'>
                <div>
                  <UserIcon className='w-6 h-6' />
                </div>
                <a
                  href={collection && collection.instructorLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  {collection && collection.instructor}
                </a>
              </div>
              <p className='text-base lg:text-lg dark:text-gray-500 text-gray-600 max-w-4xl'>
                {collection && collection.description}
              </p>
            </div>
            <div className='lg:col-span-2 w-full flex justify-center items-center'>
              <div className='flex flex-col gap-6 bg-dark-mid p-9 w-full rounded-lg'>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='font-medium black__white font-greycliff text-lg'>
                    Future Proof Your Skills
                  </div>
                  <div className='font-semibold black__white text-5xl lg:text-6xl font-greycliff'>
                    {collection &&
                    collection.price &&
                    collection.price === 'FREE'
                      ? 'Free!'
                      : `$${
                          collection && collection.price && collection.price
                        }`}
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <CTAButtonLarge link={collection && collection.lmsLink} />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <FadeIn>
              <h3 className='dark:text-white text-xl lg:text-2xl'>
                {courses.length > 0 && 'Courses Included'}
              </h3>
            </FadeIn>
            <FadeIn>
              <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {courses &&
                  courses.map((course) => (
                    <div key={course.id}>
                      <ShortCourseCard
                        courseId={course.id}
                        title={course.title}
                        desc={course.subheadline}
                        hours={course.hours}
                        price={course.price}
                        slug={course.slug}
                        category={course.category}
                        video={course.preview}
                      />
                    </div>
                  ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
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

  const collectionId = collection.id;

  const collectionCourses = await API.graphql({
    query: listLMSCourses,
    variables: {
      filter: {
        collection: { contains: collection.id },
      },
    },
  });
  const courses = collectionCourses.data.listLMSCourses.items;

  return {
    props: { collection, courses },
  };
}
