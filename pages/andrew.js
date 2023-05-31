import React from 'react';
import AndrewHero from '../components/andrew/AndrewHero';
import AndrewAbout from '../components/andrew/AndrewAbout';
import AndrewVideo from '../components/andrew/AndrewVideo';
import GradientCTA from '../components/GradientCTA';

const Page = () => {
  return (
    <>
      <AndrewHero />
      <AndrewAbout />
      <AndrewVideo />
      <GradientCTA
        headline='Ready to Work Together?'
        subheadline="Let's Connect."
        buttonText='Reach out to Dr. Hurley'
      />
    </>
  );
};

export default Page;
