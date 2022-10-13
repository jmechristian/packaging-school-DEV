import * as prismicH from '@prismicio/helpers';
import Layout from '../../features/layout/Layout';
import CourseMain from '../../components/courses/CourseMain';
import CourseBottom from '../../components/courses/CourseBottom';
import { createClient, linkResolver } from '../../prismicio';

const Page = ({ page }) => {
  return (
    <Layout>
      <CourseMain data={page.data} />
      <CourseBottom related={page.data.related_courses} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('course', params.uid, {
    fetchLinks: [
      'certification.certificate_name',
      'course.course_title',
      'course.course_hero',
      'course.course_price',
      'course.course_hours',
      'course.course_lessons',
      'course.course_videos',
      'course.categories',
    ],
  });

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
