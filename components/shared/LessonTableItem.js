import React, { useState, useEffect, useMemo } from 'react';
import { API } from 'aws-amplify';
import { getAuthor } from '../../src/graphql/queries';
import {
  MdVideocam,
  MdCampaign,
  MdAccountCircle,
  MdExitToApp,
} from 'react-icons/md';
import { useRouter } from 'next/router';
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
  const router = useRouter();

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
      className={`w-full grid grid-cols-12 border-2 border-black content-center ${
        less.type === 'LOTM'
          ? 'bg-brand-yellow/20'
          : less.type === 'REGULATORY'
          ? 'bg-clemson/20'
          : 'bg-base-brand/20'
      } transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[0px_0px_0px_black] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.20)]`}
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
      <div className='col-span-5 grid grid-cols-4 content-center p-5'>
        <div className='flex flex-col gap-5 col-span-3'>
          <div className='flex flex-col'>
            <div className='h4-base'>{less.title}</div>
            <div className='flex gap-2'>
              {less.author.map((auth) => (
                <div className='flex items-center gap-0.5' key={auth}>
                  <div>
                    <MdAccountCircle color='black' size={16} />
                  </div>
                  <AuthorName id={auth} />
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-wrap items-center gap-1.5'>
            <div className='text-xs bg-white p-1.5 border border-black'>
              Sustainability
            </div>
            <div className='text-xs bg-white p-1.5 border border-black'>
              Regulatory
            </div>
            <div className='text-xs w-fit bg-white p-1.5 border border-black'>
              Waste Management
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center p-5'>
          {less.type === 'LOTM' ? (
            <div
              className='w-full h-full bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/LOTM+Logo+Final-Black.png')`,
              }}
            ></div>
          ) : less.type === 'REGULATORY' ? (
            <div className='w-full h-full flex justify-center items-center'>
              ROTM
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div
        className='col-span-5 content-center m-5 overflow-scroll scroll-mb-6 h-[120px]'
        id='scrollers'
      >
        <div className='flex flex-col'>
          <div className='text-sm'>{less.subhead}</div>
        </div>
      </div>
      <div className='col-span-1 flex flex-col gap-1.5 content-center justify-center'>
        <div className='content-center mx-auto'>
          <BrutalCircleIconTooltip
            tooltip={'View'}
            bgColor={'bg-[#ff9321]'}
            fn={() => router.push(`/lessons/${less.slug}`)}
          >
            <MdExitToApp color='white' size={22} />
          </BrutalCircleIconTooltip>
        </div>
        {less.mediaType === 'VIDEO' ? (
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
        )}
        <div className='content-center mx-auto'>
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

export default LessonTableItem;
