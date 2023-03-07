import {
  CalendarDaysIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

// const features = [
//   {
//     name: 'Fast-moving',
//     description:
//       'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum.',
//     icon: TrashIcon,
//   },
//   {
//     name: 'Communicator',
//     description:
//       'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat.',
//     icon: PencilSquareIcon,
//   },
//   {
//     name: 'Maintaing Schedules and Budgets',
//     description:
//       'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis.',
//     icon: ChatBubbleOvalLeftEllipsisIcon,
//   },
//   {
//     name: 'Customer connections',
//     description:
//       'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad.',
//     icon: HeartIcon,
//   },
// ];

const CareerFeature = ({ items, altName, name }) => {
  return (
    <div className='py-16 sm:py-32 px-6'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-base md:text-lg font-semibold font-greycliff leading-7 text-base-brand'>
          What is {altName}?
        </h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl font-greycliff'>
          A Day in the Life of the {name}
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {items.map((feature) => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base md:text-lg font-semibold leading-7 text-slate-900'>
                <div className='absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-clemson'>
                  <BoltIcon className='h-6 w-6 text-white' aria-hidden='true' />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base md:text-lg leading-7 text-slate-700/60'>
                {feature.desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default CareerFeature;
