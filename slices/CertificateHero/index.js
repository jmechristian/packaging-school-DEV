import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const CertificateHero = ({ slice }) => (
  <section className='bg-dark'>
    <div className='container__inner container__top-padding flex flex-col pb-20'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex flex-col lg:w-7/12'>
          <div className='text-white text-5xl xl:text-6xl font-bold w-full'>
            {slice.primary.headline ? (
              <PrismicRichText field={slice.primary.headline} />
            ) : (
              <h2>Template slice, update me!</h2>
            )}
          </div>
          <div className='text-gray-400 text-lg lg:text-xl leading-relaxed mt-8'>
            {slice.primary.subheadline ? (
              <PrismicRichText field={slice.primary.subheadline} />
            ) : (
              <p>start by editing this slice from inside Slice Machine!</p>
            )}
          </div>
        </div>
        <div className='hidden lg:flex lg:justify-end lg:w-4/12'>
          <img
            src={slice.primary.hero_image.url}
            alt={slice.primary.hero_image.alt}
          />
        </div>
      </div>
      <div className='bg-base-dark flex flex-col mt-12 pt-5 pb-6 px-4 gap-6 rounded'>
        <div className='text-white font-semibold text-2xl leading-tight'>
          {slice.primary.cta_headline}
        </div>
        <div className='bg-base-light rounded flex flex-col px-4 py-4 gap-3'>
          <div className='flex w-full '>
            <div className='flex flex-col w-1/4 justify-center items-center'>
              <div className='text-base-dark font-plex font-bold text-3xl'>
                06
              </div>
              <div className='text-base-dark font-plex uppercase'>Days</div>
            </div>
            <div className='flex flex-col w-1/4 justify-center items-center'>
              <div className='text-base-dark font-plex font-bold text-3xl'>
                12
              </div>
              <div className='text-base-dark font-plex uppercase'>Hours</div>
            </div>
            <div className='flex flex-col w-1/4 justify-center items-center'>
              <div className='text-base-dark font-plex font-bold text-3xl'>
                41
              </div>
              <div className='text-base-dark font-plex uppercase'>Min</div>
            </div>
            <div className='flex flex-col w-1/4 justify-center items-center'>
              <div className='text-base-dark font-plex font-bold text-3xl'>
                42
              </div>
              <div className='text-base-dark font-plex uppercase'>Sec</div>
            </div>
          </div>
          <div className='w-full bg-clemson text-center rounded'>
            <div className='w-full py-5 uppercase font-bold text-2xl text-white'>
              Enroll Now!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertificateHero;
