import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { client } from '../../helpers/apollo-client';
import DarkToggle from '../layout/DarkToggle';
import Head from 'next/head';
import Footer from '../navigation/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAllCourses,
  setPreviewClosed,
} from '../all_courses/courseFilterSlice';
import { setUser } from '../auth/authslice';
import ScrollTop from './ScrollTop';
import { useUser } from '@auth0/nextjs-auth0/client';
import { API, graphqlOperation } from 'aws-amplify';
import CoursePreview from '../../components/course-card/CoursePreview';
import { usersByEmail, listLMSCourses } from '../../src/graphql/queries';
import { createUser } from '../../src/graphql/mutations';
import HeaderNew from '../navigation/Header/HeaderNew';
import SearchContainer from '../../components/search/SearchContainer';
import { onUpdateUser } from '../../src/graphql/subscriptions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
  const { searchOpen } = useSelector((state) => state.nav);
  const { preview } = useSelector((state) => state.course_filter);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const getAndSetUser = async () => {
        const currentUser = await API.graphql({
          query: usersByEmail,
          variables: { email: user.email },
        });

        if (currentUser.data.usersByEmail.items[0]) {
          dispatch(setUser(currentUser.data.usersByEmail.items[0]));
        } else {
          const createNewUser = await API.graphql({
            query: createUser,
            variables: {
              input: {
                name: user.name,
                email: user.email,
                picture: user.picture,
              },
            },
          });
          dispatch(setUser(createNewUser.data.createUser));
        }
      };
      getAndSetUser();
    }

    const sub = API.graphql(graphqlOperation(onUpdateUser)).subscribe({
      next: ({ value }) => {
        dispatch(setUser(value.data.onUpdateUser));
      },
    });

    return () => {
      sub.unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    const getCourses = async () => {
      const courses = await API.graphql({ query: listLMSCourses });

      dispatch(setAllCourses(courses.data.listLMSCourses.items));
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
      <div className={`${darkMode ? 'dark' : ''} `}>
        <div className='relative flex flex-col justify-between'>
          {searchOpen && <SearchContainer />}
          {preview && (
            <CoursePreview close={() => dispatch(setPreviewClosed())} />
          )}
          <HeaderNew />
          <ScrollTop />
          <main className='relative h-full'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
