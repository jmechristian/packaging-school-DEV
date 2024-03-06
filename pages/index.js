import HomeCerts from '../components/home/HomeCerts';
import HomeHero from '../components/home/HomeHero';
import HomeLogos from '../components/home/HomeLogos';
import HomeFree from '../components/home/HomeFree';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeTestimonials from '../components/home/HomeTestimonials';
import GradientCTA from '../components/GradientCTA';
import HomeCTA from '../components/home/HomeCTA';
import FadeIn from '../helpers/FadeIn';
import Head from 'next/head';
import Meta from '../components/shared/Meta';

export default function Home() {
  return (
    <>
      <Meta
        title={'Packaging School'}
        description={
          'The Packaging School brings together the business, art, and science of packaging so you can lead projects, optimize supply chains, increase margins, and develop sustainable solutions.'
        }
        image={'https://packschool.s3.amazonaws.com/firework-box-3.webp'}
      />

      <div className='relative w-full h-full '>
        <div className='flex flex-col gap-24 md:gap-32 lg:gap-40'>
          <FadeIn>
            <HomeHero />
          </FadeIn>
          <FadeIn>
            <HomeCerts />
          </FadeIn>
          <FadeIn>
            <HomeLogos />
          </FadeIn>
          <FadeIn>
            <HomeFree />
          </FadeIn>
          <FadeIn>
            <HomeFeatures />
          </FadeIn>
          <FadeIn>
            <HomeTestimonials />
          </FadeIn>
          <FadeIn>
            <HomeCTA />
          </FadeIn>
        </div>
        <GradientCTA
          headline='Ready to Elevate Your Career?'
          subheadline='Try a demo, risk-free.'
          buttonText='Get Started For Free'
          secondaryButtonText='Need More Info?'
          buttonLink={'/all_courses'}
        />
      </div>
    </>
  );
}
