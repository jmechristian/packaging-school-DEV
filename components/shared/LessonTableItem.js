import React, { useState, useEffect, useMemo } from 'react';
import { API } from 'aws-amplify';
import { getAuthor, lessonTagsByLessonId } from '../../src/graphql/queries';
import {
  MdVideocam,
  MdCampaign,
  MdAccountCircle,
  MdExitToApp,
} from 'react-icons/md';
import { useRouter } from 'next/router';

import BrutalCircleIconTooltip from './BrutalCircleIconTooltip';
import OverflowComponent from './OverflowComponent';
import ExpandableDiv from './ExpandableDiv';

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
  const router = useRouter();
  const [isTags, setIsTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const tags = await API.graphql({
        query: lessonTagsByLessonId,
        variables: { lessonId: less.id },
      });
      setIsTags(tags.data.lessonTagsByLessonId.items);
    };

    getTags();
  }, [less]);

  const isDateValid = (str) => {
    !isNaN(new Date(str));
  };

  const newDateTop =
    less &&
    new Date(less.backdate ? less.backdate : less.createdAt).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
      }
    );

  const newDateBottom =
    less &&
    new Date(less.backdate ? less.backdate : less.createdAt).getFullYear();

  return (
    <div
      key={less.id}
      className={`w-full flex gap-3 py-5 px-5 flex-col md:grid md:grid-cols-12 border-2 border-black content-center ${
        less.type === 'LOTM'
          ? 'bg-brand-yellow/20'
          : less.type === 'REGULATORY'
          ? 'bg-clemson/20'
          : 'bg-base-brand/20'
      } transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[0px_0px_0px_black] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.20)]`}
    >
      {/* DATE */}
      <div className='col-span-1 h-full max-w-full md:content-center'>
        <div className='flex gap-1 md:flex-col w-full md:justify-center items-center'>
          <div className='font-semibold uppercase tracking-tighter text-sm'>
            {newDateTop}
          </div>
          <div className='font-semibold uppercase tracking-tighter text-sm'>
            {newDateBottom}
          </div>
        </div>
      </div>
      <div className='col-span-5 md:grid md:grid-cols-4 md:content-center'>
        {/* TITLE */}
        <div className='grid grid-cols-7 gap-2'>
          <div className='col-span-5'>
            <div className='flex flex-col gap-4 col-span-3'>
              <div className='flex flex-col'>
                <div className='h3-base'>{less.title}</div>
                <div className='flex gap-x-2 flex-wrap'>
                  {less.author.map((auth) => (
                    <div className='flex items-center gap-0.5' key={auth}>
                      <div>
                        <MdAccountCircle color='gray' size={16} />
                      </div>
                      <AuthorName id={auth} />
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-1.5'>
                {isTags && isTags.length > 0 ? (
                  isTags.map((t) => (
                    <div
                      className='text-xs bg-white/40 py-1 px-1.5 border border-black uppercase font-semibold'
                      key={t.id}
                    >
                      {t.tags.tag}
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className='col-span-2 px-1'>
            {less.type === 'LOTM' ? (
              <div
                className='w-full h-full bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage: `url('https://packschool.s3.amazonaws.com/LOTM+Logo+Final-Black.png')`,
                }}
              ></div>
            ) : less.type === 'REGULATORY' ? (
              <div
                className='w-full h-full bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage: `url('https://packschool.s3.amazonaws.com/ROTM-logo-hor.svg')`,
                }}
              ></div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className='hidden lg:flex justify-center items-center p-2'>
          {less.type === 'LOTM' ? (
            <div
              className='w-full h-full bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/LOTM+Logo+Final-Black.png')`,
              }}
            ></div>
          ) : less.type === 'REGULATORY' ? (
            <div
              className='w-full h-full bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/ROTM-logo-hor.svg')`,
              }}
            ></div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {/* <OverflowComponent content={less.subhead} type={less.type} /> */}
      <ExpandableDiv less={less} />
      <div className='hidden col-span-1 md:flex flex-col gap-1.5 content-center justify-center'>
        <div className='content-center mx-auto'>
          <BrutalCircleIconTooltip
            tooltip={'View'}
            bgColor={'bg-[#ff9321]'}
            fn={() => router.push(`/lessons/${less.slug}`)}
          >
            <MdExitToApp color='white' size={22} />
          </BrutalCircleIconTooltip>
        </div>
        {/* {less.mediaType === 'VIDEO' ? (
          <div className='content-center mx-auto'>
            <BrutalCircleIconTooltip
              tooltip={'Watch'}
              bgColor={'bg-white'}
              fn={() => setIsPlaying(!isPlaying)}
            >
              <MdVideocam color='black' size={24} />
            </BrutalCircleIconTooltip>
          </div>
        ) : (
          <></>
        )} */}
        {/* <div className='content-center mx-auto'>
          <BrutalCircleIconTooltip
            tooltip={'Share'}
            bgColor={'bg-base-brand'}
            fn={() => setIsPlaying(!isPlaying)}
          >
            <MdCampaign color='white' size={24} />
          </BrutalCircleIconTooltip>
        </div> */}
      </div>
    </div>
  );
};

export default LessonTableItem;
