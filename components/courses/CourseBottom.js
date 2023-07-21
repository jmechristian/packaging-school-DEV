import React from 'react';
import RelatedCourses from './RelatedCourses';
import SkillsCTA from '../SkillsCTA';
import StudentSuccess from '../StudentSuccess';

const CourseBottom = ({ category, id }) => {
  return (
    <section className='bg-white dark:bg-slate-300'>
      <div className='py-16 flex flex-col gap-16'>
        <div className='container__inner'>
          <StudentSuccess />
        </div>
        <div>
          <div className='container__inner'>
            <div className='pb-6'>
              <div className='font-bold font-greycliff text-2xl lg:text-3xl'>
                <h3>Related Courses</h3>
              </div>
            </div>
          </div>
          <RelatedCourses category={category} id={id} />
        </div>
        {/* <div className='container__inner'>
          <SkillsCTA />
        </div> */}
      </div>
    </section>
  );
};

export default CourseBottom;
