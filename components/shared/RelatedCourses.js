/* eslint-disable @next/next/no-img-element */
import React from 'react';

const RelatedCourses = ({ relatedCourses }) => {
  return (
    <div className='bg-gray-100 dark:bg-dark py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl lg:mx-0'>
          <h2 className='text-3xl font-bold font-greycliff tracking-tight text-gray-900 dark:text-white sm:text-5xl'>
            Related Courses
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600 dark:text-white/60'>
            Expand your packaging design skillset with these courses led by
            subject-matter experts.
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {relatedCourses &&
            relatedCourses.map((course, i) => (
              <article
                key={course.course.id}
                className='flex flex-col items-start justify-between'
              >
                <div className='relative w-full'>
                  <img
                    src={course.course.media}
                    alt=''
                    className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
                  />
                  <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='max-w-xl'>
                  <div className='group relative'>
                    <h3 className='mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-clemson group-hover:text-gray-600'>
                      <a href={`/courses/${course.course.slug}`}>
                        <span className='absolute inset-0' />
                        {course.course.title}
                      </a>
                    </h3>
                    <p className='mt-5 text-sm leading-6 text-gray-600 dark:text-white/60 line-clamp-3'>
                      {course.course.subhead}
                    </p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;
