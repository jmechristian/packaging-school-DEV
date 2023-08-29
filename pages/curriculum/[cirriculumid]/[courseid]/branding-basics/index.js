import React from 'react';
import {
  VideoCameraIcon,
  DocumentIcon,
  CursorArrowRippleIcon,
  BoltIcon,
  BoltSlashIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import brandingAnimation from '../../../../../src/brandingg.json';
import Lottie from 'lottie-react';

const Page = () => {
  const router = useRouter();

  const modules = [
    {
      title: 'Introduction to Branding Basics',
      icons: <VideoCameraIcon className='fill-white w-6 h-6' />,
      link: 'introduction-to-branding-basics',
      sub: 'Video - 2 Min',
    },
    {
      title: 'Trademark and Copyright',
      icons: <DocumentIcon className='fill-white w-6 h-6' />,
      link: 'trademark-and-copyright',
      sub: 'PDF',
    },
    {
      title: 'Color Theory and Symbolism',
      icons: <VideoCameraIcon className='fill-white w-6 h-6' />,
      link: 'color-theory-and-symbolism',
      sub: 'Video - 19 Min',
    },
    {
      title: 'Typography',
      icons: <CursorArrowRippleIcon className='fill-white w-6 h-6' />,
      link: 'typography',
      sub: 'Interactive',
    },
    {
      title: 'Brand Development Lab',
      icons: <CursorArrowRippleIcon className='fill-white w-6 h-6' />,
      link: 'brand-development-lab',
      sub: 'Interactive',
    },
    {
      title: 'Style Guide Lab',
      icons: <CursorArrowRippleIcon className='fill-white w-6 h-6' />,
      link: 'style-guide-lab',
      sub: 'Interactive',
    },
    {
      title: 'Conclusion and Bonus Content',
      icons: <BoltIcon className='fill-white w-6 h-6' />,
      link: 'conclusion-and-bonus-content',
      sub: 'Bonus Content',
    },
  ];

  return (
    <div className='  bg-white bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-base-light via-indigo-100 dark:via-neutral-900  dark:to-dark-dark '>
      <div className='grid grid-cols-2 gap-24 max-w-6xl mx-auto py-16'>
        <div className='dark:text-white flex flex-col justify-center gap-6 w-full h-full'>
          <h2 className='text-5xl'>Branding Basics</h2>
          <p className='dark:text-neutral-400 text-lg text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            purus eu felis interdum bibendum. Sed dictum tristique lacus
            sagittis euismod.
          </p>
          <Lottie animationData={brandingAnimation} loop={true} />
        </div>
        <div className='flex flex-col gap-3 bg-neutral-100/30 dark:bg-white/10 backdrop-blur px-9 py-6 rounded-xl shadow-lg'>
          {modules.map((mod, i) => (
            <div
              className='flex items-center cursor-pointer justify-between gap-3 bg-white/50 dark:bg-white/10 hover:bg-base-brand/40 dark:hover:bg-black transition hover:ease-in backdrop-blur shadow-xl rounded-xl px-6 py-3'
              key={mod.link}
              onClick={() => {
                router.push(
                  `/curriculum/cps/cps-12/branding-basics/${mod.link}`
                );
              }}
            >
              <div className='flex gap-3'>
                <div className='flex justify-center items-center w-12 h-12 bg-clemson shadow-lg rounded-full'>
                  <div>{mod.icons}</div>
                </div>
                <div className='flex flex-col'>
                  <div className='dark:text-white font-bold'>{mod.title}</div>
                  <div className='dark:text-neutral-400 text-neutral-500 uppercase text-xs'>
                    {mod.sub}
                  </div>
                </div>
              </div>
              <div>
                <PlayIcon className='w-6 h-6 fill-black dark:fill-white' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
