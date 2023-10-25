import React, { createContext, useState } from 'react';
import Head from 'next/head';
import { lessonsBySlug, listLessons } from '../../src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import LessonActivity from '../../components/lessons/LessonActivity';
import LessonsContent from '../../components/lessons/LessonsContent';
import LessonsHeader from '../../components/lessons/LessonsHeader';
import LessonsMedia from '../../components/lessons/LessonsMedia';
import LinksButton from '../../components/shared/LinksButton';
import SocialShare from '../../components/shared/SocialShare';
import LessonSlides from '../../components/lessons/LessonSlides';
import RelatedLessons from '../../components/shared/RelatedLessons';
import Image from 'next/image';
import LessonHero from '../../components/lessons/LessonHero';
import RelatedLesson from '../../components/lessons/RelatedLesson';
import LearningObjectives from '../../components/lessons/LearningObjectives';

export const LessonContext = createContext({
  unlocked: Boolean,
  toggleUnlocked: () => {},
  page: 0,
  setPageContext: () => {},
});

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

const Page = ({ lesson, lessons }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [isPage, setIsPage] = useState(0);

  console.log(lesson);

  const setMedia = () => {
    switch (lesson.mediaType) {
      case 'IMAGE':
        return <LessonHero url={lesson.media} />;
      case 'VIDEO':
        return <LessonsMedia videoUrl={lesson.media} />;
      case 'SLIDES':
        return <LessonSlides slides={lesson.slides ? lesson.slides : []} />;
      default:
        return <LessonHero url={lesson.media} />;
    }
  };

  return (
    lesson && (
      <>
        <Head>
          <title>{lesson.title}</title>
          <meta
            name='image'
            property='og:image'
            content={lesson?.seoImage}
            key='image'
          />
          <meta property='og:title' content={lesson.title} key='title' />
          <meta
            property='og:description'
            content={lesson?.subhead}
            key='desc'
          />
          <meta name='description' content={lesson?.subhead} key='desc' />
        </Head>
        <LessonContext.Provider
          value={{
            unlocked: unlocked,
            toggleUnlocked: () => setUnlocked(true),
            page: isPage,
            setPageContext: (val) => setIsPage(val),
          }}
        >
          {/* <div className='flex flex-col gap-12 pt-12 dark:bg-dark-dark'>
            <LessonsHeader
              title={lesson.title}
              subhead={lesson.subhead}
              id={lesson.id}
              author={lesson.author.items}
              date={lesson.updatedAt}
            />
            <div className='hidden'>
              <Image
                src={lesson?.seoImage}
                width={200}
                height={200}
                alt={lesson?.title}
              />
            </div>
            <div>{lesson && setMedia()}</div>
            <LessonsContent
              content={lesson.content}
              objectives={lesson.objectives}
            />
            <RelatedLessons relatedLessons={lessons} lessonId={lesson.id} />
            <SocialShare
              title={lesson.title}
              slug={lesson.slug}
              subhead={lesson.subhead}
              type={'lessons'}
            />
            {lesson.sources.items ? (
              <LinksButton sources={lesson.sources.items} />
            ) : (
              ''
            )}
          </div> */}
          <main className='flex flex-col gap-20 pt-12 dark:bg-dark-dark bg-white'>
            <LessonsHeader
              title={lesson.title}
              subhead={lesson.subhead}
              id={lesson.id}
              author={lesson.author.items}
              date={lesson.updatedAt}
            />
            <div>{lesson && setMedia()}</div>
            <div
              className={`w-full flex flex-col md:max-w-5xl lg:grid lg:grid-cols-12 max-w-6xl mx-auto gap-12 px-3`}
            >
              <div className='flex flex-col gap-12 col-span-12 lg:col-span-8 xl:pr-12 w-full max-w-prose mx-auto'>
                {/* <div className='grid grid-cols-12'></div> */}
                {lesson.objectives && lesson.objectives.length > 0 && (
                  <div className='border-b border-b-neutral-300 dark:border-b-neutral-500 pb-4'>
                    <LearningObjectives objectives={lesson.objectives} />
                  </div>
                )}
                <div className='relative'>
                  <div
                    dangerouslySetInnerHTML={{ __html: lesson.content }}
                    className='tiptap max-w-prose mx-auto lg:text-lg'
                  ></div>
                  {/* <div className='tiptap flex flex-col'>
                {bodyContent.map((item, i) => (
                  <div key={i}>{bodyCotentHandler(item)}</div>
                ))}
              </div> */}
                </div>
              </div>

              <div className='col-span-12 lg:col-span-4 w-full max-w-prose mx-auto'>
                <div className='border-4 w-full rounded-lg shadow-sm border-neutral-900 dark:border-neutral-900 py-4 flex flex-col gap-4'>
                  <div className='font-bold uppercase text-sm dark:text-white px-4'>
                    Related Lessons
                  </div>
                  <div className='flex flex-col gap-6'>
                    <RelatedLesson
                      id={
                        lesson.related && lesson.related.length > 0
                          ? lesson.related[0]
                          : '66a95671-feb8-4d74-8a87-033d71431de8'
                      }
                    />
                    <RelatedLesson
                      id={
                        lesson.related && lesson.related.length > 0
                          ? lesson.related[1]
                          : 'e3658e91-82f3-4923-8a58-821ec8d5f0cf'
                      }
                    />
                    <RelatedLesson
                      id={
                        lesson.related && lesson.related.length > 0
                          ? lesson.related[2]
                          : '29468803-7b8f-48ee-8b04-7619633ab2de'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <SocialShare
              title={lesson.title}
              slug={lesson.slug}
              subhead={lesson.subhead}
              type={'lessons'}
            />
            {lesson.sources.items ? (
              <LinksButton sources={lesson.sources.items} />
            ) : (
              ''
            )}
          </main>
        </LessonContext.Provider>
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

  const res = await API.graphql(graphqlOperation(getLesson, variables));
  const lesson = res.data.lessonsBySlug.items[0];

  const getLessons = await API.graphql({ query: listLessons });
  const lessons = getLessons.data.listLessons.items;

  return { props: { lesson, lessons }, revalidate: 10 };
}

export default Page;
