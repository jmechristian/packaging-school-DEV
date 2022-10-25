import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const AllCourseSearch = () => {
  const [courseSearchText, setCourseSearchText] = useState('');

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log(courseSearchText);
    setCourseSearchText('');
  };

  return (
    <div className=''>
      <form
        className='w-full  grid overflow-hidden grid-cols-7'
        onSubmit={searchSubmitHandler}
      >
        <input
          type='text'
          name='course_search'
          className='w-full border-none placeholder:text-sm text-slate-500 col-span-6'
          placeholder='What do you want to learn?'
          value={courseSearchText}
          onChange={(e) => setCourseSearchText(e.target.value)}
        />
        <button
          className='w-full h-full bg-base-mid flex justify-center items-center'
          type='submit'
        >
          <MagnifyingGlassIcon className='w-6 h-6 stroke-white' />
        </button>
      </form>
    </div>
  );
};

export default AllCourseSearch;
