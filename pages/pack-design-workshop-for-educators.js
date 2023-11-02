import React, { useState } from 'react';
import {
  ComputerDesktopIcon,
  ChatBubbleLeftEllipsisIcon,
  HandRaisedIcon,
  CodeBracketIcon,
  BoltIcon,
  ArrowUpRightIcon,
  ArrowSmallRightIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const Page = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className='w-full h-full xl:py-12 p-3 md:p-6'>
      <div className='max-w-7xl mx-auto flex flex-col gap-20'>
        <div className='grid lg:grid-cols-2 w-full gap-4 overflow-hidden'>
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-col gap-12 lg:gap-20 bg-gradient-to-tl from-base-brand/70 to-base-light rounded-xl px-6 md:px-9 lg:px-6 py-9'>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-wrap gap-x-6 gap-y-3 mb-3'>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <BoltIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Newly Released!
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <ComputerDesktopIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Online
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <HandRaisedIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Hands-On
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <CodeBracketIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Software Provided
                    </div>
                  </div>
                </div>
                <div className='text-4xl lg:text-6xl font-semibold tracking-tighter max-w-sm'>
                  Pack Design Workshop for Educators
                </div>
                <div className='text-xl  text-white'>
                  <span className='font-medium'>$399 / License</span>
                </div>
              </div>
              <div>
                <p className='leading-normal text-lg'>
                  Master the fundamentals of packaging design in this immersive,
                  online workshop. Work through the design process from research
                  to building your own digital prototypes. Completing this
                  workshop will give you a solid foundation of the box design
                  process as well as some hands-on software training that will
                  allow you to directly apply your newfound knowledge to the
                  packaging challenges that packaging professionals face every
                  day.
                </p>
              </div>
            </div>
            <div
              className='flex flex-col lg:flex-row gap-4 w-full h-full cursor-pointer'
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div className=' bg-base-dark rounded-xl w-full h-full flex py-9 lg:p-6 items-center justify-center'>
                <div className='flex flex-col gap-2 items-center'>
                  <div className='font-etna text-center text-3xl md:text-4xl leading-none text-clemson'>
                    Be a Packaging Hero!
                  </div>
                  <div className='text-white leading-tight text-center px-6'>
                    Purchase a Class Pack of 30 licenses for your students.
                  </div>
                </div>
              </div>
              <div
                className={`bg-clemson rounded-xl h-full w-full pr-1.5 lg:max-w-[20%] lg:aspect-[1/1] flex justify-center items-center`}
              >
                <div>
                  <ArrowSmallRightIcon
                    className={`stroke-white stroke-4 transition-all ease-in w-24 h-24 ${
                      isHover ? 'scale-125' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center md:justify-end items-center bg-neutral-800 rounded-xl'>
            <div className='object-fit w-full h-full'>
              <Image
                src='https://packschool.s3.amazonaws.com/packtest.png'
                className='w-full h-full object-fit'
                alt='Packaging Design Workshop'
                layout='responsive'
                width={632}
                height={699}
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-t-neutral-600 pt-10 overflow-hidden md:px-9 lg:px-6'>
          <div className='text-2xl lg:text-4xl font-bold tracking-tight max-w-sm font-etna'>
            Who is this workshop intended for?
          </div>
          <div className='flex flex-col gap-6'>
            <div className='text-lg lg:text-xl leading-normal'>
              This program is ideal for high school, home schooling, community
              college, exceptional student programs, educational camp programs,
              and more. Order a class set* of licenses for your students and
              take advantage of the educator discount!**
            </div>
            <div className='text-lg lg:text-xl leading-normal'>
              Educators of all varieties can easily use this in their classroom
              settings: after-school programs, camps, exceptional student
              projects, homeschooling, and even traditional high school or
              community college classrooms. This course is easily adaptable for
              individual or group work.
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:col-span-2 bg-neutral-100 rounded-lg px-6 py-6 overflow-hidden'>
          <div className='text-2xl lg:text-3xl font-bold font-etna tracking-tight max-w-sm md:col-span-2 lg:col-span-5 xl:col-span-1'>
            Course Objectives
          </div>
          <div className='border p-3 text-lg'>
            Research competitive packaging within your market.
          </div>
          <div className='border p-3 text-lg'>
            Develop a process for ideation and experimentation.
          </div>
          <div className='border p-3 text-lg'>
            Understand and apply design best practices through prototyping.
          </div>
          <div className='border p-3 text-lg'>
            Digitally develop a final rendering of your prototype.
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-t-neutral-600 pt-10 overflow-hidden'>
          <div className='text-2xl lg:text-3xl font-bold tracking-tight max-w-sm font-etna'>
            Syllabus
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:col-span-2'>
            <div>
              <Disclosure>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <>
                    <Disclosure.Button className='bg-base-mid grid grid-cols-6 rounded-t-lg w-full p-3'>
                      <div className='col-span-5  text-left text-white  text-xl'>
                        <span className='text-orange-300 font-bold font-sans tracking-tighter mr-1'>
                          01
                        </span>{' '}
                        Welcome
                      </div>
                      <div className='col-span-1 flex justify-end'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'rotate-90 transform w-6 h-6 text-right fill-white'
                              : 'w-6 h-6 text-right fill-white'
                          }
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className='border rounded-b-lg'>
                      <ul className='py-3'>
                        <li className='ml-9 py-1 list-disc'>
                          Navigating the Course
                        </li>
                        <li className='ml-9 py-1 list-disc'>
                          Course Introduction and the Design Process
                        </li>
                        <li className='ml-9 py-1 list-disc'>
                          Project and Schedule Review
                        </li>
                        <li className='ml-9 py-1 list-disc'>Survey</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <>
                    <Disclosure.Button className='bg-base-mid grid grid-cols-6 rounded-t-lg w-full p-3'>
                      <div className='col-span-5  text-left text-white text-xl'>
                        <span className='text-orange-300 font-bold font-sans tracking-tighter mr-1'>
                          02
                        </span>{' '}
                        Market Research
                      </div>
                      <div className='col-span-1 flex justify-end'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'rotate-90 transform w-6 h-6 text-right fill-white'
                              : 'w-6 h-6 text-right fill-white'
                          }
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className='border rounded-b-lg'>
                      <ul className='py-4'>
                        <li className='ml-9 py-1 list-disc'>Retail Audit</li>
                        <li className='ml-9 py-1 list-disc'>
                          Elemental Analysis
                        </li>
                        <li className='ml-9 py-1 list-disc'>Regulations</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <>
                    <Disclosure.Button className='bg-base-mid grid grid-cols-6 rounded-t-lg w-full p-3'>
                      <div className='col-span-5  text-left text-white text-xl'>
                        <span className='text-orange-300 font-bold font-sans tracking-tighter mr-1'>
                          03
                        </span>{' '}
                        Brainstorm & Ideation
                      </div>
                      <div className='col-span-1 flex justify-end'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'rotate-90 transform w-6 h-6 text-right fill-white'
                              : 'w-6 h-6 text-right fill-white'
                          }
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className='border rounded-b-lg'>
                      <ul className='py-4'>
                        <li className='ml-9 py-1 list-disc'>50 Ideas Ledger</li>
                        <li className='ml-9 py-1 list-disc'>
                          Brainstorming Methods
                        </li>
                        <li className='ml-9 py-1 list-disc'>Ideation</li>
                        <li className='ml-9 py-1 list-disc'>Prototyping</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <>
                    <Disclosure.Button className='bg-base-mid grid grid-cols-6 rounded-t-lg w-full p-3'>
                      <div className='col-span-5  text-left text-white text-xl'>
                        <span className='text-orange-300 font-bold font-sans tracking-tighter mr-1'>
                          04
                        </span>{' '}
                        Design Factors
                      </div>
                      <div className='col-span-1 flex justify-end'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'rotate-90 transform w-6 h-6 text-right fill-white'
                              : 'w-6 h-6 text-right fill-white'
                          }
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className='border rounded-b-lg'>
                      <ul className='py-4'>
                        <li className='ml-9 py-1 list-disc'>Appearance</li>
                        <li className='ml-9 py-1 list-disc'>Visual</li>
                        <li className='ml-9 py-1 list-disc'>Placement</li>
                        <li className='ml-9 py-1 list-disc'>Connection</li>
                        <li className='ml-9 py-1 list-disc'>Simplicity</li>
                        <li className='ml-9 py-1 list-disc'>Ergonomics</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <>
                    <Disclosure.Button className='bg-base-mid grid grid-cols-6 rounded-t-lg w-full p-3'>
                      <div className='col-span-5  text-left text-white text-xl'>
                        <span className='text-orange-300 font-bold font-sans tracking-tighter mr-1'>
                          05
                        </span>{' '}
                        Digital Prototype
                      </div>
                      <div className='col-span-1 flex justify-end'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'rotate-90 transform w-6 h-6 text-right fill-white'
                              : 'w-6 h-6 text-right fill-white'
                          }
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className='border rounded-b-lg'>
                      <ul className='py-4'>
                        <li className='ml-9 py-1 list-disc'>
                          Design Software Tutorial
                        </li>
                        <li className='ml-9 py-1 list-disc'>Prototype Setup</li>
                        <li className='ml-9 py-1 list-disc'>
                          Graphics and Text
                        </li>
                        <li className='ml-9 py-1 list-disc'>
                          Create and Save a Virtual Prototype
                        </li>
                        <li className='ml-9 py-1 list-disc'>
                          Resources for Printing
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <Disclosure>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <>
                    <Disclosure.Button className='bg-base-mid grid grid-cols-6 rounded-t-lg w-full p-3'>
                      <div className='col-span-5  text-left text-white text-xl'>
                        <span className='text-orange-300 font-bold font-sans tracking-tighter mr-1'>
                          06
                        </span>{' '}
                        Conclusion
                      </div>
                      <div className='col-span-1 flex justify-end'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'rotate-90 transform w-6 h-6 text-right fill-white'
                              : 'w-6 h-6 text-right fill-white'
                          }
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className='border rounded-b-lg'>
                      <ul className='py-4'>
                        <li className='ml-9 py-1 list-disc'>Course Summary</li>
                        <li className='ml-9 py-1 list-disc'>Final Survey</li>
                        <li className='ml-9 py-1 list-disc'>
                          How to Print Your Certificate of Completion
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <div className=' bg-gradient-to-tr from-base-brand via-base-mid to-clemson rounded-xl'>
          <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
            <h2 className='text-3xl font-bold  text-white sm:text-5xl font-etna'>
              Ready to get hands on?
              <br />
              Purchase your Class Pack.
            </h2>
            <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
              <a
                href='#'
                className='rounded-md bg-neutral-800 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson'
              >
                Buy Now
              </a>
              <a
                href='#'
                className='text-lg font-semibold leading-6 text-gray-900'
              >
                Need Invoicing?
              </a>
            </div>
          </div>
        </div>
        <div className='text-sm text-neutral-600 flex flex-col gap-3'>
          <div>
            *Educator discount applied to a minimum of however many licenses. If
            you need fewer than that, please order through our non-educator{' '}
            <a
              href='https://library.packagingschool.com/packdesign-workshop'
              target='_blank'
              rel='noreferrer'
            >
              website.
            </a>
          </div>
          <div>
            **Discounts do not stack; only one discount will be applied to your
            purchase. If a coupon code from an event is entered into the
            educator discount form, the greater discount will be applied.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
