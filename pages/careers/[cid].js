import CareerFeature from '../../components/careers/CareerFeature';
import CareerHero from '../../components/careers/CareerHero';
import CareerAction from '../../components/careers/CareerAction';
import CareerCTA from '../../components/careers/CareerCTA';

const Index = () => {
  return (
    <div className='w-full h-full relative flex flex-col mt-8'>
      <CareerHero />
      <CareerAction />
      <CareerFeature />
      <CareerCTA />
    </div>
  );
};

export default Index;
