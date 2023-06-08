import React, { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import {
  setPreviewClosed,
  setPreviewOpen,
} from '../../features/all_courses/courseFilterSlice';

const CourseHero = ({ video, bgcolor, newWidth }) => {
  const [openPreview, setOpenPreview] = useState(false);
  const dispatch = useDispatch();

  const closePreview = () => {
    dispatch(setPreviewClosed(true));
  };

  return (
    <>
      <div
        className={`bg-${bgcolor} aspect-square ${
          newWidth ? 'w-36 h-36' : 'w-20 h-20'
        } col-span-2 cursor-pointer rounded-full`}
      >
        <div className='flex justify-center items-center h-full'>
          <div
            className={`bg-slate-100 w-10 h-10 shadow-2xl rounded-full flex justify-center items-center opacity-60`}
            onClick={() => dispatch(setPreviewOpen(video))}
          >
            <VideoCameraIcon className='w-6 h-6 fill-slate-700' />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHero;
