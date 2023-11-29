import React from 'react';

const LessonHero = ({ url }) => {
  return (
    <div
      className='aspect-[1/1] lg:aspect-[16/9] bg-cover bg-center w-full max-w-7xl mx-auto'
      style={{ backgroundImage: `url('${url}')` }}
    ></div>
  );
};

export default LessonHero;
