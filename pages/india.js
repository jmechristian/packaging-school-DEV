import React, { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import BrutalCourseCard from '../components/shared/BrutalCourseCard';

const cpsIds = [
  'ff174f01-5f76-486c-8d7a-849d6d3ff914',
  '672c1d2b-ba6c-4e02-8c34-83e8c3e4f7b3',
  '2418801f-a352-4eae-a394-87a5c0c55f79',
  '4e6c079e-b396-4762-8b7f-4fa4dea64969',
  'f2fad11c-4548-41ea-b39d-be5a4913a4f5',
  '452ec0d8-7464-4bd6-bfc2-eab051a9b40b',
  '431ce262-cf48-4a7c-8ff1-2909f548149b',
  '5d84ef6e-3fa3-423d-8e33-67d32605cb93',
  'f2bd57ba-adbf-45ab-88f0-d68ac20c5b7e',
  '73139212-0b15-4d96-9942-1757fa058fdf',
  'e39e127a-11bc-448d-a8c0-209b3abbfdb9',
];

const Page = () => {
  const [isIndex, setIsIndex] = useState(0);

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex flex-col gap-12 py-10 md:py-16 w-full  border-b-black border-b-2'>
        <div className='flex flex-col gap-4 px-5 xl:px-0'>
          <div className='bg-brand-red border-black border-2 text-white font-bold px-4 py-2 rounded-lg w-fit shadow-[4px_4px_0px_black] lg:text-lg'>
            Limited Time!
          </div>
          <div className='text-4xl lg:max-w-3xl lg:text-7xl font-medium tracking-tighter lg:leading-[1.0em]'>
            Unbox Your Potential: Dive into Expert-Crafted Courses at{' '}
            <span className='text-base-brand font-bold'>
              85% OFF!<sup className='-mt-3'>*</sup>
            </span>
          </div>
        </div>
      </div>
      {/* CPS COURSES */}
      <div className='flex flex-col gap-10 py-10 px-5 xl:px-0 border-b-2 border-b-black'>
        <div className='flex flex-col gap-5'>
          <div className='text-2xl'>
            <h3>Certificate of Packaging Science Core Courses</h3>
          </div>
          <div className=' max-w-4xl w-full'>
            The Certificate of Packaging Science offers a comprehensive program
            consisting of 12 courses that cover all major aspects of packaging
            materials, processes, and design. Interested in a structured,
            comprehensive learning program over the next 12-months?{' '}
            <span
              className='underline text-base-mid font-semibold'
              onClick={() =>
                window.open(
                  'https://packagingschool.com/certificate-of-packaging-science-application',
                  '_blank'
                )
              }
            >
              Apply now!
            </span>{' '}
            Looking to just get a jump start? Puchase an individual course
            below.
          </div>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-fit hidden mt-7'>
            {cpsIds.map((id) => (
              <div key={id}>
                <BrutalCourseCard id={id} />
              </div>
            ))}
          </div>
          <div className='flex w-full gap-5 pt-5 pb-3 md:hidden'>
            <BrutalCourseCard id={cpsIds[isIndex]} />
          </div>
          <div className='flex w-full justify-between items-center md:hidden'>
            <div className='grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white'>
              <GoArrowLeft
                onClick={() => {
                  if (isIndex != 0) {
                    setIsIndex((prevValue) => prevValue - 1);
                  }
                }}
              />
            </div>
            <div>{isIndex + 1 + '/' + cpsIds.length}</div>
            <button
              onClick={() => {
                if (isIndex < cpsIds.length - 1) {
                  setIsIndex((prevValue) => prevValue + 1);
                }
              }}
              className='grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white'
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* OTHER COURSES */}
      <div className='flex flex-col gap-10 py-10 px-5 xl:px-0'>
        <div className='flex flex-col gap-5'>
          <div className='text-2xl'>
            <h3>
              Explore a World of Knowledge Applicable Across Every Industry
            </h3>
          </div>
          <div className='max-w-4xl'>
            Dive into an expansive library that caters to every professional
            field, from technology and business to creative arts and science.
            Whether you’re starting out or scaling up, find courses tailored for
            every step of your career journey.
            <span
              className='underline text-base-mid font-semibold'
              onClick={() =>
                window.open(
                  'https://packagingschool.com/certificate-of-packaging-science-application',
                  '_blank'
                )
              }
            >
              Apply now!
            </span>{' '}
            Looking to just get a jump start? Puchase an individual course
            below.
          </div>
          <div className='md:hidden flex flex-col gap-10'>
            <BrutalCourseCard id={'fef1f2a6-b9b9-4619-9900-c677f91681c7'} />
            <BrutalCourseCard id={'4e32d164-d4d9-4ba2-bcc5-ce882df75b71'} />
          </div>
          <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 w-fit'>
            <BrutalCourseCard id={'fef1f2a6-b9b9-4619-9900-c677f91681c7'} />
            <BrutalCourseCard id={'4e32d164-d4d9-4ba2-bcc5-ce882df75b71'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
