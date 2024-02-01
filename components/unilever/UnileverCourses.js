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

const UnileverCourses = ({ courses }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isSearchCourses, setIsSearchCourses] = useState('');

  const { allCourses } = useSelector((state) => state.course_filter);

  const initCourses = useMemo(() => {
    const filtered =
      courses &&
      courses.length > 0 &&
      courses.map((c) => {
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
    initCourses &&
      initCourses.length > 0 &&
      initCourses
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
                {coursesToShow &&
                  coursesToShow.length > 0 &&
                  coursesToShow.map((link) => (
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
        <div className='w-fit lg:pb-9 mx-auto md:px-6 grid gap-12 md:gap-x-6 md:gap-y-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 pb-3 my-9 overflow-hidden items-center'>
          <NewCouseCard
            title={'Uniliever Packaging Bootcamp 101'}
            description={
              'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.'
            }
            background={
              'https://packschool.s3.amazonaws.com/unilever-brands-1.png'
            }
            link={'#'}
            link_text={'Select Course'}
            Icon={RocketLaunchIcon}
            callout={'Unilever Developed'}
            video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
            id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
          />
          {coursesToShow && coursesToShow.length > 0 && (
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
          )}
          {coursesToShow && coursesToShow.length > 0 && (
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
          )}
          {coursesToShow && coursesToShow.length > 0 && (
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
          )}
        </div>
      )}

      {!isActiveSearch && isExpanded ? (
        <div className='w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 pb-3 mb-9 overflow-hidden lg:pb-9'>
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

      {!isActiveSearch && coursesToShow && coursesToShow.length > 3 && (
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
