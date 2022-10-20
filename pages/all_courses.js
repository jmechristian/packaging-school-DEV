import React from 'react';
import Layout from '../features/layout/Layout';
import AllCoursesMain from '../features/all_courses/AllCoursesMain';

const all_courses = () => {
  return (
    <Layout>
      <section className='bg-slate-200 dark:bg-slate-900'>
        <div className='container__inner course__hero-padding'>
          <AllCoursesMain />
        </div>
      </section>
    </Layout>
  );
};

export default all_courses;
