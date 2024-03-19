import React, { useState } from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { getCustomer } from '../src/graphql/queries';
import {
  BoltIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import CustomerIntro from '../components/customers/CustomerIntro';
import CustomerSearchContainer from '../components/customers/CustomerSearchContainer';
import FullWidthDropDown from '../components/shared/FullWidthDropDown';
import CustomerFeatures from '../components/customers/CustomerFeatures';
import CustomerIntro_2 from '../components/customers/CustomerIntro_2';
import { dummyData } from '../data/DummyData';
import CustomerSearchLOTMContainer from '../components/customers/CustomerSearchLOTMContainer';
import CustomerOfferings from '../components/customers/CustomerOfferings';

const faqs = [
  {
    id: 1,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const Page = ({ customer }) => {
  // console.log(customer);
  return (
    <>
      <Head>
        <title>Packaging School | GreenBlue</title>
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <div className='w-full max-w-7xl px-3 md:px-6 lg:px-0 flex flex-col gap-4 md:gap-6 pb-3 md:pb-6 lg:pb-24 mx-auto'>
        {/* <CustomerIntro logo={'https://packschool.s3.amazonaws.com/GB_logo.png'} /> */}
        <CustomerIntro_2 />
        {/* <FullWidthDropDown
        title={'featured'}
        Icon={BoltIcon}
        bg='bg-gb-main'
        bgdark='bg-gradient-to-r from-gb-main to-gb-green'
        highlight={'bg-gb-green'}
        content={
          <CustomerFeatures courses={customer && customer.courses.items} />
        }
        open={true}
      /> */}
        <FullWidthDropDown
          title={'SPC Knowledge Library Topics'}
          Icon={AcademicCapIcon}
          bg='bg-gb-main'
          bgdark='bg-gradient-to-r from-gb-main to-gb-green'
          highlight={'bg-gb-green'}
          content={<CustomerOfferings reference={'coupon=greenblue'} />}
          bgContent={'bg-neutral-200 border'}
          open={true}
        />
        <FullWidthDropDown
          title={'Packaging School Course Offerings'}
          Icon={AcademicCapIcon}
          cash={true}
          bg='bg-base-mid'
          bgdark='bg-base-dark'
          content={
            <CustomerSearchContainer
              reference={'ref=ac65d9'}
              courses={customer && customer.courses.items}
              link_text={'Purchase Course'}
            />
          }
          highlight={'bg-clemson'}
          bgContent={'bg-neutral-200 border'}
        />
        <FullWidthDropDown
          title={'Learning of the Month'}
          Icon={BookmarkSquareIcon}
          bg='bg-base-mid'
          bgdark='bg-base-dark'
          content={<CustomerSearchLOTMContainer />}
          highlight={'bg-clemson'}
          bgContent={'bg-neutral-200 border'}
        />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await API.graphql({
    query: getCustomer,
    variables: { id: 'fec13ccf-8b5c-497a-bccd-adb6d06820ea' },
  });
  const customer = res.data.getCustomer;

  return {
    props: { customer },
  };
}

export default Page;
