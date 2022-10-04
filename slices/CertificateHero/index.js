import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import CTAButtonLarge from '../../components/CTAButtonLarge';

const CertificateHero = ({ slice }) => (
  <section className='bg-dark'>
    <div className='container__inner hero__padding flex flex-col'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex flex-col lg:w-7/12'>
          <div className='text-white text-4xl xl:text-5xl font-bold w-full'>
            {slice.primary.headline ? (
              <PrismicRichText field={slice.primary.headline} />
            ) : (
              <h2>Template slice, update me!</h2>
            )}
          </div>
          <div className='text-gray-400 text-lg xl:text-xl leading-relaxed mt-8 lg:mt-12 max-w-prose'>
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
            className='w-4/5'
          />
        </div>
      </div>
      <div className='bg-base-dark flex flex-col lg:flex-row mt-12 lg:mt-16 pt-5 pb-6 px-4 lg:px-8 gap-6 rounded'>
        <div className='text-white font-semibold text-2xl lg:text-3xl leading-tight w-full lg:w-5/12 flex justify-center items-center'>
          {slice.primary.cta_headline}
        </div>
        <div className='bg-base-light rounded flex flex-col lg:flex-row px-4 py-4 gap-3 w-full lg:w-7/12'>
          <div className='flex w-full '>
            <div className='flex flex-col  w-1/4 justify-center items-center'>
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
          <CTAButtonLarge />
        </div>
      </div>
    </div>
  </section>
);

export default CertificateHero;
