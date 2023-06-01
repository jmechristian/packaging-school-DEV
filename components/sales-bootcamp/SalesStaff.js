const people = [
  {
    name: 'Emily Yepes',
    role: 'Vice-President / Sandler',
    imageUrl: 'https://packschool.s3.amazonaws.com/emily_sandler.png',
    bio: 'Emily Yepes joined Sandler Training as an instructor after being a client for over two years when she was Director of Sales for a publishing company. Thanks to the Sandler method, she led her team to 10% YOY growth selling print advertising in 2019.',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/emily-yepes-90734620/',
  },
  {
    name: 'John Rosso',
    role: 'CEO / Sandler',
    imageUrl: 'https://packschool.s3.amazonaws.com/john_sandler.jpeg',
    bio: 'John Rosso, along with other instructors on his team, will be teaching the course. John has 25 years of experience training sales teams at Winpak, Sonoco, and a variety of small and medium sized packaging companies. John is a former IBM sales star who opened a Sandler Training Center in 1994 and has grown it to be the #1 training center of over 250 Sandler franchises worldwide.',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/johnsrosso/',
  },
  {
    name: 'Dr. Andrew Hurley',
    role: 'Founder / The Packaging School',
    imageUrl:
      'https://packschool.s3.amazonaws.com/Dr-Andrew-Hurley-Packaging-School-2048x2048.jpeg',
    bio: 'Dr. Hurley is an Associate Professor at Clemson University in the Department of Food, Nutrition, and Packaging Sciences. He leads the packaging design emphasis area, where he researches how to leverage packaging to solve even the toughest supply chain challenges.',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/drandrewhurley/',
  },
  // More people...
];

export default function SalesStaff() {
  return (
    <div className='bg-white py-24 md:py-32'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5'>
        <div className='max-w-2xl xl:col-span-2'>
          <div className='flex flex-col gap-12 justify-between h-full'>
            <div className='flex flex-col'>
              <h2 className='text-3xl font-bold font-greycliff tracking-tight text-gray-900 sm:text-4xl'>
                About Sandler Training
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Sandler Training is a global organization with over five decades
                of experience successfully partnering with businesses and
                individuals in a variety of industries to help them improve the
                effectiveness of their sales processes. Global presence of over
                500 Sandler trainers Ranked #1 in the Training category of
                Entrepreneur Magazine’s “Franchise 500” 11 times.
              </p>
            </div>
          </div>
        </div>
        <ul
          role='list'
          className='-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3'
        >
          {people.map((person) => (
            <li
              key={person.name}
              className='flex flex-col gap-10 pt-12 sm:flex-row'
            >
              <img
                className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover'
                src={person.imageUrl}
                alt=''
              />
              <div className='max-w-xl flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-base leading-7 text-gray-600'>
                  {person.role}
                </p>
                <p className='mt-6 text-base leading-7 text-gray-600 line-clamp-4'>
                  {person.bio}
                </p>
                <ul role='list' className='mt-6 flex gap-x-6'>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>LinkedIn</span>
                      <svg
                        className='h-5 w-5'
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
