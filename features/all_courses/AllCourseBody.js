import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from '../../components/course-card/CourseCard';
import CoursePreview from '../../components/course-card/CoursePreview';

const AllCourseBody = () => {
  const dispatch = useDispatch();
  const { selectedFilter, allCourses } = useSelector(
    (state) => state.course_filter
  );

  const coursesToShow = useMemo(() => {
    if (selectedFilter.name === 'All') {
      return allCourses;
    } else {
      return allCourses.filter(
        (o) =>
          o.node.categories.some((c) => c.category === selectedFilter.name) ||
          o.node.certificate.some(
            (cl) => cl.certificate_link._meta.uid === selectedFilter.value
          )
      );
    }
  }, [selectedFilter, allCourses]);

  return (
    <div className='flex flex-col gap-10 w-full py-10 relative'>
      <div className='flex flex-col gap-8'>
        <div className='text-4xl font-bold font-plex'>
          <h2>Jumpstart Your Skillset</h2>
        </div>
        <div className='font-medium text-lg leading-tight'>
          Browse <span className='font-bold'>{selectedFilter.name}</span>{' '}
          Courses
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div key={course.node.course_id}>
              <CourseCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCourseBody;
