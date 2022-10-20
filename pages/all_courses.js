import React from 'react';
import { createClient } from '../prismicio';
import Layout from '../features/layout/Layout';
import AllCoursesMain from '../features/all_courses/AllCoursesMain';

const all_courses = ({ courses }) => {
  console.log(courses);
  return (
    <Layout>
      <AllCoursesMain courses={courses} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const client = createClient();
  const courses = await client.getAllByType('course');

  return {
    props: { courses },
  };
}

export default all_courses;
