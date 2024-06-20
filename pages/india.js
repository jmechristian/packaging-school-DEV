import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Meta from '../components/shared/Meta';
import IndiaCourseCard from '../components/shared/IndiaCourseCard';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

const cpsIds = [
  {
    id: 'ff174f01-5f76-486c-8d7a-849d6d3ff914',
    altPayment: 'https://buy.stripe.com/8wMeVQ8bY7zyecg5kn',
  },
  {
    id: '672c1d2b-ba6c-4e02-8c34-83e8c3e4f7b3',
    altPayment: 'https://buy.stripe.com/eVafZUboag640lq9AE',
  },
  {
    id: '2418801f-a352-4eae-a394-87a5c0c55f79',
    altPayment: 'https://buy.stripe.com/eVa4hc8bY3jigko3ch',
  },
  {
    id: '4e6c079e-b396-4762-8b7f-4fa4dea64969',
    altPayment: 'https://buy.stripe.com/8wM9Bwcse7zy8RW28e',
  },
  {
    id: 'f2fad11c-4548-41ea-b39d-be5a4913a4f5',
    altPayment: 'https://buy.stripe.com/aEUfZUeAm6vu5FK6ov',
  },
  {
    id: '452ec0d8-7464-4bd6-bfc2-eab051a9b40b',
    altPayment: 'https://buy.stripe.com/4gw5lg2REf206JOcMU',
  },
  {
    id: '431ce262-cf48-4a7c-8ff1-2909f548149b',
    altPayment: 'https://buy.stripe.com/7sIbJE4ZMbPO0lqeV3',
  },
  {
    id: '5d84ef6e-3fa3-423d-8e33-67d32605cb93',
    altPayment: 'https://buy.stripe.com/8wM00W9g26vud8c28i',
  },
  {
    id: 'f2bd57ba-adbf-45ab-88f0-d68ac20c5b7e',
    altPayment: 'https://buy.stripe.com/00geVQboa7zyd8c28j',
  },
  {
    id: '73139212-0b15-4d96-9942-1757fa058fdf',
    altPayment: 'https://buy.stripe.com/00geVQboa7zyd8c28j',
  },
  {
    id: 'e39e127a-11bc-448d-a8c0-209b3abbfdb9',
    altPayment: 'https://buy.stripe.com/6oE6pk2RE4nm6JO5kx',
  },
  {
    id: '4e32d164-d4d9-4ba2-bcc5-ce882df75b71',
    altPayment: 'https://buy.stripe.com/7sI8xs0Jwg645FKfZc',
  },
];

