import React, { useState } from 'react';
import FadeIn from '../../../helpers/FadeIn';
import { SectionHeading } from '../../shared/SectionHeading';
import {
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  RssIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import CourseCard from '../../course-card/CourseCard';

const CPSHow = () => {
  const { allCourses } = useSelector((state) => state.course_filter);
  const { user } = useSelector((state) => state.auth);

  //   const orderedCourse = allCourses.sort((a, b) => a.courseId - b.courseId);

  return (
    <section id='how'>
      <div className='container-7xl py-32 flex flex-col gap-16'>
        <div className='grid lg:grid-cols-2 gap-24'>
          <div className='flex flex-col gap-16'>
            <FadeIn>
              <SectionHeading number='2'>How does it work?</SectionHeading>
            </FadeIn>
            <FadeIn>
              <div className='flex flex-col gap-9'>
                <div className='flex flex-col'>
                  <div className='font-bold text-4xl lg:text-5xl'>
                    <h2 className='dark:text-white'>
                      Keep Up With Innovation.
                    </h2>
                  </div>
                  <div className='text-gray-500 font-bold text-4xl lg:text-5xl'>
                    Learn The Market.
                  </div>
                </div>
                <div className='text-xl text-gray-700 dark:text-gray-500 max-w-prose'>
                  Enroll at your convenience and enjoy{' '}
                  <span className='dark:text-white font-bold'>
                    uninterrupted 24/7 access for a full 12 months
                  </span>
                  , allowing you to learn at your own pace and convenience. If
                  you have any contact with the packaging process, our program
                  will raise your packaging IQ.
                </div>
                <div className='text-xl text-gray-700 dark:text-gray-500 max-w-prose'>
                  Students who enroll in the Certificate of Packaging Science
                  now have their{' '}
                  <span className='dark:text-white font-bold'>
                    choice of any elective
                  </span>{' '}
                  to add to their curriculum at no extra charge. If you’re
                  interested in design checkout our SolidWorks – Basics course,
                  if you have an interest in the business side of things, maybe
                  Project Management Essentials is right for you! You will be
                  able to indicate which elective you’d like to add in your
                  application. If you’re not sure yet, you can choose to add
                  your elective at a later date.
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='font-semibold text-lg tracking-wide dark:text-white'>
            Courses Included
          </div>
          <div className='grid lg:grid-cols-4 gap-6'>
            {allCourses && (
              <>
                <CourseCard
                  courseId={allCourses[0].id}
                  title={allCourses[0].title}
                  desc={allCourses[0].subheadline}
                  video={allCourses[0].preview}
                  hours={allCourses[0].hours}
                  lessons={allCourses[0].lessons}
                  price={allCourses[0].price}
                  slug={allCourses[0].slug}
                  category={allCourses[0].category}
                  savedCourses={user?.savedCourses}
                />
                <CourseCard
                  courseId={allCourses[1].id}
                  title={allCourses[1].title}
                  desc={allCourses[1].subheadline}
                  video={allCourses[1].preview}
                  hours={allCourses[1].hours}
                  lessons={allCourses[1].lessons}
                  price={allCourses[1].price}
                  slug={allCourses[1].slug}
                  category={allCourses[1].category}
                  savedCourses={user?.savedCourses}
                />
                <CourseCard
                  courseId={allCourses[2].id}
                  title={allCourses[2].title}
                  desc={allCourses[2].subheadline}
                  video={allCourses[2].preview}
                  hours={allCourses[2].hours}
                  lessons={allCourses[2].lessons}
                  price={allCourses[2].price}
                  slug={allCourses[2].slug}
                  category={allCourses[2].category}
                  savedCourses={user?.savedCourses}
                />
                <CourseCard
                  courseId={allCourses[0].id}
                  title={allCourses[0].title}
                  desc={allCourses[0].subheadline}
                  video={allCourses[0].preview}
                  hours={allCourses[0].hours}
                  lessons={allCourses[0].lessons}
                  price={allCourses[0].price}
                  slug={allCourses[0].slug}
                  category={allCourses[0].category}
                  savedCourses={user?.savedCourses}
                />
                <CourseCard
                  courseId={allCourses[0].id}
                  title={allCourses[0].title}
                  desc={allCourses[0].subheadline}
                  video={allCourses[0].preview}
                  hours={allCourses[0].hours}
                  lessons={allCourses[0].lessons}
                  price={allCourses[0].price}
                  slug={allCourses[0].slug}
                  category={allCourses[0].category}
                  savedCourses={user?.savedCourses}
                />
                <CourseCard
                  courseId={allCourses[0].id}
                  title={allCourses[0].title}
                  desc={allCourses[0].subheadline}
                  video={allCourses[0].preview}
                  hours={allCourses[0].hours}
                  lessons={allCourses[0].lessons}
                  price={allCourses[0].price}
                  slug={allCourses[0].slug}
                  category={allCourses[0].category}
                  savedCourses={user?.savedCourses}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPSHow;
