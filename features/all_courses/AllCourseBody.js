import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllCourseBodyMobile from './AllCourseBodyMobile';
import AllCourseBodyDesktop from './AllCourseBodyDesktop';

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
    <div className='bg-slate-300'>
      <AllCourseBodyMobile coursesToShow={coursesToShow} />
      <AllCourseBodyDesktop coursesToShow={coursesToShow} />
    </div>
  );
};

export default AllCourseBody;
