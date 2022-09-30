import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import ReviewBlock from './components/ReviewBlock';

const Reviews = ({ slice }) => (
  <section
    className='bg-base-light dark__section__margin scroll-mt-24'
    id='reviews'
  >
    <div className='container__inner dark__inner flex flex-col gap-9 lg:gap-12'>
      <div className='flex flex-col gap-3 text-center'>
        <div className='subheadline'>
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </div>
        <div className='body__text'>
          {slice.primary.description ? (
            <PrismicRichText field={slice.primary.description} />
          ) : (
            <p>start by editing this slice from inside Slice Machine!</p>
          )}
        </div>
      </div>
      <div className='flex flex-row overflow-auto gap-3 w-full'>
        {slice &&
          slice?.items.map((item, i) => <ReviewBlock item={item} key={i} />)}
      </div>
      <div className='flex flex-row gap-2 justify-center'>
        {slice &&
          slice?.items.map((item, i) => (
            <div key={i} className='w-3 h-3 bg-white rounded-full'></div>
          ))}
      </div>
    </div>
  </section>
);

export default Reviews;
