import React, { useEffect } from 'react';
import Head from 'next/head';

import { Amplify, API, graphqlOperation } from 'aws-amplify';

import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

import LessonsHeader from '../../components/lessons/LessonsHeader';
import SocialShare from '../../components/shared/SocialShare';
import ArticleContent from '../../components/articles/ArticleContent';
import ArticleMedia from '../../components/articles/ArticleMedia';
import RelatedCourses from '../../components/shared/RelatedCourses';

const Index = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta property='og:image' content={article.media && article.media} />
        <meta property='og:title' content={article.title} />
      </Head>
      <div className='flex flex-col gap-12 pt-12 dark:bg-dark-dark'>
        <LessonsHeader
          title={article.title}
          subhead={''}
          date={article.date}
          author={article.author}
        />
        {article.media && (
          <div>
            <ArticleMedia
              media={article.media && article.media}
              title={article.title}
            />
          </div>
        )}
        <ArticleContent content={article.content} />
        <div>
          {article.relatedCourses && (
            <RelatedCourses relatedCourses={article.relatedCourses.items} />
          )}
          <SocialShare
            title={article.title}
            slug={article.slug}
            subhead={article.subhead ? article.subhead : ''}
            type='blog'
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const query = /* GraphQL */ `
    query ListBlogs {
      listBlogs {
        items {
          id
          slug
        }
      }
    }
  `;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  try {
    const res = await API.graphql(graphqlOperation(query));
    const articles = await res.data.listBlogs.items;
    const paths = articles.map((less) => ({
      params: { aid: `${less.slug}` },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const { aid } = params;

  const getBlog = /* GraphQL */ `
    query MyQuery($slug: String!) {
      blogsBySlug(slug: $slug) {
        items {
          author
          content
          date
          media
          slug
          title
        }
      }
    }
  `;

  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  const variables = {
    slug: aid, // key is "input" based on the mutation above
  };

  const res = await API.graphql(graphqlOperation(getBlog, variables));
  const article = await res.data.blogsBySlug.items[0];

  return { props: { article }, revalidate: 10 };
}

export default Index;
