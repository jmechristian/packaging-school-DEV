import React from 'react';
import {
  ClockIcon,
  AcademicCapIcon,
  FilmIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const RelatedCourse = ({
  title,
  hours,
  lessons,
  videos,
  price,
  categories,
  slug,
  reset,
}) => {
  const router = useRouter();

  const backgroundColor = () => {
    switch (categories[0].category) {
      case 'Material':
        return 'bg-blue-700';
      case 'Industry':
        return 'bg-red-800';
      case 'Design':
        return 'bg-green-800';
      case 'Food & Beverage':
        return 'bg-cyan-900';
      case 'Supply Chain & Logistics':
        return 'bg-fuchsia-700';
      case 'Business':
        return 'bg-violet-800';
    }
  };

  const courseClickHandler = async () => {
    await router.push(`/courses/${slug}`);
    reset();
  };

  return (
    <div className='w-80 bg-gray-300 rounded-md min-h-full relative'>
      <div className='flex flex-col w-full'>
        <div className='aspect-video bg-black relative cursor-scroll-all'>
          <div className={`${backgroundColor()} rounded absolute left-3 top-3`}>
            <div className='py-1 px-2 text-white font-semibold text-sm'>
              {categories[0].category}
            </div>
          </div>
        </div>
        <div className='px-3 pt-5 pb-16 flex flex-col gap-2 w-full relative'>
          <div className='flex flex-col gap-1'>
            <div className='font-bold text-xl'>{title}</div>
            <div className='flex flex-row gap-3 items-center'>
              <div className='flex gap-1 items-center'>
                <ClockIcon className='w-4 h-4 stroke-base-brand' />
                <div className='text-gray-600 text-sm'>{hours} Hours</div>
              </div>
              <div className='flex gap-1 items-center'>
                <AcademicCapIcon className='w-4 h-4 stroke-base-brand' />
                <div className='text-gray-600 text-sm'>{lessons} Lessons</div>
              </div>
              <div className='flex gap-1 items-center'>
                <FilmIcon className='w-4 h-4 stroke-base-brand' />
                <div className='text-gray-600 text-sm'>{videos} Videos</div>
              </div>
            </div>
          </div>
          <div className='font-bold text-xl'>${price}</div>
        </div>
      </div>
      <div
        className='flex w-full justify-end absolute bottom-3 right-3 cursor-pointer'
        onClick={courseClickHandler}
      >
        <div className='bg-white hover:border hover:border-black rounded flex gap-1 py-1 px-3 items-center'>
          <div className='uppercase font-semibold text-sm'>View Course</div>
          <ArrowSmallRightIcon className='w-4 h-4 stroke-black' />
        </div>
      </div>
    </div>
  );
};

export default RelatedCourse;
