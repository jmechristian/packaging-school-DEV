import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Subject Matter Experts',
    description:
      'We combine with the leading experts in their fields with the leading educator in the packaging industry.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Everyone on One Page',
    description:
      'Keep your teams out of silos and current on industry best practices.',
    icon: UserGroupIcon,
  },
  {
    name: '100% Online',
    description:
      'Convenient access, 24/7, so your team can learn at their pace, in an environment of their choosing.',
    icon: ServerIcon,
  },
];

export default function HomeFeatures() {
  return (
    <div className='mx-auto max-w-7xl md:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
        <div className='px-6 lg:px-0 lg:pr-4 lg:pt-4'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-lg'>
            <h2 className='text-base font-bold text-base-mid md:text-lg font-greycliff'>
              We Train Teams
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-greycliff'>
              What&apos;s the cost of an untrained workforce?
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Invest in your team&mdash;invest in your company&apos;s future.
              Training is key to systematic improvement of your organization and
              for the personal growth of your employees. Packaging School can
              get your teams up-to-speed and ready to innovate.
            </p>
            <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
              {features.map((feature) => (
                <div key={feature.name} className='relative pl-9'>
                  <dt className='inline font-semibold text-gray-900'>
                    <feature.icon
                      className='absolute left-1 top-1 h-5 w-5 text-base-mid'
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
        <div className='sm:px-6 lg:px-0'>
          <div className='relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none'>
            <div
              className='absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white'
              aria-hidden='true'
            />
            <div className='mx-auto max-w-2xl sm:mx-0 sm:max-w-none'>
              <img
                src='https://packschool.s3.amazonaws.com/aps1.webp'
                alt='Product screenshot'
                width={2432}
                height={1442}
                className='-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10'
              />
            </div>
            <div
              className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl'
              aria-hidden='true'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
