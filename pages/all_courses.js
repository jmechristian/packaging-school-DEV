import React from 'react';
import { client } from '../helpers/apollo-client';
import Layout from '../features/layout/Layout';
import AllCoursesMain from '../features/all_courses/AllCoursesMain';
import AllCourseFilter from '../features/all_courses/AllCourseFilter';
import { gql } from '@apollo/client';

const AllCourses = ({ courses }) => {
  return (
    <Layout>
      <AllCoursesMain courses={courses} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const courses = await client.query({
    query: gql`
      query AllCourses {
        allCourses {
          edges {
            node {
              course_id
              _meta {
                uid
              }
              categories {
                category
              }
              course_title
              course_subtitle
              embed_id
              course_hours
              course_videos
              course_lessons
              course_price
              certificate {
                certificate_link {
                  ... on Certification {
                    _meta {
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: { courses },
  };
}

export default AllCourses;
