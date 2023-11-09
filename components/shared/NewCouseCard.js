import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

import VideoPlayer from '../VideoPlayer';

const NewCouseCard = ({
  background,
  Icon,
  callout,
  video,
  link,
  title,
  description,
  link_text,
  date,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHovered] = useState(false);

  const createDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      className='w-full min-h-[230px] rounded-lg shadow-lg bg-cover bg-bottom bg-opacity-60 relative bg-black'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className='absolute z-[1] left-0 right-0 bottom-0 top-1/3 bg-gradient-to-t from-base-brand via-base-brand rounded-b-lg'></motion.div>
      <motion.div
        className='absolute z-0 left-0 right-0 top-0 bottom-1/3 bg-black rounded-t-lg bg-cover bg-center bg-no-repeat w-full h-auto'
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></motion.div>
      {callout && (
        <motion.div className='w-full justify-center items-center gap-1.5 h-12 backdrop-blur text-center border-b border-b-neutral-200 rounded-t-lg flex relative z-[2] bg-neutral-600/40'>
          <motion.div>
            <Icon className='w-5 h-5 stroke-white' />
          </motion.div>
          <motion.div className=' font-bold text-white '>{callout}</motion.div>
        </motion.div>
      )}
      {isPlaying ? (
        <motion.div className='aspect-[16/9] w-full h-auto relative z-[2] flex items-center justify-center bg-black transition-opacity ease-in'>
          <VideoPlayer videoEmbedLink={video} light={false} playing={true} />
        </motion.div>
      ) : (
        <motion.div
          className='aspect-[16/9] w-full h-auto relative z-[2] flex items-center justify-center '
          onClick={() => setIsPlaying(true)}
        >
          {video && isHover && (
            <motion.div className='w-20 h-20 bg-white/40 backdrop-blur-lg hover:bg-clemson transition-colors ease-in rounded-full shadow-xl flex justify-center items-center cursor-pointer'>
              <PlayCircleIcon className='w-20 h-20' />
            </motion.div>
          )}
        </motion.div>
      )}
      <motion.div className='flex flex-col justify-between h-[242px]'>
        <motion.div className='py-4 mt-4 min-h-[150px] bg-white/70 backdrop-blur shadow-lg rounded-b-lg mx-4 rounded-lg mb-6 relative z-[2] flex flex-col justify-between'>
          <motion.div className='flex flex-col gap-3'>
            <motion.div className='font-semibold text-lg tracking-tight leading-none px-4'>
              {title}
            </motion.div>
            <motion.div className='text-sm leading-tight px-4 line-clamp-4 text-neutral-600'>
              {description}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className='bg-black w-full rounded-b-lg z-10 relative text-center cursor-pointer'
          onClick={() => window.open(link, '_blank')}
        >
          <div className='text-white font-bold px-6 py-3'>{link_text}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NewCouseCard;
