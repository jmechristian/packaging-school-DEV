import React, { useState, useEffect, useMemo } from 'react';
import { API } from 'aws-amplify';
import { getAuthor } from '../../src/graphql/queries';
import { MdVideocam, MdCampaign } from 'react-icons/md';
import BrutalCircleIconTooltip from './BrutalCircleIconTooltip';

const AuthorName = ({ id }) => {
  const [isName, setIsName] = useState('');

  useEffect(() => {
    const getName = async () => {
      const author = await API.graphql({
        query: getAuthor,
        variables: { id: id },
      });
      setIsName(author.data.getAuthor.name);
    };

    id && getName();
  }, [id]);

  return <div className='text-sm'>{isName}</div>;
};

const LessonTableItem = ({ less }) => {
  const newDateTop =
    less &&
    new Date(less.backdate ? less.backdate : less.updatedAt).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
      }
    );

  const newDateBottom =
    less &&
    new Date(less.backdate ? less.backdate : less.updatedAt).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
      }
    );

  return (
    <div
      key={less.id}
      className={`w-full grid grid-cols-12 border-2 border-black overflow-hidden content-center ${
        less.type === 'LOTM'
          ? 'bg-brand-yellow/20'
          : less.type === 'REGULATORY'
          ? 'bg-clemson/20'
          : 'bg-base-brand/20'
      }`}
    >
      <div className='col-span-1 h-full max-w-full content-center'>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='font-semibold uppercase tracking-tighter text-sm'>
            {newDateTop}
          </div>
          <div className='font-semibold uppercase tracking-tighter text-sm'>
            {newDateBottom}
          </div>
        </div>
      </div>
      <div className='col-span-4 content-center p-5'>
        <div className='flex flex-col'>
          <div className='h4-base'>{less.title}</div>
          <div className='flex gap-1.5'>
            {less.author.map((auth) => (
              <AuthorName key={auth} id={auth} />
            ))}
          </div>
        </div>
      </div>
      <div
        className='col-span-6 content-center m-5 overflow-scroll h-[100px]'
        id='scrollers'
      >
        <div className='flex flex-col'>
          <div className='text-sm'>{less.subhead}</div>
        </div>
      </div>
      <div className='col-span-1 flex flex-col gap-3 content-center justify-center'>
        {less.mediaType === 'VIDEO' ? (
          <div className='content-center mx-auto'>
            <BrutalCircleIconTooltip
              tooltip={'Preview'}
              bgColor={'bg-white'}
              fn={() => setIsPlaying(!isPlaying)}
            >
              <MdVideocam color='black' size={24} />
            </BrutalCircleIconTooltip>
          </div>
        ) : (
          <></>
        )}
        <div className='content-center mx-auto'>
          <BrutalCircleIconTooltip
            tooltip={'Preview'}
            bgColor={'bg-orange-600'}
            fn={() => setIsPlaying(!isPlaying)}
          >
            <MdCampaign color='black' size={24} />
          </BrutalCircleIconTooltip>
        </div>
      </div>
    </div>
  );
};

export default LessonTableItem;
