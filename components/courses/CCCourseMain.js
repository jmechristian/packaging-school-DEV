import React from 'react';
import CourseIntro from './CourseIntro';
import CourseInfo from './CourseInfo';
import CourseObjectives from './CourseObjectives';
import { motion } from 'framer-motion';
import CCCourseIntro from './CCCourseIntro';

const CCCourseMain = ({ data }) => {
  return (
    data && (
      <section className='w-full h-full bg-white dark:bg-dark-dark bg-cover py-5 lg:py-16'>
        <motion.div
          className='container__inner lg:px-6 xl:px-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 85,
            mass: 1,
            delay: 0.8,
          }}
          key={data.courseId}
        >
          <div className='grid grid-cols-1 lg:grid-cols-5 pb-16'>
            <div className='flex flex-col gap-10 lg:gap-16 lg:col-span-3'>
              <CCCourseIntro
                id={data.courseId}
                category={data.category}
                categoryArray={data.categoryArray}
                title={data.title}
                instructor={data.instructor ? data.instructor : ''}
                subtitle={
                  "Hi, my eco friends! With 25 years in the industry, my focus has been on sustainable packaging and assisting companies in adopting eco-friendly practices. Working in a Weyerhaeuser corrugated production facility to pay my way through college helped me understand how corrugated is made and how it can be more efficient and sustainable. I’m married to an amazing supportive wife and we are so happy to have two wonderful kids. As the host of the Sustainable Packaging Podcast, I’ve learned so much about innovative and sustainable products coming on the market soon, and I’ve seen how urgent this issue of change is for our environment. Let's unite in advancing sustainable packaging solutions together. Join the founding cohort today!"
                }
                infoSheet={data.infoSheet}
                hours={data.hours}
                lessons={data.lessons}
                videos={data.videos}
              />
            </div>
            <div className='hidden lg:inline-grid lg:col-span-2 pl-8'>
              <CourseInfo
                embedid={data.preview}
                videos={data.videos}
                price={data.price}
                certification={''}
                link={data.link}
                trialLink={`${data.link}?et=free_trial`}
                subscriptionLink={
                  data.subscriptionLink ? data.subscriptionLink : null
                }
                subscriptionPrice={
                  data.subscriptionPrice ? data.subscriptionPrice : null
                }
                partOf={data.partOf ? data.partOf : undefined}
                seoImage={data.seoImage}
              />
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-5 w-full py-16 border-t-2 border-t-black dark:border-t-white'>
            <div className='col-span-3 w-full'>
              <CourseObjectives
                what={data.what_learned}
                items={data.objectives}
              />
            </div>
            <div className='col-span-2 w-full'>
              <div className='flex flex-col gap-10 dark:text-white'>
                <div className='flex flex-col gap-3'>
                  <div className='h3-base'>Contact Hours:</div>
                  <div className='text-lg'>
                    Ten hours over the course of five weeks (includes six live
                    virtual meetings with Cory!) where content will be
                    progressively disclosed as assigned per week.
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='h3-base'>Method of Instruction:</div>
                  <div className='text-lg'>
                    Instruction will consist of online pre-recorded lectures,
                    presentations, downloadable PDFs, practical exercises /
                    assignments, knowledge checks, discussion, and surveys.
                    While everything is online and housed within a learning
                    management system, virtual meetings with Cory are part of
                    this program.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-5 w-full py-16 border-y-2 border-y-black dark:border-y-white dark:text-white'>
            <div className='lg:hidden col-span-5 pb-16'>
              <div className='lg:hidden'>
                <CourseInfo
                  embedid={data.preview}
                  videos={data.videos}
                  price={data.price}
                  certification={''}
                  link={data.link}
                  trialLink={`${data.link}?et=free_trial`}
                  subscriptionLink={
                    data.subscriptionLink ? data.subscriptionLink : null
                  }
                  subscriptionPrice={
                    data.subscriptionPrice ? data.subscriptionPrice : null
                  }
                  partOf={data.partOf ? data.partOf : undefined}
                  seoImage={data.seoImage}
                />
              </div>
            </div>
            <div className='flex flex-col gap-5 col-span-5'>
              <div className='h3-base'>Why Learn in a Cohort?</div>
              <div className='grid lg:grid-cols-3 gap-10 text-lg'>
                <div>
                  <span className='font-bold block text-base-brand'>
                    Social Support and Networking:
                  </span>
                  Cohorts foster a sense of community among students. They
                  provide opportunities for networking, collaboration, and peer
                  support. Students can share experiences, ideas, and resources,
                  enhancing their learning through discussions and group
                  projects.
                </div>
                <div>
                  <span className='font-bold block text-base-brand'>
                    Consistency and Motivation:
                  </span>
                  Cohorts often follow a structured schedule or curriculum,
                  creating a consistent learning environment. This structure
                  helps students stay motivated and accountable, as they
                  progress through the program together and can support each
                  other in staying on track.
                </div>
                <div>
                  <span className='font-bold block text-base-brand'>
                    Enhanced Learning Experience:
                  </span>
                  Collaborative learning in cohorts promotes active engagement
                  and deeper understanding of the material. Through peer
                  interactions, students can gain different perspectives,
                  clarify concepts, and reinforce their knowledge through
                  teaching others.
                </div>
                <div>
                  <span className='font-bold block text-base-brand'>
                    Personalized Learning:
                  </span>
                  While cohorts provide a group setting, they also allow for
                  personalized learning experiences. Students can receive
                  feedback tailored to their progress and needs, both from
                  instructors and peers, which can accelerate learning and skill
                  development.
                </div>
                <div>
                  <span className='font-bold block text-base-brand'>
                    Building Professional Relationships:
                  </span>
                  In professional and educational settings, cohorts often
                  include individuals from diverse backgrounds and experiences.
                  This diversity enriches discussions and exposes students to
                  different viewpoints, preparing them for collaborative work in
                  future careers.
                </div>
                <div>
                  <span className='font-bold block text-base-brand'>
                    Long-Term Support and Alumni Networks:
                  </span>
                  Cohorts often continue to stay connected even after completing
                  the program. This can lead to long-term professional
                  relationships, mentorship opportunities, and access to alumni
                  networks that support career advancement.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    )
  );
};

export default CCCourseMain;
