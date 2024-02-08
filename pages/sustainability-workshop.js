import React, { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';

import IconButton from '../components/shared/IconButton';
import { Reveal } from '../components/shared/Reveal';
import FadeIn from '../helpers/FadeIn';
import ScrollingCards from '../components/shared/ScrollingCards';

const cards = [
  {
    id: 1,
    background: 'something',
    title: 'Interactive',
    description:
      'The Packaging School’s workshops are exciting, collaborative, get-your-hands-dirty events that go far beyond just  listening to a 60-minute industry presentation.',
    src: 'https://packschool.s3.amazonaws.com/interactive-sm.webp',
  },
  {
    id: 2,
    background: 'something',
    title: 'Commitment to Excellence',
    description:
      'We are always innovating and improving our content based on feedback from our audience! Dr. Hurley is committed to leveling up your sustainability IQ through customization for your unique organization.',
    src: 'https://packschool.s3.amazonaws.com/excellence.webp',
  },
  {
    id: 3,
    background: 'something',
    title: 'Groundbreaking',
    description:
      'Learn cutting-edge industry concepts that move you beyond the "wild west" of sustainability innovations in the packaging space.',
    src: 'https://packschool.s3.amazonaws.com/science-sm.webp',
  },
  {
    id: 4,
    background: 'something',
    title: 'Subject Knowledge Expertise',
    description:
      'Dr. Hurley has published over 100 industry publications and peer-reviewed articles. As thought leader in the packaging industry, Dr. Hurley is sought after worldwide to deliver presentations and workshops.',
    src: 'https://packschool.s3.amazonaws.com/expertise-sm.webp',
  },
  {
    id: 5,
    background: 'something',
    title: 'Proven Success',
    description:
      'At the end of each workshop, you will have built out a road map for sustainability success within your organization.',
    src: 'https://packschool.s3.amazonaws.com/roadmap-sm.webp',
  },
];

const Page = () => {
  const imageRef = useRef();
  const isInView = useInView(imageRef);

  return (
    <>
      <Head>{/* add title and description */}</Head>
      <div className='w-full flex flex-col py-10 gap-12 lg:gap-36 md:max-w-xl mx-auto lg:max-w-7xl'>
        {/* HERO */}
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-40  px-5 lg:px-10 xl:px-0'>
          <div className='flex flex-col gap-5 justify-center'>
            <div>
              <Reveal>
                <h1 className='text-4xl xl:text-5xl  dark:text-white'>
                  Interactive Workshops Hosted by Industry Professionals
                </h1>
              </Reveal>
            </div>
            <div>
              <FadeIn delay={0.5}>
                <p>
                  Partner with us for a tailored 1-3 hour workshop and keynote
                  on sustainable innovation, where our experts guide you through
                  sustainability definition, audits, creative brainstorming,
                  goal-setting, greenwashing identification, and environmental
                  impact measurement to bring your product innovations to life.
                </p>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.75}>
                <IconButton
                  text={'Inquire Below'}
                  icon={
                    <ArrowDownCircleIcon
                      className='-mr-0.5 h-6 w-6'
                      aria-hidden='true'
                    />
                  }
                />
              </FadeIn>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <motion.div
              className='w-full h-full relative max-w-xl ml-auto'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.85 }}
            >
              <motion.div
                className='absolute z-10 w-[125px] xl:w-[175px] bottom-20 xl:bottom-[120px] -left-8 xl:-left-20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.15 }}
              >
                <Image
                  src={'https://packschool.s3.amazonaws.com/bubble1.png'}
                  width={430}
                  height={281}
                  layout='responsive'
                  alt='=chat bubble'
                />
              </motion.div>
              <motion.div
                className='absolute z-10 w-[125px] xl:w-[175px] bottom-[190px] xl:bottom-[260px] left-3'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25, duration: 0.15 }}
              >
                <Image
                  src={'https://packschool.s3.amazonaws.com/bubble2.png'}
                  width={430}
                  height={372}
                  layout='responsive'
                  alt='=chat bubble'
                />
              </motion.div>
              <motion.div
                className='absolute z-10 w-[125px] xl:w-[175px] bottom-40 xl:bottom-[190px] -right-6 xl:-right-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.55, duration: 0.15 }}
              >
                <Image
                  src={'https://packschool.s3.amazonaws.com/bubble5.png'}
                  width={430}
                  height={372}
                  layout='responsive'
                  alt='=chat bubble'
                />
              </motion.div>
              <motion.div
                className='absolute z-10 w-[125px] xl:w-[175px] bottom-20 -right-6 xl:-right-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.85, duration: 0.15 }}
              >
                <Image
                  src={'https://packschool.s3.amazonaws.com/bubble3.png'}
                  width={430}
                  height={372}
                  layout='responsive'
                  alt='=chat bubble'
                />
              </motion.div>
              <motion.div
                className='absolute z-10 w-[125px] xl:w-[175px] bottom-[160px] left-[140px] xl:-right-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.15 }}
              >
                <Image
                  src={'https://packschool.s3.amazonaws.com/bubble4.png'}
                  width={430}
                  height={372}
                  layout='responsive'
                  alt='=chat bubble'
                />
              </motion.div>
              <Image
                src={'https://packschool.s3.amazonaws.com/workshop-full.webp'}
                alt='Partner with us for a tailored 1-3 hour workshop and keynote on sustainable innovation, where our experts guide you through sustainability definition, audits, creative brainstorming, goal-setting, greenwashing identification, and environmental impact measurement to bring your product innovations to life.'
                width={430}
                height={430}
                layout='responsive'
              />
            </motion.div>
          </div>
        </div>
        <div className='w-full md:rounded-2xl bg-gradient-to-t from-brand-green to-base-light flex flex-col gap-6 pb-20 pt-16'>
          <div className='max-w-xl mx-auto flex flex-col gap-4 text-center px-6 lg:px-10 xl:px-0'>
            <h2 className='text-2xl xl:text-3xl'>
              Why Engage the Packaging School to Facilitate Your Workshop?
            </h2>
            <p className='leading-snug'>
              We are always innovating and improving our content based on
              feedback from our audience! Dr. Hurley is committed to leveling up
              your sustainability IQ through customization for your unique
              organization.
            </p>
          </div>
          <ScrollingCards testimonials={cards} />
        </div>
      </div>
    </>
  );
};

export default Page;
