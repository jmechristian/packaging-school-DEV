import React from 'react';
import Navigation from './Navigation';
import CourseDropDown from './MenuDropDowns/CourseDropDown';
import CertDropDown from './MenuDropDowns/CertDropDown';

const Header = () => {
  return (
    <>
      <Navigation />
      <CourseDropDown />
      <CertDropDown />
    </>
  );
};

export default Header;
