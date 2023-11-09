import { useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
  AcademicCapIcon,
  ArchiveBoxIcon,
  BoltIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  SwatchIcon,
  TruckIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SignalIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

import CourseCardVideoHeader from '../shared/CourseCardVideoHeader';
import NewCouseCard from '../shared/NewCouseCard';

import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  PlayCircleIcon,
  ChevronDoubleDownIcon,
  StarIcon,
  BoltIcon as Bolt,
} from '@heroicons/react/24/solid';

const createDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

const UnileverLessons = ({ supportLinks }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(supportLinks);
  return (
    <motion.section className='px-0 lg:px-6 w-full flex flex-col gap-6'>
      <div className='border-y border-y-neutral-400'>
        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center gap-1.5'>
            <div>
              <MagnifyingGlassIcon className='w-5 h-5 fill-neutral-500' />
            </div>
            <div className='uppercase text-sm text-neutral-500 text-small font-semibold'>
              Search
            </div>
          </div>
          <div className='flex items-center gap-1.5'>
            <div className='uppercase text-sm text-neutral-500 text-small font-semibold'>
              Sort
            </div>
            <div>
              <ArrowsUpDownIcon className='w-5 h-5 fill-neutral-500' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full grid lg:grid-cols-3 gap-12 pb-3 my-9 overflow-hidden col-span-2'>
        <div className='lg:col-span-3 grid lg:grid-cols-2 w-full bg-white rounded-lg shadow-lg'>
          <div className='w-full rounded-lg'>
            <div
              className='w-full aspect-[16/9] rounded-lg justify-center items-center flex bg-cover bg-center relative'
              style={{
                backgroundImage: `url(${supportLinks[0].seoImage})`,
              }}
            >
              <motion.div className='absolute left-4 top-4 w-fit z-[2] bg-neutral-600/40 backdrop-blur-md rounded-lg px-2 py-1.5 shadow'>
                <motion.div className='flex items-center gap-2'>
                  <motion.div>
                    <Bolt className='w-5 h-5 fill-white' />
                  </motion.div>
                  <motion.div className='text-white font-bold'>
                    Latest Release
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* <motion.div className='w-20 h-20 bg-white/40 backdrop-blur-lg hover:bg-clemson transition-colors ease-in rounded-full shadow-xl flex justify-center items-center cursor-pointer'>
                <PlayCircleIcon className='w-20 h-20' />
              </motion.div> */}
            </div>
          </div>
          <div className='w-full flex justify-center items-center px-6 lg:px-0'>
            <motion.div className='flex flex-col gap-3 py-9'>
              <motion.div className='font-semibold text-sm uppercase text-base-mid'>
                {createDate(supportLinks[0].createdAt)}
              </motion.div>
              <motion.div className='font-semibold text-2xl lg:text-3xl max-w-sm tracking-tight leading-none'>
                {supportLinks[0].title}
              </motion.div>
              <motion.div className='leading-snug lg:text-lg line-clamp-4 text-neutral-600 max-w-md'>
                {supportLinks[0].subhead}
              </motion.div>
              <motion.div
                className='bg-black text-white font-bold w-fit rounded-lg px-6 py-2 mt-2 cursor-pointer'
                onClick={() =>
                  window.open(`/lessons/${supportLinks[0].slug}`, '_blank')
                }
              >
                View Lesson
              </motion.div>
            </motion.div>
          </div>
        </div>
        <NewCouseCard
          title={supportLinks[1].title}
          description={supportLinks[1].subhead}
          background={supportLinks[1].seoImage}
          link={`/lessons/${supportLinks[1].slug}`}
          link_text={'View Lesson'}
          callout={createDate(supportLinks[1].createdAt)}
          Icon={BookOpenIcon}
        />
        <NewCouseCard
          title={supportLinks[2].title}
          description={supportLinks[2].subhead}
          background={supportLinks[2].seoImage}
          link={`/lessons/${supportLinks[2].slug}`}
          link_text={'View Lesson'}
          callout={createDate(supportLinks[2].createdAt)}
          Icon={BookOpenIcon}
        />
        <NewCouseCard
          title={supportLinks[3].title}
          description={supportLinks[3].subhead}
          background={supportLinks[3].seoImage}
          link={`/lessons/${supportLinks[3].slug}`}
          link_text={'View Lesson'}
          video={'https://www.youtube.com/watch?v=ABLmndzcET4'}
          callout={createDate(supportLinks[3].createdAt)}
          Icon={BookOpenIcon}
        />
      </div>
      {isExpanded ? (
        <div className='grid gap-y-16 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 pb-9 col-span-2'>
          {supportLinks.map((link) => (
            <NewCouseCard
              key={link.title}
              title={link.title}
              description={link.subhead}
              background={link.seoImage}
              link={`/lessons/${link.slug}`}
              link_text={'View Lesson'}
              callout={createDate(link.createdAt)}
              Icon={BookOpenIcon}
            />
          ))}
        </div>
      ) : (
        ''
      )}

      <div
        className='w-full flex justify-center mb-12'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className='flex items-center gap-2 bg-clemson hover:bg-clemson-dark cursor-pointer text-white px-6 py-3 rounded-lg font-semibold shadow-md'>
          <div>{isExpanded ? 'Hide LOTMs' : 'Show All LOTMs'}</div>
          <div>
            <ChevronDoubleDownIcon
              className={`w-5 h-5 fill-white transition-all ease-in ${
                isExpanded ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UnileverLessons;
