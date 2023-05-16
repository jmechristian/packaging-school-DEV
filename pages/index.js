import HomeCerts from '../components/home/HomeCerts';
import HomeHero from '../components/home/HomeHero';
import HomeLogos from '../components/home/HomeLogos';
import HomeFree from '../components/home/HomeFree';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeTestimonials from '../components/home/HomeTestimonials';
import GradientCTA from '../components/GradientCTA';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <div className='relative w-full h-full '>
      <div className='flex flex-col gap-24 md:gap-32 lg:gap-40'>
        <HomeHero />
        <HomeCerts />
        <HomeLogos />
        <HomeFree />
        <HomeFeatures />
        <HomeTestimonials />
        <HomeCTA />
      </div>
      <GradientCTA
        headline='Ready to Elevate Your Career?'
        subheadline='Try a demo, risk-free.'
        buttonText='Get Started For Free'
        secondaryButtonText='Need More Info?'
      />
    </div>
  );
}
