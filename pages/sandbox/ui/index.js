import React from 'react';
import { useSelector } from 'react-redux';

import CPSCard from '../../../components/rive/CPSCard';
import CMPMCard from '../../../components/rive/CMPMCard';
import APCCard from '../../../components/rive/APCCard';
import FPCCard from '../../../components/rive/FPCCard';
import CSPCard from '../../../components/rive/CSPCard';
import BrutalCourseCard from '../../../components/shared/BrutalCourseCard';
import LMSCourseCard from '../../../components/shared/LMSCourseCard';

const Page = () => {
  const { allCourses } = useSelector((state) => state.course_filter);
  return (
    <div className='container-base'>
      <div className='w-full flex flex-col gap-24'>
        <div className='h1-base'>UI Library</div>
        <div className='flex flex-col gap-5'>
          <div className='w-full pb-5 border-b-4 border-b-black'>
            <div className='h2-base'>Cards</div>
          </div>
          {/* CERT CARDS */}
          <div className='flex flex-col gap-5'>
            <div className='h3-base pb-3 border-b-2 border-b-black'>
              Certificate Cards
            </div>
            <div className='grid grid-cols-4'>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <CMPMCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <CPSCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <CSPCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <APCCard />
              </div>
              <div className='flex justify-center items-center h-full min-h-[500px] w-full'>
                <FPCCard />
              </div>
            </div>
          </div>
          {/* COURSE CARDS */}
          <div className='flex flex-col gap-5'>
            <div className='h3-base py-3 border-y-2 border-y-black'>
              Course Cards
            </div>
            <div className='grid grid-cols-4'>
              {/* <LMSCourseCard id={'8c90539f-5dc5-48ba-a9ab-7e3fa186336f'} />
              <LMSCourseCard id={'3cc39c29-60ba-4482-9869-f9d8e0b67d1a'} />
              <LMSCourseCard id={'e39e127a-11bc-448d-a8c0-209b3abbfdb9'} />
              <LMSCourseCard id={'7dcbae38-2cf5-4d71-9266-4f11cbb0d2ff'} />
              <LMSCourseCard id={'08fc6679-6728-43b7-977b-7d98ec04bfd5'} />
              <LMSCourseCard id={'452ec0d8-7464-4bd6-bfc2-eab051a9b40b'} />
              <LMSCourseCard id={'a8cced4f-d854-4bb5-9650-c55e686a6498'} />
              <LMSCourseCard id={'5d84ef6e-3fa3-423d-8e33-67d32605cb93'} /> */}
              {allCourses &&
                [...allCourses]
                  .sort((a, b) =>
                    a.categoryArray[0].localeCompare(b.categoryArray[0])
                  )
                  .map((course) => (
                    <LMSCourseCard id={course.id} key={course.id} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
