import React from 'react';
import FadeIn from '../../../helpers/FadeIn';
import { SectionHeading } from '../../shared/SectionHeading';

const CMPMReviews = () => {
  const testimonials = [
    {
      body: 'The CMPM is a great program for both up-and-coming professionals curious to know more about packaging engineering as well as seasoned packaging professionals who are looking to do deeper dives and obtain additional knowledge; very fun, useful and engaging overall!',
      author: {
        name: 'Mario Barrios',
        handle: 'Senior Packaging Engineer, Colgate-Palmolive Company',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'At this point in my career, I was searching for an educational opportunity with the most comprehensive, data driven, and practical program and the CMPM offered that in droves. I was able to use my background to traverse other packaging disciplines and learn all new platforms I had interacted with but never had the chance to dive in. I recommend this program whether you’re just starting in packaging or even with several years under your belt.',
      author: {
        name: 'Adam Moffitt',
        handle: 'Business Development Manager, UPM Raflatac',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'The CMPM program offers valuable insights into the latest packaging trends and processes.  It also provides an excellent framework for project management. I highly encourage anyone who is interested in taking their packaging knowledge to the next level to take this course.',
      author: {
        name: 'Clay Mitchell',
        handle: 'Category Manager, American Paper and Twine',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'This program met my expectations. In this program we are learning more in-depth compared to what we could learn in school and at a much more accelerated pace. For the price and going through the program, this program met my objective.',
      author: {
        name: 'Gavan Singh',
        handle: 'Packaging Eng and Logistic Coordinator Draexlmaier',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'I loved the fact that the CMPM program was an interactive online series that inspired my creativity and enabled my ability to use new tools to take back to Nissan North America, Inc. It allowed me to implement an effective and efficient packaging process to help not only me, but my colleagues in their everyday performance on the job.',
      author: {
        name: 'Lauren McDonald',
        handle: 'Packaging Specialist, Volkswagen Group of America, Inc.',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'Although I am currently in the corrugated industry this course gave me a great refresher on developing packaging for our current customers and new prospects. Very detailed and insightful into the “why” of consumer buying decisions. I use the framework for the project development plan daily and have asked my team of Account Managers and Designers to focus on key elements of the plan, specifically the needs analysis and market research portions.',
      author: {
        name: 'Chris Marsh',
        handle: 'Regional Sales Manager, Jamestown Container Corporation',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'The CMPM is a very complete and inspiring program, its content  has contributed to reinforce my knowledge in key areas such as materials, production processes, and supply chain. This allowed me to keep growing as a packaging professional and will further contribute to strengthen my value proposition and packaging solutions to my customers.',
      author: {
        name: 'Carolina Aristizábal Molina',
        handle: 'Packaging Engineer, Smurfit Kappa',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'The CMPM was a constructive overview of all things packaging! The coursework provided was informational and applicable to everyday practices within our organization; laying the groundwork for what it takes to launch a package.',
      author: {
        name: 'Garrett Patrick',
        handle: 'Packaging Engineer, Gorilla Glue',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: 'The CMPM program exceeded my expectations regarding packaging machine systems, sustainability, and point of purchase strategies, through a complete and holistic approach to the different aspects of packaging.',
      author: {
        name: 'Rebeca Granados Andrade',
        handle: 'Experience Centre Manager, Smurfit Kappa México',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];

  return (
    <section id='reviews'>
      <div className='container-7xl py-32 flex flex-col gap-12'>
        <FadeIn>
          <SectionHeading number='4'>What do your peers say?</SectionHeading>
        </FadeIn>
        <FadeIn>
          <div>
            <div>
              <div className='max-w-3xl'>
                <p className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl'>
                  We have worked with tens of thousands of amazing people.
                </p>
              </div>
              <div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
                <div className='-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.author.handle}
                      className='pt-8 sm:inline-block sm:w-full sm:px-4'
                    >
                      <figure className='rounded-2xl bg-gray-50 dark:bg-dark-mid p-8 text-sm leading-6'>
                        <blockquote className='text-gray-900 dark:text-white text-lg'>
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className='mt-6 flex items-center gap-x-4'>
                          <div>
                            <div className='font-semibold text-gray-900 dark:text-white'>
                              {testimonial.author.name}
                            </div>
                            <div className='text-gray-600 dark:text-gray-500 leading-tight'>{`${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CMPMReviews;
