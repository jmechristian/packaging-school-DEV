import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Lessons Completed',
    stat: '36',
    icon: UsersIcon,
    change: '6',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Challenges Completed',
    stat: '30',
    icon: EnvelopeOpenIcon,
    change: '5',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Time Spent Learning',
    stat: '16h 33m',
    icon: CursorArrowRaysIcon,
    change: '4h 30m',
    changeType: 'decrease',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileStats() {
  return (
    <div className='px-16 pb-16'>
      <h3 className='text-base font-bold leading-6 text-gray-900 font-greycliff'>
        Your Progress Last 30 days
      </h3>

      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {stats.map((item) => (
          <div
            key={item.id}
            className='relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6'
          >
            <dt>
              <div className='absolute rounded-md bg-base-brand p-3'>
                <item.icon className='h-6 w-6 text-white' aria-hidden='true' />
              </div>
              <p className='ml-16 truncate text-sm font-medium text-gray-500'>
                {item.name}
              </p>
            </dt>
            <dd className='ml-16 flex items-baseline pb-6 sm:pb-7'>
              <p className='text-2xl font-semibold text-gray-900'>
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className='h-5 w-5 flex-shrink-0 self-center text-green-500'
                    aria-hidden='true'
                  />
                ) : (
                  <ArrowDownIcon
                    className='h-5 w-5 flex-shrink-0 self-center text-red-500'
                    aria-hidden='true'
                  />
                )}

                <span className='sr-only'>
                  {' '}
                  {item.changeType === 'increase'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </p>
              <div className='absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6'>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-slate-600 hover:text-slate-500'
                  >
                    Continue Learning
                    <span className='sr-only'> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
