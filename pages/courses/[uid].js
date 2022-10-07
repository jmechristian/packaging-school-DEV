import * as prismicH from '@prismicio/helpers';
import Layout from '../../features/layout/Layout';
import CourseMain from '../../components/courses/CourseMain';
import { createClient, linkResolver } from '../../prismicio';
import { PrismicRichText } from '@prismicio/react';

const Page = ({ page }) => {
  return (
    <Layout>
      <CourseMain data={page.data} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('course', params.uid);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('course');

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}
