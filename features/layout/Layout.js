import React, { useEffect } from 'react';
import { gql } from '@apollo/client';
import { client } from '../../helpers/apollo-client';
import DarkToggle from '../layout/DarkToggle';
import Head from 'next/head';
import Header from '../navigation/Header/Header';
import Footer from '../navigation/Footer/Footer';
import MobileHeader from '../navigation//Header/MobileHeader';
import MobileMenu from '../navigation/Header/MobileMenu';
import SearchMenu from '../navigation/Header/SearchMenu';
import { useSelector, useDispatch } from 'react-redux';
import { setAllCourses } from '../all_courses/courseFilterSlice';
import { setUser } from '../auth/authslice';
import ScrollTop from './ScrollTop';
import { useUser } from '@auth0/nextjs-auth0/client';
import { API, graphqlOperation } from 'aws-amplify';
import { usersByEmail } from '../../src/graphql/queries';
import { createUser } from '../../src/graphql/mutations';
import { onUpdateUser } from '../../src/graphql/subscriptions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
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
  }, [user]);

  useEffect(() => {
    const sub = API.graphql(graphqlOperation(onUpdateUser)).subscribe({
      next: ({ provider, value }) => console.log({ provider, value }),
      error: (error) => console.warn(error),
    });

    return sub.unsubscribe();
  });

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
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className='relative flex flex-col justify-between'>
          <Header />
          <MobileHeader />
          <ScrollTop />
          <DarkToggle />
          {/* <SearchMenu /> */}
          <MobileMenu />
          <main className='relative h-full'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
