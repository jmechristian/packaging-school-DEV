import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilter, setMobileFilterClosed } from './courseFilterSlice';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { categoryMenu } from '../../data/CategoryMenu';
import { certMenu } from '../../data/CertMenu';

const AllCourseMenu = () => {
  const dispatch = useDispatch();
  const { selectedFilter } = useSelector((state) => state.course_filter);

  const filterClickHandler = (name, value) => {
    dispatch(setSelectedFilter({ name, value }));
    dispatch(setMobileFilterClosed());
  };

  return (
    <section className='flex flex-col gap-6 h-full'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
          <div className='text-slate-900 font-bold text-xl'>
            What Do You Want to Learn?
          </div>
          <div className='flex flex-col'>
            {categoryMenu.map((item, i) => (
              <div
                className={`${
                  selectedFilter.value === item.value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-slate-700'
                } pl-2 py-1.5`}
                key={item.value}
                onClick={() => filterClickHandler(item.name, item.value)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-slate-900 font-bold text-xl'>
            Courses By Certificate
          </div>
          <div className='flex flex-col'>
            {certMenu.map((item, i) => (
              <div
                className={`${
                  selectedFilter.value === item.value
                    ? 'bg-base-brand text-slate-200 font-medium rounded'
                    : 'text-slate-700'
                } pl-2 py-1.5`}
                key={item.value}
                onClick={() => filterClickHandler(item.name, item.value)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-base-dark to-clemson rounded px-4 py-5'>
        <div className='flex flex-col gap-2'>
          <div className='font-bold text-lg text-white'>
            Not Sure Where to Begin?
          </div>
          <div className='flex gap-2 justify-start items-center'>
            <div className='text-white'>Take our assesment</div>
            <ArrowLongRightIcon className='w-5 h-5 stroke-white' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourseMenu;
