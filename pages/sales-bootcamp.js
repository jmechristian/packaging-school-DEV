import React from 'react';
import GradientCTA from '../components/GradientCTA';
import SalesDetails from '../components/sales-bootcamp/SalesDetails';
import SalesHeroVideo from '../components/sales-bootcamp/SalesHeroVideo';
import CourseScroller from '../components/shared/CourseScroller';
import SalesFeatures from '../components/sales-bootcamp/SalesFeatures';
import SalesStaff from '../components/sales-bootcamp/SalesStaff';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Packaging School | Sales Bootcamp</title>
        <meta
          property='og:title'
          content='Packaging School | Sales Bootcamp'
          key='title'
        />
      </Head>
      <div className='flex flex-col gap-12'>
        <SalesHeroVideo />
        <SalesFeatures />
        <SalesDetails />
        <CourseScroller
          headline='Bootcamp also includes 2 courses taught by The Packaging School'
          subheadline='Packaging Foundations plus a materials course of your choosing.'
          link={'/sales-bootcamp-registration-page'}
          link_text={'Register Now'}
          category='Materials'
        />
        <SalesStaff />
        <GradientCTA
          headline='Ready to Work Together?'
          subheadline="Let's Get Training."
          buttonText='Register Now'
          buttonLink='/sales-bootcamp-registration-page'
        />
      </div>
    </>
  );
};

export default Page;
