import React from 'react';
import RelatedCourses from './RelatedCourses';
import SkillsCTA from '../SkillsCTA';
import StudentSuccess from '../StudentSuccess';

const CourseBottom = ({ related }) => {
  return (
    <section className='bg-white dark:bg-slate-300'>
      <div className='py-16 flex flex-col gap-16'>
        <div className='container__inner'>
          <StudentSuccess />
        </div>
        {related && (
          <div>
            <div className='container__inner'>
              <div className='border-b border-b-gray-400 pb-4'>
                <div className='font-bold font-greycliff text-2xl lg:text-3xl'>
                  Related Certificate Courses
                </div>
              </div>
            </div>
            <RelatedCourses related={related} />
          </div>
        )}
        <div className='container__inner'>
          <SkillsCTA />
        </div>
      </div>
    </section>
  );
};

export default CourseBottom;
