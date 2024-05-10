import React, { useState, useEffect, useMemo } from 'react';
import { API } from 'aws-amplify';
import { listLMSCourses } from '../../src/graphql/queries';
import { categoryMenu } from '../../data/CategoryMenu';
import { setCategoryIcon } from '../../helpers/utils';
import {
  MdApps,
  MdDehaze,
  MdSort,
  MdOutlineSearch,
  MdAutorenew,
  MdEmojiEvents,
  MdAutoStories,
  MdScience,
  MdFilterList,
} from 'react-icons/md';
import { XCircleIcon } from '@heroicons/react/24/solid';

const Page = () => {
  const [isCourses, setIsCourses] = useState([]);
  const [isFilters, setIsFilters] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const courses = await API.graphql({
        query: listLMSCourses,
        variables: { filter: { type: { ne: 'CUSTOMER' } } },
      });

      setIsCourses(courses.data.listLMSCourses.items);
    };

    getCourses();
  }, []);

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

  const filteredCourses = useMemo(() => {
    if (isFilters.length === 0) {
      return isCourses;
    }

    if (isFilters.length > 0) {
      return isCourses.filter(
        (course) =>
          course.categoryArray.some((category) =>
            isFilters.includes(category)
          ) || isFilters.includes(course.type)
      );
    }
  }, [isCourses, isFilters]);

  return (
    <div className='container-base'>
      <div>{filteredCourses.length}</div>
      {/* <div>
        {isFilters.map((fil) => (
          <div key={fil}>{fil}</div>
        ))}
      </div> */}
      <div className='border-t-2 py-5 border-y-2 mt-10'>
        <div className='w-[310px] bg-black px-5 py-6 z-40'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-0.5'>
              <div className='text-white  font-semibold border-b-2 border-b-white pb-3'>
                Categories
              </div>

              {categoryMenu.slice(0, 8).map((cat) => (
                <div
                  key={cat.value}
                  className={` transition-all ease-in flex w-full items-center justify-between px-2 cursor-pointer ${
                    isInFilterArray(cat.value) ? 'bg-indigo-800' : ''
                  }`}
                  onClick={() => filterClickHandler(cat.value)}
                >
                  <div className={`flex items-center gap-2 py-2  w-full `}>
                    {setCategoryIcon(cat.value)}
                    <div className='text-white font-medium'>{cat.name}</div>
                  </div>
                  {/* {isInFilterArray(cat.value) ? (
                    <div>
                      <XCircleIcon className='w-5 h-5 fill-white/70' />
                    </div>
                  ) : (
                    <></>
                  )} */}
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-0.5 w-full pt-5 border-t-2 border-y-white'>
              <div
                className={`flex w-full items-center justify-between px-2 py-2  ${
                  isInFilterArray('COLLECTION') ? 'bg-indigo-800' : ''
                }`}
                onClick={() => filterClickHandler('COLLECTION')}
              >
                <div className=' flex items-center gap-3 cursor-pointer'>
                  <div className='pl-1'>
                    <MdAutoStories color='white' size={20} />
                  </div>
                  <div className='font-semibold text-white '>Collections</div>
                </div>
                {/* {isInFilterArray('COLLECTION') ? (
                  <div>
                    <XCircleIcon className='w-5 h-5 fill-white/70' />
                  </div>
                ) : (
                  <></>
                )} */}
              </div>
              <div
                className={`flex w-full items-center justify-between px-2 py-2  ${
                  isInFilterArray('ELECTIVE') ? 'bg-indigo-800' : ''
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
                  <div className='font-semibold text-white '>CPS Electives</div>
                </div>
                {/* {isInFilterArray('ELECTIVE') ? (
                  <div>
                    <XCircleIcon className='w-5 h-5 fill-white/70' />
                  </div>
                ) : (
                  <></>
                )} */}
              </div>
              <div
                className='flex items-center gap-3 cursor-pointer py-2'
                onClick={() => {
                  window.open('https://packagingschool.com/isbt', '_blank');
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
        </div>
      </div>
    </div>
  );
};

export default Page;
