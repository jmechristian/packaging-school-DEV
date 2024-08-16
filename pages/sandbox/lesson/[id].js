import Image from "next/legacy/image";
import Head from 'next/head';
import React, { useMemo } from 'react';
import { MdTrackChanges, MdFastForward, MdScreenShare } from 'react-icons/md';
import { API, graphqlOperation } from 'aws-amplify';
import {
  ArchiveBoxIcon,
  AcademicCapIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/24/outline';
import VideoHero from '../../../components/lessons/VideoHero';
import LessonSlides from '../../../components/lessons/LessonSlides';
import ImageHero from '../../../components/lessons/ImageHero';
import WiredLessonCard from '../../../components/shared/WiredLessonCard';
import WiredCourseCard from '../../../components/shared/WiredCourseCard';

import { listLessons } from '../../../src/graphql/queries';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignInModal } from '../../../features/layout/layoutSlice';
import AuthorBlock from '../../../components/shared/AuthorBlock';
import Meta from '../../../components/shared/Meta';

const Page = ({ lesson }) => {
  const newDate = lesson && new Date(lesson.updatedAt).toDateString();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { allCourses } = useSelector((state) => state.course_filter);

  const sortedSources = useMemo(() => {
    if (lesson && lesson.sources.items) {
      const sorted =
        lesson &&
        lesson.sources.items &&
        lesson.sources.items.sort(function (a, b) {
          return a.position - b.position;
        });

      const chunkSize = sorted && sorted.length / 2;
      const chunks = [];

      for (let i = 0; i < sorted.length; i += chunkSize) {
        const chunk = sorted.slice(i, i + chunkSize);
        chunks.push(chunk);
      }

      return chunks;
    } else return null;
  }, [lesson]);

  // const featured = useMemo(() => {
  //   const item =
  //     allCourses && allCourses.filter((cou) => cou.id === lesson.featured);
  //   return item;
  // }, [lesson, allCourses]);

  const setMedia = () => {
    switch (lesson.mediaType) {
      case 'IMAGE':
        return (
          <ImageHero
            title={lesson.title}
            date={newDate}
            author={lesson.author}
            media={lesson.seoImage}
          />
        );
      case 'VIDEO':
        return (
          <VideoHero
            videoUrl={'https://packschool.s3.amazonaws.com/lotm-test.mp4'}
          />
        );
      case 'SLIDES':
        return <LessonSlides slides={lesson.slides ? lesson.slides : []} />;
      default:
        return (
          <ImageHero
            url={lesson.media}
            title={lesson.title}
            date={newDate}
            author={lesson.author}
            media={lesson.seoImage}
          />
        );
    }
  };

  const actionClickHandler = () => {
    if (user) {
      window.open(lesson.actionLink);
    } else {
      dispatch(toggleSignInModal());
    }
  };

  return (
    lesson && (
      <>
        <Meta
          title={lesson.title}
          description={lesson.subhead}
          image={lesson.seoImage}
        />
        <div className='w-full lg:pt-6 pb-12 relative dark:bg-dark-dark'>
          <div className='w-full flex flex-col gap-6 lg:gap-9 max-w-6xl mx-auto'>
            {setMedia()}
            <div className='w-full flex flex-col lg:flex-row gap-6 lg:gap-12'>
              <div className='flex w-full'>
                <div className='flex flex-col gap-6 w-full'>
                  {lesson.mediaType != 'IMAGE' && (
                    <div className='border-b-8 border-b-neutral-900 dark:border-white pb-9'>
                      <div className='w-full dark:text-white font-bold max-w-xs md:max-w-3xl text-3xl lg:text-4xl xl:text-5xl leading-none lg:tracking-tight tracking-tighter px-4 xl:px-0'>
                        {lesson.title}
                      </div>
                    </div>
                  )}
                  {lesson.mediaType === 'VIDEO' ? (
                    <div className='flex flex-col md:flex-row md:items-center gap-3 lg:gap-5 font-medium border-b border-b-neutral-900 dark:border-b-white pb-6 px-4 xl:px-0'>
                      <div className='w-fit font-bold dark:text-white text-sm uppercase bg-brand-yellow/40 px-2 py-4 flex items-center justify-center text-center leading-tighter'>
                        {newDate}
                      </div>
                      {lesson.author && (
                        <div className='flex flex-col w-full md:flex-row gap-3 md:gap-9 md:items-center'>
                          {lesson.author.map((a) => (
                            <div
                              key={a}
                              className='w-fit md:border-r md:border-r-neutral-600 md:last:border-r-0 pr-4'
                            >
                              <AuthorBlock id={a} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : lesson.mediaType === 'SLIDES' ? (
                    <></>
                  ) : (
                    <div className='border-t-8 border-t-neutral-900 pt-9'></div>
                  )}
                  {lesson.objectives && lesson.objectives.length > 0 ? (
                    <div className='flex flex-col md:flex-row gap-6 w-full bg-brand-yellow/20 dark:bg-base-mid dark:text-white lg:rounded-xl p-9'>
                      <div className='aspect-[4/3] w-full lg:max-w-[250px] bg-clemson dark:bg-brand-yellow flex items-center justify-center'>
                        <div className='w-full p-3'>
                          <Image
                            src={
                              'https://packschool.s3.amazonaws.com/LOTM-Logo-Final-White-sm.png'
                            }
                            width={600}
                            height={309}
                            layout='responsive'
                            alt='Learning of the Month'
                          />
                        </div>
                      </div>

                      <div className='flex flex-col gap-4'>
                        <div className='font-bold tracking-tight text-lg lg:text-xl lg:leading-none'>
                          Learning Objectives
                        </div>
                        {lesson.objectives.map((ob) => (
                          <div className='flex gap-2' key={ob}>
                            <div>
                              <MdTrackChanges color='black' size={32} />
                            </div>
                            <div className='leading-tight'>{ob}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {lesson.actionLink && (
                    <div className='w-full bg-base-dark flex flex-col gap-4 md:flex-row text-center md:text-left justify-between items-center lg:rounded-lg px-6 py-6 lg:py-4'>
                      <div className='text-white text-lg font-semibold leading-tight'>
                        {lesson.actionLinkTitle}
                      </div>
                      <div
                        className='w-fit flex gap-1 items-center px-6 py-2 text-white cursor-pointer font-bold bg-clemson rounded shadow-lg'
                        onClick={actionClickHandler}
                      >
                        <div>
                          {user ? (
                            <LockOpenIcon className='w-5 h-5 stroke-white' />
                          ) : (
                            <LockClosedIcon className='w-5 h-5 stroke-white' />
                          )}
                        </div>
                        <div>Download</div>
                      </div>
                    </div>
                  )}
                  <div
                    className={`relative px-6 xl:px-0 ${
                      lesson.mediaType === 'IMAGE' ? 'mt-0' : 'mt-6'
                    }`}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: lesson.content }}
                      className='tiptap lg:text-lg'
                    ></div>
                    {/* <div className='tiptap flex flex-col'>
                {bodyContent.map((item, i) => (
                  <div key={i}>{bodyCotentHandler(item)}</div>
                ))}
              </div> */}
                  </div>
                  {lesson.sources &&
                    sortedSources &&
                    sortedSources.length > 0 && (
                      <div className='hidden lg:flex flex-col gap-3 border-t border-t-black dark:border-t-white pt-6  px-6 lg:px-0'>
                        <div className='font-bold dark:text-white'>Sources</div>
                        <div className='grid lg:grid-cols-2 dark:text-white gap-3 text-xs'>
                          <div className='flex flex-col gap-3'>
                            {sortedSources[0].map((sou) => (
                              <div className='flex gap-1' key={sou.id}>
                                <div>
                                  <sup>{sou.position}</sup>
                                </div>
                                <div>
                                  <a href={sou.link}>{sou.name}</a>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className='flex flex-col gap-3'>
                            {sortedSources[1].map((sou) => (
                              <div className='flex gap-1' key={sou.id}>
                                <div>
                                  <sup>{sou.position}</sup>
                                </div>
                                <div>
                                  <a href={sou.link}>{sou.name}</a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              </div>

              {/* Sidebar */}
              <div className='w-full lg:max-w-[280px] h-full bg-dark-dark dark:bg-dark-mid text-white rounded-xl flex flex-col md:items-start md:grid md:grid-cols-3 lg:flex lg:flex-col gap-6 py-2 px-6 md:px-0'>
                <div className='flex flex-col justify-center md:items-start items-center gap-6 p-4 mx-auto'>
                  <div className='flex flex-col gap-1.5 '>
                    <div className='flex gap-1 items-center'>
                      <MdFastForward size={28} color='orange' />
                      <div className='font-bold tracking-tight text-lg'>
                        Want to Go Further?
                      </div>
                    </div>
                    <div className='text-sm text-white/60 leading-snug'>
                      Dive into a comprehensive course crafted by subject-matter
                      experts.
                    </div>
                  </div>
                  {lesson.featured ? (
                    <WiredCourseCard
                      id={lesson.featured}
                      link_text={'Enroll Now'}
                    />
                  ) : (
                    <>
                      <WiredCourseCard
                        id={'ff174f01-5f76-486c-8d7a-849d6d3ff914'}
                      />
                    </>
                  )}
                </div>
                <div className='w-full h-0.5 bg-white/30 px-3'></div>
                <div className='flex flex-col justify-center items-start md:col-span-2 py-2'>
                  <div className='flex gap-2 items-center px-4 md:py-4 lg:py-0'>
                    <MdScreenShare size={24} color='orange' />
                    <div className='font-bold tracking-tight text-lg'>
                      Related Lessons
                    </div>
                  </div>
                  <div className='md:grid md:grid-cols-2 lg:flex lg:flex-col'>
                    {lesson.related && lesson.related.length > 0 ? (
                      lesson.related.map((cou) => (
                        <div
                          className='pt-3 pb-7 hover:bg-dark-mid transition-colors ease-in px-4 rounded-xl'
                          key={cou}
                        >
                          <WiredLessonCard link_text={'Enroll Now'} id={cou} />
                        </div>
                      ))
                    ) : (
                      <>
                        <div className='pt-3 pb-7 hover:bg-dark-mid transition-colors ease-in px-4 rounded-xl'>
                          <WiredLessonCard
                            link_text={'Enroll Now'}
                            id={'66a95671-feb8-4d74-8a87-033d71431de8'}
                          />
                        </div>
                        <div className='pt-3 pb-7 hover:bg-dark-mid transition-colors ease-in px-4 rounded-xl'>
                          <WiredLessonCard
                            link_text={'Enroll Now'}
                            id={'f2d26420-1ac4-4172-8af2-f70e8010770d'}
                          />
                        </div>
                        <div className='pt-3 pb-7 hover:bg-dark-mid transition-colors ease-in px-4 rounded-xl'>
                          <WiredLessonCard
                            link_text={'Enroll Now'}
                            id={'7b90c1b2-1226-4b1e-b086-ef26871d7963'}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {lesson.sources && sortedSources && sortedSources.length > 0 && (
              <div className='lg:hidden flex flex-col gap-3 border-t border-t-black dark:border-t-white pt-6  px-6 lg:px-0'>
                <div className='font-bold dark:text-white'>Sources</div>
                <div className='grid lg:grid-cols-2 dark:text-white gap-3 text-xs'>
                  <div className='flex flex-col gap-3'>
                    {sortedSources[0].map((sou) => (
                      <div className='flex gap-1' key={sou.id}>
                        <div>
                          <sup>{sou.position}</sup>
                        </div>
                        <div>
                          <a href={sou.link}>{sou.name}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-col gap-3'>
                    {sortedSources[1].map((sou) => (
                      <div className='flex gap-1' key={sou.id}>
                        <div>
                          <sup>{sou.position}</sup>
                        </div>
                        <div>
                          <a href={sou.link}>{sou.name}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};

export async function getStaticPaths() {
  const res = await API.graphql({
    query: listLessons,
  });
  const paths = res.data.listLessons.items
    .filter((it) => it.status != 'DRAFT')
    .map((lesson) => ({
      params: { id: lesson.slug },
    }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const getLesson = /* GraphQL */ `
    query MyQuery($slug: String!) {
      lessonsBySlug(slug: $slug) {
        items {
          id
          links {
            items {
              name
              link
              lessonLinksId
            }
          }
          author
          videoLink
          media
          mediaType
          content
          objectives
          seoImage
          slides
          slug
          actionCTA
          actionLink
          actionSubhead
          actionExample
          actionLinkTitle
          sources {
            items {
              name
              link
              lessonSourcesId
              position
            }
          }
          subhead
          title
          featured
          related
          type
          updatedAt
        }
      }
    }
  `;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  const variables = {
    slug: id, // key is "input" based on the mutation above
  };

  const res = await API.graphql({ query: getLesson, variables: variables });
  const lesson = res.data.lessonsBySlug.items[0];

  return { props: { lesson }, revalidate: 10 };
}

export default Page;
