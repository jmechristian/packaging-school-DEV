import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { StarIcon } from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { updateUser } from '../../src/graphql/mutations';
import { toggleSignInModal } from '../../features/layout/layoutSlice';

const LessonsHeader = ({ id, title, subhead, tags, author, date }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const newDate = new Date(date).toDateString();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    user && setIsSaved(user.savedLessons && user.savedLessons.includes(id));
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
    <div className='mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3 lg:pt-12'>
      {tags && (
        <div className='flex flex-wrap gap-2'>
          <span className='inline-flex items-center rounded-full bg-green-100 dark:bg-green-400/50 dark:text-white px-3 py-0.5 text-sm font-medium text-green-800'>
            Sustainability
          </span>
          <span className='inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-500 dark:text-white px-3 py-0.5 text-sm font-medium text-neutral-800 '>
            Learning Of The Month
          </span>
        </div>
      )}
      <div>
        <div className='flex justify-between w-full gap-2'>
          <h1 className='text-4xl font-bold sm:text-5xl font-greycliff dark:text-white mr-6 max-w-4xl'>
            {title}
          </h1>
          <div onClick={savedLesson}>
            <StarIcon
              className={`w-6 h-6 lg:w-7 lg:h-7 ${
                isSaved
                  ? 'fill-yellow-500'
                  : 'fill-neutral-300 dark:fill-neutral-800'
              }`}
            />
          </div>
        </div>
        {date && (
          <div className='flex flex-col md:flex-row gap-1 text-sm mt-2'>
            <div className='text-neutral-700 dark:text-white/60'>{newDate}</div>
            {author.length > 0 &&
              author.map((a) => (
                <div className='text-base-mid' key={a.author.name}>
                  <a href={a.author.linkedIn} rel='noreferrer' target='_blank'>
                    {'/' + ' ' + a.author.name + ',' + ' ' + a.author.title}
                  </a>
                </div>
              ))}
          </div>
        )}
        <div className='text-lg md:text-xl mt-6  text-neutral-500 dark:text-white/60 max-w-5xl'>
          {subhead}
        </div>
      </div>
    </div>
  );
};

export default LessonsHeader;
