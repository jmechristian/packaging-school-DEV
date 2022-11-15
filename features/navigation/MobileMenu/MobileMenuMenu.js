import React from 'react';
import MobileMenuItemWrapper from './MobileMenuItemWrapper';
import MobileMenuCourseComponent from './MobileMenuComponents/MobileMenuCourseComponent';

const MobileMenuMenu = () => {
  return (
    <div>
      <MobileMenuItemWrapper title='Certifications' dropdown />
      <MobileMenuItemWrapper
        title='Courses'
        dropdown
        component={<MobileMenuCourseComponent />}
      />
      <MobileMenuItemWrapper title='Library' dropdown />
      <MobileMenuItemWrapper title='For Teams' />
      <MobileMenuItemWrapper title='About' />
      <MobileMenuItemWrapper title='Campus Store' />
    </div>
  );
};

export default MobileMenuMenu;
