import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { MdAccessTime, MdExtension } from 'react-icons/md';
import { useSelector } from 'react-redux';

const CardThree = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { allCourses } = useSelector((state) => state.course_filter);

  const cardLesson = useMemo(() => {
    return allCourses && allCourses.filter((c) => c.id === id);
  }, [id, allCourses]);

  return cardLesson ? (
    <div className='w-[360px] h-[515px] bg-neutral-900 rounded-[22px] flex justify-center py-3 shadow-xl hover:scale-[102%] transition-all ease-in cursor-pointer'>
      <div className='w-[336px] h-full bg-yellow-100 rounded-2xl'>
        <div className='h-[77px] bg-clemson rounded-t-xl flex items-center gap-3'>
          <div className='bg-neutral-900 -ml-2 h-full w-[73px] rounded-r-2xl flex items-center justify-center'>
            <div className='flex justify-center rotate-6'>
              <Image
                src={'https://packschool.s3.amazonaws.com/gold-diamon.png'}
                alt='legendary'
                width={51}
                height={46}
              />
            </div>
          </div>
          <div className='font-bold text-xl text-white leading-tight w-fit flex-1'>
            {cardLesson[0].title}
          </div>
        </div>
        <div
          className='w-full h-auto aspect-[16/9] bg-cover bg-center'
          style={{
            backgroundImage: `url(${cardLesson[0].seoImage})`,
          }}
        ></div>
        <div className='bg-white w-full font-bold h-[45px] rounded-xl ring-6 ring-neutral-900 -mr-2'>
          <div className='w-full px-3 flex items-center justify-between h-full'>
            <div className='font-bold text-lg'>${cardLesson[0].price}</div>
            <div className='flex gap-1.5 items-center'>
              <div className='aspect-[1/1] w-[28px] h-[28px] bg-neutral-900 rounded-full flex items-center justify-center'>
                <MdExtension color='white' size={18} />
              </div>
              <div className='flex justify-center items-center text-lg'>
                {cardLesson[0].hours} <MdAccessTime color='black' size={19} />
              </div>
            </div>
          </div>
        </div>
        <div className='leading-tight px-4 pt-6 line-clamp-6'>
          {cardLesson[0].subheadline}
        </div>
      </div>
    </div>
  ) : (
    <div className=''>Loading</div>
  );
};

export default CardThree;
