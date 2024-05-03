import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdApps,
  MdDehaze,
  MdSort,
  MdOutlineSearch,
  MdArrowDropDown,
  MdEmojiEvents,
  MdAutoStories,
  MdScience,
  MdFilterList,
} from 'react-icons/md';

import { categoryMenu } from '../../../data/CategoryMenu';
import { setCategoryIcon } from '../../../helpers/utils';
import { setSelectedFilter } from '../../../features/all_courses/courseFilterSlice';

import LMCCourseTableItem from '../../../components/shared/LMCCourseTableItem';
import LMSCourseCard from '../../../components/shared/LMSCourseCard';

const Page = () => {
  const dispatch = useDispatch();

  const { allCourses, selectedFilter } = useSelector(
    (state) => state.course_filter
  );

  const filterClickHandler = (name, value) => {
    dispatch(setSelectedFilter({ name, value }));
    setIsFilter(false);
  };

  const [isSort, setIsSort] = useState({ value: 'title', direction: 'ASC' });
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [isTable, setIsTable] = useState(true);

  const filtered = useMemo(() => {
    if (selectedFilter.name === 'All') {
      return allCourses;
    } else if (selectedFilter.name === 'Collections') {
      return allCourses.filter((o) => o.type === 'COLLECTION');
    } else if (selectedFilter.value === 'ELECTIVE') {
      return allCourses.filter((o) => o.type === 'ELECTIVE');
    } else {
      return allCourses.filter((o) =>
        o.categoryArray.includes(selectedFilter.value)
      );
    }
  }, [selectedFilter, allCourses]);

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

    if (isSort.value === 'id' && isSort.direction === 'ASC') {
      return (
        filtered &&
        [...filtered].sort((a, b) => a.courseId.localeCompare(b.courseId))
      );
    }

    if (isSort.value === 'id' && isSort.direction === 'DSC') {
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
          cour.subheadline.toLowerCase().includes(isSearchTerm.toLowerCase())
      );
    }
  }, [isSearchTerm, sortedCourses]);

  return (
    <div className='container-base'>
      <div className='w-full flex flex-col gap-6'>
        {/* HEADING */}
        <div className='w-full pb-5 border-b-4 border-b-black flex justify-between items-center'>
          <div className='h2-base'>Browse All Courses</div>
          <div className='grid grid-cols-2 w-fit'>
            <div
              className={`w-10 h-10 ${
                isTable ? 'bg-black' : 'bg-neutral-300'
              } flex items-center justify-center cursor-pointer`}
              onClick={() => setIsTable(true)}
            >
              <MdDehaze color={isTable ? 'white' : 'gray'} size={24} />
            </div>
            <div
              className={`w-10 h-10 ${
                isTable ? 'bg-neutral-300' : 'bg-black'
              } flex items-center justify-center cursor-pointer`}
              onClick={() => setIsTable(false)}
            >
              <MdApps color={isTable ? 'gray' : 'white'} size={24} />
            </div>
          </div>
        </div>
        {/* SEARCH - FILTER */}
        <div className='grid grid-cols-3 lg:mb-5'>
          {/* SEARCH */}
          <div className='w-full col-span-3 lg:col-span-2 border-2 border-black p-1'>
            <div className='flex gap-2 items-center'>
              <input
                type='text'
                className='w-full flex border-none ring-0 focus:ring-0'
                placeholder='Search'
                value={isSearchTerm}
                onChange={(e) => setIsSearchTerm(e.target.value)}
              />
              <div>
                <MdOutlineSearch size={28} />
              </div>
            </div>
          </div>
          {/* FILTER */}
          <div className='col-span-1 flex justify-end relative'>
            <AnimatePresence>
              {isFilter && (
                <div className='w-[320px] absolute top-full -right-0.5 bg-black px-5 py-6 z-40'>
                  <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2.5'>
                      <div className='text-white  font-semibold border-b-2 border-b-white pb-3'>
                        Categories
                      </div>

                      {categoryMenu.slice(0, 8).map((cat) => (
                        <div
                          key={cat.value}
                          className='flex items-center gap-2 cursor-pointer'
                          onClick={() =>
                            filterClickHandler(cat.name, cat.value)
                          }
                        >
                          {setCategoryIcon(cat.value)}
                          <div className='text-white font-medium  '>
                            {cat.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='flex flex-col gap-5'>
                      <div
                        className='pt-4 border-t-2 border-y-white flex items-center gap-3 cursor-pointer'
                        onClick={() =>
                          filterClickHandler('Collections', 'COLLECTIONS')
                        }
                      >
                        <div className='pl-1'>
                          <MdAutoStories color='white' size={20} />
                        </div>
                        <div className='font-semibold text-white '>
                          Collections
                        </div>
                      </div>
                      <div
                        className='flex items-center gap-3 cursor-pointer'
                        onClick={() =>
                          filterClickHandler('CPS Electives', 'ELECTIVE')
                        }
                      >
                        <div className='pl-1'>
                          <MdEmojiEvents color='white' size={22} />
                        </div>
                        <div className='font-semibold text-white '>
                          CPS Electives
                        </div>
                      </div>
                      <div
                        className='flex items-center gap-3 cursor-pointer'
                        onClick={() => {
                          window.open(
                            'https://packagingschool.com/isbt',
                            '_blank'
                          );
                          setIsFilter(false);
                        }}
                      >
                        <div className='pl-1'>
                          <MdScience color='white' size={22} />
                        </div>
                        <div className='font-semibold text-white '>
                          Beverage Institute by ISBT®
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
            {selectedFilter.value != 'all' && (
              <div
                className='h-full flex justify-center items-center px-4 text-red-600 cursor-pointer'
                onClick={() => filterClickHandler('All', 'all')}
              >
                Clear
              </div>
            )}
            <div
              className='border-black border-2 cursor-pointer h-full flex gap-1 px-5 w-48 justify-center items-center transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[6px_6px_0px_black]'
              onClick={() => setIsFilter(!isFilter)}
            >
              <MdFilterList size={24} />
              <div className='font-semibold'>Filter</div>
            </div>
          </div>
        </div>
        {/* COURSES */}
        {sortedAndSearchedCourses &&
        sortedAndSearchedCourses.length > 0 &&
        isTable ? (
          <div className='flex flex-col gap-1.5'>
            <div className='hidden lg:grid lg:grid-cols-12 content-center gap-5 divide-x-black w-full px-2 py-2'>
              <div className='col-span-4'>
                <div className='grid grid-cols-4'>
                  <div
                    className={`${
                      isSort.value === 'id' ? 'underline' : ''
                    } cursor-pointer col-span-1 text-sm font-semibold`}
                    onClick={() =>
                      setIsSort({
                        value: 'id',
                        direction: isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                      })
                    }
                  >
                    Course Id
                  </div>
                  <div className='text-sm font-semibold col-span-3'>
                    <div>
                      <span
                        className={`${
                          isSort.value === 'category' ? 'underline' : ''
                        } cursor-pointer`}
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
                        direction: isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                      })
                    }
                  >
                    Price
                  </div>
                </div>
              </div>
              <div className='col-span-4'>
                <div className='text-sm font-semibold'>
                  <div>Description</div>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='grid grid-cols-4 w-full gap-3 text-center'>
                  <div className='text-sm font-semibold cursor-pointer'>
                    <div
                      className={`${
                        isSort.value === 'hours' ? 'underline' : ''
                      } cursor-pointer`}
                      onClick={() =>
                        setIsSort({
                          value: 'hours',
                          direction: isSort.direction === 'ASC' ? 'DSC' : 'ASC',
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
                          direction: isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                        })
                      }
                    >
                      Lessons
                    </div>
                  </div>

                  <div className='text-sm font-semibold'>
                    <div className='lg:hidden xl:block'>Preview</div>
                  </div>
                  <div className='text-sm font-semibold'>
                    <div className='lg:hidden xl:block'>Purchase</div>
                  </div>
                </div>
              </div>
            </div>
            {sortedAndSearchedCourses.map((course, i) => (
              <LMCCourseTableItem course={course} key={course.id} />
            ))}
          </div>
        ) : sortedAndSearchedCourses && !isTable ? (
          <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-y-10'>
            {sortedAndSearchedCourses &&
              sortedAndSearchedCourses.length > 0 &&
              [...sortedAndSearchedCourses]
                .sort((a, b) =>
                  a.categoryArray[0].localeCompare(b.categoryArray[0])
                )
                .map((course) => (
                  <LMSCourseCard id={course.id} key={course.id} />
                ))}
          </div>
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            <div className='max-w-5xl py-10 w-full mx-auto justify-center items-center flex flex-col gap-3'>
              <div className='text-lg font-semibold'>No results returned</div>
              <div className='text-lg font-semibold'>
                Inquiry form will live here.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
