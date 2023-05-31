import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import VideoPlayer from '../VideoPlayer';
import GradientCTA from '../GradientCTA';

export default function AndrewVideo() {
  return (
    <div className='bg-gray-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-base font-semibold font-greycliff leading-7 text-clemson'>
            Video Lecture Series
          </h2>
          <p className='mt-2 text-3xl font-greycliff font-bold tracking-tight text-white sm:text-4xl'>
            Does Packaging Affect Value?
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            In this popular video lecture, Dr. Hurley explains how this common
            spice can have a different price . . . all because of PACKAGING. 
          </p>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 aspect-[16/9]'>
          <VideoPlayer
            videoEmbedLink={'https://www.youtube.com/watch?v=KHll9z_-g9o'}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]' />
          </div>
        </div>
      </div>
    </div>
  );
}
