import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdSort,
  MdOutlineSearch,
  MdArrowDropDown,
  MdEmojiEvents,
  MdAutoStories,
  MdScience,
  MdFilterList,
} from 'react-icons/md';
import { categoryMenu } from '../../../data/CategoryMenu';

import CPSCard from '../../../components/rive/CPSCard';
import CMPMCard from '../../../components/rive/CMPMCard';
import APCCard from '../../../components/rive/APCCard';
import FPCCard from '../../../components/rive/FPCCard';
import CSPCard from '../../../components/rive/CSPCard';
import LMSCourseCard from '../../../components/shared/LMSCourseCard';
import LMCCourseTableItem from '../../../components/shared/LMCCourseTableItem';
import { setCategoryIcon } from '../../../helpers/utils';
import { AnimatePresence } from 'framer-motion';
import { setSelectedFilter } from '../../../features/all_courses/courseFilterSlice';

const Page = () => {
  const dispatch = useDispatch();

  const { allCourses, selectedFilter } = useSelector(
    (state) => state.course_filter
  );
  const [isSort, setIsSort] = useState({ value: 'title', direction: 'ASC' });
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isFilter, setIsFilter] = useState(false);

  const filtered = useMemo(() => {
    if (selectedFilter.name === 'ALL') {
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

  const filterClickHandler = (name, value) => {
    dispatch(setSelectedFilter({ name, value }));
    setIsFilter(false);
  };

  return (
    <div className='container-base px-4 xl:px-0'>
      <div className='w-full flex flex-col gap-24'>
        <div className='h1-base'>UI Library</div>
        <div className='flex flex-col gap-5'>
          <div className='w-full pb-5 border-b-4 border-b-black'>
            <div className='h2-base'>Cards</div>
          </div>
          {/* CERT CARDS */}
          <div className='flex flex-col gap-5'>
            <div className='h3-base pb-3 border-b-2 border-b-black'>
              Certificate Cards
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <CMPMCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <CPSCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <CSPCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <APCCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <FPCCard />
              </div>
            </div>
          </div>
          {/* COURSE CARDS */}
          <div className='flex flex-col gap-5'>
            <div className='h3-base py-3 border-y-2 border-y-black mb-5'>
              Course Cards
            </div>
            <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-y-10'>
              {allCourses &&
                [...allCourses]
                  .sort((a, b) =>
                    a.categoryArray[0].localeCompare(b.categoryArray[0])
                  )
                  .map((course) => (
                    <LMSCourseCard id={course.id} key={course.id} />
                  ))}
            </div>
          </div>
        </div>
        {/* COURSE TABLE */}
        <div className='flex flex-col gap-5'>
          <div className='h3-base py-3 border-y-2 border-y-black mb-5'>
            Course Table
          </div>
          <div className='flex flex-col gap-1.5 lg:gap-2'>
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
                <div
                  className='border-black border-2 cursor-pointer h-full flex gap-1 px-5 w-48 justify-center items-center transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[6px_6px_0px_black]'
                  onClick={() => setIsFilter(!isFilter)}
                >
                  <MdFilterList size={24} />
                  <div className='font-semibold'>Filter</div>
                </div>
              </div>
            </div>
            {/* SORT */}
            <div className='flex lg:hidden items-center justify-between bg-black'>
              <div className='text-white text-sm font-semibold p-1.5'>
                <MdSort size={16} />
              </div>
              <div className='grid grid-cols-4 h-full divide-x-2 divide-x-white'>
                <div
                  className={` ${
                    isSort === 'title' ? 'text-amber-300' : 'text-white/75'
                  } w-full flex items-center justify-center text-xs font-semibold px-2`}
                  onClick={() => setIsSort('title')}
                >
                  Title
                </div>
                <div
                  className={` ${
                    isSort === 'category' ? 'text-amber-300' : 'text-white/75'
                  } w-full flex items-center justify-center text-xs font-semibold px-2`}
                  onClick={() => setIsSort('category')}
                >
                  Category
                </div>
                <div
                  className={` ${
                    isSort === 'hours' ? 'text-amber-300' : 'text-white/75'
                  } w-full flex items-center justify-center text-xs font-semibold px-2`}
                  onClick={() => setIsSort('hours')}
                >
                  Hours
                </div>
                <div
                  className={` ${
                    isSort === 'price' ? 'text-amber-300' : 'text-white/75'
                  } w-full flex items-center justify-center text-xs font-semibold px-2`}
                  onClick={() => setIsSort('price')}
                >
                  Price
                </div>
              </div>
            </div>
            <div className='hidden lg:grid lg:grid-cols-12 content-center gap-5 divide-x-black w-full px-2 py-2'>
              <div className='col-span-3'>
                <div className='text-sm font-semibold'>
                  <div>
                    <span
                      className={`${
                        isSort.value === 'category' ? 'underline' : ''
                      } cursor-pointer`}
                      onClick={() =>
                        setIsSort({
                          value: 'category',
                          direction: isSort.direction === 'ASC' ? 'DSC' : 'ASC',
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
                          direction: isSort.direction === 'ASC' ? 'DSC' : 'ASC',
                        })
                      }
                    >
                      Title
                    </span>
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
              <div className='col-span-5'>
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
            {/* TABLE */}
            {sortedAndSearchedCourses &&
              sortedAndSearchedCourses.map((course, i) => (
                <LMCCourseTableItem course={course} key={course.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
