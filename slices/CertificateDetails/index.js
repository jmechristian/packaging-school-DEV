import React, { useEffect, useRef } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { useInView } from 'framer-motion';
import { setSectionInView } from '../../features/navigation/navigationSlice';
import YouTubeEmbed from '../../components/YouTubeEmbed';

const CertificateDetails = ({ slice }) => {
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
      className='container__inner inner__section-margin flex flex-col justify-between gap-8 scroll-mt-44'
      id='details'
      ref={sectionRef}
    >
      <div className='flex flex-col lg:flex-row justify-between gap-6 md:gap-8 w-full'>
        <div className='flex flex-col gap-6 lg:w-6/12'>
          <div className='subheadline'>
            <PrismicRichText field={slice.primary.headline} />
          </div>
          <div className='body__text'>
            <PrismicRichText field={slice.primary.description} />
          </div>
          <div className='w-full'>
            <div className='grid lg:grid-cols-2 gap-3 w-full'>
              {slice?.items?.map((item, i) => (
                <div
                  key={i}
                  className='text-neutral-600 text-lg flex justify-start items-center gap-2'
                >
                  <div>
                    <CheckBadgeIcon className='w-6 h-6 fill-base-brand' />
                  </div>
                  <PrismicRichText field={item.icon_text} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='lg:w-5/12 aspect-video h-full'>
          <YouTubeEmbed embedid={slice.primary.embed_id} />
        </div>
      </div>
    </section>
  );
};

export default CertificateDetails;
