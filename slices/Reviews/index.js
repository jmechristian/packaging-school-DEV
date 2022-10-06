import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PrismicRichText } from '@prismicio/react';
import ReviewBlock from './components/ReviewBlock';
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';
import { setSectionInView } from '../../store/navigation/navigationSlice';

const Reviews = ({ slice }) => {
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const sectionRef = useRef();
  const sectionInView = useInView(sectionRef, { amount: 0.5 });
  const reviewCarousel = useRef();

  useEffect(() => {
    if (sectionInView) {
      dispatch(setSectionInView(sectionRef.current.id));
    } else {
      return;
    }
  }, [sectionInView, dispatch]);

  useEffect(() => {
    setWidth(
      reviewCarousel.current.offsetWidth - reviewCarousel.current.scrollWidth
    );
  }, []);

  return (
    <section
      className='bg-base-light dark__section__margin scroll-mt-24'
      id='reviews'
      ref={sectionRef}
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
        <motion.div
          className='overflow-hidden cursor-pointer'
          ref={reviewCarousel}
        >
          <motion.div
            className='flex gap-3 w-full'
            drag='x'
            dragConstraints={{ right: 0, left: width }}
          >
            {slice &&
              slice?.items.map((item, i) => (
                <ReviewBlock item={item} key={i} />
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
