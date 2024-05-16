import React from 'react';
import BrutalButton from './BrutalButton';
import AuthorName from './AuthorName';
import { MdAccountCircle } from 'react-icons/md';

const FeaturedLesson = ({ less }) => {
  const newDate =
    less &&
    new Date(less.backdate ? less.backdate : less.createdAt).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }
    );
  return (
    <div className=' relative w-full h-full border-2 border-black p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.20)] flex flex-col gap-5 '>
      <div className='w-24 h-24 rounded-full border border-black bg-brand-yellow flex items-center justify-center absolute top-2.5 -left-5'>
        <div
          className='w-20 h-20 bg-contain bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('https://packschool.s3.amazonaws.com/LOTM+Logo+Final-Black.png')`,
          }}
        ></div>
      </div>
      <div className='flex h-full gap-5 items-start'>
        <div className='grid w-full h-full'>
          <div
            className='w-60 h-full bg-indigo-200 bg-cover bg-center'
            style={{
              backgroundImage: `url(${
                less && less.screengrab ? less.screengrab : less.seoImage
              })`,
            }}
          ></div>
        </div>
        <div className='flex flex-wrap gap-x-3 gap-y-1'>
          <div className='text-xs'>{newDate}</div>
          <div className='h3-base pr-4'>{less && less.title}</div>
          {less.author &&
            less.author.length > 0 &&
            less.author.map((a) => (
              <div className='flex items-center gap-0.5' key={a}>
                <div>
                  <MdAccountCircle color='gray' size={16} />
                </div>
                <AuthorName id={a} />
              </div>
            ))}
          <div className='text-sm mt-3'>{less && less.subhead}</div>
        </div>
      </div>
      <div className='flex items-end justify-between w-full'>
        {/* TAGS */}
        <div className='max-w-[33%] flex flex-wrap gap-1.5'>
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
        <div className='w-fit'>
          <BrutalButton
            text={'View Lesson'}
            background={'bg-clemson'}
            textColor={'text-white'}
            link={`/lessons/${less.slug}`}
            small={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedLesson;
