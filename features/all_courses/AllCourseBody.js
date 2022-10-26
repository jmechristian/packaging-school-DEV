import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllCourseSlider from './AllCourseSlider';
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
    <div className='flex flex-col gap-10 py-8 relative bg-slate-300'>
      <div className='flex flex-col text-center gap-4 container__inner'>
        <div className='text-3xl font-bold font-plex'>
          <h2>Level Up Your Skills</h2>
        </div>
        <AllCourseSearch />
      </div>
      <div className='flex flex-col gap-4'>
        <AllCourseFilter />
        <AllCourseSlider coursesToShow={coursesToShow} />
      </div>
    </div>
  );
};

export default AllCourseBody;
