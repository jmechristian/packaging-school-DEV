import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilter, setMobileFilterClosed } from './courseFilterSlice';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { categoryMenu } from '../../data/CategoryMenu';
import { certMenu } from '../../data/CertMenu';
import AssessmentCTA from '../../components/AssessmentCTA';
import { useRouter } from 'next/router';

const AllCourseMenu = ({ click }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { selectedFilter } = useSelector((state) => state.course_filter);

  const filterClickHandler = (name, value) => {
    dispatch(setSelectedFilter({ name, value }));
    dispatch(setMobileFilterClosed());
    click();
  };

  return (
    <section className='flex flex-col gap-8 h-full mt-1'>
      <div className='flex flex-col gap-6 lg:gap-8'>
        <div className='flex flex-col gap-2'>
          <div className='text-slate-900 dark:text-clemson font-greycliff font-semibold text-xl lg:text-lg'>
            Courses By Category
          </div>
          <div className='flex flex-col'>
            <div className='pb-2 border-b border-b-gray-400 dark:border-b-gray-500'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[0].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[0].name,
                    categoryMenu[0].value
                  )
                }
              >
                {categoryMenu[0].name}
              </div>
            </div>
            <div className='pb-1 pt-2'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[1].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[1].name,
                    categoryMenu[1].value
                  )
                }
              >
                {categoryMenu[1].name}
              </div>
            </div>
            <div className='pb-1 pt-2'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[2].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[2].name,
                    categoryMenu[2].value
                  )
                }
              >
                {categoryMenu[2].name}
              </div>
            </div>
            <div className='py-1'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[3].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[3].name,
                    categoryMenu[3].value
                  )
                }
              >
                {categoryMenu[3].name}
              </div>
            </div>
            <div className='py-1'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[4].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[4].name,
                    categoryMenu[4].value
                  )
                }
              >
                {categoryMenu[4].name}
              </div>
            </div>
            <div className='py-1'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[5].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[5].name,
                    categoryMenu[5].value
                  )
                }
              >
                {categoryMenu[5].name}
              </div>
            </div>
            <div className='py-1'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[6].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[6].name,
                    categoryMenu[6].value
                  )
                }
              >
                {categoryMenu[6].name}
              </div>
            </div>
            <div className='pt-1 pb-2'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[7].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[7].name,
                    categoryMenu[7].value
                  )
                }
              >
                {categoryMenu[7].name}
              </div>
            </div>
            <div className='py-2 border-y border-y-gray-400 dark:border-y-gray-500'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[8].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[8].name,
                    categoryMenu[8].value
                  )
                }
              >
                {categoryMenu[8].name}
              </div>
            </div>
            <div className='py-2'>
              <div
                className={`${
                  selectedFilter.value === categoryMenu[9].value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-gray-700 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                onClick={() =>
                  filterClickHandler(
                    categoryMenu[9].name,
                    categoryMenu[9].value
                  )
                }
              >
                {categoryMenu[9].name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourseMenu;
