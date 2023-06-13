import * as prismicH from '@prismicio/helpers';
import CourseMain from '../../components/courses/CourseMain';
import CourseBottom from '../../components/courses/CourseBottom';
import CoursePreview from '../../components/course-card/CoursePreview';
import { createClient, linkResolver } from '../../prismicio';
import { useSelector, useDispatch } from 'react-redux';
import { setPreviewClosed } from '../../features/all_courses/courseFilterSlice';
import CourseContentMenu from '../../components/courses/CourseContentMenu';
import { lMSCoursesBySlug } from '../../src/graphql/queries';
import { API } from 'aws-amplify';

const Page = ({ course }) => {
  const dispatch = useDispatch();
  console.log(course);
  const { preview } = useSelector((state) => state.course_filter);
  return (
    <div className='relative'>
      <CourseMain data={course} />
      <CourseBottom related={[]} />
      {preview && <CoursePreview close={() => dispatch(setPreviewClosed())} />}
      <CourseContentMenu
        link={course.link}
        trialLink={`${course.link}?et=free_trial`}
      />
    </div>
  );
};

export default Page;

export async function getServerSideProps({ params }) {
  const slug = params.uid;
  const res = await API.graphql({
    query: lMSCoursesBySlug,
    variables: { slug: slug },
  });
  const course = res.data.lMSCoursesBySlug.items[0];

  return {
    props: { course },
  };
}
