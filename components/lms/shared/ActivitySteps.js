import { Fragment } from 'react';
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Market Research Analysis', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Begin by reviewing your existing market research analysis. This could include data, charts, or information related to your target audience, competitors, and industry trends. Ideally, you have already prepared this through your elemental analysis 6-panel Frankenstein. The following steps guide you through the process of updating your 6-panel Frankenstein to your brand guidelines.',
    date: '6d ago',
  },

  {
    id: 4,
    type: 'comment',
    person: { name: 'Branding Elements', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'a) Logo: Integrate your brand’s logo into the analysis panels. Ensure that it is placed prominently and adheres to your brand’s visual identity. b) Product Name: Incorporate your product name or a relevant title in a consistent font that aligns with your brand’s style guide.',
    badHTML: `<div><strong>a) Logo:</strong> &nbsp;Integrate your brand’s logo into the analysis panels. Ensure that it is placed prominently and adheres to your brand’s visual identity.</div><div><strong>b) Product Name:</strong> Incorporate your product name or a relevant title in a consistent font that aligns with your brand’s style guide.</div>`,
    date: '2h ago',
  },
  {
    id: 5,
    type: 'comment',
    person: { name: 'Style Guide', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Utilize your brand’s style guide to maintain visual consistency. Consider color palettes, typography, and any specific design elements outlined in your guide.',

    date: '2h ago',
  },
  {
    id: 6,
    type: 'comment',
    person: { name: 'Specific Font', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Choose a specific font that is in line with your brand’s identity and style. Use this font consistently throughout your analysis panels for headings and text.',

    date: '2h ago',
  },
  {
    id: 7,
    type: 'comment',
    person: { name: 'Visuals and Graphics', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Create or enhance visuals and graphics that reflect the market requirements within your brand’s style. Ensure that these visuals are visually appealing and support the analysis.',

    date: '2h ago',
  },
  {
    id: 8,
    type: 'comment',
    person: { name: 'Panel Design', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Update the six panels developed in the market research analysis in a visually engaging and organized manner per the brand style guide. Arrange the elements (text, visuals, logo, product name) within each panel to maximize clarity and impact. If you are using a shape different than a rectangular prism, create at least 6 areas to apply across your system design.',

    date: '2h ago',
  },
  {
    id: 9,
    type: 'comment',
    person: { name: 'Share Screenshot and Writeup', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Update the six panels developed in the market research analysis in a visually engaging and organized manner per the brand style guide. Arrange the elements (text, visuals, logo, product name) within each panel to maximize clarity and impact. If you are using a shape different than a rectangular prism, create at least 6 areas to apply across your system design.',
    badHTML: `<div>a) Take a screenshot of your six panels and arrange them for presentation.</div><div>b) Write a brief but informative explanation (writeup) that accompanies your panels. Describe the key findings, insights, or recommendations from your market research analysis. Discuss how your branding elements enhance the overall presentation.</div>`,
    date: '2h ago',
  },
  {
    id: 10,
    type: 'comment',
    person: { name: 'Optional: Pop a Packchat (if applicable)', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'If your assignment involves an online or interactive element, such as a Packchat, you may include it as part of your assignment, if realistic.',

    date: '2h ago',
  },
  {
    id: 10,
    type: 'comment',
    person: { name: 'Submission', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Submit your assignment with the screenshot of your six panels, the accompanying writeup, and any additional elements, such as a Packchat (if applicable).',

    date: '2h ago',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ActivitySteps() {
  return (
    <div className='flow-root'>
      <ul role='list' className='-mb-8'>
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className='relative pb-8'>
              {activityItemIdx !== activity.length - 1 ? (
                <span
                  className='absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200'
                  aria-hidden='true'
                />
              ) : null}
              <div className='relative flex items-start space-x-3'>
                {activityItem.type === 'comment' ? (
                  <>
                    <div className='relative mr-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full font-bold shadow-xl bg-base-mid ring-8 ring-white'>
                        {activityItemIdx + 1}
                      </div>
                    </div>
                    <div className='min-w-0'>
                      <div>
                        <div className='text-sm'>
                          <a
                            href={activityItem.person.href}
                            className=' dark:text-base-brand font-bold text-xl'
                          >
                            {activityItem.person.name}
                          </a>
                        </div>
                      </div>
                      {activityItem.badHTML ? (
                        <div
                          className='flex flex-col gap-5 max-w-prose mt-2'
                          dangerouslySetInnerHTML={{
                            __html: activityItem.badHTML,
                          }}
                        ></div>
                      ) : (
                        <div className='mt-2   text-gray-700 dark:text-white max-w-prose'>
                          {activityItem.comment}
                        </div>
                      )}
                    </div>
                  </>
                ) : activityItem.type === 'assignment' ? (
                  <>
                    <div>
                      <div className='relative px-1'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white'>
                          <UserCircleIcon
                            className='h-5 w-5 text-gray-500'
                            aria-hidden='true'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='min-w-0 flex-1 py-1.5'>
                      <div className='text-sm text-gray-500'>
                        <a
                          href={activityItem.person.href}
                          className='font-medium text-gray-900'
                        >
                          {activityItem.person.name}
                        </a>{' '}
                        assigned{' '}
                        <a
                          href={activityItem.assigned.href}
                          className='font-medium text-gray-900'
                        >
                          {activityItem.assigned.name}
                        </a>{' '}
                        <span className='whitespace-nowrap'>
                          {activityItem.date}
                        </span>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'tags' ? (
                  <>
                    <div>
                      <div className='relative px-1'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white'>
                          <TagIcon
                            className='h-5 w-5 text-gray-500'
                            aria-hidden='true'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='min-w-0 flex-1 py-0'>
                      <div className='text-sm leading-8 text-gray-500'>
                        <span className='mr-0.5'>
                          <a
                            href={activityItem.person.href}
                            className='font-medium text-gray-900'
                          >
                            {activityItem.person.name}
                          </a>{' '}
                          added tags
                        </span>{' '}
                        <span className='mr-0.5'>
                          {activityItem.tags.map((tag) => (
                            <Fragment key={tag.name}>
                              <a
                                href={tag.href}
                                className='inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200'
                              >
                                <svg
                                  className={classNames(
                                    tag.color,
                                    'h-1.5 w-1.5'
                                  )}
                                  viewBox='0 0 6 6'
                                  aria-hidden='true'
                                >
                                  <circle cx={3} cy={3} r={3} />
                                </svg>
                                {tag.name}
                              </a>{' '}
                            </Fragment>
                          ))}
                        </span>
                        <span className='whitespace-nowrap'>
                          {activityItem.date}
                        </span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
