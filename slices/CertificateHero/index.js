import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import CTACountdown from './components/CTACountdown';
import YouTubeEmbed from '../../components/YouTubeEmbed';

const CertificateHero = ({ slice }) => (
  <section className='bg-dark'>
    <div className='container__inner hero__padding flex flex-col gap-6'>
      <div className='flex flex-col lg:flex-row gap-8 w-full justify-between items-center'>
        <div className='flex flex-col lg:w-6/12 lg:pr-4'>
          <div className='hero__headline'>
            <PrismicRichText field={slice.primary.headline} />
          </div>
          <div className='text-gray-400 text-lg xl:text-xl leading-relaxed mt-8 lg:mt-12 max-w-prose'>
            <PrismicRichText field={slice.primary.subheadline} />
          </div>
        </div>
        <div className='flex lg:justify-end w-full lg:w-6/12 xl:w-5/12'>
          <YouTubeEmbed embedid={slice.primary.youtube_id} />
        </div>
      </div>
      <CTACountdown headline={slice.primary.cta_headline} />
    </div>
  </section>
);

export default CertificateHero;
