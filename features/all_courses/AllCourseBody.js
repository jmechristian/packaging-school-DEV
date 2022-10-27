import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllCourseSearch from './AllCourseSearch';
import AllCourseFilter from './AllCourseFilter';
import Scroller from '../../components/Scroller';
import CourseCard from '../../components/course-card/CourseCard';

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
    <div className='flex flex-col gap-10 py-8 relative bg-slate-300'>
      <div className='flex flex-col text-center gap-4 container__inner'>
        <div className='text-3xl font-bold font-plex'>
          <h2>Level Up Your Skills</h2>
        </div>
        <AllCourseSearch />
      </div>
      <div className='flex flex-col gap-4 container__inner'>
        <AllCourseFilter />
        <Scroller rows='2'>
          {coursesToShow &&
            coursesToShow.map((course, i) => (
              <div
                key={course.node.course_title[0].text}
                className='inline-block'
              >
                <CourseCard
                  title={course.node.course_title[0].text}
                  desc={course.node.course_subtitle[0].text}
                  video={course.node.embed_id}
                  hours={course.node.course_hours}
                  lessons={course.node.course_lessons}
                  price={course.node.course_price}
                  slug={course.node._meta.uid}
                />
              </div>
            ))}
        </Scroller>
      </div>
    </div>
  );
};

export default AllCourseBody;
