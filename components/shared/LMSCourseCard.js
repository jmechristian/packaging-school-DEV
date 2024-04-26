import React, { useEffect, useState } from 'react';
import { setCardIcon, setColorByCategory } from '../../helpers/utils';
import { IoDiamond } from 'react-icons/io5';
import VideoPlayer from '../VideoPlayer';
import {
  MdVideocam,
  MdLocalGroceryStore,
  MdInfo,
  MdZoomIn,
} from 'react-icons/md';
import { createClick } from '../../src/graphql/mutations';
import { useSelector } from 'react-redux';
import { registerClick } from '../../helpers/api';

const LMSCourseCard = ({ id, icons, coupon }) => {
  const [isCourse, setIsCourse] = useState([]);
  const [isBackgroundColor, setIsBackgroudColor] = useState('bg-clemson');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { location } = useSelector((state) => state.auth);
  const { allCourses } = useSelector((state) => state.course_filter);

  useEffect(() => {
    const getCourse = async () => {
      setIsLoading(true);
      const course = allCourses.filter((cour) => cour.id === id);
      if (course[0]) {
        setIsCourse(course[0]);
        setIsBackgroudColor(setColorByCategory(course[0].categoryArray));
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    };

    allCourses && id && getCourse();
  }, [id, allCourses]);

  const cardClickHandler = async () => {
    await registerClick(
      id,
      isCourse.link,
      window.location.pathname,
      window.location.search ? window.location.search : 'undefined',
      'COURSE',
      location.ip,
      location.country
    );
    window.open(isCourse.link + '?coupon=INDIASITE2024');
  };

  return (
    <div className='max-w-[400px] w-full h-full max-h-[600px] py-[5%] px-[6%]'>
      <div
        className={`transition-all hover:scale-105 ease-in group rounded-2xl border-2 overflow-hidden border-black ${isBackgroundColor} shadow-[0px_9px_0px_rgba(0,0,0,0.20)]  hover:shadow-[0px_12px_0px_rgba(0,0,0,0.15)] w-full h-full max-h-[520px] max-w-[360px] aspect-[360/520] p-2.5`}
      >
        {/* INNER CONTAINER */}
        <div
          className='w-full h-full border-[3px] rounded-lg border-black relative bg-cover bg-top bg-no-repeat overflow-hidden'
          style={{ backgroundImage: `url(${isCourse.seoImage})` }}
        >
          <div className='w-full h-40 bg-gradient-to-b from-black/80 absolute inset-x-0 top-0 z-0'></div>
          <div className='w-full h-28 bg-gradient-to-t from-black/80 absolute inset-x-0 bottom-0 z-0'></div>

          <div className='flex flex-col gap-1.5 max-w-[200px] absolute z-20 top-3 left-3 w-fit'>
            <div className='text-xl leading-none font-semibold text-white tracking-tight'>
              {isCourse.title}
            </div>
            <div className='flex items-center gap-2.5'>
              <div className='text-white uppercase text-xs font-medium bg-base-mid px-1'>
                {isCourse.hours} Hours
              </div>
              <div className='text-white uppercase text-xs font-medium bg-base-mid px-1'>
                {isCourse.lessons} Lessons
              </div>
            </div>
          </div>

          <div className={`absolute z-20 right-0 left-0 bottom-0 p-1`}>
            <div className='flex items-end justify-between'>
              <div className='pl-3 text-lg font-bold text-white tracking-tight'>
                {isCourse.price === 'FREE' ? 'FREE' : '$' + isCourse.price}
              </div>
              <div className='grid grid-cols-3 gap-1'>
                <div
                  className='w-10 h-10 bg-white border-2 border-black rounded-full transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] flex items-center justify-center'
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <MdVideocam color='black' size={24} />
                </div>
                <div className='w-10 h-10 bg-white border-2 border-black rounded-full transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] flex items-center justify-center'>
                  <MdZoomIn color='black' size={26} />
                </div>
                <div className='w-10 h-10 bg-brand-green border-2 border-black rounded-full transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] flex items-center justify-center'>
                  <MdLocalGroceryStore color='black' size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMSCourseCard;
