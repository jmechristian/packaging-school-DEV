import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
  AcademicCapIcon,
  ArchiveBoxIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  SwatchIcon,
  TruckIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SignalIcon,
  BoltSlashIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  PlayCircleIcon,
  ChevronDoubleDownIcon,
  StarIcon,
  XMarkIcon,
  BoltIcon,
} from '@heroicons/react/24/solid';

import NewCouseCard from '../shared/NewCouseCard';

const CustomerSearchContainer = ({ courses }) => {
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
        targetedId: c.id,
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
    <motion.section className='px-0 lg:px-6 w-full flex flex-col gap-12'>
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
      {/* SEARCH */}
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
              <div className='w-fit mx-auto grid gap-20 lg:grid-cols-3 pb-3 mt-9 overflow-hidden'>
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
                    targetedId={link.targetedId}
                    tracked={true}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div className='flex flex-col gap-12 justify-center items-center w-full max-w-[996px] mx-auto'>
          <div className='md:col-span-2 xl:col-span-3 grid overflow-hidden grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-lg max-w-[300px] md:max-w-none'>
            <div className='w-full rounded-xl flex items-center'>
              <div
                className='w-full aspect-[16/9] rounded-xl justify-center items-center flex bg-cover bg-center relative'
                style={{
                  backgroundImage: `url("https://packschool.s3.amazonaws.com/spc-seoImage-2.png")`,
                }}
              >
                <motion.div className='absolute left-4 top-4 w-fit z-[2] bg-neutral-600/40 backdrop-blur-md rounded-xl px-2 py-1.5 shadow'>
                  <motion.div className='flex items-center gap-2'>
                    <motion.div>
                      <BoltIcon className='w-5 h-5 fill-white' />
                    </motion.div>
                    <motion.div className='text-white font-bold'>
                      Featured
                    </motion.div>
                  </motion.div>
                </motion.div>
                {/* <motion.div className='w-20 h-20 bg-white/40 backdrop-blur-lg hover:bg-clemson transition-colors ease-in rounded-full shadow-xl flex justify-center items-center cursor-pointer'>
                <PlayCircleIcon className='w-20 h-20' />
              </motion.div> */}
              </div>
            </div>
            <div className='w-full flex justify-center items-center px-6'>
              <motion.div className='flex flex-col gap-3 py-9 lg:py-12'>
                <motion.div className='font-semibold text-2xl lg:text-3xl max-w-sm md:max-w-full tracking-tight leading-none'>
                  SPC’s Bioplastics Topic
                </motion.div>
                <motion.div className='leading-snug line-clamp-4 text-neutral-600 max-w-md md:max-w-full'>
                  Welcome to SPC’s Knowledge Library about Bioplastics. In this
                  topic, we will explore what bioplastics are and how we can
                  think about them in the context of sustainable packaging.
                </motion.div>
                <motion.div
                  className='bg-black text-white font-bold w-fit rounded-xl px-6 py-2 mt-2 cursor-pointer'
                  onClick={() =>
                    window.open(
                      'https://learn.packagingschool.com/enroll/2753655?price_id=3579258',
                      '_blank'
                    )
                  }
                >
                  View Lesson
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className='course-card-grid'>
            <NewCouseCard
              title={initCourses[0].title}
              description={initCourses[0].subheadline}
              background={initCourses[0].seoImage}
              link={initCourses[0].link}
              link_text={'Select Course'}
              Icon={SparklesIcon}
              callout={'Most Popular'}
              video={initCourses[0].preview}
              clicks={initCourses[0].clicks}
              targetedId={initCourses[0].targetedId}
              tracked={true}
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
              clicks={initCourses[1].clicks}
              targetedId={initCourses[1].targetedId}
              tracked={true}
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
              clicks={initCourses[2].clicks}
              targetedId={initCourses[2].targetedId}
              tracked={true}
            />
          </div>
        </div>
      )}

      {!isActiveSearch && isExpanded ? (
        <div className='course-card-grid'>
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
                video={link.preview}
                courseId={link.id}
                clicks={link.clicks}
                targetedId={link.targetedId}
                tracked={true}
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

export default CustomerSearchContainer;
