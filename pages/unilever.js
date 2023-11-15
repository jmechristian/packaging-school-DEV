import React, { useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
  AcademicCapIcon,
  ArchiveBoxIcon,
  BoltIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  SwatchIcon,
  TruckIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SignalIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';
import { API } from 'aws-amplify';
import { ChevronRightIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { Disclosure } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import Unilever from '../components/icons/Unilever';
import FullWidthDropDown from '../components/shared/FullWidthDropDown';
import NewCouseCard from '../components/shared/NewCouseCard';
import UnileverCourses from '../components/unilever/UnileverCourses';
import UnileverLessons from '../components/unilever/UnileverLessons';
import { getCustomer, listUnilevers } from '../src/graphql/queries';

const supportLinks = [
  {
    name: 'Packaging Bootcamp 101',
    href: '#',
    description:
      'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.',
    icon: ArchiveBoxIcon,
    background: 'https://packschool.s3.amazonaws.com/bootcamp101.png',
    video: 'https://www.youtube.com/watch?v=L4Q6sZlXoe4',
    featured: true,
  },
  {
    name: 'Corrugated Containers',
    href: '#',
    description:
      'An informative course with easy to digest information that will teach you the art and science of corrugated containers.',
    icon: ArchiveBoxIcon,
    background: 'https://packschool.s3.amazonaws.com/corrugated.png',
    video: 'https://www.youtube.com/watch?v=ABLmndzcET4',
    featured: true,
  },
  {
    name: 'Packaging Design Workflow',
    href: 'https://learn.packagingschool.com/enroll/36830',
    description:
      'A course that provides the complete pathway of the design process from concept to manufacturing.',
    icon: BriefcaseIcon,
    background: 'https://packschool.s3.amazonaws.com/design-workflow.png',
    video: 'https://www.youtube.com/watch?v=-5ubOGuqaGo',
  },
  {
    name: 'Sales Operations for Printing and Packaging Professionals',
    href: 'https://learn.packagingschool.com/enroll/1774194',
    description:
      'Are you ready to have your front line sales people be your most powerful source of sustainably sourced revenue?',
    icon: BriefcaseIcon,
    background: 'https://packschool.s3.amazonaws.com/sales-operations.png',
    light: false,
    video:
      'https://player.vimeo.com/video/648732063?h=0bbaabf710&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    name: 'Packaging Foundations',
    href: 'https://learn.packagingschool.com/enroll/35691',
    description:
      'An essential introduction to the art, science, and business of packaging.',
    icon: Cog6ToothIcon,
    background: 'https://packschool.s3.amazonaws.com/foundations.png',
    video: 'https://www.youtube.com/watch?v=L4Q6sZlXoe4',
  },
  {
    name: 'Introduction to Corrugated Design',
    href: 'https://learn.packagingschool.com/enroll/1882214',
    description:
      'Learn the fundamentals of corrugated, how to identify corrugated board, and how to use it.',
    icon: SwatchIcon,
    background: 'https://packschool.s3.amazonaws.com/scates.png',
    light: false,
    video: 'https://vimeo.com/556386520/0c6c7f3c26',
  },
  {
    name: 'Packaging Printing',
    href: 'https://learn.packagingschool.com/enroll/36826',
    description:
      'This course provides an overview of different printing methods and ties in the graphic development workflow.',
    icon: SwatchIcon,
    background: 'https://packschool.s3.amazonaws.com/packageprinting.png',
    video: 'https://www.youtube.com/watch?v=2UZ5hWzYZ9A',
  },
  {
    name: 'Sustainable Packaging',
    href: 'https://learn.packagingschool.com/enroll/36829',
    description:
      'Have you ever wondered how grocery store produce ships from the farm to the grocery store?',
    icon: ArchiveBoxIcon,
    background: 'https://packschool.s3.amazonaws.com/demo-video.png',
    video: 'https://www.youtube.com/watch?v=ynDhF_jYZn8',
    featured: true,
  },
  {
    name: 'Paperboard Cartons',
    href: 'paperboard-cartons',
    description:
      'Explore the capabilities of paperboard cartons in this course, and comprehend why it’s widely used across the packaging industry.',
    icon: ArchiveBoxIcon,
    background: 'https://packschool.s3.amazonaws.com/paperboardcartons.png',
    video: 'https://www.youtube.com/watch?v=YZ5tmiPh1Tw',
  },
  {
    name: 'Flexographic Print Fundamentals',
    href: 'https://learn.packagingschool.com/enroll/210496',
    description:
      'Master how to produce and troubleshoot flexographic printing to produce high quality work.',
    icon: SwatchIcon,
    background: 'https://packschool.s3.amazonaws.com/flexographic.png',
    video: 'https://youtu.be/nfznWqSAH4w',
  },
  {
    name: 'Packaging Machinery',
    href: 'https://learn.packagingschool.com/enroll/36823',
    description:
      'An online course that provides a thorough look at the machinery used to produce high volumes of quality packages.',
    icon: Cog6ToothIcon,
    background: 'https://packschool.s3.amazonaws.com/packagemachinery.png',
    video: 'https://www.youtube.com/watch?v=uvbv2gkIcZc',
  },
  {
    name: 'Packaging Laws and Regulations',
    href: 'https://learn.packagingschool.com/enroll/36828',
    description:
      'In this course, we map out the major regulatory agencies such as FDA, EPA, USDA, CFR, ASTM, and ISO. ',
    icon: TruckIcon,
    background: 'https://packschool.s3.amazonaws.com/regluations.png',
    video: 'https://www.youtube.com/watch?v=t5onp2Ey8Gg',
  },
  {
    name: 'Pack Design Workshop',
    href: 'https://learn.packagingschool.com/enroll/2330944',
    description:
      'Students completing the workshop will design and improve a paperboard carton or corrugated container and learn how to price and order production samples of their packaging. ',
    icon: SwatchIcon,
    background: 'https://packschool.s3.amazonaws.com/packcdesigncamp-1.png',
    video: '',
  },
  {
    name: 'Distribution Packaging',
    href: 'https://learn.packagingschool.com/enroll/36827',
    description:
      'An essential course that provides a thorough teaching of the distribution process and how to ensure packages remain intact through the duration of each stage. ',
    icon: TruckIcon,
    background: 'https://packschool.s3.amazonaws.com/distribution.png',
    video: 'https://www.youtube.com/watch?v=VS-pa7eRowg',
  },
  {
    name: 'IADD Diecutting Academy: Diecutting 101',
    href: 'https://learn.packagingschool.com/enroll/761677',
    description:
      'Diecutting 101 covers the fundamentals of diecutting; starting with an overview of the practice of this fabrication process. ',
    icon: TruckIcon,
    light: false,
    background: 'https://packschool.s3.amazonaws.com/diecutting.png',
    video: 'https://player.vimeo.com/video/332036673',
  },
];

const Page = ({ unilever }) => {
  // console.log(unilever);

  const [isPlaying, setIsPlaying] = useState(false);

  const { allLessons } = useSelector((state) => state.course_filter);

  const HighlightContent = ({ link }) => {
    return (
      <motion.div className='px-0 lg:px-6 w-full grid lg:grid-cols-3 gap-12 pb-3 my-9 overflow-hidden'>
        <NewCouseCard
          title={'Uniliever Packaging Bootcamp 101'}
          description={
            'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.'
          }
          background={
            'https://packschool.s3.amazonaws.com/unilever-brands-1.png'
          }
          link={'#'}
          link_text={'Select Course'}
          Icon={RocketLaunchIcon}
          callout={'Unilever Developed'}
          video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
          id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
        />
        <NewCouseCard
          title={'Sustainable Packaging'}
          description={
            'Have you ever wondered how grocery store produce ships from the farm to the grocery store?'
          }
          background={
            'https://packschool.s3.amazonaws.com/sustainable-seoImage.png'
          }
          link={'#'}
          link_text={'Select Course'}
          Icon={SparklesIcon}
          callout={'Most Popular'}
          video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
          id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
        />
        <NewCouseCard
          title={'Shoe Shopping From Home'}
          description={
            "Does packaging influence value? Let's investigate the relationship between product packaging and consumer to analyze how design can influence purchase choice."
          }
          background={'https://packschool.s3.amazonaws.com/demo-lesson.png'}
          link={'/lessons/shoe-shopping-from-home'}
          link_text={'View Lesson'}
          Icon={SignalIcon}
          callout={'Latest Lesson'}
          id={'806c0e2e-c4db-4c13-94f9-b49d4e8b2239'}
        />
      </motion.div>
    );
  };

  const CourseContent = () => {
    return (
      <UnileverCourses
        supportLinks={supportLinks}
        id={'84558b1f-359a-4551-8832-c6c570171163'}
        courses={unilever.courses.items}
      />
    );
  };

  const LessonContent = () => {
    return (
      <UnileverLessons
        id={'84558b1f-359a-4551-8832-c6c570171163'}
        supportLinks={
          allLessons &&
          allLessons
            .filter((less) => less.type === 'LOTM')
            .sort((a, b) => {
              if (a.createdAt < b.createdAt) {
                return 1;
              }
              if (a.createdAt > b.createdAt) {
                return -1;
              }
            })
        }
      />
    );
  };

  return (
    <div className='w-full max-w-7xl px-3 md:px-6 flex flex-col gap-4 md:gap-6 py-6 lg:py-9 mx-auto'>
      {/* MAIN */}
      <div className='w-full bg-gradient-to-br from-unilever-blue via-unilever-blue to-unilever-lightblue h-full rounded-lg pt-6 shadow-xl'>
        <div className='grid md:grid-cols-5 gap-4 md:gap-9 max-w-6xl lg:mx-auto'>
          <div className='flex justify-center w-full items-center md:col-span-2 lg:col-span-2'>
            <div>
              <Unilever style={'w-40 lg:w-72 p-3 h-full fill-white'} />
            </div>
          </div>
          <div className='flex w-full flex-col gap-4 p-6 lg:p-9 md:col-span-3 lg:col-span-3 lg:gap-x-16'>
            <div className='w-full aspect-[16/9] bg-indigo-300 h-full' />

            <div className='w-full flex justify-center gap-1.5 items-center bg-unilever-lightblue hover:bg-unilever-darkblue shadow text-white rounded-lg py-4 font-bold cursor-pointer'>
              Your Learning Dashboard
              <div>
                <ArrowTopRightOnSquareIcon className='w-4 h-4 stroke-white' />
              </div>
            </div>
          </div>
          {/* <div className='bg-white/60 backdrop-blur flex gap-3 items-center justify-center w-fit mx-auto rounded-tr-lg lg:rounded-t-lg lg:px-12 pl-1.5 pr-6 py-2 col-span-2 lg:mt-12 lg:py-3 shadow-lg'>
            <div className='flex gap-12 items-center'>
              <div className='flex gap-2 items-center cursor-pointer'>
                <div className='w-16 h-16 bg-unilever-darkblue rounded-full shadow-md flex items-center justify-center'>
                  <div>
                    <AcademicCapIcon className='w-9 h-9 fill-white/80' />
                  </div>
                </div>
                <div className='text-xl text-unilever-darkblue font-etna'>
                  Courses
                </div>
              </div>
              <div className='flex gap-2 items-center cursor-pointer'>
                <div className='w-16 h-16 bg-unilever-darkblue rounded-full shadow-md flex items-center justify-center'>
                  <div>
                    <BookOpenIcon className='w-9 h-9 fill-white/80' />
                  </div>
                </div>
                <div className='text-xl text-unilever-darkblue font-etna'>
                  Lessons
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className='text-center text-white pt-6 md:pt-12'>
          <div className=' bg-black/40 rounded-lg py-4 px-6 w-full justify-center mx-auto flex items-center gap-3'>
            <div>
              <InformationCircleIcon className='w-8 h-8 md:w-6 md:h-6 stroke-white' />
            </div>
            <div className='text-left leading-tight text-sm md:text-base'>
              Find your library of courses below. If you have any questions,
              please reach out to{' '}
              <span className='underline'>email@Unilever.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* HIGHLIGHT */}

      <FullWidthDropDown
        title={'featured'}
        Icon={BoltIcon}
        bg='bg-unilever-blue'
        bgdark='bg-unilever-darkblue'
        highlight={'bg-unilever-lightblue'}
        content={<HighlightContent />}
        open={true}
      />

      {/* COURSES */}

      <FullWidthDropDown
        title={'Your Courses'}
        Icon={AcademicCapIcon}
        bg='bg-base-mid'
        bgdark='bg-base-dark'
        content={<CourseContent />}
        highlight={'bg-clemson'}
        bgContent={'bg-neutral-200 border'}
      />

      {/* LOTM */}
      <FullWidthDropDown
        title={'Learning of the Month'}
        Icon={BookmarkSquareIcon}
        bg='bg-base-mid'
        bgdark='bg-base-dark'
        content={<LessonContent />}
        highlight={'bg-clemson'}
        bgContent={'bg-neutral-200 border'}
      />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await API.graphql({
    query: getCustomer,
    variables: { id: '84558b1f-359a-4551-8832-c6c570171163' },
  });
  const unilever = res.data.getCustomer;

  return {
    props: { unilever },
  };
}

export default Page;
