import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
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
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  PlayCircleIcon,
  ChevronDoubleDownIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

import NewCouseCard from '../shared/NewCouseCard';

const UnileverCourses = ({ supportLinks, id, courses }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isSearchCourses, setIsSearchCourses] = useState('');

  const { allCourses } = useSelector((state) => state.course_filter);
  /////////Forget all this, just pass the courses array, sort by clicks, populate the NewCourseCard inside each one

  const initCourses = useMemo(() => {
    // Filter allCourses by a sorted by click count Courses array
    // const filtered = allCourses.filter((c) =>
    //   courses.find((s) => s.courseId === c.id)
    // );
    const filtered = courses.map((c) => {
      const matchedCourse = allCourses.find((ac) => ac.id === c.courseId);
      return {
        ...c,
        ...matchedCourse,
      };
    });
    return filtered;
  }, [courses, allCourses]);

  const coursesToShow = useMemo(() => {
    // Switch Suport Links to Filtered after we have that set
    return initCourses
      .sort((a, b) => b.clicks - a.clicks)
      .filter(
        (o) =>
          o.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
          o.subheadline.toLowerCase().includes(isSearchTerm.toLowerCase())
      );
  }, [initCourses, isSearchTerm]);

  return (
    <motion.section className='px-0 lg:px-6 w-full flex flex-col gap-6'>
      <div className='border-y border-y-neutral-400'>
        <div className='flex justify-between items-center py-3'>
          {isActiveSearch ? (
            <div className='w-full'>
              <input
                type='text'
                className='w-full bg-transparent border-none focus:border-none focus:ring-0 py-0 placeholder:text-neutral-400'
                autoFocus
                value={isSearchTerm}
                onChange={(e) => setIsSearchTerm(e.target.value)}
                id='search'
                name='search'
                placeholder='Enter search term'
              />
            </div>
          ) : (
            <div
              className='flex items-center gap-1.5 cursor-pointer'
              onClick={() => setIsActiveSearch(true)}
            >
              <div>
                <MagnifyingGlassIcon className='w-5 h-5 fill-neutral-500' />
              </div>
              <div className='uppercase text-sm text-neutral-500 text-small font-semibold'>
                Search
              </div>
            </div>
          )}

          <div className='flex items-center gap-1.5'>
            <div
              className={`uppercase text-sm text-neutral-500 text-small font-semibold ${
                isActiveSearch ? 'hidden' : 'block'
              }`}
            >
              Sort
            </div>
            {isActiveSearch ? (
              <div onClick={() => setIsActiveSearch(false)}>
                <XMarkIcon className='w-5 h-5 fill-neutral-500' />
              </div>
            ) : (
              <div>
                <ArrowsUpDownIcon className='w-5 h-5 fill-neutral-500' />
              </div>
            )}
          </div>
        </div>
      </div>

      {isActiveSearch ? (
        <motion.div className='w-full flex items-center justify-center'>
          <div className='w-full h-full flex justify-center items-center'>
            {isSearchTerm.trim() === '' || coursesToShow.length === 0 ? (
              <div className='flex flex-col items-center py-3'>
                <div className='font-bold text-neutral-800'>
                  No Results Found.
                </div>
                <div className='text-neutral-600 text-center'>
                  Please refine your search above.
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 pb-9'>
                {coursesToShow.map((link) => (
                  <NewCouseCard
                    key={link.id}
                    title={link.title}
                    description={link.subheadline}
                    background={link.seoImage}
                    link={link.link}
                    link_text={'Select Course'}
                    Icon={SparklesIcon}
                    video={link.preview}
                    courseId={link.id}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div className='w-full grid lg:grid-cols-3 gap-12 pb-3 mt-9 overflow-hidden col-span-2'>
          <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg shadow-lg'>
            <div className='rounded-lg'>
              <div
                className='w-full aspect-[16/9] rounded-lg justify-center items-center flex bg-cover bg-center relative'
                style={{
                  backgroundImage: `url("https://packschool.s3.amazonaws.com/unilever-brands-1.png")`,
                }}
              >
                <motion.div className='absolute left-1 top-1 md:left-4 md:top-4 w-fit z-[2] bg-neutral-600/40 backdrop-blur-md rounded-lg px-2 py-1.5 shadow'>
                  <motion.div className='flex items-center gap-2'>
                    <motion.div>
                      <StarIcon className='w-5 h-5 fill-white' />
                    </motion.div>
                    <motion.div className='text-white font-bold'>
                      Featured Course
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div className='w-20 h-20 bg-white/40 backdrop-blur-lg hover:bg-clemson transition-colors ease-in rounded-full shadow-xl flex justify-center items-center cursor-pointer'>
                  <PlayCircleIcon className='w-20 h-20' />
                </motion.div>
              </div>
            </div>
            <div className='w-full flex justify-center items-center px-6 lg:px-0'>
              <motion.div className='flex flex-col gap-3 py-9'>
                <motion.div className='font-semibold text-2xl lg:text-3xl max-w-sm tracking-tight leading-none'>
                  Unilever Packaging Bootcamp 101
                </motion.div>
                <motion.div className='leading-snug lg:text-lg line-clamp-4 text-neutral-600 max-w-md'>
                  This Boot Camp will serve as an introduction to the packaging
                  industry and provide the fundamental knowledge necessary to
                  get you up to speed.
                </motion.div>
                <motion.div className='bg-black text-white font-bold w-fit rounded-lg px-6 py-2 mt-2 cursor-pointer'>
                  Select Course
                </motion.div>
              </motion.div>
            </div>
          </div>
          <NewCouseCard
            title={initCourses[0].title}
            description={initCourses[0].subheadline}
            background={initCourses[0].seoImage}
            link={initCourses[0].link}
            link_text={'Select Course'}
            Icon={SparklesIcon}
            callout={'Most Popular'}
            video={initCourses[0].preview}
          />
          <NewCouseCard
            title={initCourses[1].title}
            description={initCourses[1].subheadline}
            background={initCourses[1].seoImage}
            link={initCourses[1].link}
            link_text={'Select Course'}
            Icon={SparklesIcon}
            callout={'Most Popular'}
            video={initCourses[1].preview}
          />
          <NewCouseCard
            title={initCourses[2].title}
            description={initCourses[2].subheadline}
            background={initCourses[2].seoImage}
            link={initCourses[2].link}
            link_text={'Select Course'}
            Icon={SparklesIcon}
            callout={'Most Popular'}
            video={initCourses[2].preview}
          />
        </div>
      )}

      {!isActiveSearch && isExpanded ? (
        <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 pb-9'>
          {initCourses
            .slice(3)
            .sort((a, b) => a.courseId.localeCompare(b.courseId))
            .map((link) => (
              <NewCouseCard
                key={link.id}
                title={link.title}
                description={link.subheadline}
                background={link.seoImage}
                link={link.link}
                link_text={'Select Course'}
                Icon={SparklesIcon}
                video={link.video}
                courseId={link.id}
              />
            ))}
        </div>
      ) : (
        <div></div>
      )}

      {!isActiveSearch && (
        <div
          className='w-full flex justify-center mb-12'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className='flex items-center gap-2 bg-clemson hover:bg-clemson-dark cursor-pointer text-white px-6 py-3 rounded-lg font-semibold shadow-md'>
            <div>{isExpanded ? 'Hide Courses' : 'Show All Courses'}</div>
            <div>
              <ChevronDoubleDownIcon
                className={`w-5 h-5 fill-white transition-all ease-in ${
                  isExpanded ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default UnileverCourses;
