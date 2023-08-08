import {
  BoltIcon,
  ServerIcon,
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  UsersIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Comprehensive Certificate Programs.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Expert-led Courses',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: BookOpenIcon,
  },
  {
    name: 'Learning of the Month.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: LightBulbIcon,
  },
  {
    name: 'Robust Knowledge Library.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Powerful Community.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: UsersIcon,
  },
  {
    name: 'Know the Latest.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: BoltIcon,
  },
];

export default function Example() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl sm:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Your Subscribed!
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Leverage the expertise of the packaging industry&apos;s knowledge
            leaders.
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            We are grateful you have chosen to be a part of the Packaging
            School. We hope you take advatnage and explore the comprehensive
            library of expert-currated content. Not interested? Unsubscribe
            here.
          </p>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-9'>
              <dt className='inline font-semibold text-gray-900'>
                <feature.icon
                  className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                  aria-hidden='true'
                />
                {feature.name}
              </dt>{' '}
              <dd className='inline'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
