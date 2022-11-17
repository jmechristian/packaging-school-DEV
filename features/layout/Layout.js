import React, { useEffect } from 'react';
import { gql } from '@apollo/client';
import { client } from '../../helpers/apollo-client';
import Head from 'next/head';
import Header from '../navigation/Header/Header';
import Footer from '../navigation/Footer/Footer';
import MobileHeader from '../navigation//Header/MobileHeader';
import MobileMenu from '../navigation/Header/MobileMenu';
import SearchMenu from '../navigation/Header/SearchMenu';
import { useSelector, useDispatch } from 'react-redux';
import { setAllCourses } from '../all_courses/courseFilterSlice';

import ScrollTop from './ScrollTop';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { menuItemOpen } = useSelector((state) => state.nav);

  useEffect(() => {
    const getCourses = async () => {
      const courses = await client.query({
        query: gql`
          query AllCourses {
            allCourses(sortBy: course_title_ASC) {
              edges {
                node {
                  course_id
                  _meta {
                    uid
                  }
                  categories {
                    category
                  }
                  course_title
                  course_subtitle
                  embed_id
                  course_hours
                  course_videos
                  course_lessons
                  course_price
                  certificate {
                    certificate_link {
                      ... on Certification {
                        _meta {
                          uid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      });

      dispatch(setAllCourses(courses.data.allCourses.edges));
    };

    getCourses();
  }, [dispatch]);

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
          {/* <SearchMenu /> */}
          <MobileMenu />
          <main className='relative'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
