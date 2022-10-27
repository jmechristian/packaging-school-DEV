import React from 'react';
import { client } from '../helpers/apollo-client';
import { useSelector, useDispatch } from 'react-redux';
import { setPreviewClosed } from '../features/all_courses/courseFilterSlice';
import AllCoursesMain from '../features/all_courses/AllCoursesMain';
import CoursePreview from '../components/course-card/CoursePreview';
import { gql } from '@apollo/client';

const AllCourses = ({ courses }) => {
  const dispatch = useDispatch();
  const { preview } = useSelector((state) => state.course_filter);
  return (
    <>
      {preview && <CoursePreview close={() => dispatch(setPreviewClosed())} />}
      <AllCoursesMain courses={courses} />
    </>
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