const Page = () => {
  const [isIndex, setIsIndex] = useState(0);
  const [isTerm, setIsTerm] = useState('');
  const [isLocation, setIsLocation] = useState(null);
  const router = useRouter();
  const { location } = useSelector((state) => state.auth);

  return (
    <>
      <Meta
        title={'Packaging School | India Student Discount'}
        description={
          'Unbox your potention with 85% OFF select Packaging School Courses'
        }
        image={'https://packschool.s3.amazonaws.com/firework-box-2-logo.webp'}
        keywords={
          'packaging, online education, India, Indian Student, design, materials, business'
        }
      />
      <div className='max-w-7xl mx-auto pb-16'>
        {!location || !location.country ? (
          <div className='flex flex-col gap-6 py-10 md:py-10 w-full'>
            <div className='w-1/4 h-16 bg-neutral-300 animate-pulse rounded-lg'></div>
            <div className='w-2/3 h-24 bg-neutral-300 animate-pulse rounded-lg'></div>
            <div className='w-2/3 h-24 bg-neutral-300 animate-pulse rounded-lg'></div>
            <div className='w-2/3 h-24 bg-neutral-300 animate-pulse rounded-lg'></div>
            <div className='w-2/3 h-24 bg-neutral-300 animate-pulse rounded-lg'></div>
          </div>
        ) : (location && location.country === 'IN') ||
          location.country === 'India' ? (
          <>
            <div className='flex flex-col gap-12 pt-10 md:pt-10 w-full '>
              <div className='flex flex-col gap-5 px-5 xl:px-0'>
                <div className='bg-brand-red border-black border-2 text-white font-bold px-4 py-2 rounded-lg w-fit shadow-[4px_4px_0px_black] lg:text-lg'>
                  Act Fast!
                </div>
                <div className='text-5xl lg:text-7xl font-medium tracking-tighter lg:leading-[1.0em]'>
                  Advance Your Future in Packaging:{' '}
                  <span className='font-bold text-base-brand'>
                    Save 85% on Courses
                  </span>{' '}
                  for a Limited Time!
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-10 pt-5 pb-10 px-5 xl:px-0 border-b-2 border-b-black'>
              <div className='flex flex-col gap-5'>
                <div className='w-full lg:text-lg'>
                  Seize this incredible opportunity to save 85% on top-tier
                  courses designed specifically for students eager to make a
                  mark in this dynamic field. Our comprehensive programs provide
                  you with the skills, knowledge, and confidence needed to excel
                  and innovate. Don’t let this limited-time offer slip away –
                  take your future into your own hands and empower yourself with
                  the education that will set you apart. Become a leader in the
                  packaging industry today!
                </div>
                {/* <div className='border-y-2 border-y-black py-8 md:px-5'>
                  <div className='flex flex-col md:flex-row gap-5 justify-between w-full items-center'>
                    <div className='h3-base w-full'>
                      Browse Selected Courses
                    </div>
                    <div className='relative mt-2 w-full max-w-2xl border border-neutral-600'>
                      <input
                        type='text'
                        name='india-search'
                        id='india-search'
                        value={isTerm}
                        onChange={(e) => setIsTerm(e.target.value)}
                        className='block w-full rounded-md border-0 py-2 pr-10 text-gray-900 placeholder:text-gray-500 ring-0 focus:ring-0'
                        placeholder='Search courses by title or keyword.'
                      />
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                        <MagnifyingGlassCircleIcon
                          className='h-7 w-7 text-gray-400'
                          aria-hidden='true'
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 w-full mt-7'>
                  {cpsIds.map((id) => (
                    <div key={id} className='flex justify-center w-full'>
                      <IndiaCourseCard id={id.id} paymentLink={id.altPayment} />
                      {/* <BrutalCourseCard
                        id={id.id}
                        discount={0.85}
                        coupon={'INDIASITE2024'}
                        altPayment={id.altPayment}
                      /> */}
                    </div>
                  ))}
                </div>

                <div className='flex w-full px-5 py-5 text-xs font-semibold items-center leading-none'>
                  <sup>*</sup> Price may fluctuate slightly based on current
                  converstion rates.
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-10 pt-16 pb-16 px-5 xl:px-0 border-y-2 border-b-black'>
              <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5'>
                <div className='flex flex-col gap-6 w-full max-w-xl'>
                  <div className='text-4xl'>
                    <h3>
                      Building a solid packaging foundation. Master the
                      essentials to elevate your designs.
                    </h3>
                  </div>
                  <div className='max-w-4xl'>
                    Dive into our Packaging 101 Boot Camp, designed to fit
                    seamlessly into your busy schedule. Spanning 20 workdays,
                    this course demands less than 20 minutes of your day to
                    unlock a comprehensive understanding of packaging
                    fundamentals. Through eight hours of rich educational
                    content, engaging activities, and invaluable cheat sheets,
                    you&apos;ll emerge with a robust foundation tailored for
                    success. Whether you&apos;re in marketing, sales,
                    procurement, legal, distribution, quality control,
                    manufacturing, or warehousing, this course addresses the
                    distinct packaging requirements of various departments. By
                    the end, you&apos;ll gain the critical thinking skills
                    essential for a successful role in the packaging development
                    process, ready to meet and exceed the unique demands of your
                    field.
                  </div>
                </div>
                <div>
                  <IndiaCourseCard
                    id={'fef1f2a6-b9b9-4619-9900-c677f91681c7'}
                    paymentLink={'https://buy.stripe.com/14kfZUak65rqb04cN1'}
                  />
                  {/* <BrutalCourseCard
                    id={'fef1f2a6-b9b9-4619-9900-c677f91681c7'}
                    discount={0.85}
                    coupon={'INDIASITE2024'}
                    altPayment={'https://buy.stripe.com/14kfZUak65rqb04cN1'}
                  /> */}
                </div>
              </div>
            </div>
            <div className='text-sm mt-6 pb-6 border-b-2 border-black'>
              *<span className='font-bold'>Course Enrollment Disclaimer:</span>{' '}
              Please be advised that all course orders are contingent upon the
              terms outlined in the enrollment agreement, including but not
              limited to, the verification of the student&apos;s location. We
              reserve the right to cancel any order that does not comply with
              these requirements. It is the responsibility of the student to
              ensure that their location aligns with the geographical and
              regulatory requirements stipulated in the enrollment agreement.
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col gap-12 py-10 md:py-16 w-full  border-b-black border-b-2 px-4 lg:px-0'>
              <div className='flex flex-col gap-5 px-5 xl:px-0'>
                <div className='bg-brand-red border-black border-2 text-white font-bold px-4 py-2 rounded-lg w-fit shadow-[4px_4px_0px_black] lg:text-lg'>
                  Help!
                </div>
                <div className='text-5xl lg:max-w-4xl lg:text-7xl font-medium tracking-tighter lg:leading-[1.0em]'>
                  You have reached this page in error. Please head to our{' '}
                  <span
                    className='text-base-brand font-bold cursor-pointer'
                    onClick={() => router.push('/all_courses')}
                  >
                    Courses
                  </span>{' '}
                  page for expert-crafted education.
                </div>
              </div>
            </div>
            <div className='text-sm mt-6 pb-6 border-b-2 border-black px-6 xl:px-0'>
              Can&apos;t find what you are looking for? Please reach out to
              info@packagingschool.com for questions, concerns, or lets us know
              what you&apos;d like to learn.
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
