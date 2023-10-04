import React, { useState, useEffect, Suspense } from 'react';
import { API } from 'aws-amplify';
import { getLesson } from '../../src/graphql/queries';
import { useRouter } from 'next/router';

const RelatedLesson = ({ id }) => {
  const router = useRouter();
  const [isLesson, setIsLesson] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const lesson = await API.graphql({
        query: getLesson,
        variables: { id: id },
      });
      return { lesson };
    };

    getData().then((res) => setIsLesson(res.lesson.data.getLesson));
  }, [id]);

  return (
    <div
      className='flex flex-col gap-3 w-full py-3 px-4 cursor-pointer hover:bg-indigo-200 dark:hover:bg-dark-mid transition-colors ease-in'
      onClick={() => router.push(`/lessons/${isLesson.slug}`)}
    >
      <div
        className='aspect-[16/9] w-full bg-black flex bg-cover bg-center'
        style={{
          backgroundImage: `url(${
            isLesson && isLesson.seoImage
              ? isLesson.seoImage
              : 'https://psadmin.s3.amazonaws.com/image-placeholder.png'
          })`,
        }}
      ></div>
      <div className='font-bold text-lg leading-tight dark:text-white'>
        {isLesson && isLesson.title}
      </div>
      <div className='text-neutral-500 text-sm leading-tight line-clamp-4'>
        {isLesson && isLesson.subhead}
      </div>
    </div>
  );
};

export default RelatedLesson;
