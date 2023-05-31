import {
  ArrowPathIcon,
  BeakerIcon,
  AcademicCapIcon,
  CubeTransparentIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Research',
    description:
      'Research programs that help brands develop attention grabbing packaging and lift sales on the shelf.',
    href: '#',
    icon: BeakerIcon,
  },
  {
    name: 'Design',
    description:
      'Enable students to work on real-life projects by developing your packaging in my laboratory. .',
    href: '#',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Education',
    description:
      'Enable students to work on real-life projects by developing your packaging in my laboratory. ',
    href: '#',
    icon: AcademicCapIcon,
  },
];

export default function AndrewAbout() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-3xl font-bold tracking-tight font-greycliff text-gray-900 sm:text-4xl'>
            Who is Dr. Andrew Hurley?
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Andrew’s research lab answers complex questions on product marketing
            and packaging. His experienced group has tested thousands of
            packages for hundreds of brands. Hurley’s efforts have resulted in
            multiple awards, patents, and increased sales by 40% for small and
            large businesses.
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Andrew is also the lead instructor for Clemson University’s Center
            for Corporate Learning’s Certificate of Mastery in Packaging
            Management, a state-of-the-art online curriculum that teaches the
            necessary business acumen and professional vocabulary to work
            successfully within the packaging industry.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='flex items-center gap-x-3 text-base xl:text-lg font-bold leading-7 text-gray-900 font-greycliff'>
                  <feature.icon
                    className='h-6 w-6 flex-none text-clemson'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                  <p className='flex-auto'>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
