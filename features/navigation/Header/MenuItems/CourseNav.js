import React from 'react';
import Link from 'next/link';
import RotatingCaret from '../../../../components/RotatingCaret';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuItem } from '../../navigationSlice';
import MenuDropDownWrapper from '../MenuDropDownWrapper';

const CourseNav = () => {
  const dispatch = useDispatch();
  const { menuItemOpen } = useSelector((state) => state.nav);

  const menuItemHandler = () => {
    dispatch(setMenuItem());
  };

  return (
    <div className='h-full'>
      <div
        className='flex gap-0.5 relative h-full items-center'
        onClick={menuItemHandler}
      >
        <Link href='/all_courses'>Courses</Link>
        <RotatingCaret styling='h-4 w-4 fill-white' open={menuItemOpen} />
        <div
          className={`${
            menuItemOpen ? 'border-b-8 border-b-clemson' : ''
          } absolute left-0 right-0 bottom-0`}
        ></div>
      </div>
    </div>
  );
};

export default CourseNav;
