import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import {
  BoltIcon,
  UsersIcon,
  ClockIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import SavedCourse from './SavedCourse';

const stats = [
  {
    id: 1,
    name: 'Lessons Completed',
    stat: '36',
    icon: AcademicCapIcon,
    change: '6',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Challenges Completed',
    stat: '30',
    icon: BoltIcon,
    change: '5',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Time Spent Learning',
    stat: '16h 33m',
    icon: ClockIcon,
    change: '4h 30m',
    changeType: 'decrease',
  },
];

const stats2 = [
  {
    id: 1,
    name: 'Connections Made',
    stat: '13',
    icon: UsersIcon,
    change: '2',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'PackChat Comments',
    stat: '16',
    icon: ChatBubbleLeftRightIcon,
    change: '6',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Lessons Shared',
    stat: '4',
    icon: ShareIcon,
    change: '1',
    changeType: 'increase',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileStats({ user }) {
  return (
    <div className='px-6 md:px-16 pb-16 flex flex-col gap-16'>
      <div>
        <h3 className='text-lg font-bold leading-6 text-gray-900 font-greycliff mb-6'>
          Your Saved Courses
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {user?.savedCourses.map((it, i) => (
            <div key={i}>
              <SavedCourse courseId={it} savedCourse={user?.savedCourses} />
            </div>
          ))}
        </div>
        {/* <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.map((item) => (
            <div
              key={item.id}
              className='relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6'
            >
              <dt>
                <div className='absolute rounded-md bg-base-brand p-3'>
                  <item.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
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
        </dl> */}
      </div>
      {/* <div>
        <h3 className='text-base font-bold leading-6 text-gray-900 font-greycliff'>
          Your Networking Last 30 days
        </h3>

        <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {stats2.map((item) => (
            <div
              key={item.id}
              className='relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6'
            >
              <dt>
                <div className='absolute rounded-md bg-clemson p-3'>
                  <item.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
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
                      Get Connected
                      <span className='sr-only'> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div> */}
    </div>
  );
}
