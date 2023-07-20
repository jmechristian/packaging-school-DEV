import React, { useEffect, useState } from 'react';
import CourseCard from '../course-card/CourseCard';
import { API } from 'aws-amplify';
import { getLMSCourse } from '../../src/graphql/queries';

const SavedCourse = ({ courseId, savedCourses }) => {
  const [savedCourse, setSavedCourse] = useState(null);
  useEffect(() => {
    const getTheCourse = async () => {
      const res = await API.graphql({
        query: getLMSCourse,
        variables: { id: courseId },
      });
      if (res.data) {
        setSavedCourse(res.data.getLMSCourse);
      } else {
        console.log(res.errors);
      }
    };

    courseId && getTheCourse();
  }, [courseId]);

  return (
    <div className='h-full'>
      {savedCourse && (
        <CourseCard
          courseId={savedCourse.id}
          title={savedCourse.title}
          desc={savedCourse.subheadline}
          video={savedCourse.preview}
          hours={savedCourse.hours}
          lessons={savedCourse.lessons}
          price={savedCourse.price}
          slug={savedCourse.title}
          category={savedCourse?.category}
          savedCourses={savedCourses}
        />
      )}
    </div>
  );
};

export default SavedCourse;
