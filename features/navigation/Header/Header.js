import React from 'react';
import Navigation from './Navigation';
import CourseDropDown from './MenuDropDowns/CourseDropDown';
import CertDropDown from './MenuDropDowns/CertDropDown';

const Header = () => {
  return (
    <div className='relative'>
      <Navigation />
      <CourseDropDown />
      <CertDropDown />
    </div>
  );
};

export default Header;
