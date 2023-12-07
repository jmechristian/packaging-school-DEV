import React from 'react';
import { listLMSCourses } from '../../src/graphql/queries';
import { updateLMSCourse } from '../../src/graphql/mutations';
import { API } from 'aws-amplify';
import { useSelector } from 'react-redux';

const index = ({ courses }) => {
  //   const updateCourses = async () => {
  //     for (let cour in courses) {
  //       const res = await API.graphql({
  //         query: updateLMSCourse,
  //         variables: {
  //           input: {
  //             id: courses[cour].id,
  //             categoryArray: [`${courses[cour].category}`],
  //           },
  //         },
  //       });

  //       console.log(res);
  //     }
  //   };

  return (
    <div className='w-full h-full flex justify-center items-center max-w-7xl px-6 my-16 mx-auto'>
      <div className='bg-black text-white px-4 py-3'>Hey</div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await API.graphql({
    query: listLMSCourses,
  });
  const courses = res.data.listLMSCourses.items;

  return {
    props: { courses },
  };
}

export default index;
