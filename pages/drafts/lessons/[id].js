import React from 'react';
import { API, Amplify } from 'aws-amplify';
import { getLessonDraft } from '../../../src/graphql/queries';
import Head from 'next/head';
import LessonsHeader from '../../../components/lessons/LessonsHeader';
import LessonHero from '../../../components/lessons/LessonHero';
import LessonsMedia from '../../../components/lessons/LessonsMedia';
import LessonSlides from '../../../components/lessons/LessonSlides';
import Image from 'next/image';

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
  console.log(bodyContent);

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
          <div className='w-full h-full object-contain py-12'>
            <Image
              src={item.attrs.src}
              alt='image'
              width={1920}
              height={1080}
            />
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
      <main className='flex flex-col gap-12 py-12 dark:bg-dark-dark'>
        <LessonsHeader
          title={draft.title}
          subhead={draft.subhead}
          id={draft.id}
          author={draft.author.items}
          date={draft.updatedAt}
        />
        <div>{draft && setMedia()}</div>
        <div className='relative px-6 lg:px-8 max-w-4xl mx-auto'>
          <div className='tiptap'>
            {bodyContent.map((item, i) => (
              <div key={i}>{bodyCotentHandler(item)}</div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;

export async function getServerSideProps({ params }) {
  const res = await API.graphql({
    query: getLessonDraft,
    variables: { id: params.id },
  });
  const draft = await res.data.getLessonDraft;
  return { props: { draft } };
}
