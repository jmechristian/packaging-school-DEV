import React from 'react';
import CourseCard from '../components/course-card/CourseCard';

const Sandbox = () => {
  return (
    <div className='w-full relative bg-black py-24 container__inner'>
      <div className='grid grid-flow-col auto-cols-max overflow-y-hidden overflow-auto snap-x overscroll-contain'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Sandbox;
