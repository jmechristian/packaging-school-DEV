import React, { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import {
  setPreviewClosed,
  setPreviewOpen,
} from '../../features/all_courses/courseFilterSlice';

const CourseHero = ({ video }) => {
  const [openPreview, setOpenPreview] = useState(false);
  const dispatch = useDispatch();

  const closePreview = () => {
    dispatch(setPreviewClosed(true));
  };

  return (
    <>
      <div className='bg-slate-700 aspect-square w-full flex justify-center items-center col-span-2'>
        <div
          className='bg-slate-200 w-12 h-12 shadow-xl rounded-full flex justify-center items-center opacity-60'
          onClick={() => dispatch(setPreviewOpen())}
        >
          <VideoCameraIcon className='w-6 h-6 fill-slate-700' />
        </div>
      </div>
    </>
  );
};

export default CourseHero;
