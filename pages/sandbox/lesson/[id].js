import Image from 'next/image';
import React, { useMemo } from 'react';
import { MdTrackChanges, MdFastForward, MdScreenShare } from 'react-icons/md';
import { API } from 'aws-amplify';
import {
  ArchiveBoxIcon,
  AcademicCapIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/24/outline';
import NewCouseCard from '../../../components/shared/NewCouseCard';
import VideoHero from '../../../components/lessons/VideoHero';
import LessonSlides from '../../../components/lessons/LessonSlides';
import ImageHero from '../../../components/lessons/ImageHero';

import { useDispatch, useSelector } from 'react-redux';
import { toggleSignInModal } from '../../../features/layout/layoutSlice';
import WiredLessonCard from '../../../components/shared/WiredLessonCard';

const Page = ({ pageData }) => {
  const lesson = pageData.lessonsBySlug.items[0];
  const newDate = new Date(lesson.updatedAt).toDateString();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { allCourses } = useSelector((state) => state.course_filter);

  const featured = useMemo(() => {
    const item =
      allCourses && allCourses.filter((cou) => cou.id === lesson.featured);
    return item;
  }, [lesson, allCourses]);

  const setMedia = () => {
    switch (lesson.mediaType) {
      case 'IMAGE':
        return (
          <ImageHero
            title={lesson.title}
            date={newDate}
            authors={lesson.author.items}
            media={lesson.seoImage}
          />
        );
      case 'VIDEO':
        return <VideoHero videoUrl={lesson.media} />;
      case 'SLIDES':
        return <LessonSlides slides={lesson.slides ? lesson.slides : []} />;
      default:
        return <ImageHero url={lesson.media} />;
    }
  };

  const supportLink = [
    {
      name: 'Packaging Bootcamp 101',
      href: '#',
      description:
        'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.',
      icon: ArchiveBoxIcon,
      background: 'https://packschool.s3.amazonaws.com/bootcamp101.png',
      video: 'https://www.youtube.com/watch?v=L4Q6sZlXoe4',
      featured: true,
    },
  ];

  const actionClickHandler = () => {
    if (user) {
      window.open(lesson.actionLink);
    } else {
      dispatch(toggleSignInModal());
    }
  };

  return (
    <div className='w-full lg:pt-6 pb-12 relative dark:bg-dark-dark'>
      <div className='w-full flex flex-col gap-6 lg:gap-9 max-w-6xl mx-auto'>
        {setMedia()}
        <div className='w-full flex flex-col lg:flex-row gap-6 lg:gap-12'>
          <div className='flex w-full'>
            <div className='flex flex-col gap-6'>
              {lesson.mediaType != 'IMAGE' && (
                <div className='border-b-8 border-b-neutral-900 dark:border-white pb-9'>
                  <div className='w-full dark:text-white font-bold max-w-3xl text-3xl lg:text-4xl xl:text-5xl leading-none lg:tracking-tight tracking-tighter px-4 xl:px-0'>
                    {lesson.title}
                  </div>
                </div>
              )}
              {lesson.mediaType === 'VIDEO' ? (
                <div className='flex flex-col md:flex-row md:items-center lg:gap-2 font-medium border-b border-b-neutral-900 pb-6 px-4 xl:px-0'>
                  <div className='font-bold text-sm uppercase'>{newDate}</div>
                  {lesson.author.items.length > 0 &&
                    lesson.author.items.map((a) => (
                      <div className='text-base-mid' key={a.author.name}>
                        <a
                          href={a.author.linkedIn}
                          rel='noreferrer'
                          target='_blank'
                        >
                          {'/' +
                            ' ' +
                            a.author.name +
                            ',' +
                            ' ' +
                            a.author.title}
                        </a>
                      </div>
                    ))}
                </div>
              ) : lesson.mediaType === 'SLIDES' ? (
                <></>
              ) : (
                <div className='border-t-8 border-t-neutral-900 pt-9'></div>
              )}
              {lesson.objectives &&
              lesson.objectives.length > 0 &&
              !lesson.actionLink ? (
                <div className='flex flex-col md:flex-row gap-6 w-full bg-brand-yellow/20 rounded-xl p-9'>
                  <div className='aspect-[4/3] w-full lg:max-w-[250px] bg-clemson flex items-center justify-center'>
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
                          <MdTrackChanges color='gray' size={32} />
                        </div>
                        <div className='leading-tight'>{ob}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : lesson.objectives && lesson.actionLink ? (
                <div className='w-full bg-base-dark flex flex-col gap-4 md:flex-row text-center md:text-left justify-between items-center rounded-lg px-6 py-4'>
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
              ) : (
                <></>
              )}

              <div
                className={`relative px-6 ${
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
            </div>
          </div>

          {/* Sidebar */}
          <div className='w-full lg:max-w-[280px] h-full bg-dark-dark dark:bg-dark-mid text-white rounded-xl flex flex-col md:items-start md:grid md:grid-cols-3 lg:flex lg:flex-col gap-6 pt-2 px-6 md:px-0'>
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
              {featured && featured.length > 0 ? (
                <NewCouseCard
                  title={featured[0].title}
                  description={featured[0].subheadline}
                  background={featured[0].seoImage}
                  link={featured[0].link}
                  link_text={'Enroll Now'}
                  Icon={AcademicCapIcon}
                  video={featured[0].preview}
                  // id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
                />
              ) : (
                <>
                  <NewCouseCard
                    title={'Packaging Foundations'}
                    description={
                      'Learn the intricate dynamics of packaging as a system, integrating roles from marketing to warehousing, to become an effective stakeholder in package design.'
                    }
                    background={
                      'https://packschool.s3.amazonaws.com/packaging-foundations-seoImage-2-sm.png'
                    }
                    link={'https://learn.packagingschool.com/enroll/35691'}
                    link_text={'Enroll Now'}
                    Icon={AcademicCapIcon}
                    video={'https://www.youtube.com/watch?v=L4Q6sZlXoe4'}
                    // id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
                  />
                </>
              )}
            </div>
            <div className='flex flex-col justify-center md:items-start items-center md:col-span-2'>
              {lesson.related && lesson.related.length > 0 && (
                <div className='flex gap-2 items-center px-4 md:py-4'>
                  <MdScreenShare size={24} color='orange' />
                  <div className='font-bold tracking-tight text-lg'>
                    Related Lessons
                  </div>
                </div>
              )}
              <div className='md:grid md:grid-cols-2 lg:flex lg:flex-col'>
                {lesson.related && lesson.related.length > 0 ? (
                  lesson.related.map((cou) => (
                    <div
                      className='border-b border-b-neutral-700 last:border-b-0 pt-3 pb-7 hover:bg-dark-mid transition-colors ease-in px-4 rounded-xl'
                      key={cou}
                    >
                      <WiredLessonCard link_text={'Enroll Now'} id={cou} />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
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
          author {
            items {
              author {
                headshot
                linkedIn
                name
                title
              }
            }
          }
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
          tags {
            items {
              lessonTagsId
              tag
            }
          }
          title
          related
          featured
          type
          updatedAt
        }
      }
    }
  `;

  const lesson = await API.graphql({
    query: getLesson,
    variables: {
      slug: 'sustainable-terminology',
    },
  });
  const pageData = lesson.data;

  // Pass data to the page via props
  return { props: { pageData } };
};

export default Page;
