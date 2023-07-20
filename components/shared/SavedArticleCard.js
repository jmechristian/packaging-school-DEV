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
import { updateUser } from '../../src/graphql/mutations';
import { useRouter } from 'next/router';
import { toggleSignInModal } from '../../features/layout/layoutSlice';

const SavedArticleCard = ({ id, title, desc, slug }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (user && user.savedArticles && user.savedArticles.includes(id)) {
      setIsSaved(true);
    }
  }, [user, id]);

  const savedLesson = async () => {
    if (!user) {
      dispatch(toggleSignInModal());
    } else {
      if (!isSaved) {
        setIsSaved(true);
        const currentSaved = user.savedArticles
          ? [...user.savedArticles, id]
          : id;
        console.log('curent', currentSaved);
        await API.graphql({
          query: updateUser,
          variables: {
            input: { id: user.id, savedArticles: currentSaved },
          },
        });
      } else if (isSaved) {
        setIsSaved(false);
        const currentSaved = user.savedArticles ? [...user.savedArticles] : [];
        const filteredSaved = currentSaved.filter((l) => l !== id);
        console.log(filteredSaved);
        await API.graphql({
          query: updateUser,
          variables: {
            input: { id: user.id, savedArticles: filteredSaved },
          },
        });
      }
    }
  };

  return (
    <>
      <motion.div className='w-full h-full max-w-[330px] dark:bg-dark-mid text-white bg-slate-200 rounded-xl shadow-lg'>
        <div className='p-6 flex flex-col gap-6 justify-between h-full'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div className='font-semibold text-xl font-greycliff leading-tight line-clamp-2 text-slate-900 dark:text-white'>
                {title}
              </div>

              <div onClick={savedLesson}>
                <StarIcon
                  className={`w-6 h-6 cursor-pointer ${
                    isSaved
                      ? 'text-yellow-500'
                      : 'text-slate-400 dark:text-neutral-600'
                  } `}
                />
              </div>
            </div>

            <div className='line-clamp-3 text-sm desc dark:text-white/60 text-slate-700'>
              {desc}
            </div>
          </div>
          <div className='flex justify-between items-end'>
            <div className='flex gap-2'>
              <div
                className='w-9 h-9 rounded bg-black/80 flex justify-center items-center cursor-pointer'
                onClick={() => router.push(slug)}
              >
                <ArrowSmallRightIcon className='w-5 h-5 text-white' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SavedArticleCard;
