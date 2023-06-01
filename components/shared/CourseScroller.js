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
  //   const [freeCourses, setFreeCourses] = useState([]);

  //   const { allCourses } = useSelector((state) => state.course_filter);
  const scrollRef = useRef();

  //   useEffect(() => {
  //     allCourses &&
  //       setFreeCourses(
  //         allCourses.filter((c) => c.node.categories[0].category === category)
  //       );
  //     console.log(freeCourses);
  //   }, [setFreeCourses, allCourses]);

  const courses = [
    {
      uid: 'paperboard-cartons-course',
      title: 'Paperboard Cartons',
      subtitle:
        'Explore the capabilities of paperboard cartons in this course, and comprehend why it’s widely used across the packaging industry.',
      video: 'https://www.youtube.com/watch?v=YZ5tmiPh1Tw',
      price: 399,
      hours: 6,
      lessons: 61,
    },
    {
      uid: 'paperboard-cartons-course',
      title: 'Paperboard Cartons',
      subtitle:
        'Explore the capabilities of paperboard cartons in this course, and comprehend why it’s widely used across the packaging industry.',
      video: 'https://www.youtube.com/watch?v=YZ5tmiPh1Tw',
      price: 399,
      hours: 6,
      lessons: 61,
    },
    {
      uid: 'paperboard-cartons-course',
      title: 'Paperboard Cartons',
      subtitle:
        'Explore the capabilities of paperboard cartons in this course, and comprehend why it’s widely used across the packaging industry.',
      video: 'https://www.youtube.com/watch?v=YZ5tmiPh1Tw',
      price: 399,
      hours: 6,
      lessons: 61,
    },
    {
      uid: 'paperboard-cartons-course',
      title: 'Paperboard Cartons',
      subtitle:
        'Explore the capabilities of paperboard cartons in this course, and comprehend why it’s widely used across the packaging industry.',
      video: 'https://www.youtube.com/watch?v=YZ5tmiPh1Tw',
      price: 399,
      hours: 6,
      lessons: 61,
    },
  ];

  return (
    <div className='flex flex-col bg-slate-200 rounded-lg lg:items-start gap-9 py-12 px-6 lg:px-12 lg:max-w-7xl lg:mx-auto w-full'>
      <div className='flex w-full flex-col lg:flex-row lg:justify-between gap-3'>
        <div className='flex flex-row justify-between w-full items-center'>
          <div className='flex flex-col gap-3'>
            <div className='text-lg text-center lg:text-left gap-2 flex flex-col'>
              <div className='font-greycliff font-bold text-2xl md:text-3xl'>
                {headline}
              </div>
              <div className='text-slate-600'>
                <span
                  className='underline font-semibold'
                  onClick={() =>
                    window.open('/courses/packaging-foundations', '_blank')
                  }
                >
                  Packaging Foundations
                </span>{' '}
                plus a materials course of your choosing.
              </div>
            </div>
          </div>
          <div className='bg-white border border-slate-600 rounded-lg p-3 font-greycliff hidden lg:block font-semibold'>
            <Link href={link}>{link_text}</Link>
          </div>
        </div>
      </div>
      <div className='lg:grid grid-cols-4 gap-6 hidden'>
        {courses &&
          courses.map((course, i) => (
            <div key={course.title} className='inline-block'>
              <CourseCard
                category={'Materials'}
                title={course.title}
                desc={course.subtitle}
                video={course.video}
                hours={course.hours}
                lessons={course.lessons}
                price={course.price}
                slug={course.uid}
                reset={null}
              />
            </div>
          ))}
      </div>
      <div className='lg:hidden block'>
        <Scroller rows='2' scroll={scrollRef}>
          {courses &&
            courses.map((course, i) => (
              <div key={course.title} className='inline-block'>
                <CourseCard
                  category={'Materials'}
                  title={course.title}
                  desc={course.subtitle}
                  video={course.video}
                  hours={course.hours}
                  lessons={course.lessons}
                  price={course.price}
                  slug={course.uid}
                  reset={null}
                />
              </div>
            ))}
        </Scroller>
      </div>
    </div>
  );
};

export default CourseScroller;
