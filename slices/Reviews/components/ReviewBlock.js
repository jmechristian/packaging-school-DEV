import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const ReviewBlock = ({ item }) => {
  return (
    <div className='bg-base-dark content__box'>
      <div className='flex flex-col justify-between items-between gap-9 px-5 py-7 w-[342px]'>
        <div className='grid grid-cols-5 items-start'>
          <div
            className='bg-white w-11 h-11 rounded-full col-span-1'
            style={{
              backgroundImage: `url(${item.review_image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div className='flex flex-col col-span-4 justify-start items-start'>
            <div className='font-semibold text-lg text-base-brand leading-tight'>
              {item.review_name}
            </div>
            <div className='text-base-light leading-tight text-xs'>
              {item.review_title}
            </div>
          </div>
        </div>
        <div className='text-white font-light h-48 overflow-hidden'>
          <PrismicRichText field={item.review_content} />
        </div>
        <div className='flex w-full justify-end'>
          <PrismicLink field={item.review_social}>
            <img
              src={item.review_social_image.url}
              alt={item.review_social_image.alt}
              className='w-7 h-7 opacity-60'
            />
          </PrismicLink>
        </div>
      </div>
    </div>
  );
};

export default ReviewBlock;
