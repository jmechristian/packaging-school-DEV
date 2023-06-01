import React, { useEffect, useState, useRef } from 'react';
import { client } from '../../helpers/apollo-client';
import CourseCard from '../course-card/CourseCard';
import { useSelector } from 'react-redux';
import Scroller from '../Scroller';
import Link from 'next/link';

const CourseScroller = ({
  headline,
  subheadline,
  link,
  link_text,
  category,
}) => {
  const [freeCourses, setFreeCourses] = useState([]);

  const { allCourses } = useSelector((state) => state.course_filter);
  const scrollRef = useRef();

  useEffect(() => {
    allCourses &&
      setFreeCourses(
        allCourses.filter((c) => c.node.categories[0].category === category)
      );
    console.log(freeCourses);
  }, [setFreeCourses, allCourses]);

  return (
    <div className='flex flex-col bg-slate-200 rounded-lg lg:items-start gap-9 py-12 px-6 lg:px-12 lg:max-w-7xl lg:mx-auto w-full'>
      <div className='flex w-full flex-col lg:flex-row lg:justify-between gap-3'>
        <div className='flex flex-row justify-between w-full items-center'>
          <div className='flex flex-col gap-3'>
            <div className='text-lg text-center lg:text-left gap-2 flex flex-col'>
              <div className='font-greycliff font-bold text-2xl md:text-3xl'>
                {headline}
              </div>
              <div className='text-slate-600'>{subheadline}</div>
            </div>
          </div>
          <div className='bg-white border border-slate-600 rounded-lg p-3 font-greycliff hidden lg:block font-semibold'>
            <Link href={link}>{link_text}</Link>
          </div>
        </div>
      </div>
      <div className='lg:grid grid-cols-4 gap-6 hidden'>
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
      </div>
      <div className='lg:hidden block'>
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
      </div>
      <div className='flex w-full text-slate-700 flex-col gap-1 items-center lg:text-center mt-3 font-bold font-greycliff text-xl'>
        <Link href='/all_courses'>Explore All Courses</Link>
      </div>
    </div>
  );
};

export default CourseScroller;
