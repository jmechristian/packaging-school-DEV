import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Why we need to have a system for selling',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: "Uncover a prospect's compelling reasons to do business with you",
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'The psychology of the buyer and the seller',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Discussing the budget (money, time and resources)',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Strategies to quickly build trust with prospective clients',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Engineering a decision making process and accessing all of the decision makers',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Closing the sale and setting up customer success',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Using "verbal contracts" to accelerate deals and qualify harder',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: CheckCircleIcon,
  },
];

export default function SalesFeatures() {
  return (
    <div className='bg-white pb-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-3xl font-bold font-greycliff tracking-tight text-gray-900 sm:text-4xl'>
            Learning Objectives
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            8 Lessons in Sandler Bootcamp, covering the following topics as they
            apply to packaging sales:
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-5xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-2 gap-y-4 lg:max-w-none lg:grid-cols-2'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='flex items-start  gap-x-3 text-base leading-7 text-gray-900'>
                  <feature.icon
                    className='h-5 w-5 flex-none text-green-700'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
