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
import WiredCourseCard from '../shared/WiredCourseCard';

const CustomerSearchContainer = ({ courses, reference }) => {
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
                  <WiredCourseCard
                    id={link.id}
                    external={false}
                    key={link.id}
                    reference={reference}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div className='flex flex-col gap-12 justify-center items-center w-full max-w-[996px] mx-auto'>
          <div className='course-card-grid'>
            <WiredCourseCard
              id={initCourses[0].id}
              external={true}
              key={initCourses[0].id}
              reference={reference}
            />
            <WiredCourseCard
              id={initCourses[1].id}
              external={true}
              key={initCourses[1].id}
              reference={reference}
            />
            <WiredCourseCard
              id={initCourses[2].id}
              external={true}
              key={initCourses[2].id}
              reference={reference}
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
              <WiredCourseCard
                id={link.id}
                external={true}
                key={link.id}
                reference={reference}
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
