import React from 'react';
import HomeTestimonials from '../components/home/HomeTestimonials';
import Meta from '../components/shared/Meta';

const Page = () => {
  return (
    <>
      <Meta
        title={'Packaging School Testimonials'}
        description={
          "Discover real success stories from the tens of thousands we've empowered. Explore testimonials showcasing our impactful collaborations and achievements."
        }
      />
      <div className='py-24'>
        <HomeTestimonials />
      </div>
    </>
  );
};

export default Page;
