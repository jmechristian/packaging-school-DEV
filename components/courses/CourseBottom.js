import React from 'react';
import RelatedCourses from './RelatedCourses';

const CourseBottom = () => {
  return (
    <section className='container__inner inner__section-margin flex flex-col'>
      <div className='border-b border-b-gray-400 pb-4'>
        <div className='font-bold text-2xl lg:text-3xl'>
          Related Courses in this Program
        </div>
      </div>
      <RelatedCourses />
    </section>
  );
};

export default CourseBottom;
