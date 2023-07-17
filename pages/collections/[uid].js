import React, { useState, useEffect } from 'react';
import {
  listLMSCollections,
  lMSCollectionsBySlug,
} from '../../src/graphql/queries';
import { API } from 'aws-amplify';
import CTAButton from '../../components/shared/CTAButton';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import FadeIn from '../../helpers/FadeIn';
import ShortCourseCard from '../../components/shared/ShortCourseCard';

const Page = ({ collection }) => {
  console.log(collection);
  const { allCourses } = useSelector((state) => state.course_filter);
  const router = useRouter();
  const [collectionCourses, setCollectionCourses] = useState([]);
  // useEffect(() => {
  //   const filterArray = (array1, array2) => {
  //     const filtered = array1.filter((el) => {
  //       return array2.indexOf(el.id) != -1;
  //     });
  //     setCollectionCourses(filtered);
  //   };

  //   allCourses && filterArray(allCourses, collection.courses);
  // }, [allCourses]);

  return (
    <div className='relative dark:bg-dark-dark py-24'>
      <div className='flex flex-col gap-16  container-7xl'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl xl:text-5xl leading-tight max-w-3xl dark:text-white'>
            {collection && collection.title}
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
          {/* <FadeIn>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {collectionCourses.length > 0 &&
                collectionCourses.map((course) => (
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
          </FadeIn> */}
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
