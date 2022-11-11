import React from 'react';
import Navigation from './Navigation';
import MenuDropDownWrapper from './MenuDropDownWrapper';
import CourseDropDown from './MenuDropDowns/CourseDropDown';

const Header = () => {
  return (
    <>
      <Navigation />
      <div className='fixed z-50 w-full top-24'>
        <MenuDropDownWrapper>
          <CourseDropDown />
        </MenuDropDownWrapper>
      </div>
    </>
  );
};

export default Header;
