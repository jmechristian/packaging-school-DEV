import React from 'react';

const APSExperts = () => {
  const people = [
    {
      name: 'DR. ANDREW HURLEY',
      role: 'Chief Learning Officer & Founder The Packaging School',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Andrew.png',
      linkedinUrl: 'https://www.linkedin.com/in/drandrewhurley/',
    },
    {
      name: 'JOSH GALVARINO',
      role: 'Mercedes-Benz U.S.',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Josh.png',
      linkedinUrl: 'https://www.linkedin.com/in/josh-galvarino-16645925',
    },
    {
      name: 'DREW COCKMAN',
      role: 'BMW MC.',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Drew.png',
      linkedinUrl: 'https://www.linkedin.com/in/drew-cockman-a2649917',
    },
    {
      name: 'CHRIS HELMS',
      role: 'Tree Brand Packaging',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-CHRIS.png',
      linkedinUrl: 'https://www.linkedin.com/in/chris-helms-ab601740',
    },
    {
      name: 'DR. KEVIN LANDMARK',
      role: 'Northern Technologies International Corporation',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Kevin.png',
      linkedinUrl: 'https://www.linkedin.com/in/kevin-landmark',
    },
    {
      name: 'DAVID LESTER',
      role: 'Magna Decostar',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Dave.png',
      linkedinUrl: 'https://www.linkedin.com/in/david-lester-5a8814a5',
    },
    {
      name: 'MIKE COSTELLO',
      role: 'PakFab Engineered Solutions',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Mike.png',
      linkedinUrl: 'https://www.linkedin.com/in/mike-costello-0b782419/',
    },
    {
      name: 'BIANCA HURLEY',
      role: 'The Packaging School',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Bianca.png',
      linkedinUrl: 'https://www.linkedin.com/in/biancahurley/',
    },
    {
      name: 'CAMILLE CHISM, CPPL',
      role: 'Indigo Packaging and Consulting',
      imageUrl:
        'https://packschool.s3.amazonaws.com/auto-faculty/APS-PS-Automotive-Speakers-Camille.png',
      linkedinUrl: 'https://www.linkedin.com/in/camillecorrchism/',
    },
  ];

  return (
    <div className='py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
        <div className='mx-auto max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight dark:text-white sm:text-5xl font-greycliff'>
            Meet The Experts
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-500'>
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'
        >
          {people.map((person) => (
            <li
              key={person.name}
              className='rounded-2xl bg-slate-800 py-10 px-8'
            >
              <img
                className='mx-auto h-48 w-48 rounded-full md:h-56 md:w-56'
                src={person.imageUrl}
                alt=''
              />
              <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-white'>
                {person.name}
              </h3>
              <p className='text-sm leading-6 text-slate-400'>{person.role}</p>
              <ul role='list' className='mt-6 flex justify-center gap-x-6'>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className='text-slate-400 hover:text-slate-300'
                  >
                    <span className='sr-only'>LinkedIn</span>
                    <svg
                      className='h-7 w-7'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default APSExperts;
