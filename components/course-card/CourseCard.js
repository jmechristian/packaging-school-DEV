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
  StarIcon,
} from '@heroicons/react/24/solid';
import { API } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewOpen } from '../../features/all_courses/courseFilterSlice';
import { updateUser } from '../../src/graphql/mutations';
import { useRouter } from 'next/router';
import { toggleSignInModal } from '../../features/layout/layoutSlice';

const CourseCard = ({
  title,
  desc,
  video,
  hours,
  price,
  category,
  courseId,
  savedCourses,
  type,
  slug,
}) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  // const [isFavorited, setIsFavorite] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [isCleanCategory, setIsCleanCategory] = useState();

  const isFavorited = useMemo(
    () => user && user.savedCourses && user.savedCourses.includes(courseId),
    [user, courseId]
  );

  useEffect(() => {
    user && user.savedCourses
      ? setUserArray([...user.savedCourses])
      : setUserArray([]);
  }, [user]);

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

  const toggleFavorite = async () => {
    if (!user) {
      dispatch(toggleSignInModal());
    }
    if (isFavorited) {
      let finalArray;
      const newArray = [...userArray];
      const index = newArray.indexOf(courseId);
      console.log(index);
      finalArray = newArray.toSpliced(index, 1);
      console.log(finalArray);
      const res = await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            savedCourses: finalArray,
          },
        },
      });

      if (res.errors) {
        console.log(res.errors);
      }
    }

    if (user && !isFavorited) {
      // setIsFavorite(true);
      let newishArray = [...userArray, courseId];
      const res = await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            savedCourses: newishArray,
          },
        },
      });

      if (res.errors) {
        console.log(res.errors);
      }
    }
  };

  return (
    <>
      <motion.div className='w-full h-full max-w-[300px] lg:max-w-[330px] dark:bg-dark-mid text-white bg-slate-200 rounded-xl shadow-lg'>
        <div className='p-4 flex flex-col justify-between h-full gap-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div
                className={`${textColor()} uppercase text-xs font-bold py-1.5 rounded px-2 tracking-wide`}
              >
                {categoryText()}
              </div>

              <div onClick={toggleFavorite}>
                <StarIcon
                  className={`w-6 h-6 cursor-pointer ${
                    isFavorited
                      ? 'text-yellow-500'
                      : 'text-slate-400 dark:text-neutral-600'
                  } `}
                />
              </div>
            </div>
            <div className='font-semibold text-xl font-greycliff leading-tight line-clamp-2 text-slate-900 dark:text-white'>
              {title}
            </div>
            <div
              className='line-clamp-3 text-sm desc dark:text-white/60 text-slate-700'
              data-tooltip-content={desc}
            >
              {desc}
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className='flex justify-between items-end'>
            <div className='flex flex-col'>
              <div className='text-sm dark:text-white/50 text-slate-700'>
                {hours} hours
              </div>
              <div className='font-greycliff text-2xl font-semibold text-slate-900 dark:text-white'>
                {price === 'FREE' ? 'Free' : '$' + price}
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
              <div
                className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer'
                onClick={() =>
                  router.push(
                    `/${
                      type && type === 'COLLECTION' ? 'collections' : 'courses'
                    }/${slug}`
                  )
                }
              >
                <ArrowSmallRightIcon className='w-5 h-5 text-white' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <Tooltip anchorSelect='.desc' /> */}
    </>
  );
};

export default CourseCard;
