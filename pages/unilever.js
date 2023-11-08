import React from 'react';
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
} from '@heroicons/react/24/outline';

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Disclosure } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import Unilever from '../components/icons/Unilever';
import CourseCardVideoHeader from '../components/shared/CourseCardVideoHeader';
import FullWidthDropDown from '../components/shared/FullWidthDropDown';

const supportLinks = [
  {
    name: 'Packaging Bootcamp 101',
    href: '#',
    description:
      'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.',
    icon: ArchiveBoxIcon,
    background: 'bg-base-dark',
    video: 'https://www.youtube.com/watch?v=L4Q6sZlXoe4',
  },
  {
    name: 'Corrugated Containers',
    href: '#',
    description:
      'An informative course with easy to digest information that will teach you the art and science of corrugated containers.',
    icon: ArchiveBoxIcon,
    background: 'bg-base-dark',
    video: 'https://www.youtube.com/watch?v=ABLmndzcET4',
  },
  {
    name: 'Packaging Design Workflow',
    href: '#',
    description:
      'A course that provides the complete pathway of the design process from concept to manufacturing.',
    icon: BriefcaseIcon,
    background: 'bg-green-600',
    video: 'https://www.youtube.com/watch?v=-5ubOGuqaGo',
  },
  {
    name: 'Sales Operations for Printing and Packaging Professionals',
    href: '#',
    description:
      'Are you ready to have your front line sales people be your most powerful source of sustainably sourced revenue?',
    icon: BriefcaseIcon,
    background: 'bg-green-600',
    light: false,
    video:
      'https://player.vimeo.com/video/648732063?h=0bbaabf710&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
  },
  {
    name: 'Packaging Foundations',
    href: '#',
    description:
      'An essential introduction to the art, science, and business of packaging.',
    icon: Cog6ToothIcon,
    background: 'bg-base-brand',
    video: 'https://www.youtube.com/watch?v=L4Q6sZlXoe4',
  },
  {
    name: 'Introduction to Corrugated Design',
    href: '#',
    description:
      'Learn the fundamentals of corrugated, how to identify corrugated board, and how to use it.',
    icon: SwatchIcon,
    background: 'bg-clemson',
    light: false,
    video: 'https://vimeo.com/556386520/0c6c7f3c26',
  },
  {
    name: 'Packaging Printing',
    href: '#',
    description:
      'This course provides an overview of different printing methods and ties in the graphic development workflow.',
    icon: SwatchIcon,
    background: 'bg-clemson',
    video: 'https://www.youtube.com/watch?v=2UZ5hWzYZ9A',
  },
  {
    name: 'Sustainable Packaging',
    href: 'https://learn.packagingschool.com/enroll/36829',
    description:
      'Have you ever wondered how grocery store produce ships from the farm to the grocery store?',
    icon: ArchiveBoxIcon,
    background: 'bg-base-dark',
    video: 'https://www.youtube.com/watch?v=ynDhF_jYZn8',
  },
  {
    name: 'Paperboard Cartons',
    href: '#',
    description:
      'Explore the capabilities of paperboard cartons in this course, and comprehend why it’s widely used across the packaging industry.',
    icon: ArchiveBoxIcon,
    background: 'bg-base-dark',
    video: 'https://www.youtube.com/watch?v=YZ5tmiPh1Tw',
  },
  {
    name: 'Flexographic Print Fundamentals',
    href: 'https://learn.packagingschool.com/enroll/210496',
    description:
      'Master how to produce and troubleshoot flexographic printing to produce high quality work.',
    icon: SwatchIcon,
    background: 'bg-clemson',
    video: 'https://youtu.be/nfznWqSAH4w',
  },
  {
    name: 'Packaging Machinery',
    href: 'https://learn.packagingschool.com/enroll/36823',
    description:
      'An online course that provides a thorough look at the machinery used to produce high volumes of quality packages.',
    icon: Cog6ToothIcon,
    background: 'bg-base-brand',
    video: 'https://www.youtube.com/watch?v=uvbv2gkIcZc',
  },
  {
    name: 'Packaging Laws and Regulations',
    href: 'https://learn.packagingschool.com/enroll/36828',
    description:
      'In this course, we map out the major regulatory agencies such as FDA, EPA, USDA, CFR, ASTM, and ISO. ',
    icon: TruckIcon,
    background: 'bg-clemson-dark',
    video: 'https://www.youtube.com/watch?v=t5onp2Ey8Gg',
  },
  {
    name: 'Pack Design Workshop',
    href: 'https://learn.packagingschool.com/enroll/2330944',
    description:
      'Students completing the workshop will design and improve a paperboard carton or corrugated container and learn how to price and order production samples of their packaging. ',
    icon: SwatchIcon,
    background: 'bg-clemson',
    video: '',
  },
  {
    name: 'Packaging Distribution',
    href: 'https://learn.packagingschool.com/enroll/36827',
    description:
      'An essential course that provides a thorough teaching of the distribution process and how to ensure packages remain intact through the duration of each stage. ',
    icon: TruckIcon,
    background: 'bg-clemson-dark',
    video: 'https://www.youtube.com/watch?v=VS-pa7eRowg',
  },
  {
    name: 'IADD Diecutting Academy: Diecutting 101',
    href: 'https://learn.packagingschool.com/enroll/761677',
    description:
      'Diecutting 101 covers the fundamentals of diecutting; starting with an overview of the practice of this fabrication process. ',
    icon: TruckIcon,
    light: false,
    background: 'bg-clemson-dark',
    video: 'https://player.vimeo.com/video/332036673',
  },
];

