import React from 'react';
import RelatedCourses from './RelatedCourses';
import SkillsCTA from '../SkillsCTA';
import StudentSuccess from '../StudentSuccess';

const CourseBottom = ({ related }) => {
  return (
    <section className='container__inner inner__section-margin flex flex-col gap-16'>
      <StudentSuccess />
      {related[0].related.data && (
        <div>
          <div className='border-b border-b-gray-400 pb-4'>
            <div className='font-bold text-2xl lg:text-3xl'>
              Related Certificate Courses
            </div>
          </div>
          <RelatedCourses related={related} />
        </div>
      )}
      <SkillsCTA />
    </section>
  );
};

export default CourseBottom;
