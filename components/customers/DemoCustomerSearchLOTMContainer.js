import { useState, useMemo } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  PlayCircleIcon,
  ChevronDoubleDownIcon,
  StarIcon,
  XMarkIcon,
  BoltIcon as Bolt,
} from '@heroicons/react/24/solid';
import WiredLessonCardToo from '../shared/WiredLessonCardToo';
import { registgerLessonClick } from '../../helpers/api';
import LessonCardItem from '../shared/LessonCardItem';

const createDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

const DemoCustomerSearchLOTMContainer = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const { location } = useSelector((state) => state.auth);
  const { allLessons } = useSelector((state) => state.course_filter);

  const lessonsToShow = useMemo(() => {
    const lotm =
      allLessons &&
      [...allLessons]
        .filter((less) => less.type === 'LOTM')
        .sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          }
          if (a.createdAt > b.createdAt) {
            return -1;
          }
        });

    return lotm.filter(
      (o) =>
        o.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
        o.subhead.toLowerCase().includes(isSearchTerm.toLowerCase())
    );
  }, [allLessons, isSearchTerm]);

  const lessonClickHandler = async () => {
    await registgerLessonClick(
      lessonsToShow[0].id,
      router.asPath,
      location,
      'LIBRARY'
    );
    window.open(`/lessons/${lessonsToShow[0].slug}`, '_blank');
  };

  return (
    <motion.section className='px-0 w-full flex flex-col'>
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
              <div
                onClick={() => {
                  setIsActiveSearch(false);
                  setIsSearchTerm('');
                }}
              >
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
            {isSearchTerm.trim() === '' || lessonsToShow.length === 0 ? (
              <div className='flex flex-col items-center py-3'>
                <div className='font-bold text-neutral-800'>
                  No Results Found.
                </div>
                <div className='text-neutral-600 text-center'>
                  Please refine your search above.
                </div>
              </div>
            ) : (
              <div className='px-0 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 my-9 overflow-hidden'>
                {lessonsToShow.map((link) => (
                  <WiredLessonCardToo
                    key={link.id}
                    id={link.id}
                    Icon={BookOpenIcon}
                    callout={createDate(link.createdAt)}
                    link_text={'View Lesson'}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div className='flex flex-col gap-12 justify-center items-center w-full mx-auto'>
          <div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 my-9'>
            <LessonCardItem less={lessonsToShow[0]} />
            <LessonCardItem less={lessonsToShow[1]} />
            <LessonCardItem less={lessonsToShow[2]} />
          </div>
        </div>
      )}

      {!isActiveSearch && isExpanded ? (
        <div className='px-0 lg:px-6 w-fit mx-auto grid gap-12 md:gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 md:pb-10 my-9'>
          {lessonsToShow
            .slice(4)
            .filter((cou) => cou.type === 'LOTM')
            .map((cou) => (
              <LessonCardItem key={cou.id} less={cou} />
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
          <div className='flex items-center gap-2 bg-clemson hover:bg-clemson-dark cursor-pointer text-white px-6 py-3 rounded-xl font-semibold shadow-md'>
            <div>{isExpanded ? 'Hide Courses' : 'Show All Lessons'}</div>
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

export default DemoCustomerSearchLOTMContainer;
