import React, { useState, useEffect, useMemo } from 'react';
// import CourseHero from './CourseHero';
// import CourseTitle from './CourseTitle';
// import CourseDesc from './CourseDesc';
import { motion } from 'framer-motion';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
import {
  VideoCameraIcon,
  ArrowSmallRightIcon,
  InformationCircleIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { API } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewOpen } from '../../features/all_courses/courseFilterSlice';
import { updateUser } from '../../src/graphql/mutations';
import { useRouter } from 'next/router';
import { toggleSignInModal } from '../../features/layout/layoutSlice';
import CertIcon from '../icons/CertIcon';

const CertificateCard = ({
  ring,
  title,
  desc,
  video,
  hours,
  price,
  category,
  courseId,
  savedCourses,
  backgroundColor,
  type,
  slug,
  callout,
  calloutValue,
  apply,
  link,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  // const [isFavorited, setIsFavorite] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [isCleanCategory, setIsCleanCategory] = useState();

  // const isFavorited = useMemo(
  //   () => user && user.savedCourses && user.savedCourses.includes(courseId),
  //   [user, courseId]
  // );

  // useEffect(() => {
  //   user && user.savedCourses
  //     ? setUserArray([...user.savedCourses])
  //     : setUserArray([]);
  // }, [user]);

  const textColor = () => {
    switch (category) {
      case 'Materials':
        return 'bg-base-dark text-white';
      case 'MATERIALS':
        return 'bg-base-dark text-white';
      case 'Industry':
        return 'bg-base-brand';
      case 'INDUSTRY':
        return 'bg-base-brand text-white';
      case 'Design':
        return 'bg-clemson';
      case 'DESIGN':
        return 'bg-clemson';
      case 'FOODANDBEVERAGE':
        return 'bg-base-light text-slate-900';
      case 'Food & Beverage':
        return 'bg-base-light text-slate-900';
      case 'Supply Chain & Logistics':
        return 'bg-clemson-dark text-white';
      case 'SUPPLYCHAIN':
        return 'bg-clemson-dark text-white';
      case 'Business':
        return 'bg-green-600';
      case 'BUSINESS':
        return 'bg-green-600';
    }
  };

  const categoryText = () => {
    switch (category) {
      case 'Materials':
        return 'Materials';
      case 'MATERIALS':
        return 'Materials';
      case 'Industry':
        return 'Industry';
      case 'INDUSTRY':
        return 'Industry';
      case 'Design':
        return 'Design';
      case 'DESIGN':
        return 'Design';
      case 'FOODANDBEVERAGE':
        return 'Food & Beverage';
      case 'Food & Beverage':
        return 'Food & Beverage';
      case 'Supply Chain & Logistics':
        return 'Supply Chain & Logistics';
      case 'SUPPLYCHAIN':
        return 'Supply Chain & Logistics';
      case 'Business':
        return 'Business';
      case 'BUSINESS':
        return 'Business';
    }
  };

  const openPreview = () => {
    dispatch(setPreviewOpen(video));
  };

  // const toggleFavorite = async () => {
  //   if (!user) {
  //     dispatch(toggleSignInModal());
  //   }
  //   if (isFavorited) {
  //     let finalArray;
  //     const newArray = [...userArray];
  //     const index = newArray.indexOf(courseId);
  //     console.log(index);
  //     finalArray = newArray.toSpliced(index, 1);
  //     console.log(finalArray);
  //     const res = await API.graphql({
  //       query: updateUser,
  //       variables: {
  //         input: {
  //           id: user.id,
  //           savedCourses: finalArray,
  //         },
  //       },
  //     });

  //     if (res.errors) {
  //       console.log(res.errors);
  //     }
  //   }

  //   if (user && !isFavorited) {
  //     // setIsFavorite(true);
  //     let newishArray = [...userArray, courseId];
  //     const res = await API.graphql({
  //       query: updateUser,
  //       variables: {
  //         input: {
  //           id: user.id,
  //           savedCourses: newishArray,
  //         },
  //       },
  //     });

  //     if (res.errors) {
  //       console.log(res.errors);
  //     }
  //   }
  // };

  return (
    <>
      <motion.div
        className={`w-full h-full ring-1 ring-${ring} dark:bg-dark-mid text-white bg-slate-200 rounded-xl shadow-lg`}
      >
        <div className='p-4 flex flex-col justify-between h-full gap-9'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              {/* <div onClick={toggleFavorite}>
                <StarIcon
                  className={`w-6 h-6 cursor-pointer ${
                    isFavorited
                      ? 'text-yellow-500'
                      : 'text-slate-400 dark:text-neutral-600'
                  } `}
                />
              </div> */}
            </div>
            <div className='flex w-fit justify-center items-center gap-4'>
              <div className='w-16 h-16'>
                <div
                  className={`w-16 h-16 flex gap-4 items-center justify-center rounded-full ${backgroundColor}`}
                >
                  <CertIcon
                    className={'w-9 h-9 stroke-white fill-transparent stroke-2'}
                  />
                </div>
              </div>
              <div className='max-w-xs font-semibold text-2xl font-greycliff leading-tight line-clamp-2 text-slate-900 dark:text-white'>
                {title}
              </div>
            </div>
            <div
              className='line-clamp-4 text-sm lg:text-base desc dark:text-white/60 text-slate-700'
              data-tooltip-content={desc}
            >
              {desc}
            </div>
          </div>
          <div>
            <hr className='border-slate-400 dark:border-gray-500' />
          </div>
          <div className='flex justify-between items-end'>
            <div className='flex flex-col'>
              <div className='text-sm dark:text-white/50 text-slate-700'>
                {callout}
              </div>
              <div className='font-greycliff text-2xl font-semibold whitespace-pre-wrap text-slate-900 dark:text-white'>
                {calloutValue}
              </div>
            </div>
            <div className='flex gap-2'>
              {video && (
                <div
                  className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer'
                  onClick={openPreview}
                >
                  <div>
                    <VideoCameraIcon className='w-5 h-5 text-white' />
                  </div>
                </div>
              )}
              <div className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer'>
                <div onClick={() => router.push(link)}>
                  <InformationCircleIcon className='w-5 h-5 text-white' />
                </div>
              </div>
              <div
                className='px-4 rounded bg-black/80 flex justify-center items-center cursor-pointer'
                onClick={() => router.push(apply)}
              >
                <div className='text-white font-semibold'>Apply</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <Tooltip anchorSelect='.desc' /> */}
    </>
  );
};

export default CertificateCard;
