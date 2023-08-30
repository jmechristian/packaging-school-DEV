import React from 'react';
import CourseHeader from './CourseHeader';
import CourseItem from './CourseItem';
import { Bars3Icon } from '@heroicons/react/24/solid';
import {
  VideoCameraIcon,
  DocumentIcon,
  CursorArrowRippleIcon,
  BoltIcon,
  BoltSlashIcon,
  LockClosedIcon,
  LockOpenIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';

const CourseMenu = ({ toggle }) => {
  const modules = [
    {
      title: 'Introduction to Branding Basics',
      icons: (
        <VideoCameraIcon className='fill-neutral-900 dark:fill-white/70 w-6 h-6' />
      ),
      link: 'introduction-to-branding-basics',
      sub: 'Video - 2 Min',
      unlocked: true,
    },
    {
      title: 'Trademark and Copyright',
      icons: (
        <DocumentIcon className='fill-neutral-900 dark:fill-white/70 w-6 h-6' />
      ),
      link: 'trademark-and-copyright',
      sub: 'PDF',
    },
    {
      title: 'Color Theory and Symbolism',
      icons: (
        <VideoCameraIcon className='fill-neutral-900 dark:fill-white/70 w-6 h-6' />
      ),
      link: 'color-theory-and-symbolism',
      sub: 'Video - 19 Min',
    },
    {
      title: 'Typography',
      icons: (
        <CursorArrowRippleIcon className='fill-neutral-900 dark:fill-white/70 w-6 h-6' />
      ),
      link: 'typography',
      sub: 'Interactive',
    },
    {
      title: 'Brand Development Lab',
      icons: (
        <CursorArrowRippleIcon className='fill-neutral-900 dark:fill-white/70 w-6 h-6' />
      ),
      link: 'brand-development-lab',
      sub: 'Interactive',
    },
    {
      title: 'Style Guide Lab',
      icons: (
        <CursorArrowRippleIcon className='fill-neutral-900 dark:fill-white/70 w-6 h-6' />
      ),
      link: 'style-guide-lab',
      sub: 'Interactive',
    },
    {
      title: 'Conclusion and Bonus Content',
      icons: (
        <BoltIcon className='fill-neutral-900 dark:fill-white/70 w-6 h-6' />
      ),
      link: 'conclusion-and-bonus-content',
      sub: 'Bonus Content',
    },
  ];

  return (
    <div className='flex'>
      <div className='relative'>
        <div
          className='w-[440px] bg-neutral-100 dark:bg-dark-dark rounded-r-lg relative shadow-fix shadow-fix-fix'
          id='scrollers'
        >
          <CourseHeader id='CPS-12' course='Branding Basics' />
          <div className='flex flex-col'>
            <CourseItem
              title={modules[0].title}
              type={modules[0].icons}
              time={modules[0].sub}
              link={modules[0].link}
              unlocked={modules[0].unlocked}
            />
            <CourseItem
              title={modules[1].title}
              type={modules[1].icons}
              time={modules[1].sub}
              link={modules[1].link}
              unlocked={modules[1].unlocked}
            />
            <CourseItem
              title={modules[2].title}
              type={modules[2].icons}
              time={modules[2].sub}
              link={modules[2].link}
              unlocked={modules[2].unlocked}
            />
            <CourseItem
              title={modules[3].title}
              type={modules[3].icons}
              time={modules[3].sub}
              link={modules[3].link}
              unlocked={modules[3].unlocked}
            />
            <CourseItem
              title={modules[4].title}
              type={modules[4].icons}
              time={modules[4].sub}
              link={modules[4].link}
              unlocked={modules[4].unlocked}
            />
            <CourseItem
              title={modules[5].title}
              type={modules[5].icons}
              time={modules[5].sub}
              link={modules[5].link}
              unlocked={modules[5].unlocked}
            />
            <CourseItem
              title={modules[6].title}
              type={modules[6].icons}
              time={modules[6].sub}
              link={modules[6].link}
              unlocked={modules[6].unlocked}
            />
          </div>

          {/* <div className='sticky bottom-0 left-0 right-0 bg-gradient-to-t from-real-dark h-[300px] z-70'></div> */}
        </div>
      </div>
      <button
        className='w-12 h-12 bg-base-brand dark:bg-neutral-700 shadow-fix shadow-fix-fix z-[90] mt-6 flex justify-center items-center rounded-r-lg'
        onClick={toggle}
      >
        <Bars3Icon className='fill-white h-6 w-6' />
      </button>
    </div>
  );
};

export default CourseMenu;
