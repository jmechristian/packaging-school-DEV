import React, { useEffect, useRef } from 'react';
import { PrismicRichText } from '@prismicio/react';
import CirriculumBlock from './CirriculumBlock';
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';
import { setSectionInView } from '../../features/navigation/navigationSlice';

const CertificationCirriculum = ({ slice }) => {
  const half = Math.ceil(slice?.items.length / 2);
  const firstHalf = slice?.items.slice(0, half);
  const secondHalf = slice?.items.slice(half);

  const dispatch = useDispatch();
  const sectionRef = useRef();
  const sectionInView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    if (sectionInView) {
      dispatch(setSectionInView(sectionRef.current.id));
    } else {
      return;
    }
  }, [sectionInView, dispatch]);

  return (
    <section
      className='bg-base-dark scroll-mt-24 lg:scroll-mt-24'
      id='curriculum'
      ref={sectionRef}
    >
      <div className='container__inner dark__inner flex flex-col gap-12'>
        <div className='flex flex-col gap-3'>
          <div className='subheadline text-white'>
            {slice.primary.title ? (
              <PrismicRichText field={slice.primary.title} />
            ) : (
              <h2></h2>
            )}
          </div>
          <div className='body__text__light'>
            {slice.primary.description ? (
              <PrismicRichText field={slice.primary.description} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            {firstHalf.map((item, i) => (
              <CirriculumBlock
                key={i}
                week={item.week}
                title={item.week_title}
                description={item.week_description}
              />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            {secondHalf.map((item, i) => (
              <CirriculumBlock
                key={i}
                week={item.week}
                title={item.week_title}
                description={item.week_description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CertificationCirriculum;
