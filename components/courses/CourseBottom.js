import React from 'react';
import RelatedCourses from './RelatedCourses';

const CourseBottom = ({ related }) => {
  return (
    related[0].related.data && (
      <section className='container__inner inner__section-margin flex flex-col'>
        <div className='border-b border-b-gray-400 pb-4'>
          <div className='font-bold text-2xl lg:text-3xl'>
            Related Courses in this Program
          </div>
        </div>
        <RelatedCourses related={related} />
      </section>
    )
  );
};

export default CourseBottom;
