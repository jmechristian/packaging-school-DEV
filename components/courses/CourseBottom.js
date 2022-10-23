import React from 'react';
import RelatedCourses from './RelatedCourses';
import SkillsCTA from '../SkillsCTA';
import StudentSuccess from '../StudentSuccess';

const CourseBottom = ({ related }) => {
  return (
    <section className='bg-white dark:bg-slate-300'>
      <div className='container__inner py-20 flex flex-col gap-16'>
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
      </div>
    </section>
  );
};

export default CourseBottom;
