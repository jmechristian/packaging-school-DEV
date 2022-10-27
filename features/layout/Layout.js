import React from 'react';
import Head from 'next/head';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import MobileHeader from '../navigation/MobileHeader';
import MobileMenu from '../navigation/MobileMenu';
import SearchMenu from '../navigation/SearchMenu';
import DarkToggle from './DarkToggle';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { darkMode } = useSelector((state) => state.layout);
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
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className='relative'>
          <DarkToggle />
          <Header />
          <MobileHeader />
          {/* <SearchMenu /> */}
          <MobileMenu />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
