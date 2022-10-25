import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from '../../components/course-card/CourseCard';
import AllCourseSearch from './AllCourseSearch';
import AllCourseFilter from './AllCourseFilter';

const AllCourseBody = () => {
  const dispatch = useDispatch();
  const { selectedFilter, allCourses } = useSelector(
    (state) => state.course_filter
  );

  const createGroups = (arr, numOfGroups) => {
    if (arr) {
      const totalGroups = Math.ceil(arr.length / numOfGroups);
      return new Array(totalGroups)
        .fill('')
        .map((_, i) => arr.slice(i * 2, (i + 1) * 2));
    } else return;
  };

  const coursesToShow = useMemo(() => {
    if (selectedFilter.name === 'All') {
      return createGroups(allCourses, 2);
    } else {
      const filtered = allCourses.filter(
        (o) =>
          o.node.categories.some((c) => c.category === selectedFilter.name) ||
          o.node.certificate.some(
            (cl) => cl.certificate_link._meta.uid === selectedFilter.value
          )
      );

      return createGroups(filtered, 2);
    }
  }, [selectedFilter, allCourses]);

  return (
    <div className='flex flex-col gap-10 py-8 relative container__inner bg-slate-300'>
      <div className='flex flex-col text-center gap-4'>
        <div className='text-3xl font-bold font-plex'>
          <h2>Level Up Your Skills</h2>
        </div>
        <AllCourseSearch />
      </div>
      <div className='flex flex-col gap-4'>
        <AllCourseFilter />
        <div className='flex flex-col gap-8 md:grid md:grid-cols-2 max-h-full'>
          {coursesToShow &&
            coursesToShow.map((course, i) => (
              <div
                key={course[0].node.course_id}
                className='flex flex-col gap-8'
              >
                <CourseCard
                  title={course[0].node.course_title[0].text}
                  desc={course[0].node.course_subtitle[0].text}
                  video={course[0].node.embed_id}
                  hours={course[0].node.course_hours}
                  lessons={course[0].node.course_lessons}
                  price={course[0].node.course_price}
                  slug={course[0].node._meta.uid}
                />
                {course[1] && (
                  <CourseCard
                    title={course[1].node.course_title[0].text}
                    desc={course[1].node.course_subtitle[0].text}
                    video={course[1].node.embed_id}
                    hours={course[1].node.course_hours}
                    lessons={course[1].node.course_lessons}
                    price={course[1].node.course_price}
                    slug={course[1].node._meta.uid}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourseBody;
