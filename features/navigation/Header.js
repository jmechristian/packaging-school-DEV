import React from 'react';
import Navigation from './Navigation';

const Header = ({ darkHeader }) => {
  return (
    <>
      <Navigation darkHeader={darkHeader} />
    </>
  );
};

export default Header;
