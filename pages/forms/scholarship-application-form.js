import React from 'react';
import CenteredTextHero from '../../components/layout/CenteredTextHero';
import Rubric from '../../components/scholarship/Rubric';
import GradientCTA from '../../components/GradientCTA';
import WhyUs from '../../components/WhyUs';

const Index = () => {
  return (
    <>
      <CenteredTextHero
        subhead='This scholarship application is valid for all courses and programs offered by The Packaging School. You will indicate which course or program you’re applying for in your scholarship essay. The strength of your essay will determine the amount of scholarship you are offered based on the grading rubric provided'
        headline='Scholarship Application Form'
        heading='Scholarship Decision Dates: Scholarship committee reviews applications on a monthly basis.'
        buttonText='View Application'
        buttonLink='https://docs.google.com/forms/d/e/1FAIpQLSfQRoIUCyXDpjN1-aw7-Y7MLbPVBuiDC4sfOfGMPfdI_x5ijQ/viewform'
        secondaryText='Essay Grading Rubric'
        secondaryLink='/forms/scholarship-application-form#rubric'
      />
      <Rubric />
      <WhyUs />
      <GradientCTA
        headline='Ready to Dive In?'
        subheadline='Try a course, risk-free.'
        buttonLink='https://learn.packagingschool.com/'
        buttonText='Get Started For Free'
        secondaryButtonLink='/all_courses'
        secondaryButtonText='View All Courses'
      />
    </>
  );
};

export default Index;
