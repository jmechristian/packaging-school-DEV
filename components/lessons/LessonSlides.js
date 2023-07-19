import React from 'react';
import SlidesPlayer from './SlidesPlayer';

const LessonSlides = ({ slides }) => {
  const reOrderedSlides = slides.sort();

  return (
    <div className='mx-auto max-w-7xl aspect-[1/1] md:aspect-[16/9] w-full'>
      <div className='w-full h-full bg-dark'>
        <SlidesPlayer images={reOrderedSlides} />
      </div>
    </div>
  );
};

export default LessonSlides;
