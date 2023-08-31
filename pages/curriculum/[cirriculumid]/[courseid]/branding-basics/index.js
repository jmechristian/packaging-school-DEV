import React from 'react';
import {
  VideoCameraIcon,
  DocumentIcon,
  CursorArrowRippleIcon,
  BoltIcon,
  BoltSlashIcon,
  LockClosedIcon,
  LockOpenIcon,
  PlayIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
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
      unlocked: true,
      complete: true,
    },
    {
      title: 'Trademark and Copyright',
      icons: <DocumentIcon className='fill-white w-6 h-6' />,
      link: 'trademark-and-copyright',
      sub: 'PDF',
      unlocked: true,
      complete: false,
    },
    {
      title: 'Color Theory and Symbolism',
      icons: <VideoCameraIcon className='fill-white w-6 h-6' />,
      link: 'color-theory-and-symbolism',
      sub: 'Video - 19 Min',
      unlocked: false,
      complete: false,
    },
    {
      title: 'Typography',
      icons: <CursorArrowRippleIcon className='fill-white w-6 h-6' />,
      link: 'typography',
      sub: 'Interactive',
      unlocked: false,
      complete: false,
    },
    {
      title: 'Brand Development Lab',
      icons: <CursorArrowRippleIcon className='fill-white w-6 h-6' />,
      link: 'brand-development-lab',
      sub: 'Interactive',
      unlocked: false,
      complete: false,
    },
    {
      title: 'Style Guide Lab',
      icons: <CursorArrowRippleIcon className='fill-white w-6 h-6' />,
      link: 'style-guide-lab',
      sub: 'Interactive',
      unlocked: false,
      complete: false,
    },
    {
      title: 'Conclusion and Bonus Content',
      icons: <BoltIcon className='fill-white w-6 h-6' />,
      link: 'conclusion-and-bonus-content',
      sub: 'Bonus Content',
      unlocked: false,
      complete: false,
    },
  ];

  const objectives = [
    {
      obj: 'Learn design terminology, key design theories, and materials',
      icon: <AcademicCapIcon className='w-6 h-6 stroke-clemson' />,
    },
    {
      obj: 'Optimize your design efforts for efficiency',
      icon: <RocketLaunchIcon className='w-6 h-6 stroke-clemson' />,
    },
    {
      obj: 'Define methodology and understand design criteria',
      icon: <LightBulbIcon className='w-6 h-6 stroke-clemson' />,
    },
  ];

  return (
    <div className='bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] bg-no-repeat from-white dark:from-dark-dark dark:via-dark-mid dark:to-base-dark via-base-light  to-white flex flex-col pt-24'>
      <div className='w-full h-full'>
        <div className='grid grid-cols-2 lg:grid-cols-12 max-w-6xl mx-auto bg-white dark:bg-black/40 backdrop-blur-xl p-16 rounded-t-lg shadow-xl'>
          <div className='dark:text-white flex flex-col justify-center gap-6 w-full h-full col-span-7'>
            <h2 className='text-5xl'>Branding Basics</h2>
            <p className='dark:text-neutral-400 text-lg text-gray-700 max-w-prose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              purus eu felis interdum bibendum. Sed dictum tristique lacus
              sagittis euismod. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis nec purus eu felis interdum bibendum. Sed
              dictum tristique lacus sagittis euismod.
            </p>
            <h3 className='text-xl mt-3'>Learning Objectives</h3>
            <div className='flex flex-col gap-2'>
              {objectives.map((obj) => (
                <div className='flex gap-2 items-center' key={obj.obj}>
                  <div>{obj.icon}</div>
                  <div className='dark:text-neutral-400 text-gray-700 text-lg'>
                    {obj.obj}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full col-span-5'>
            <Lottie animationData={brandingAnimation} loop={true} />
          </div>
        </div>
        <div className='w-full h-full max-w-6xl mx-auto pb-24'>
          <div className='flex flex-1 p-4 bg-base-dark backdrop-blur-lg rounded-b-lg'>
            <div className='flex flex-1'>
              <div className='grid grid-cols-7 gap-3 w-full items-center justify-center'>
                {modules.map((mod, i) => (
                  <div
                    className={`${
                      mod.unlocked && !mod.complete
                        ? 'bg-base-brand hover:bg-indigo-500'
                        : mod.unlocked && mod.complete
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-neutral-200'
                    } aspect-[1/1] w-full shadow-md rounded-lg relative cursor-pointer transition-colors ease-linear`}
                    key={mod.link}
                    onClick={() =>
                      router.push(
                        `/curriculum/cps/cps-12/branding-basics/${mod.link}`
                      )
                    }
                  >
                    <div className='flex flex-col justify-between h-full py-1.5 px-3'>
                      <div className='w-full flex justify-between items-start'>
                        <div>
                          {mod.unlocked && !mod.complete ? (
                            <LockOpenIcon className='w-5 h-5 fill-white/70' />
                          ) : mod.unlocked && mod.complete ? (
                            <div className='flex items-center gap-1.5'>
                              <div className='w-8 h-8 bg-green-700 rounded-full flex items-center justify-center'>
                                <CheckIcon className='fill-white w-5 h-5' />
                              </div>
                              <div className='text-white text-lg'>+1</div>
                            </div>
                          ) : (
                            <LockClosedIcon className='w-5 h-5 fill-neutral-400' />
                          )}
                        </div>
                        <div
                          className={`${
                            mod.unlocked
                              ? 'font-bold text-2xl text-white'
                              : 'text-xl font-bold text-neutral-400'
                          }`}
                        >
                          {i + 1}
                        </div>
                      </div>
                      <div
                        className={`${
                          mod.unlocked
                            ? 'font-bold text-white'
                            : 'font-bold text-neutral-400'
                        } leading-tight pb-1`}
                      >
                        {mod.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
