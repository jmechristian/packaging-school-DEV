import React, { useState, useEffect } from 'react';
import { getAuthor } from '../../src/graphql/queries';
import {
  MdVideocam,
  MdCampaign,
  MdAccountCircle,
  MdExitToApp,
} from 'react-icons/md';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
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

const LessonCardItem = ({ less }) => {
  return (
    <div
      className={`w-full h-full border-2 border-black p-2 flex flex-col gap-2 ${
        less.type === 'LOTM'
          ? 'bg-brand-yellow/20'
          : less.type === 'REGULATORY'
          ? 'bg-clemson/20'
          : 'bg-base-brand/20'
      } transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[0px_0px_0px_black] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.20)]`}
    >
      {/* MEDIA */}
      <div>
        <div
          className='w-full aspect-[16/9] max-h-full bg-brand-indigo-light bg-cover bg-center'
          style={{ backgroundImage: `url(${less.seoImage})` }}
        ></div>
      </div>
      {/* CONTENT */}
      <div className='bg-white border-black border flex flex-col gap-2 p-5 h-full relative'>
        <div className='absolute w-full h-16 bg-gradient-to-t from-white via-white z-10 bottom-0 left-0 right-0'></div>
        <div className='h4-base leading-tight'>{less.title}</div>
        <div className='flex flex-wrap max-w-[75%] gap-x-1.5 gap-y-1'>
          {less.author.map((auth) => (
            <div className='flex items-center gap-0.5' key={auth}>
              <div>
                <MdAccountCircle color='gray' size={16} />
              </div>
              <AuthorName id={auth} />
            </div>
          ))}
        </div>
        <div
          className='text-sm leading-tight max-h-[157px] overflow-scroll pb-10'
          id='scrollers'
        >
          {less.subhead}
        </div>
      </div>
      {/* BUTTONS */}
      <div className='flex w-full items-center justify-between gap-2.5 py-1.5'>
        <div className='max-w-2/3 flex flex-wrap gap-1.5'>
          <div className='text-xs bg-white/50 p-1 border border-black'>
            Sustainability
          </div>
          <div className='text-xs bg-white/50 p-1 border border-black'>
            Regulatory
          </div>
          <div className='text-xs w-fit bg-white/50 p-1 border border-black'>
            Waste Management
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <BrutalCircleIconTooltip
            tooltip={'View'}
            bgColor={'bg-[#ff9321]'}
            fn={() => router.push(`/lessons/${less.slug}`)}
          >
            <MdExitToApp color='white' size={22} />
          </BrutalCircleIconTooltip>
          {less.mediaType === 'VIDEO' ? (
            <BrutalCircleIconTooltip
              tooltip={'Watch'}
              bgColor={'bg-white'}
              fn={() => setIsPlaying(!isPlaying)}
            >
              <MdVideocam color='black' size={24} />
            </BrutalCircleIconTooltip>
          ) : (
            <></>
          )}
          <BrutalCircleIconTooltip
            tooltip={'Share'}
            bgColor={'bg-base-brand'}
            fn={() => setIsPlaying(!isPlaying)}
          >
            <MdCampaign color='white' size={24} />
          </BrutalCircleIconTooltip>
        </div>
      </div>
    </div>
  );
};

export default LessonCardItem;
