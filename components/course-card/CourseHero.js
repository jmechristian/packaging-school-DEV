import React, { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import {
  setPreviewClosed,
  setPreviewOpen,
} from '../../features/all_courses/courseFilterSlice';

const CourseHero = ({ video, bgcolor }) => {
  const [openPreview, setOpenPreview] = useState(false);
  const dispatch = useDispatch();

  const closePreview = () => {
    dispatch(setPreviewClosed(true));
  };

  return (
    <>
      <div
        className={`bg-${bgcolor} aspect-square w-full flex justify-center items-center col-span-2 cursor-pointer`}
      >
        <div
          className='bg-slate-100 w-10 h-10 shadow-2xl rounded-full flex justify-center items-center opacity-60'
          onClick={() => dispatch(setPreviewOpen(video))}
        >
          <VideoCameraIcon className='w-6 h-6 fill-slate-700' />
        </div>
      </div>
    </>
  );
};

export default CourseHero;
