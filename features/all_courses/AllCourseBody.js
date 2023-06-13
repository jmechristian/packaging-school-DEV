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
      return allCourses.filter((o) => o.category === selectedFilter.value);
    }
  }, [selectedFilter, allCourses]);

  return (
    <div className='bg-slate-100 dark:bg-dark-dark'>
      {coursesToShow && (
        <>
          <AllCourseBodyMobile coursesToShow={coursesToShow} />
          <AllCourseBodyDesktop coursesToShow={coursesToShow} />
        </>
      )}
    </div>
  );
};

export default AllCourseBody;
