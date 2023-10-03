import React from 'react';
import { API, Amplify, graphqlOperation } from 'aws-amplify';
import { getLessonDraft } from '../../../src/graphql/queries';
import Head from 'next/head';
import LessonsHeader from '../../../components/lessons/LessonsHeader';
import LessonHero from '../../../components/lessons/LessonHero';
import LessonsMedia from '../../../components/lessons/LessonsMedia';
import LessonSlides from '../../../components/lessons/LessonSlides';
import LearningObjectives from '../../../components/lessons/LearningObjectives';
import Image from 'next/image';
import DraftLessonsHeader from '../../../components/lessons/DraftLessonsheader';

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

  const bodyContent = JSON.parse(draft.content);
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
      default:
        return;
    }
  };

  const paragraphHandler = (item) => {
    let para = [];
    return (
      item.content &&
      item.content.map((pa, i) => (
        <span
          key={pa.text}
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
          <div className='text-lg dark:text-white'>
            {paragraphHandler(item)}
          </div>
        );
      case 'bulletList':
        return (
          <ul className='text-lg dark:text-white py-4'>
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
        {/* <meta
            name='image'
            property='og:image'
            content={draft?.seoImage}
            key='image'
          /> */}
        <meta property='og:title' content={draft?.title} key='title' />
        <meta property='og:description' content={draft?.subhead} key='desc' />
        <meta name='description' content={draft?.subhead} key='desc' />
      </Head>
      <main className='flex flex-col gap-16 py-12 dark:bg-dark-dark'>
        <LessonsHeader
          title={draft.title}
          subhead={draft.subhead}
          id={draft.id}
          author={draft.author.items}
          date={draft.updatedAt}
        />
        <div>{draft && setMedia()}</div>
        <div className=' px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-12'>
          <div className='lg:py-4'>
            <LearningObjectives objectives={draft.objectives} />
          </div>
          <div className='relative'>
            <div className='tiptap'>
              {bodyContent.map((item, i) => (
                <div key={i}>{bodyCotentHandler(item)}</div>
              ))}
            </div>
          </div>
        </div>
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
