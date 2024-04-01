import React, { useEffect, useState } from 'react';
import BrutalButton from './BrutalButton';
import { API } from 'aws-amplify';
import { getLMSCourse } from '../../src/graphql/queries';
import { setCardIcon } from '../../helpers/utils';
import { TrophyIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';
import { IoDiamond } from 'react-icons/io5';
import { AiTwotoneVideoCamera } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from '../VideoPlayer';

import { TiTree } from 'react-icons/ti';
import { MdVideocam } from 'react-icons/md';

const BrutalCourseCard = ({ id, icons, coupon }) => {
  const [isCourse, setIsCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const getCourse = async () => {
      setIsLoading(true);
      const res = await API.graphql({
        query: getLMSCourse,
        variables: { id: id },
      });
      if (res.data.getLMSCourse) {
        console.log(res.data.getLMSCourse);
        setIsCourse(res.data.getLMSCourse);
      } else {
        setIsError(true);
        console.log('Error');
      }
      setIsLoading(false);
    };

    id && getCourse();
  }, [id]);

  return (
    <div className='min-w-[320px] max-w-[360px] w-full h-[520px] mx-auto rounded-2xl border-4 border-black bg-white shadow-[4px_4px_0px_black] overflow-hidden'>
      <div className='flex flex-col h-full'>
        <div
          className='w-full aspect-[16/9] h-full bg-base-brand bg-cover bg-center overflow-hidden cursor-pointer relative'
          style={{
            backgroundImage: `url(${isCourse.seoImage})`,
          }}
        >
          {isCourse.preview && (
            <div className='w-12 h-12 rounded-full bg-white border-2 border-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] flex items-center justify-center absolute z-10 bottom-2 left-2'>
              <div onClick={() => setIsPlaying(true)}>
                <MdVideocam color='black' size='30' />
              </div>
            </div>
          )}
          {isPlaying && (
            <div className='w-full h-full absolute z-20 inset-0 bg-black'>
              <div className='w-full h-full relative'>
                <div
                  className='w-8 rounded-full bg-white/70 h-8 flex items-center justify-center absolute top-1 right-1 z-30'
                  onClick={() => setIsPlaying(false)}
                >
                  X
                </div>
                <VideoPlayer
                  videoEmbedLink={isCourse.preview}
                  light={false}
                  playing={true}
                />
              </div>
            </div>
          )}
        </div>
        <div className='grid grid-cols-5 items-center border-b-2 border-b-black bg-brand-yellow/30'>
          <div className='text-xl leading-[1.1em] font-semibold tracking-tight px-4 py-3 col-span-4 '>
            {isCourse.title}
          </div>
          <div className='flex flex-col items-center justify-center h-full border-l-2 border-black gap-1 bg-base-brand col-span-1 py-1.5'>
            <div className='w-9 flex items-center justify-center aspect-[1/1] rounded-full bg-yellow-500 border border-black shadow-[2px_1px_0px_black]'>
              <div>
                <IoDiamond color='white' size={20} />
              </div>
            </div>
            {setCardIcon(isCourse.category)}
          </div>
        </div>
        <div className='flex flex-col justify-between w-full h-full'>
          <div className='p-4 leading-tight text-neutral-600 h-full max-h-[150px]'>
            {isCourse.subheadline}
          </div>
          <div className='flex justify-between w-full items-center px-4 pt-5 pb-5'>
            <div className='flex items-center gap-1.5'>
              <div className='font-bold text-3xl tracking-tighter'>
                ${(isCourse.price - isCourse.price * 0.85).toFixed(2)}
              </div>
              <div className='text-neutral-500 text-xl line-through'>
                ${isCourse.price}
              </div>
            </div>
            <div>
              <a
                href={isCourse.link + '?coupon=INDIASITE2024'}
                className={`flex justify-center border-2 border-black items-center gap-2 rounded px-4 py-2 font-medium uppercase text-white text-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black] bg-clemson`}
              >
                <span className='font-semibold'>Purchase</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrutalCourseCard;
