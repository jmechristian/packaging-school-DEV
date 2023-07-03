import React, { useEffect, useState, useRef } from 'react';
import { client } from '../../helpers/apollo-client';
import CourseCard from '../course-card/CourseCard';
import { useSelector } from 'react-redux';
import Scroller from '../Scroller';
import Link from 'next/link';

const HomeFree = ({ courses }) => {
  const [freeCourses, setFreeCourses] = useState([]);

  const { allCourses } = useSelector((state) => state.course_filter);
  const { user } = useSelector((state) => state.auth);
  const scrollRef = useRef();

  useEffect(() => {
    allCourses && setFreeCourses(allCourses.filter((c) => c.price === 'FREE'));
  }, [setFreeCourses, allCourses]);

  return (
    <div className='flex flex-col bg-slate-200 rounded-lg lg:items-start gap-9 py-12 px-6 lg:max-w-7xl lg:mx-auto w-full'>
      <div className='flex w-full flex-col lg:flex-row lg:justify-between gap-3'>
        <div className='flex flex-row justify-between w-full items-center'>
          <div className='flex flex-col gap-3'>
            <div className='text-lg text-center lg:text-left gap-2 flex flex-col'>
              <div className='font-greycliff font-bold text-2xl md:text-3xl'>
                Get Started for Free Today!
              </div>
              <div className='text-slate-600'>
                <span className='underline font-semibold text-slate-700'>
                  Create Your Free Account
                </span>{' '}
                and take your first step to becoming a knowledge leader.
              </div>
            </div>
          </div>
          <div className='bg-white border border-slate-600 rounded-lg p-3 font-greycliff hidden lg:block font-semibold'>
            <Link href={'/all_courses'}>Create Free Account</Link>
          </div>
        </div>
      </div>
      <div className='lg:grid grid-cols-4 gap-4 hidden'>
        {freeCourses &&
          freeCourses.map((course, i) => (
            <div key={course.id} className='inline-block'>
              <CourseCard
                courseId={course.id}
                title={course.title}
                desc={course.subheadline}
                video={course.preview}
                hours={course.hours}
                lessons={course.lessons}
                price={course.price}
                slug={course.slug}
                category={course.category}
                savedCourses={user?.savedCourses}
              />
            </div>
          ))}
      </div>
      <div className='lg:hidden block'>
        <Scroller rows='2' scroll={scrollRef}>
          {freeCourses &&
            freeCourses.map((course, i) => (
              <div key={course.id} className='inline-block'>
                <CourseCard
                  category={course.category}
                  title={course.title}
                  desc={course.subheadline}
                  video={course.preview}
                  hours={course.hours}
                  lessons={course.lessons}
                  price={course.price}
                  slug={course.title}
                  reset={null}
                />
              </div>
            ))}
        </Scroller>
      </div>
      <div className='flex w-full text-slate-700 flex-col gap-1 items-center lg:text-center mt-3 font-bold font-greycliff text-xl'>
        <Link href='/all_courses'>Explore All Courses</Link>
      </div>
    </div>
  );
};

export default HomeFree;
