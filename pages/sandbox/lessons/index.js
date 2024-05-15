import React, { useState, useEffect, useMemo } from 'react';
import {
  MdApps,
  MdDehaze,
  MdSort,
  MdOutlineSearch,
  MdAutorenew,
  MdAccountCircle,
  MdEmojiEvents,
  MdAutoStories,
  MdScience,
  MdFilterList,
} from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import LessonTableItem from '../../../components/shared/LessonTableItem';
import { listLessons } from '../../../src/graphql/queries';
import { API } from 'aws-amplify';
import LessonCardItem from '../../../components/shared/LessonCardItem';

const Page = () => {
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [isFilters, setIsFilters] = useState([]);
  const [openSort, setOpenSort] = useState(false);
  const [isTable, setIsTable] = useState(true);
  const [isLessons, setIsLessons] = useState([]);
  const [isSort, setIsSort] = useState({
    value: 'createdAt',
    direction: 'ASC',
  });

  useEffect(() => {
    const getLessons = async () => {
      const lessons = await API.graphql({
        query: listLessons,
        variables: {
          filter: { status: { eq: 'PUBLISHED' } },
        },
      });
      setIsLessons(lessons.data.listLessons.items);
    };

    getLessons();
  }, []);

  function parseDate(dateString) {
    return new Date(dateString);
  }

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

  return (
    <div className='container-base px-3 xl:px-0'>
      <div className='w-full flex flex-col gap-5'>
        {/* HEADING */}
        <div className='w-full pb-5 border-b-4 border-b-black flex justify-between items-center'>
          <div className='h2-base'>Browse Lesson Library</div>
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
        <div className='grid grid-cols-3 lg:mb-5 gap-2.5'>
          {/* SEARCH */}
          <div className='w-full col-span-3 lg:col-span-2 border-2 border-black p-1'>
            <div className='flex gap-2 items-center'>
              <input
                type='text'
                className='w-full flex border-none ring-0 focus:ring-0'
                placeholder='Search Lessons'
                value={isSearchTerm}
                onChange={(e) => setIsSearchTerm(e.target.value)}
              />
              <div>
                <MdOutlineSearch size={28} />
              </div>
            </div>
          </div>
          <div className='col-span-3 lg:col-span-1 flex justify-end gap-5 relative w-full'>
            {/* FILTER */}
            <AnimatePresence>
              {isFilter && (
                <motion.div className='w-[320px] absolute top-full right-0 mt-2.5 bg-black px-5 py-6 z-40'>
                  <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-0.5'>
                      <div className='flex justify-between items-center w-full  border-b-2 border-b-white pb-3'>
                        <div className='text-white  font-semibold'>
                          Categories
                        </div>
                        <div
                          className='bg-white px-2 py-1.5 text-xs font-medium cursor-pointer'
                          onClick={() => {
                            setIsFilter(false);
                          }}
                        >
                          Close
                        </div>
                      </div>

                      {categoryMenu.slice(0, 8).map((cat) => (
                        <div
                          key={cat.value}
                          className={` transition-all ease-in flex w-full items-center justify-between px-2 cursor-pointer ${
                            isInFilterArray(cat.value) ? 'bg-brand-indigo' : ''
                          }`}
                          onClick={() => filterClickHandler(cat.value)}
                        >
                          <div
                            className={`flex items-center gap-2 py-2  w-full `}
                          >
                            {setCategoryIcon(cat.value)}
                            <div className='text-white font-medium'>
                              {cat.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='flex flex-col gap-0.5 w-full pt-5 border-t-2 border-y-white'>
                      <div
                        className={`flex w-full items-center justify-between px-2 py-2  ${
                          isInFilterArray('COLLECTION') ? 'bg-brand-indigo' : ''
                        }`}
                        onClick={() => filterClickHandler('COLLECTION')}
                      >
                        <div className=' flex items-center gap-3 cursor-pointer'>
                          <div className='pl-1'>
                            <MdAutoStories color='white' size={20} />
                          </div>
                          <div className='font-semibold text-white '>
                            Collections
                          </div>
                        </div>
                      </div>
                      <div
                        className={`flex w-full items-center justify-between px-2 py-2  ${
                          isInFilterArray('ELECTIVE') ? 'bg-brand-indigo' : ''
                        }`}
                        onClick={() => filterClickHandler('ELECTIVE')}
                      >
                        <div
                          className='flex items-center gap-3 cursor-pointer'
                          onClick={() => filterClickHandler('ELECTIVE')}
                        >
                          <div className='pl-1'>
                            <MdEmojiEvents color='white' size={22} />
                          </div>
                          <div className='font-semibold text-white '>
                            CPS Electives
                          </div>
                        </div>
                      </div>
                      <div
                        className='flex items-center gap-3 cursor-pointer py-2'
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
                        <div className='font-semibold text-white leading-tight'>
                          Beverage Institute by ISBT®
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {/* SORT */}
            </AnimatePresence>
            {/* CLEAR */}
            {isFilters.length > 0 ? (
              <div
                className='h-full flex justify-center text-center leading-tight items-center px-4 text-red-600 cursor-pointer'
                onClick={() => filterClickHandler('ALL')}
              >
                Clear Filters
              </div>
            ) : (
              <></>
            )}
            {/* FILTER BUTTON */}
            <div
              className={`border-black border-2 cursor-pointer h-full flex gap-1 px-5 py-2 w-48 justify-center items-center transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[6px_6px_0px_black] ${
                !isFilter && isFilters.length > 0
                  ? 'bg-brand-indigo text-white'
                  : 'bg-white'
              }`}
              onClick={() => {
                setOpenSort(false);
                setIsFilter(!isFilter);
              }}
            >
              <MdFilterList size={24} />
              <div className='font-semibold'>Filter</div>
            </div>
            {/* SORT BUTTON */}
            <div
              className='lg:hidden border-black border-2 cursor-pointer h-full flex gap-1 px-5 py-2 w-48 justify-center items-center transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[6px_6px_0px_black]'
              onClick={() => {
                setIsFilter(false);
                setOpenSort(!openSort);
              }}
            >
              <MdSort size={24} />
              <div className='font-semibold'>Sort</div>
            </div>
          </div>
        </div>
        {/* LESSONS */}
        {sortedLessons.length > 0 && isTable ? (
          <div className='flex flex-col gap-2'>
            {sortedLessons.map((less) => (
              <LessonTableItem less={less} key={less.id} />
            ))}
          </div>
        ) : sortedLessons.length > 0 && !isTable ? (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {sortedLessons.map((less) => (
              <LessonCardItem less={less} key={less.id} />
            ))}
          </div>
        ) : (
          <div className='w-full text-center animate-pulse'>
            Gathering Intel...
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