const Page = () => {
  const { allLessons } = useSelector((state) => state.course_filter);

  const createDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const highlightItems = [];

  const HighlightContent = ({ link }) => {
    return (
      <motion.div className='px-6 w-full grid lg:grid-cols-3 gap-12 pb-3 my-9 overflow-hidden'>
        <motion.div className='w-full min-h-[250px] bg-unilever-lightblue rounded-lg shadow-lg'></motion.div>
        <motion.div className='w-full min-h-[250px] bg-unilever-lightblue rounded-lg shadow-lg'></motion.div>
        <motion.div className='w-full min-h-[250px] bg-unilever-lightblue rounded-lg shadow-lg'></motion.div>
      </motion.div>
    );
  };

  const CourseContent = () => {
    return (
      <motion.section
        className='z-10 lg:px-6'
        aria-labelledby='contact-heading'
      >
        <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 pb-16'>
          {supportLinks.map((link) => (
            <div key={link.name}>
              <CourseCardVideoHeader link={link} />
            </div>
          ))}
        </div>
      </motion.section>
    );
  };

  return (
    <div className='w-full max-w-7xl px-3 md:px-6 flex flex-col gap-4 md:gap-6 py-6 lg:py-9 mx-auto'>
      {/* MAIN */}
      <div className='w-full bg-gradient-to-br from-unilever-darkblue via-unilever-blue to-unilever-lightblue h-full rounded-lg pt-6 shadow-xl'>
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
      <div className='w-full bg-base-brand h-full rounded-lg mx-auto max-w-7xl px-6 lg:px-12 flex flex-col gap-6 py-6'>
        <Disclosure key={'2'}>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <div className='w-full flex flex-col gap-12 items-center'>
              <Disclosure.Button className='flex w-full justify-between items-center'>
                <div className='text-2xl md:text-3xl text-left text-white font-bold tracking-tight'>
                  Learning of the Month
                </div>
                <ChevronRightIcon
                  className={
                    open
                      ? 'rotate-90 transform w-7 md:w-9 h-7 md:h-9'
                      : 'w-7 md:w-9 h-7 md:h-9'
                  }
                />
              </Disclosure.Button>
              <Disclosure.Panel className='w-full'>
                <section
                  className='z-10 lg:px-6'
                  aria-labelledby='contact-heading'
                >
                  <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20 w-full'>
                    {allLessons &&
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
                        .map((link) => (
                          <div
                            key={link.name}
                            className='flex flex-col rounded-2xl h-full bg-neutral-100/70 shadow-lg w-full cursor-pointer'
                            onClick={() => window.open(`/lessons/${link.slug}`)}
                          >
                            <div
                              className='w-full aspect-[16/9] bg-black rounded-t-xl bg-cover bg-center'
                              style={{
                                backgroundImage: `url(${link.seoImage})`,
                              }}
                            ></div>
                            <div className='p-4 md:p-6 w-full'>
                              <div className='text-sm uppercase font-medium text-unilever-blue mb-1.5'>
                                {createDate(link.createdAt)}
                              </div>
                              <h3 className='text-lg md:text-xl font-medium text-neutral-900 md:leading-tight'>
                                {link.title}
                              </h3>
                              <p className=' mt-3 md:mt-4 text-sm text-neutral-600 leading-tight line-clamp-3 mb-3'>
                                {link.subhead}
                              </p>
                            </div>
                          </div>
                        ))}
                  </div>
                </section>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Page;
