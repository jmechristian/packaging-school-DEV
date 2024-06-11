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
import LMCCourseTableItem from './LMCCourseTableItem';
import LMSCourseCard from './LMSCourseCard';
import SortToggleItem from './SortToggleItem';
import BrutalCircleIconTooltip from './BrutalCircleIconTooltip';
import Pagination from './Pagination';
import { createCourseSearch } from '../../src/graphql/mutations';
import { getLMSCourse, listLMSCourses } from '../../src/graphql/queries';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const SearchableCourseContainer = ({
  courses,
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
  const pageSize = 9;

  const { location } = useSelector((state) => state.auth);

  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [isFilters, setIsFilters] = useState([]);
  const [openSort, setOpenSort] = useState(false);
  const [isTable, setIsTable] = useState(table);
  const [isOpen, setIsOpen] = useState(open);
  const [isCourses, setIsCourses] = useState([]);
  const [isCurrentPage, setIsCurrentPage] = useState(1);
  const [isTooltip, setTooltip] = useState('');
  const [isError, setIsError] = useState(false);

  const containerTop = useRef();

  async function fetchData(id) {
    const response = await API.graphql({
      query: getLMSCourse,
      variables: { id: id },
    });
    const data = await response.data.getLMSCourse;
    return data;
  }

  useEffect(() => {
    async function fetchAllData(ids) {
      const promises = ids.map((id) => fetchData(id.courseId));
      const results = await Promise.all(promises);
      return results;
    }

    fetchAllData(courses)
      .then((results) => {
        setIsCourses(results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [courses]);

  const [isSort, setIsSort] = useState({
    value: 'course id',
    direction: 'ASC',
  });

  const filtered = useMemo(() => {
    if (isCourses.length > 0) {
      return isCourses;
    }
  }, [isCourses]);

  const sortedCourses = useMemo(() => {
    if (isSort.value === 'title' && isSort.direction === 'ASC') {
      return (
        filtered && [...filtered].sort((a, b) => a.title.localeCompare(b.title))
      );
    }

    if (isSort.value === 'title' && isSort.direction === 'DSC') {
      return (
        filtered && [...filtered].sort((a, b) => b.title.localeCompare(a.title))
      );
    }

    if (isSort.value === 'category' && isSort.direction === 'ASC') {
      return (
        filtered &&
        [...filtered].sort((a, b) =>
          a.categoryArray[0].localeCompare(b.categoryArray[0])
        )
      );
    }

    if (isSort.value === 'category' && isSort.direction === 'DSC') {
      return (
        filtered &&
        [...filtered].sort((a, b) =>
          b.categoryArray[0].localeCompare(a.categoryArray[0])
        )
      );
    }

    if (isSort.value === 'course id' && isSort.direction === 'ASC') {
      return (
        filtered &&
        [...filtered].sort((a, b) => a.courseId.localeCompare(b.courseId))
      );
    }

    if (isSort.value === 'course id' && isSort.direction === 'DSC') {
      return (
        filtered &&
        [...filtered].sort((a, b) => b.courseId.localeCompare(a.courseId))
      );
    }

    if (isSort.value === 'lessons' && isSort.direction === 'DSC') {
      return filtered && [...filtered].sort((a, b) => b.lessons - a.lessons);
    }

    if (isSort.value === 'lessons' && isSort.direction === 'ASC') {
      return filtered && [...filtered].sort((a, b) => a.lessons - b.lessons);
    }

    if (isSort.value === 'hours' && isSort.direction === 'ASC') {
      return (
        filtered &&
        [...filtered].sort((a, b) => parseFloat(a.hours) - parseFloat(b.hours))
      );
    }

    if (isSort.value === 'hours' && isSort.direction === 'DSC') {
      return (
        filtered &&
        [...filtered].sort((a, b) => parseFloat(b.hours) - parseFloat(a.hours))
      );
    }

    if (isSort.value === 'price' && isSort.direction === 'ASC') {
      return (
        filtered &&
        [...filtered].sort((a, b) => parseInt(a.price) - parseInt(b.price))
      );
    }

    if (isSort.value === 'price' && isSort.direction === 'DSC') {
      return (
        filtered &&
        [...filtered].sort((a, b) => parseInt(b.price) - parseInt(a.price))
      );
    }
  }, [filtered, isSort]);

  const sortedAndSearchedCourses = useMemo(() => {
    if (!isSearchTerm && sortedCourses) {
      return sortedCourses;
    }

    if (isSearchTerm && sortedCourses) {
      return sortedCourses.filter(
        (cour) =>
          cour.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
          cour.subheadline.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
          (cour.what_learned &&
            cour.what_learned
              .toLowerCase()
              .includes(isSearchTerm.toLowerCase()))
      );
    }
  }, [isSearchTerm, sortedCourses]);

  const GFG = (array, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  };

  const paginatedItems = useMemo(() => {
    if (sortedAndSearchedCourses) {
      const currentPageData = GFG(
        sortedAndSearchedCourses,
        isCurrentPage,
        pageSize
      );
      return currentPageData;
    }
  }, [sortedAndSearchedCourses, isCurrentPage]);

  useEffect(() => {
    const sendSearchTracking = async () => {
      await API.graphql({
        query: createCourseSearch,
        variables: {
          input: {
            country: location.country,
            ipAddress: location.ip,
            term: isSearchTerm,
          },
        },
      });
    };

    isSearchTerm.length > 3 &&
      sortedAndSearchedCourses.length === 0 &&
      sendSearchTracking();
  }, [isSearchTerm, location, sortedAndSearchedCourses]);

  return (
    <>
      <Meta
        title={'Packaging School Courses'}
        description={
          'Browse the extensive catalog of Packaging School course covering subjects from Business, Design, Materials, Food and Beverage, Supply Chain and Logistics, Automotive, and Industry.'
        }
        image={'https://packschool.s3.amazonaws.com/all-courses-seoImage.webp'}
      />
      <div className='max-w-7xl mx-auto xl:px-0'>
        <div className='w-full flex flex-col'>
          {/* HEADING */}
          <div
            className={`w-full px-3 md:px-6 py-6 md:py-8 flex justify-between items-end ${bg} ${text} border-2 border-black`}
          >
            <div className='flex items-center gap-2 max-w-[70%]'>
              <div>
                <div
                  className={`w-10 h-10 flex justify-center items-center ${highlight} rounded-full shadow`}
                >
                  <Icon
                    className={`stroke-white w-7 h-7 transition-all ease-in`}
                  />
                </div>
              </div>
              <div className='h3-base relative'>{title}</div>
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
                <div className='border-2 border-black px-2 md:px-6 py-9'>
                  {paginatedItems && paginatedItems.length > 0 && isTable ? (
                    <div className='flex flex-col gap-2'>
                      <div className='hidden lg:grid lg:grid-cols-12 content-center gap-5 divide-x-black w-full px-2 py-2'>
                        <div className='col-span-4'>
                          <div className='grid grid-cols-4'>
                            <div
                              className={`${
                                isSort.value === 'course id' ? 'underline' : ''
                              } cursor-pointer col-span-1 text-sm font-semibold`}
                              onClick={() =>
                                setIsSort({
                                  value: 'course id',
                                  direction:
                                    isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                                })
                              }
                            >
                              Course Id
                            </div>
                            <div className='text-sm font-semibold col-span-3'>
                              <div>
                                <span
                                  className={`${
                                    isSort.value === 'category'
                                      ? 'underline'
                                      : ''
                                  } cursor-pointer`}
                                  onClick={() =>
                                    setIsSort({
                                      value: 'category',
                                      direction:
                                        isSort.direction === 'ASC'
                                          ? 'DSC'
                                          : 'ASC',
                                    })
                                  }
                                >
                                  Category
                                </span>{' '}
                                /{' '}
                                <span
                                  className={`${
                                    isSort.value === 'title' ? 'underline' : ''
                                  } cursor-pointer`}
                                  onClick={() =>
                                    setIsSort({
                                      value: 'title',
                                      direction:
                                        isSort.direction === 'ASC'
                                          ? 'DSC'
                                          : 'ASC',
                                    })
                                  }
                                >
                                  Title
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-1'>
                          <div className='text-sm font-semibold cursor-pointer'>
                            <div
                              className={`${
                                isSort.value === 'price' ? 'underline' : ''
                              } cursor-pointer`}
                              onClick={() =>
                                setIsSort({
                                  value: 'price',
                                  direction:
                                    isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                                })
                              }
                            >
                              Price
                            </div>
                          </div>
                        </div>
                        <div className='col-span-5'>
                          <div className='text-sm font-semibold'>
                            <div>Description</div>
                          </div>
                        </div>
                        <div className='col-span-2'>
                          <div className='grid grid-cols-3 w-full gap-3 text-center'>
                            <div className='text-sm font-semibold cursor-pointer'>
                              <div
                                className={`${
                                  isSort.value === 'hours' ? 'underline' : ''
                                } cursor-pointer`}
                                onClick={() =>
                                  setIsSort({
                                    value: 'hours',
                                    direction:
                                      isSort.direction === 'ASC'
                                        ? 'DSC'
                                        : 'ASC',
                                  })
                                }
                              >
                                Hours
                              </div>
                            </div>
                            <div className='text-sm font-semibold cursor-pointer'>
                              <div
                                className={`${
                                  isSort.value === 'lessons' ? 'underline' : ''
                                } cursor-pointer`}
                                onClick={() =>
                                  setIsSort({
                                    value: 'lessons',
                                    direction:
                                      isSort.direction === 'ASC'
                                        ? 'DSC'
                                        : 'ASC',
                                  })
                                }
                              >
                                Lessons
                              </div>
                            </div>

                            <div className='text-sm font-semibold'>
                              <div className='lg:hidden xl:block'>Preview</div>
                            </div>
                            <div className='text-sm font-semibold'></div>
                          </div>
                        </div>
                      </div>
                      <div className='grid lg:hidden grid-cols-6 content-center gap-5 divide-x-black w-full px-2 py-2'>
                        <div
                          className={`${
                            isSort.value === 'course id' ? 'underline' : ''
                          } cursor-pointer col-span-1 text-xs font-semibold`}
                          onClick={() =>
                            setIsSort({
                              value: 'course id',
                              direction:
                                isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                            })
                          }
                        >
                          Id
                        </div>
                        <div className='text-xs font-semibold col-span-2'>
                          <span
                            className={`${
                              isSort.value === 'category' ? 'underline' : ''
                            } cursor-pointer `}
                            onClick={() =>
                              setIsSort({
                                value: 'category',
                                direction:
                                  isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                              })
                            }
                          >
                            Category
                          </span>{' '}
                          /{' '}
                          <span
                            className={`${
                              isSort.value === 'title' ? 'underline' : ''
                            } cursor-pointer`}
                            onClick={() =>
                              setIsSort({
                                value: 'title',
                                direction:
                                  isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                              })
                            }
                          >
                            Title
                          </span>
                        </div>
                        <div className='col-span-3 w-full grid grid-cols-3 content-center text-right'>
                          <div
                            className={`${
                              isSort.value === 'hours' ? 'underline' : ''
                            } cursor-pointer col-span-1 text-xs font-semibold`}
                            onClick={() =>
                              setIsSort({
                                value: 'hours',
                                direction:
                                  isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                              })
                            }
                          >
                            Hours
                          </div>
                          <div
                            className={`${
                              isSort.value === 'lessons' ? 'underline' : ''
                            } cursor-pointer col-span-1 text-xs font-semibold`}
                            onClick={() =>
                              setIsSort({
                                value: 'lessons',
                                direction:
                                  isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                              })
                            }
                          >
                            Lessons
                          </div>
                          <div
                            className={`${
                              isSort.value === 'price' ? 'underline' : ''
                            } cursor-pointer col-span-1 text-xs font-semibold`}
                            onClick={() =>
                              setIsSort({
                                value: 'price',
                                direction:
                                  isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                              })
                            }
                          >
                            Price
                          </div>
                        </div>
                      </div>
                      {paginatedItems.map((course, i) => (
                        <LMCCourseTableItem
                          course={course}
                          id={course.courseId}
                          key={course.courseId}
                        />
                      ))}
                    </div>
                  ) : paginatedItems && !isTable ? (
                    <div className=' max-w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-y-10'>
                      {paginatedItems &&
                        paginatedItems.length > 0 &&
                        [...paginatedItems].map((course) => (
                          <LMSCourseCard
                            id={course.id}
                            key={course.id}
                            courses={isCourses}
                          />
                        ))}
                    </div>
                  ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                      <div className='max-w-5xl py-10 w-full mx-auto justify-center items-center flex flex-col gap-3'>
                        {isSearchTerm.length > 3 ? (
                          <>
                            <div className='text-lg font-semibold'>
                              No results returned
                            </div>
                            <BrutalCircleIconTooltip
                              tooltip={'Reset'}
                              bgColor={'bg-base-brand'}
                              fn={() => {
                                setIsSearchTerm('');
                              }}
                            >
                              <MdAutorenew color='white' size={40} />
                            </BrutalCircleIconTooltip>
                          </>
                        ) : (
                          <div className='font-medium animate-pulse'>
                            Gathering Intel...
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <div className='w-full flex justify-center items-center gap-1 mt-10 '>
                    <Pagination
                      totalItems={
                        sortedAndSearchedCourses &&
                        sortedAndSearchedCourses.length
                      }
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

export default SearchableCourseContainer;
