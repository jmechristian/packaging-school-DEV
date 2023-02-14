import * as prismicH from '@prismicio/helpers';
import CourseMain from '../../components/courses/CourseMain';
import CourseBottom from '../../components/courses/CourseBottom';
import CoursePreview from '../../components/course-card/CoursePreview';
import { createClient, linkResolver } from '../../prismicio';
import { useSelector, useDispatch } from 'react-redux';
import { setPreviewClosed } from '../../features/all_courses/courseFilterSlice';
import CourseContentMenu from '../../components/courses/CourseContentMenu';

const Page = ({ page }) => {
  const dispatch = useDispatch();
  const { preview } = useSelector((state) => state.course_filter);
  return (
    <div className='relative'>
      <CourseMain data={page.data} />
      <CourseBottom related={page.data.related_courses} />
      {preview && <CoursePreview close={() => dispatch(setPreviewClosed())} />}
      <CourseContentMenu
        link={page.data.lms_link}
        trialLink={page.data.lms_trial_link}
      />
    </div>
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
      'course.embed_id',
      'course.course_subtitle',
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
