import React from 'react';
import { useSelector } from 'react-redux';

const AllCourseBody = () => {
  const { selectedFilter } = useSelector((state) => state.course_filter);
  return (
    <div className='flex flex-col gap-6 w-full'>
      <div className='subheadline'>
        <h2>Explore the Catalog</h2>
      </div>
      <div className='font-bold text-lg'>{selectedFilter.name} Courses</div>
    </div>
  );
};

export default AllCourseBody;
