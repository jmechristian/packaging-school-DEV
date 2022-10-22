import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RelatedCourse from '../../components/courses/RelatedCourse';

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
    <div className='flex flex-col gap-6 w-full'>
      <div className='flex flex-col gap-6'>
        <div className='subheadline'>
          <h2>Explore the Catalog</h2>
        </div>
        <div className='font-bold text-lg leading-tight'>
          Browse {selectedFilter.name} Courses
        </div>
      </div>
      <div className='flex flex-col gap-12'>
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div key={course.node.course_id}>
              <RelatedCourse
                categories={course.node.categories}
                title={course.node.course_title[0].text}
                hours={course.node.course_hours}
                lessons={course.node.course_lessons}
                videos={course.node.course_videos}
                embedid={course.node.embed_id}
                slug={course.node._meta.uid}
                reset={() => null}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCourseBody;
