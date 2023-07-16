import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilter, setMobileFilterClosed } from './courseFilterSlice';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { categoryMenu } from '../../data/CategoryMenu';
import { certMenu } from '../../data/CertMenu';
import AssessmentCTA from '../../components/AssessmentCTA';

const AllCourseMenu = () => {
  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state) => state.course_filter);

  const filterClickHandler = (name, value) => {
    dispatch(setSelectedFilter({ name, value }));
    dispatch(setMobileFilterClosed());
  };

  return (
    <section className='flex flex-col gap-8 h-full mt-1'>
      <div className='flex flex-col gap-6 lg:gap-8'>
        <div className='flex flex-col gap-2'>
          <div className='text-slate-900 dark:text-clemson font-greycliff font-semibold text-xl lg:text-lg'>
            Courses By Category
          </div>
          <div className='flex flex-col'>
            {categoryMenu.map((item, i) => (
              <div
                className={`${
                  selectedFilter.value === item.value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-slate-500 dark:text-gray-400'
                } pl-2 py-1.5 cursor-pointer`}
                key={item.value}
                onClick={() => filterClickHandler(item.name, item.value)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourseMenu;
