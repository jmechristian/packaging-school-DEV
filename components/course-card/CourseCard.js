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
  categoryArray,
  partOf,
  type,
  slug,
  altLink,
}) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.layout);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  // const [isFavorited, setIsFavorite] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [isEntered, setIsEntered] = useState();

  const isFavorited = useMemo(
    () => user && user.savedCourses && user.savedCourses.includes(courseId),
    [user, courseId]
  );

  useEffect(() => {
    user && user.savedCourses
      ? setUserArray([...user.savedCourses])
      : setUserArray([]);
  }, [user]);

  const textColor = (cat) => {
    switch (cat) {
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
        return 'bg-indigo-400 text-neutral-900';
      case 'Food & Beverage':
        return 'bg-indigo-400 text-neutral-900';
      case 'Supply Chain & Logistics':
        return 'bg-clemson-dark text-white';
      case 'SUPPLYCHAIN':
        return 'bg-clemson-dark text-white';
      case 'Business':
        return 'bg-green-600';
      case 'BUSINESS':
        return 'bg-green-600';
      case 'AUTO':
        return 'bg-brand-yellow text-neutral-900';
    }
  };

  const categoryText = (cat) => {
    switch (cat) {
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
      case 'AUTO':
        return 'Automotive';
    }
  };

  const getLink = () => {
    switch (type) {
      case 'NORMAL':
        return `/${slug}`;
      case 'COLLECTION':
        return `/collections/${slug}`;
      default:
        return `/courses/${slug}`;
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
      <motion.div
        className=' dark:hover:bg-neutral-800 hover:bg-base-brand/30 w-full h-full max-w-[300px] lg:max-w-[330px] dark:bg-dark-mid text-white bg-base-light/70 rounded-xl shadow-lg relative'
        onMouseEnter={() => setIsEntered(true)}
        onMouseLeave={() => setIsEntered(false)}
      >
        <div className='flex flex-col justify-between h-full gap-6'>
          <div
            className='flex flex-col gap-4 px-4 pt-4 cursor-pointer'
            onClick={() => {
              altLink
                ? window.open(altLink, '_blank')
                : router.push(
                    `/${
                      type && type === 'COLLECTION' ? 'collections' : 'courses'
                    }/${slug}`
                  );
            }}
          >
            <div className='flex items-center gap-2 relative'>
              {categoryArray &&
                categoryArray.map((cat, i) => (
                  <div
                    key={i}
                    className={`${textColor(
                      cat
                    )}  text-xs font-medium py-1 rounded-lg px-2 tracking-wide`}
                  >
                    {categoryText(cat)}
                  </div>
                ))}
            </div>
            <div className='font-semibold text-xl font-greycliff cursor-pointer leading-tight line-clamp-2 text-neutral-900 dark:text-white'>
              {title}
            </div>
            <div
              className='line-clamp-3 text-sm desc cursor-pointer dark:text-white/60 text-neutral-800'
              data-tooltip-content={desc}
            >
              {desc}
            </div>
          </div>
          <div className='px-4'>
            <hr className='border-neutral-400 dark:border-neutral-500' />
          </div>
          <div className='flex justify-between items-end p-4'>
            <div
              className='flex flex-col cursor-pointer'
              onClick={() => {
                altLink
                  ? window.open(altLink, '_blank')
                  : router.push(
                      `/${
                        type && type === 'COLLECTION'
                          ? 'collections'
                          : 'courses'
                      }/${slug}`
                    );
              }}
            >
              <div className='text-sm dark:text-white/50 text-neutral-700'>
                {hours} hours
              </div>
              <div className='font-greycliff text-2xl font-semibold text-neutral-900 dark:text-white'>
                {price === 'FREE' ? 'Free' : '$' + price}
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div onClick={toggleFavorite} className='mr-1'>
                <StarIcon
                  className={`w-6 h-6 cursor-pointer ${
                    isFavorited
                      ? 'text-yellow-500'
                      : 'text-neutral-400 dark:text-neutral-600'
                  } `}
                />
              </div>
              {video && (
                <div
                  className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer hover:bg-base-brand'
                  onClick={openPreview}
                >
                  <div>
                    <VideoCameraIcon className='w-5 h-5 text-white' />
                  </div>
                </div>
              )}
              <div
                className={`w-9 h-9 rounded ${
                  isEntered ? 'bg-clemson' : 'bg-black/80'
                } flex justify-center items-center cursor-pointer hover:bg-clemson`}
                onClick={() => {
                  altLink
                    ? window.open(altLink, '_blank')
                    : router.push(
                        `/${
                          type && type === 'COLLECTION'
                            ? 'collections'
                            : 'courses'
                        }/${slug}`
                      );
                }}
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
