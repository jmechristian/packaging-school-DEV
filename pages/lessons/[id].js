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

  return (
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
        <meta property='og:description' content={lesson?.subhead} key='desc' />
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
        {lesson && (
          <div className='flex flex-col gap-12 pt-12 dark:bg-dark-dark'>
            <LessonsHeader title={lesson.title} subhead={lesson.subhead} />
            <div className='hidden'>
              <Image
                src={lesson?.seoImage}
                width={200}
                height={200}
                alt={lesson?.title}
              />
            </div>
            <div>
              {lesson.mediaType === 'SLIDES' ? (
                <LessonSlides slides={lesson.slides ? lesson.slides : []} />
              ) : (
                <LessonsMedia videoUrl={lesson.media} />
              )}
              {lesson.actionLinkTitle && (
                <LessonActivity
                  actionCTA={lesson.actionCTA}
                  actionSubhead={lesson.actionSubhead}
                  actionLink={lesson.actionLink}
                  name={lesson.name}
                  actionTitle={lesson.actionLinkTitle}
                  actionExample={lesson.actionExample}
                  lessonTitle={lesson.title}
                  mediaType={lesson.mediaType && lesson.mediaType}
                />
              )}
            </div>
            <LessonsContent
              content={lesson.content}
              objectives={lesson.objectives}
            />
            {/* <RelatedLessons relatedLessons={lessons} lessonId={lesson.id} /> */}
            <SocialShare
              title={lesson.title}
              slug={lesson.slug}
              subhead={lesson.subhead}
              type={'lessons'}
            />
            <LinksButton sources={lesson.sources.items} />
          </div>
        )}
      </LessonContext.Provider>
    </>
  );
};

// export async function getStaticPaths() {

//   const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
//   const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

//   try {
//     const res = await API.graphql(graphqlOperation(query));
//     const lessons = await res.data.listLessons.items;
//     const paths = lessons.map((less) => ({
//       params: { id: `${less.slug}` },
//     }));

//     return { paths, fallback: false };
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getServerSideProps({ params }) {
//   const { id } = params;

//   const getLesson = /* GraphQL */ `
//     query MyQuery($slug: String!) {
//       lessonsBySlug(slug: $slug) {
//         items {
//           id
//           links {
//             items {
//               name
//               link
//               lessonLinksId
//             }
//           }
//           media
//           mediaType
//           content
//           objectives
//           seoImage
//           slides
//           slug
//           actionCTA
//           actionLink
//           actionSubhead
//           actionExample
//           actionLinkTitle
//           sources {
//             items {
//               name
//               link
//               lessonSourcesId
//               position
//             }
//           }
//           subhead
//           tags {
//             items {
//               lessonTagsId
//               tag
//             }
//           }
//           title
//           type
//         }
//       }
//     }
//   `;

//   const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
//   const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

//   const variables = {
//     slug: id, // key is "input" based on the mutation above
//   };

//   const res = await API.graphql(graphqlOperation(getLesson, variables));
//   const lesson = await res.data.lessonsBySlug.items[0];

//   const getLessons = await API.graphql({ query: listLessons });
//   const lessons = getLessons.data.listLessons.items;

//   return { props: { lesson, lessons } };
// }

export async function getStaticPaths() {
  const res = await API.graphql({
    query: listLessons,
  });
  const paths = res.data.listLessons.items.map((lesson) => ({
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
          type
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

  return { props: { lesson, lessons } };
}

export default Page;
