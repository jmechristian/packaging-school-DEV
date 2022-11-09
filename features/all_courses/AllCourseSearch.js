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
        className='w-full  grid overflow-hidden grid-cols-12'
        onSubmit={searchSubmitHandler}
      >
        <input
          type='text'
          name='course_search'
          className='w-full border-none  placeholder:text-slate-400 placeholder:pl-6 text-slate-500 col-span-10 md:col-span-11 h-12 lg:h-16'
          placeholder='What do you want to learn?'
          value={courseSearchText}
          onChange={(e) => setCourseSearchText(e.target.value)}
        />
        <button
          className='w-full h-full bg-base-mid flex justify-center items-center col-span-2 md:col-span-1'
          type='submit'
        >
          <MagnifyingGlassIcon className='w-6 h-6 stroke-white' />
        </button>
      </form>
    </div>
  );
};

export default AllCourseSearch;
