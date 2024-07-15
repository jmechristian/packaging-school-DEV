import React from 'react';
import RelatedCourses from './RelatedCourses';
import SkillsCTA from '../SkillsCTA';
import StudentSuccess from '../StudentSuccess';
import ScrollingTestimonials from '../shared/ScrollingTestimonials';

const CCCourseBottom = ({ category, id }) => {
  return (
    <section className='bg-white dark:bg-slate-300'>
      <div className='py-16 flex flex-col gap-16'>
        <div className='flex flex-col items-center gap-10'>
          <div className='text-center h2-base'>
            Discover the Impact of Our Courses from Your Peers!
          </div>
          <div className='max-w-full overflow-hidden'>
            <ScrollingTestimonials />
          </div>
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

export default CCCourseBottom;
