import React from 'react';
import SalesHero from '../components/sales-bootcamp/SalesHero';
import SalesDetails from '../components/sales-bootcamp/SalesDetails';
import SalesHeroVideo from '../components/sales-bootcamp/SalesHeroVideo';
import CourseScroller from '../components/shared/CourseScroller';
import SalesFeatures from '../components/sales-bootcamp/SalesFeatures';
import SalesStaff from '../components/sales-bootcamp/SalesStaff';

const Page = () => {
  return (
    <div className='flex flex-col gap-9'>
      <SalesHeroVideo />
      <SalesFeatures />
      <SalesDetails />
      <CourseScroller
        headline='Bootcamp also includes 2 courses taught by The Packaging School'
        subheadline='Packaging Foundations plus a materials course of your choosing.'
        link={'#register'}
        link_text={'Register Now'}
        category='Materials'
      />
      <SalesStaff />
    </div>
  );
};

export default Page;
