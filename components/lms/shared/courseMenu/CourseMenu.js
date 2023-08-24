import React from 'react';
import CourseHeader from './CourseHeader';
import CourseItem from './CourseItem';
import { Bars3Icon } from '@heroicons/react/24/solid';

const CourseMenu = ({ toggle }) => {
  return (
    <div className='flex'>
      <div className='relative'>
        <div
          className='w-[440px] bg-dark-dark rounded-r-lg relative shadow-fix shadow-fix-fix'
          id='scrollers'
        >
          <CourseHeader id='C01' course='Packaging Foundations' />
          <CourseItem
            title='01. Welcome To Packaging Foundations'
            time='01:30'
          />
          <CourseItem title='02. What is Packaging?' time='04:41' />
          <CourseItem title='03. Evolution of Packaging' time='11:43' />
          <CourseItem title='04. Stakeholders in Packaging' time='02:46' />
          <CourseItem title='05. Careers in Packaging' time='00:00' />
          <CourseItem title='06. Packaging Development Process' time='00:00' />
          <CourseItem title='07. Sustainability' time='07:12' />
          <CourseItem title='08. Packaging Applications' time='00:00' />
          <CourseItem title='09. Know Your Product First' time='00:00' />
          <CourseItem title='10. Introduction to Wood' time='01:54' />
          <CourseItem title='11. Manufactuaring Wood' time='08:21' />
          <CourseHeader id='C02' course='Paperboard Cartons' />
          <CourseItem
            title='01. Welcome To Packaging Foundations'
            time='01:30'
          />
          <CourseItem title='02. What is Packaging?' time='04:41' />
          <CourseItem title='03. Evolution of Packaging' time='11:43' />
          <CourseItem title='04. Stakeholders in Packaging' time='02:46' />
          <CourseItem title='05. Careers in Packaging' time='00:00' />
          <CourseItem title='06. Packaging Development Process' time='00:00' />
          <CourseItem title='07. Sustainability' time='07:12' />
          <CourseItem title='08. Packaging Applications' time='00:00' />
          <CourseItem title='09. Know Your Product First' time='00:00' />
          <CourseItem title='10. Introduction to Wood' time='01:54' />
          <CourseItem title='11. Manufactuaring Wood' time='08:21' />
          <div className='sticky bottom-0 left-0 right-0 bg-gradient-to-t from-real-dark h-[300px] z-70'></div>
        </div>
      </div>
      <button
        className='w-12 h-12 bg-zinc-700 shadow-fix shadow-fix-fix z-[90] mt-6 flex justify-center items-center rounded-r-lg'
        onClick={toggle}
      >
        <Bars3Icon className='fill-white h-6 w-6' />
      </button>
    </div>
  );
};

export default CourseMenu;
