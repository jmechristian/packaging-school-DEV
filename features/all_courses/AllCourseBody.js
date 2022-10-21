import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredCourses } from './courseFilterSlice';
import filter from 'lodash/filter';
import _ from 'lodash';

const AllCourseBody = () => {
  const dispatch = useDispatch();
  const { selectedFilter, allCourses } = useSelector(
    (state) => state.course_filter
  );

  const coursesToShow = useMemo(() => {
    if (selectedFilter.name === 'All') {
      return allCourses;
    } else {
      return _.filter(allCourses, {
        node: { categories: [{ category: selectedFilter.name }] },
      });
    }
  }, [selectedFilter]);

  return (
    <div className='flex flex-col gap-6 w-full'>
      <div className='flex flex-col gap-6'>
        <div className='subheadline'>
          <h2>Explore the Catalog</h2>
        </div>
        <div className='font-bold text-lg'>
          Browse {selectedFilter.name} Courses
        </div>
      </div>
      <div>
        {coursesToShow &&
          coursesToShow.map((course, i) => (
            <div key={course.node.course_id}>
              {course.node.course_title[0].text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllCourseBody;
