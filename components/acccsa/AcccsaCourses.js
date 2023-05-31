import React from 'react';
import AcccsaItem from './AcccsaItem';

const AcccsaCourses = ({ courses }) => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-8 px-6 xl:px-0 pb-16'>
      <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900 font-greycliff'>
        Cursos diseñados para su aprendizaje.
      </h2>
      {courses.map((c) => (
        <div key={c.category} className='flex flex-col gap-3'>
          <div className='font-semibold font-greycliff text-lg'>
            {c.category}
          </div>
          <div className='flex flex-wrap gap-6 md:grid md:grid-cols-2 lg:grid-cols-3'>
            {c.items.map((i) => (
              <AcccsaItem i={i} key={i.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcccsaCourses;
