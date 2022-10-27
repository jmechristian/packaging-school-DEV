import React from 'react';
import RelatedCourses from './RelatedCourses';
import SkillsCTA from '../SkillsCTA';
import StudentSuccess from '../StudentSuccess';
import Scroller from '../Scroller';
import CourseCard from '../course-card/CourseCard';

const CourseBottom = ({ related }) => {
  console.log(related);
  return (
    <section className='bg-white dark:bg-slate-300'>
      <div className='container__inner py-20 flex flex-col gap-16'>
        <StudentSuccess />

        {related[0].related.data && (
          <div className='flex flex-col gap-6'>
            <div className='border-b border-b-gray-400 pb-4'>
              <div className='font-bold font-plex text-2xl lg:text-3xl'>
                Related Certificate Courses
              </div>
            </div>
            <Scroller rows='2'>
              {related.map((course, i) => (
                <div key={course.related.data.course_title[0].text}>
                  <div className='relative h-full'>
                    <CourseCard
                      title={course.related.data.course_title[0].text}
                      desc={course.related.data.course_subtitle[0].text}
                      video={course.related.data.embed_id}
                      hours={course.related.data.course_hours}
                      lessons={course.related.data.course_lessons}
                      price={course.related.data.course_price}
                      slug={course.related.uid}
                    />
                  </div>
                </div>
              ))}
            </Scroller>
          </div>
        )}
        <SkillsCTA />
      </div>
    </section>
  );
};

export default CourseBottom;
