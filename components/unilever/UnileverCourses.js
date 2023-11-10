import { useState, useMemo } from 'react';
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
} from '@heroicons/react/24/outline';

import NewCouseCard from '../shared/NewCouseCard';

import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  PlayCircleIcon,
  ChevronDoubleDownIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

const UnileverCourses = ({ supportLinks }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isSearchCourses, setIsSearchCourses] = useState('');

  const coursesToShow = useMemo(() => {
    return supportLinks.filter(
      (o) =>
        o.name.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
        o.description.toLowerCase().includes(isSearchTerm.toLowerCase())
    );
  }, [supportLinks, isSearchTerm]);

  return (
    <motion.section className='px-0 lg:px-6 w-full flex flex-col gap-6'>
      <div className='border-y border-y-neutral-400'>
        <div className='flex justify-between items-center py-3'>
          {isActiveSearch ? (
            <div className='w-full'>
              <input
                type='text'
                className='w-full bg-transparent border-none focus:border-none focus:ring-0 py-0 placeholder:text-neutral-400'
                autoFocus
                value={isSearchTerm}
                onChange={(e) => setIsSearchTerm(e.target.value)}
                id='search'
                name='search'
                placeholder='Enter search term'
              />
            </div>
          ) : (
            <div
              className='flex items-center gap-1.5 cursor-pointer'
              onClick={() => setIsActiveSearch(true)}
            >
              <div>
                <MagnifyingGlassIcon className='w-5 h-5 fill-neutral-500' />
              </div>
              <div className='uppercase text-sm text-neutral-500 text-small font-semibold'>
                Search
              </div>
            </div>
          )}

          <div className='flex items-center gap-1.5'>
            <div
              className={`uppercase text-sm text-neutral-500 text-small font-semibold ${
                isActiveSearch ? 'hidden' : 'block'
              }`}
            >
              Sort
            </div>
            {isActiveSearch ? (
              <div onClick={() => setIsActiveSearch(false)}>
                <XMarkIcon className='w-5 h-5 fill-neutral-500' />
              </div>
            ) : (
              <div>
                <ArrowsUpDownIcon className='w-5 h-5 fill-neutral-500' />
              </div>
            )}
          </div>
        </div>
      </div>

      {isActiveSearch ? (
        <motion.div className='w-full flex items-center justify-center'>
          <div className='w-full h-full flex justify-center items-center'>
            {isSearchTerm.trim() === '' || coursesToShow.length === 0 ? (
              <div className='flex flex-col items-center py-3'>
                <div className='font-bold text-neutral-800'>
                  No Results Found.
                </div>
                <div className='text-neutral-600 text-center'>
                  Please refine your search above.
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 pb-9'>
                {coursesToShow.map((link) => (
                  <NewCouseCard
                    key={link.name}
                    title={link.name}
                    description={link.description}
                    background={link.background}
                    link={link.href}
                    link_text={'Select Course'}
                    Icon={SparklesIcon}
                    video={link.video}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div className='w-full grid lg:grid-cols-3 gap-12 pb-3 mt-9 overflow-hidden col-span-2'>
          <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg shadow-lg'>
            <div className='rounded-lg'>
              <div
                className='w-full aspect-[16/9] rounded-lg justify-center items-center flex bg-cover bg-center relative'
                style={{
                  backgroundImage: `url("https://packschool.s3.amazonaws.com/unilever-brands-1.png")`,
                }}
              >
                <motion.div className='absolute left-1 top-1 md:left-4 md:top-4 w-fit z-[2] bg-neutral-600/40 backdrop-blur-md rounded-lg px-2 py-1.5 shadow'>
                  <motion.div className='flex items-center gap-2'>
                    <motion.div>
                      <StarIcon className='w-5 h-5 fill-white' />
                    </motion.div>
                    <motion.div className='text-white font-bold'>
                      Featured Course
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div className='w-20 h-20 bg-white/40 backdrop-blur-lg hover:bg-clemson transition-colors ease-in rounded-full shadow-xl flex justify-center items-center cursor-pointer'>
                  <PlayCircleIcon className='w-20 h-20' />
                </motion.div>
              </div>
            </div>
            <div className='w-full flex justify-center items-center px-6 lg:px-0'>
              <motion.div className='flex flex-col gap-3 py-9'>
                <motion.div className='font-semibold text-2xl lg:text-3xl max-w-sm tracking-tight leading-none'>
                  Unilever Packaging Bootcamp 101
                </motion.div>
                <motion.div className='leading-snug lg:text-lg line-clamp-4 text-neutral-600 max-w-md'>
                  This Boot Camp will serve as an introduction to the packaging
                  industry and provide the fundamental knowledge necessary to
                  get you up to speed.
                </motion.div>
                <motion.div className='bg-black text-white font-bold w-fit rounded-lg px-6 py-2 mt-2 cursor-pointer'>
                  Select Course
                </motion.div>
              </motion.div>
            </div>
          </div>
          <NewCouseCard
            title={'Sustainable Packaging'}
            description={
              'An in-depth look at sustainability as it relates to packaging, and ways to reduce a company’s environmental footprint.'
            }
            background={'https://packschool.s3.amazonaws.com/demo-video.png'}
            link={'https://packagingschool.com/courses/sustainable-packaging'}
            link_text={'Select Course'}
            Icon={SparklesIcon}
            callout={'Most Popular'}
            video={'https://www.youtube.com/watch?v=ynDhF_jYZn8'}
          />
          <NewCouseCard
            title={'Packaging Bootcamp 101'}
            description={
              'This Boot Camp will serve as an introduction to the packaging industry and provide the fundamental knowledge necessary to get you up to speed.'
            }
            background={'https://packschool.s3.amazonaws.com/bootcamp101.png'}
            link={'https://packagingschool.com/courses/packaging-boot-camp-101'}
            link_text={'Select Course'}
            Icon={SparklesIcon}
            callout={'Most Popular'}
            video={'https://www.youtube.com/watch?v=L4Q6sZlXoe4'}
          />
          <NewCouseCard
            title={'Corrugated Containers'}
            description={
              'An informative course with easy to digest information that will teach you the art and science of corrugated containers.'
            }
            background={'https://packschool.s3.amazonaws.com/corrugated.png'}
            link={'https://learn.packagingschool.com/enroll/36818'}
            link_text={'Select Course'}
            Icon={SparklesIcon}
            callout={'Most Popular'}
            video={'https://www.youtube.com/watch?v=ABLmndzcET4'}
          />
        </div>
      )}

      {!isActiveSearch && isExpanded ? (
        <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10 pb-9'>
          {supportLinks
            .filter((cou) => cou.featured != true)
            .map((link) => (
              <NewCouseCard
                key={link.name}
                title={link.name}
                description={link.description}
                background={link.background}
                link={link.href}
                link_text={'Select Course'}
                Icon={SparklesIcon}
                video={link.video}
              />
            ))}
        </div>
      ) : (
        <div></div>
      )}

      {!isActiveSearch && (
        <div
          className='w-full flex justify-center mb-12'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className='flex items-center gap-2 bg-clemson hover:bg-clemson-dark cursor-pointer text-white px-6 py-3 rounded-lg font-semibold shadow-md'>
            <div>{isExpanded ? 'Hide Courses' : 'Show All Courses'}</div>
            <div>
              <ChevronDoubleDownIcon
                className={`w-5 h-5 fill-white transition-all ease-in ${
                  isExpanded ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default UnileverCourses;
