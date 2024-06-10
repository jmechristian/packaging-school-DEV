import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import * as Icons from '@heroicons/react/24/solid';
import {
  MdApps,
  MdDehaze,
  MdSort,
  MdOutlineSearch,
  MdAutorenew,
} from 'react-icons/md';
import Meta from './Meta';
import LessonTableItem from './LessonTableItem';
import LessonCardItem from './LessonCardItem';
import LMSCourseCard from './LMSCourseCard';
import SortToggleItem from './SortToggleItem';
import BrutalCircleIconTooltip from './BrutalCircleIconTooltip';
import Pagination from './Pagination';
import { createCourseSearch } from '../../src/graphql/mutations';
import { listLMSCourses } from '../../src/graphql/queries';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const SearchableLessonContainer = ({
  lessons,
  cash,
  title,
  open,
  table,
  bg,
  text,
  Icon,
  highlight,
}) => {
  const router = useRouter();
  const pageSize = 6;

  const { location } = useSelector((state) => state.auth);

  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [isFilters, setIsFilters] = useState([]);
  const [openSort, setOpenSort] = useState(false);
  const [isTable, setIsTable] = useState(table);
  const [isOpen, setIsOpen] = useState(open);
  const [isLessons, setisLessons] = useState(lessons ? lessons : []);
  const [isCurrentPage, setIsCurrentPage] = useState(1);
  const [isTooltip, setTooltip] = useState('');

  const containerTop = useRef();

  function parseDate(dateString) {
    return new Date(dateString);
  }

  const isInFilterArray = (value) => {
    return isFilters.includes(value);
  };

  const filterClickHandler = (value) => {
    if (value === 'ALL') {
      setIsFilters([]);
    }

    if (value != 'ALL' && isFilters.includes(value)) {
      setIsFilters([...isFilters].filter((val) => val != value));
    }

    if (value != 'ALL' && !isFilters.includes(value)) {
      setIsFilters((prevState) => [...prevState, value]);
    }
  };

  const [isSort, setIsSort] = useState({
    value: 'course id',
    direction: 'ASC',
  });

  //   const filtered = useMemo(() => {
  //     if (isFilters.length === 0) {
  //       return isCourses;
  //     }

  //     if (isFilters.length > 0) {
  //       return isCourses.filter(
  //         (course) =>
  //           course.categoryArray.some((category) =>
  //             isFilters.includes(category)
  //           ) || isFilters.includes(course.type)
  //       );
  //     }
  //   }, [isCourses, isFilters]);

  const sortedLessons = useMemo(() => {
    return (
      isLessons.length > 0 &&
      isLessons.sort((a, b) => {
        const dateA = a.backdate
          ? parseDate(a.backdate)
          : parseDate(a.createdAt);
        const dateB = b.backdate
          ? parseDate(b.backdate)
          : parseDate(b.createdAt);
        return dateB - dateA;
      })
    );
  }, [isLessons]);

  const lessonsToShow = useMemo(() => {
    if (!isSearchTerm && sortedLessons) {
      return sortedLessons;
    }

    if (isSearchTerm && sortedLessons) {
      return sortedLessons.filter(
        (cour) =>
          cour.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
          cour.subhead.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
          (cour.content &&
            cour.content.toLowerCase().includes(isSearchTerm.toLowerCase()))
      );
    }
  }, [isSearchTerm, sortedLessons]);

  const GFG = (array, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  };

  const paginatedItems = useMemo(() => {
    if (lessonsToShow.length > 0) {
      const currentPageData = GFG(lessonsToShow, isCurrentPage, pageSize);
      return currentPageData;
    }
  }, [lessonsToShow, isCurrentPage]);

  //   useEffect(() => {
  //     const sendSearchTracking = async () => {
  //       await API.graphql({
  //         query: createCourseSearch,
  //         variables: {
  //           input: {
  //             country: location.country,
  //             ipAddress: location.ip,
  //             term: isSearchTerm,
  //           },
  //         },
  //       });
  //     };

  //     isSearchTerm.length > 3 &&
  //       sortedAndSearchedCourses.length === 0 &&
  //       sendSearchTracking();
  //   }, [isSearchTerm, location, sortedAndSearchedCourses]);

  return (
    <>
      <Meta
        title={'Packaging School Courses'}
        description={
          'Browse the extensive catalog of Packaging School course covering subjects from Business, Design, Materials, Food and Beverage, Supply Chain and Logistics, Automotive, and Industry.'
        }
        image={'https://packschool.s3.amazonaws.com/all-courses-seoImage.webp'}
      />
      <div className='max-w-7xl mx-auto '>
        <div className='w-full flex flex-col'>
          {/* HEADING */}
          <div
            className={`w-full px-3 md:px-6 py-8 flex justify-between items-end ${bg} ${text} border-2 border-black`}
          >
            <div className='flex items-center gap-2'>
              <div
                className={`w-10 h-10 flex justify-center items-center ${highlight} rounded-full shadow`}
              >
                <Icon
                  className={`stroke-white w-7 h-7 transition-all ease-in`}
                />
              </div>
              <div className='h3-base'>{title}</div>
              {cash && (
                <motion.div
                  className='w-5 h-5 rounded-full relative'
                  onMouseEnter={() => setTooltip('Purchase Required')}
                  onMouseLeave={() => setTooltip('')}
                >
                  {isTooltip && (
                    <AnimatePresence>
                      <motion.div
                        className='ease-in absolute bottom-full px-2 py-0.5 rounded-lg text-sm bg-neutral-900 text-white whitespace-nowrap w-fit z-10 mb-1'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={isTooltip}
                      >
                        {isTooltip}
                      </motion.div>
                    </AnimatePresence>
                  )}
                  <Icons.CurrencyDollarIcon className='w-5 h-5 fill-green-700 bg-white rounded-full' />
                </motion.div>
              )}
            </div>
            <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <ChevronDownIcon
                className={`w-7 h-7 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                } transition-all ease-in`}
              />
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <div>
                <div
                  className='grid grid-cols-3 border-2 border-black p-6 gap-2.5 bg-neutral-200'
                  ref={containerTop}
                >
                  {/* SEARCH */}
                  <div className='w-full col-span-3 lg:col-span-2 border-2 border-black'>
                    <div className='flex gap-2 items-center'>
                      <input
                        type='text'
                        className='w-full flex border-none ring-0 focus:ring-0'
                        placeholder='Search Courses'
                        value={isSearchTerm}
                        onChange={(e) => setIsSearchTerm(e.target.value)}
                      />
                      <div>
                        <MdOutlineSearch size={28} />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-3 lg:col-span-1 flex justify-end gap-5 relative w-full'>
                    <div className='grid grid-cols-2 w-fit'>
                      <div
                        className={`w-10 h-full ${
                          isTable ? 'bg-black' : 'bg-neutral-300'
                        } flex items-center justify-center cursor-pointer`}
                        onClick={() => setIsTable(true)}
                      >
                        <MdDehaze
                          color={isTable ? 'white' : 'gray'}
                          size={24}
                        />
                      </div>
                      <div
                        className={`w-10 h-full ${
                          isTable ? 'bg-neutral-300' : 'bg-black'
                        } flex items-center justify-center cursor-pointer`}
                        onClick={() => setIsTable(false)}
                      >
                        <MdApps color={isTable ? 'gray' : 'white'} size={24} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-2 border-black px-6 py-9'>
                  {paginatedItems && paginatedItems.length > 0 && isTable ? (
                    <div className='flex flex-col gap-2'>
                      {paginatedItems.map((less) => (
                        <LessonTableItem less={less} key={less.id} />
                      ))}
                    </div>
                  ) : paginatedItems &&
                    paginatedItems.length > 0 &&
                    !isTable ? (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 lg:gap-10'>
                      {paginatedItems.map((less) => (
                        <LessonCardItem less={less} key={less.id} />
                      ))}
                    </div>
                  ) : (
                    <div className='w-full text-center animate-pulse'>
                      Gathering Intel...
                    </div>
                  )}
                  <div className='w-full flex justify-center items-center gap-1 mt-10 '>
                    <Pagination
                      totalItems={lessonsToShow && lessonsToShow.length}
                      itemsPerPage={pageSize}
                      currentPage={isCurrentPage}
                      onPageChange={(page) => {
                        setIsCurrentPage(page);
                        containerTop.current?.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SearchableLessonContainer;
