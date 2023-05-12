import HomeCerts from '../components/home/HomeCerts';
import HomeHero from '../components/home/HomeHero';
import HomeLogos from '../components/home/HomeLogos';
import HomeFree from '../components/home/HomeFree';

export default function Home() {
  return (
    <div className='relative w-full h-full '>
      <div className='hero__padding'>
        <div className='flex flex-col gap-20'>
          <HomeHero />
          <HomeCerts />
          <HomeLogos />
          <HomeFree />
        </div>
      </div>
    </div>
  );
}
