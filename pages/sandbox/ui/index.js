import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdSort, MdOutlineSearch, MdArrowDropDown } from 'react-icons/md';

import CPSCard from '../../../components/rive/CPSCard';
import CMPMCard from '../../../components/rive/CMPMCard';
import APCCard from '../../../components/rive/APCCard';
import FPCCard from '../../../components/rive/FPCCard';
import CSPCard from '../../../components/rive/CSPCard';
import LMSCourseCard from '../../../components/shared/LMSCourseCard';

import LMCCourseTableItem from '../../../components/shared/LMCCourseTableItem';

const Page = () => {
  const { allCourses } = useSelector((state) => state.course_filter);
  const [isSort, setIsSort] = useState('title');
  const [isSearchTerm, setIsSearchTerm] = useState('');

  const sortedCourses = useMemo(() => {
    if (isSort === 'title') {
      return (
        allCourses &&
        [...allCourses].sort((a, b) => a.title.localeCompare(b.title))
      );
    }

    if (isSort === 'category') {
      return (
        allCourses &&
        [...allCourses].sort((a, b) =>
          a.categoryArray[0].localeCompare(b.categoryArray[0])
        )
      );
    }

    if (isSort === 'hours') {
      return (
        allCourses &&
        [...allCourses].sort((a, b) => a.hours.localeCompare(b.hours))
      );
    }

    if (isSort === 'price') {
      return (
        allCourses &&
        [...allCourses].sort((a, b) => a.price.localeCompare(b.price))
      );
    }
  }, [allCourses, isSort]);

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
          <div className='flex flex-col gap-1.5'>
            {/* SEARCH */}
            <div className='w-full border-2 border-black p-1'>
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
            {/* SORT */}
            <div className='flex items-center justify-between bg-black'>
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
