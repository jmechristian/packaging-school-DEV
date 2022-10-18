import React from 'react';
import Navigation from './Navigation';
import StickyNavigation from './StickyNavigation';

const Header = () => {
  return (
    <>
      <StickyNavigation />
      <Navigation />
    </>
  );
};

export default Header;
