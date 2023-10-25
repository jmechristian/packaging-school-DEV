import React, { Suspense } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Head from 'next/head';
import LessonsHeader from '../../../components/lessons/LessonsHeader';
import LessonHero from '../../../components/lessons/LessonHero';
import LessonsMedia from '../../../components/lessons/LessonsMedia';
import LessonSlides from '../../../components/lessons/LessonSlides';
import LearningObjectives from '../../../components/lessons/LearningObjectives';
import RelatedLesson from '../../../components/lessons/RelatedLesson';
import LinksButton from '../../../components/shared/LinksButton';
import SocialShare from '../../../components/shared/SocialShare';

const Page = ({ draft }) => {
  const setMedia = () => {
    switch (draft.mediaType) {
      case 'IMAGE':
        return <LessonHero url={draft.media} />;
      case 'VIDEO':
        return <LessonsMedia videoUrl={draft.media} />;
      case 'SLIDES':
        return <LessonSlides slides={draft.slides ? draft.slides : []} />;
      default:
        return <LessonHero url={draft.media} />;
    }
  };

  console.log(draft);

  const headingHandler = (item) => {
    switch (item.attrs.level) {
      case 1:
        return (
          <h1
            className={`${
              item.attrs.textAlign ? `text-${item.attrs.textAlign[0]}` : ''
            }`}
          >
            {item.content[0].text}
          </h1>
        );
      case 2:
        return (
          <h2
            className={`${
              item.attrs.textAlign ? `text-${item.attrs.textAlign[0]}` : ''
            }`}
          >
            {item.content[0].text}
          </h2>
        );
      default:
        return (
          <h2
            className={`${
              item.attrs.textAlign ? `text-${item.attrs.textAlign[0]}` : ''
            }`}
          >
            {item.content[0].text}
          </h2>
        );
    }
  };

  const markHandler = (mark) => {
    switch (mark.type) {
      case 'bold':
        return 'font-bold';
      case 'italic':
        return 'italic';
      case 'underline':
        return 'underline';
      case 'link':
        return 'dark:text-indigo-500 text-indigo-600 underline';
      default:
        return;
    }
  };

  const paragraphHandler = (item) => {
    return (
      item.content &&
      item.content.map((pa, i) => (
        <span
          key={i}
          className={`inline  ${
            pa.marks && pa.marks.map((mark) => markHandler(mark))
          }`}
        >
          {pa.text}
        </span>
      ))
    );
  };

  const bodyCotentHandler = (item) => {
    switch (item.type) {
      case 'heading':
        return <div>{headingHandler(item)}</div>;
      case 'image':
        return (
          <div className='w-full h-full my-12'>
            {/* <div
              className='aspect-[16/9] w-full h-full bg-contain bg-center bg-no-repeat mx-auto'
              style={{ backgroundImage: `url(${item.attrs.src})` }}
            ></div> */}
            <img src={item.attrs.src} alt='alt' />
          </div>
        );
      case 'paragraph':
        return (
          <div className='text-lg dark:text-white mt-12'>
            {paragraphHandler(item)}
          </div>
        );
      case 'bulletList':
        return (
          <ul className='text-lg dark:text-white'>
            {item.content.map((it, i) => (
              <li key={i}>
                <p>{it.content[0].content[0].text}</p>
              </li>
            ))}
          </ul>
        );
      case 'blockquote':
        return (
          <blockquote>
            {item.content.map((it, i) => (
              <p key={i}>{it.content[0].text}</p>
            ))}
          </blockquote>
        );
      default:
        return <p className='dark:text-white text-lg'>NOT HANDLED</p>;
    }
  };

  return (
    <div className='flex flex-col'>
      <Head>
        <title>{draft?.title}</title>
        <meta
          name='image'
          property='og:image'
          content={draft?.seoImage}
          key='image'
        />
        <meta property='og:title' content={draft?.title} key='title' />
        <meta property='og:description' content={draft?.subhead} key='desc' />
        <meta name='description' content={draft?.subhead} key='desc' />
      </Head>
      <main className='flex flex-col gap-20 pt-12 dark:bg-dark-dark bg-white'>
        <LessonsHeader
          title={draft.title}
          subhead={draft.subhead}
          id={draft.id}
          author={draft.author.items}
          date={draft.updatedAt}
        />
        <div>{draft && setMedia()}</div>
        <div
          className={`w-full flex flex-col md:max-w-5xl lg:grid lg:grid-cols-12 max-w-6xl mx-auto gap-12 px-3`}
        >
          <div className='flex flex-col gap-12 col-span-12 lg:col-span-9 xl:pr-12 w-full max-w-prose mx-auto'>
            {/* <div className='grid grid-cols-12'></div> */}
            {draft.objectives && draft.objectives.length > 0 && (
              <div className='border-b-8 border-b-neutral-400 dark:border-b-neutral-600 pb-4'>
                <LearningObjectives objectives={draft.objectives} />
              </div>
            )}
            <div className='relative'>
              <div
                dangerouslySetInnerHTML={{ __html: draft.content }}
                className='tiptap max-w-prose mx-auto lg:text-lg'
              ></div>
              {/* <div className='tiptap flex flex-col'>
                {bodyContent.map((item, i) => (
                  <div key={i}>{bodyCotentHandler(item)}</div>
                ))}
              </div> */}
            </div>
          </div>

          <div className='col-span-12 lg:col-span-3 w-full max-w-prose mx-auto'>
            <div className='border-4 w-full rounded-lg shadow-sm border-neutral-900 dark:border-neutral-900 py-4 flex flex-col gap-4'>
              <div className='font-bold uppercase text-sm dark:text-white px-4'>
                Related Lessons
              </div>
              <div className='flex flex-col gap-6'>
                <RelatedLesson
                  id={
                    draft.related && draft.related.length > 0
                      ? draft.related[0]
                      : '66a95671-feb8-4d74-8a87-033d71431de8'
                  }
                />
                <RelatedLesson
                  id={
                    draft.related && draft.related.length > 0
                      ? draft.related[1]
                      : 'e3658e91-82f3-4923-8a58-821ec8d5f0cf'
                  }
                />
                <RelatedLesson
                  id={
                    draft.related && draft.related.length > 0
                      ? draft.related[2]
                      : '29468803-7b8f-48ee-8b04-7619633ab2de'
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <SocialShare
          title={draft.title}
          slug={draft.slug}
          subhead={draft.subhead}
          type={'lessons'}
        />
        {draft.sources.items ? (
          <LinksButton sources={draft.sources.items} />
        ) : (
          ''
        )}
      </main>
    </div>
  );
};

export default Page;

export async function getServerSideProps({ params }) {
  const getLesson = /* GraphQL */ `
    query MyQuery($id: ID!) {
      getLesson(id: $id) {
        actionCTA
        actionExample
        actionLink
        actionLinkTitle
        actionSubhead
        author {
          items {
            author {
              company
              headshot
              id
              linkedIn
              name
              title
            }
          }
        }
        content
        createdAt
        id
        links {
          items {
            id
            link
            name
          }
        }
        media
        mediaType
        objectives
        seoImage
        slides
        slug
        sources {
          items {
            id
            link
            name
            position
          }
        }
        subhead
        title
        type
        related
        updatedAt
      }
    }
  `;

  const variables = {
    id: params.id, // key is "input" based on the mutation above
  };

  const res = await API.graphql(graphqlOperation(getLesson, variables));
  const draft = await res.data.getLesson;
  return { props: { draft } };
}
