import { useSelector, useDispatch } from 'react-redux';
import { lMSCoursesBySlug, listLMSCourses } from '../../../src/graphql/queries';
import { API } from 'aws-amplify';
import Head from 'next/head';
import Meta from '../../../components/shared/Meta';

const Page = ({ course }) => {
  const dispatch = useDispatch();
  const { preview } = useSelector((state) => state.course_filter);
  return (
    <>
      <Meta
        title={course && `Packaging School | ${course.title}`}
        description={course && course.subheadline}
        image={course && course.seoImage}
      />
      <div className='relative max-w-7xl mx-auto px-3 xl:px:0'>
        <div className='flex flex-col w-full gap-10'>
          {/* Headline */}

          {/* Stats */}
          {/* What Learned */}
          {/* Objectives */}
          {/* Testimonials */}
          {/* Related */}
        </div>
      </div>
    </>
  );
};

export default Page;

export async function getStaticPaths() {
  const res = await API.graphql({
    query: listLMSCourses,
    variables: { filter: { collection: { contains: 'null' } } },
  });
  const paths = res.data.listLMSCourses.items.map((course) => ({
    params: { uid: course.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const slug = params.uid;
  const res = await API.graphql({
    query: lMSCoursesBySlug,
    variables: { slug: slug },
  });
  const course = res.data.lMSCoursesBySlug.items[0];

  return {
    props: { course },
    revalidate: 10,
  };
}
