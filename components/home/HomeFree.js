import React, { useEffect, useState, useRef } from 'react';
import { client } from '../../helpers/apollo-client';
import CourseCard from '../course-card/CourseCard';
import { useSelector } from 'react-redux';
import Scroller from '../Scroller';
import Link from 'next/link';

const HomeFree = ({ courses }) => {
  const [freeCourses, setFreeCourses] = useState([]);

  const { allCourses } = useSelector((state) => state.course_filter);
  const scrollRef = useRef();

  useEffect(() => {
    allCourses &&
      setFreeCourses(allCourses.filter((c) => c.node.course_price === 'FREE'));
    console.log(freeCourses);
  }, [setFreeCourses, allCourses]);

  console.log(courses);
  return (
    <div className='flex flex-col gap-9 bg-base-mid rounded-t-xl py-9 px-6'>
      <div className='flex flex-col gap-3'>
        <div className='font-greycliff font-semibold text-2xl text-center text-white'>
          Get Started For Free!
        </div>
        <div className='font-greycliff font-semibold shadow text-lg text-center text-white bg-clemson hover:bg-slate-200 py-3 rounded-lg'>
          Create Your Free Account
        </div>
      </div>
      <div className='text-white text-lg text-center'>
        <span className='underline font-semibold'>Join us today</span> and take
        your first step to becoming a knowledge leader.
      </div>
      <Scroller rows='2' scroll={scrollRef}>
        {freeCourses &&
          freeCourses.map((course, i) => (
            <div
              key={course.node.course_title[0].text}
              className='inline-block'
            >
              <CourseCard
                category={course.node.categories[0].category}
                title={course.node.course_title[0].text}
                desc={
                  course.node.course_subtitle &&
                  course.node.course_subtitle[0].text
                }
                video={course.node.embed_id}
                hours={course.node.course_hours}
                lessons={course.node.course_lessons}
                price={course.node.course_price}
                slug={course.node._meta.uid}
                reset={null}
              />
            </div>
          ))}
      </Scroller>
      <div className='flex flex-col gap-1 items-center text-white font-semibold font-greycliff text-xl'>
        <Link href='/all_courses'>Explore All Courses</Link>
      </div>
    </div>
  );
};

export default HomeFree;
