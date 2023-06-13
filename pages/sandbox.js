import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import { client } from '../helpers/apollo-client';
import { API } from 'aws-amplify';
import { createLMSCourse, updateLMSCourse } from '../src/graphql/mutations';
import { listLMSCourses } from '../src/graphql/queries';

const Sandbox = () => {
  const [allCourses, setAllCourses] = useState(null);

  useEffect(() => {
    // const getCourses = async () => {
    //   const courses = await client.query({
    //     query: gql`
    //       query AllCourses {
    //         allCourses(sortBy: course_title_ASC, first: 100) {
    //           edges {
    //             node {
    //               course_id
    //               _meta {
    //                 uid
    //               }
    //               categories {
    //                 category
    //               }
    //               course_title
    //               course_subtitle
    //               embed_id
    //               course_hours
    //               course_videos
    //               course_lessons
    //               course_price
    //               what_learned
    //               what_learned_items {
    //                 overview_items
    //               }
    //               lms_link
    //               lms_trial_link
    //             }
    //           }
    //         }
    //       }
    //     `,
    //   });

    //   setAllCourses(courses.data.allCourses.edges);
    //   console.log(courses.data.allCourses.edges);
    // };

    const getAWSCourses = async () => {
      const res = await API.graphql({ query: listLMSCourses });
      setAllCourses(res.data.listLMSCourses.items);
    };

    getAWSCourses();
  }, []);

  let newObject = [];

  const uploadCourses = async () => {
    for (let index = 0; index < allCourses.length; index++) {
      const slug = allCourses[index].title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      const res = await API.graphql({
        query: updateLMSCourse,
        variables: {
          input: {
            id: allCourses[index].id,
            slug: slug,
          },
        },
      });

      if (res.errors) {
        console.log(errors);
      }
    }
  };

  const mapCourses = async () => {
    newObject = await allCourses.map((course, i) => ({
      courseId: course.node.course_id,
      link: course.node.lms_link ? course.node.lms_link : '',
      what_learned: course.node.what_learned,
      preview: course.node.embed_id,
      subheadline: course.node.course_subtitle[0].text,
      title: course.node.course_title[0].text,
      what_learned: course.node.what_learned
        ? course.node.what_learned[0].text
        : '',
      objectives: course.node.what_learned_items.map((it) => it.overview_items),
      price: course.node.course_price,
      videos: course.node.course_videos,
      lessons: course.node.course_lessons,
      hours: course.node.course_hours,
    }));

    console.log(newObject);
  };

  return (
    <div className='max-w-2xl mx-auto py-24'>
      <div className='flex flex-col gap-9'>
        <div>current courses: {allCourses && allCourses.length}</div>
        {/* <div
          className='w-fit bg-indigo-600 px-6 py-2 text-white'
          onClick={mapCourses}
        >
          Translate
        </div> */}
        <div
          className='w-fit bg-black px-6 py-2 text-white cursor-pointer'
          onClick={uploadCourses}
        >
          Upload
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
