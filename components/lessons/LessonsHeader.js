import React, { useState, useEffect } from 'react';
import BodyWrapper from '../shared/BodyWrapper';
import { StarIcon } from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { updateUser } from '../../src/graphql/mutations';
import { toggleSignInModal } from '../../features/layout/layoutSlice';

const LessonsHeader = ({ id, title, subhead, tags, author, date }) => {
  const dispatch = useDispatch();
  const newDate = new Date(date).toDateString();
  const [isSaved, setIsSaved] = useState(false);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && user.savedLessons && user.savedLessons.includes(id)) {
      setIsSaved(true);
    }
  }, [user, id]);

  const savedLesson = async () => {
    if (!user) {
      dispatch(toggleSignInModal());
    } else {
      if (!isSaved) {
        setIsSaved(true);
        const currentSaved = user.savedLessons
          ? [...user.savedLessons, id]
          : id;
        console.log('curent', currentSaved);
        await API.graphql({
          query: updateUser,
          variables: {
            input: { id: user.id, savedLessons: currentSaved },
          },
        });
      } else if (isSaved) {
        setIsSaved(false);
        const currentSaved = user.savedLessons ? [...user.savedLessons] : [];
        const filteredSaved = currentSaved.filter((l) => l !== id);
        console.log(filteredSaved);
        await API.graphql({
          query: updateUser,
          variables: {
            input: { id: user.id, savedLessons: filteredSaved },
          },
        });
      }
    }
  };

  return (
    <BodyWrapper>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3 lg:pt-12'>
        {tags && (
          <div className='flex flex-wrap gap-2'>
            <span className='inline-flex items-center rounded-full bg-green-100 dark:bg-green-400/50 dark:text-white px-3 py-0.5 text-sm font-medium text-green-800'>
              Sustainability
            </span>
            <span className='inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-500 dark:text-white px-3 py-0.5 text-sm font-medium text-gray-800 '>
              Learning Of The Month
            </span>
          </div>
        )}
        <div>
          <div className='flex justify-between w-full'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl font-greycliff dark:text-white'>
              {title}
            </h1>
            <div onClick={savedLesson}>
              <StarIcon
                className={`w-6 h-6 lg:w-7 lg:h-7 ${
                  isSaved ? 'fill-yellow-500' : 'fill-gray-600'
                }`}
              />
            </div>
          </div>
          {date && (
            <div className='flex gap-2 text-sm mt-2'>
              <div className='text-gray-700 dark:text-white/60'>
                {newDate} /
              </div>
              <div className='text-clemson'>{author}</div>
            </div>
          )}
          <p className='mt-8 text-lg md:text-xl  text-gray-700 dark:text-white/60'>
            {subhead}
          </p>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default LessonsHeader;
