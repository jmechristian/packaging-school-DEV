import React, { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/solid';
import CoursePreview from './CoursePreview';

const CourseHero = () => {
  const [openPreview, setOpenPreview] = useState(false);

  const closePreview = () => {
    setOpenPreview(false);
  };

  return (
    <>
      <div className='bg-slate-700 aspect-square w-full flex justify-center items-center col-span-2'>
        <div
          className='bg-slate-200 w-12 h-12 shadow-xl rounded-full flex justify-center items-center opacity-60'
          onClick={() => setOpenPreview(true)}
        >
          <VideoCameraIcon className='w-6 h-6 fill-slate-700' />
        </div>
      </div>
      {openPreview && <CoursePreview close={closePreview} />}
    </>
  );
};

export default CourseHero;
