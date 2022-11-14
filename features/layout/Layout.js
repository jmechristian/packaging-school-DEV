import React from 'react';
import Head from 'next/head';
import Header from '../navigation/Header/Header';
import Footer from '../navigation/Footer/Footer';
import MobileHeader from '../navigation//Header/MobileHeader';
import MobileMenu from '../navigation/Header/MobileMenu';
import SearchMenu from '../navigation/Header/SearchMenu';
import { useSelector, useDispatch } from 'react-redux';

import ScrollTop from './ScrollTop';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { menuItemOpen } = useSelector((state) => state.nav);
  return (
    <>
      <Head>
        <title>Packaging School</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='title' content='Packaging School' />
        <meta
          name='description'
          content='The Packaging School brings together the business, art, and science of packaging so you can lead projects, optimize supply chains, increase margins, and develop sustainable solutions.'
        />
        <meta name='keywords' content='packaging, sustainability' />
        <meta name='robots' content='index, follow' />
      </Head>
      {/* <div className={`${darkMode ? 'dark' : ''}`}> */}
      <div className='dark'>
        <div className='relative flex flex-col min-h-screen justify-between'>
          <Header />
          <MobileHeader />
          <ScrollTop />
          {/* <DarkToggle /> */}
          <SearchMenu />
          <MobileMenu />
          <main className='relative'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
