import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { API } from 'aws-amplify';
import { getLMSCourse, getLesson } from '../../src/graphql/queries';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import VideoPlayer from '../VideoPlayer';
import { registgerCourseClick } from '../../helpers/api';

const BrutalWiredCourseCard = ({
  id,
  external,
  reference,
  Icon,
  callout,
  link_text,
  coupon,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHovered] = useState(false);
  const [isLesson, setIsLesson] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const { location } = useSelector((state) => state.auth);

  useEffect(() => {
    const getCurrentCourse = async () => {
      const res = await API.graphql({
        query: getLMSCourse,
        variables: { id: id },
      });
      if (res.data.getLMSCourse) {
        setIsLesson(res.data.getLMSCourse);
      }
    };

    id && getCurrentCourse();
  }, [id]);

  const cardClickHandler = async () => {
    await registgerCourseClick(
      isLesson.id,
      router.asPath,
      location,
      isLesson.link,
      'LIBRARY'
    );

    !external && !reference
      ? router.push(`/courses/${isLesson.slug}`)
      : reference
      ? window.open(isLesson.link + `?${reference}`, '_blank')
      : window.open(isLesson.link, '_blank');
  };

  return isLesson ? (
    <motion.div
      className='w-full min-h-[270px] max-w-[300px] bg-cover bg-bottom bg-opacity-60 relative p-2 border-2 border-black flex flex-col bg-white shadow-[0px_6px_0px_rgba(0,0,0,0.20)]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <motion.div
          className=' bg-cover bg-center bg-no-repeat w-full h-[220px]'
          style={{
            backgroundImage: `url(${isLesson.seoImage})`,
          }}
        ></motion.div>
      </div>

      <motion.div className='flex flex-col h-[250px] '>
        <motion.div className='mt-2 mb-4 relative z-[2] flex flex-col flex-1 border border-black'>
          <motion.div className='flex flex-col gap-2 h-full pt-2'>
            <motion.div className='h4-base px-3 text-neutral-900'>
              {isLesson.title}
            </motion.div>
            <motion.div
              className='text-sm leading-tight px-3 max-h-[110px]  text-neutral-600 overflow-x-scroll'
              id='scrollers'
            >
              {isLesson.subheadline}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className='bg-black w-full text-center cursor-pointer'
          onClick={
            isLesson.altLink
              ? window.open(isLesson.altLink, '_blank')
              : cardClickHandler
          }
        >
          <div className='text-white font-bold px-6 py-3'>
            {link_text ? link_text : 'Select Course'}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  ) : (
    <motion.div className='w-full min-h-[230px] max-h-[455px] max-w-[300px] rounded-lg shadow-xl bg-cover bg-bottom relative bg-neutral-200 flex flex-col gap-3 p-6'>
      <div className='w-full h-auto aspect-[4/3] rounded-xl bg-neutral-300 animate-pulse'></div>
      <div className='w-full h-3 rounded-2xl bg-neutral-300 animate-pulse'></div>
      <div className='w-full h-2 rounded-2xl bg-neutral-300 animate-pulse'></div>
      <div className='w-full h-2 rounded-2xl bg-neutral-300 animate-pulse'></div>
      <div className='w-full h-2 rounded-2xl bg-neutral-300 animate-pulse'></div>
      <div className='w-full h-2 rounded-2xl bg-neutral-300 animate-pulse'></div>
      <div className='w-full mt-4 h-6 rounded-2xl bg-neutral-300 animate-pulse'></div>
    </motion.div>
  );
};

export default BrutalWiredCourseCard;
