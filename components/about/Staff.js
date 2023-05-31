import React from 'react';
import { SocialIcon } from 'react-social-icons';

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  // More people...
];

const Staff = ({ staff }) => {
  return (
    <div className='bg-slate-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold font-greycliff text-white sm:text-4xl'>
            Our team
          </h2>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
        >
          {staff.map((person) => (
            <li key={person.fullName}>
              <img
                className='aspect-[14/13] w-full rounded-2xl object-cover'
                src={person.image}
                alt={person.fullName}
              />
              <h3 className='mt-6 text-lg font-semibold leading-8 tracking-tight text-white font-greycliff'>
                {person.fullName}
              </h3>
              <p className='text-base leading-7 text-slate-500'>
                {person.title}
              </p>
              <SocialIcon url={person.linkedIn} className='w-1 h-1' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Staff;
