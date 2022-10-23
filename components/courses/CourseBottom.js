import React from 'react';
import RelatedCourses from './RelatedCourses';
import SkillsCTA from '../SkillsCTA';
import StudentSuccess from '../StudentSuccess';
import SwiperComponent from '../SwiperComponent';

const CourseBottom = ({ related }) => {
  return (
    <section className='bg-white dark:bg-slate-300'>
      <div className='py-20 flex flex-col gap-16'>
        <div className='container__inner '>
          <StudentSuccess />
        </div>
        {related[0].related.data && (
          <div>
            <div className='border-b border-b-gray-400 pb-4 container__inner'>
              <div className='font-bold font-plex text-2xl lg:text-3xl'>
                Related Certificate Courses
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
