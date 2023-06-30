import React from 'react';
import { client } from '../helpers/apollo-client';
import { useSelector, useDispatch } from 'react-redux';
import { setPreviewClosed } from '../features/all_courses/courseFilterSlice';
import AllCoursesMain from '../features/all_courses/AllCoursesMain';
import CoursePreview from '../components/course-card/CoursePreview';
import { API } from 'aws-amplify';
import { gql } from '@apollo/client';
import { listLMSCourses } from '../src/graphql/queries';

const AllCourses = ({ courses }) => {
  const dispatch = useDispatch();

  return (
    <>
      <AllCoursesMain courses={courses} />
    </>
  );
};

export async function getStaticProps() {
  // const courses = await client.query({
  //   query: gql`
  //     query AllCourses {
  //       allCourses(sortBy: course_title_ASC, first: 70) {
  //         pageInfo {
  //           hasNextPage
  //           hasPreviousPage
  //           startCursor
  //           endCursor
  //         }
  //         totalCount
  //         edges {
  //           node {
  //             course_id
  //             _meta {
  //               uid
  //             }
  //             categories {
  //               category
  //             }
  //             collections {
  //               ... on Collection {
  //                 collection_title
  //                 collection
  //                 collection_descriptions
  //               }
  //             }
  //             course_title
  //             course_subtitle
  //             embed_id
  //             course_hours
  //             course_videos
  //             course_lessons
  //             course_price
  //             certificate {
  //               certificate_link {
  //                 ... on Certification {
  //                   _meta {
  //                     uid
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  // });
  const res = await API.graphql({ query: listLMSCourses });
  const courses = res.data.listLMSCourses.items;

  return {
    props: { courses },
  };
}

export default AllCourses;
