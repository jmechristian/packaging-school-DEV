import { Fragment, Suspense, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Logo from '../../../components/layout/Logo';
import Link from 'next/link';
import CourseDropDownCourses from './MenuDropDowns/CourseDropDownCourses';
import CourseDropDownCallout from './MenuDropDowns/CourseDropDownCallout';
import CertMegaMenu from '../../../components/nav/CertMegaMenu';
import CertMenuItem from '../../../components/shared/CertMenuItem';
import CourseMenuBlock from '../shared/CourseMenuBlock';
import MobileMenuCoursesCallout from '../MobileMenu/MobileMenuComponents/MobileMenuCoursesCallout';
import CertMegaCallout from '../../../components/nav/CertMegaCallout';
import { showSearch } from '../navigationSlice';
import { setDark, setLight, toggleSignInModal } from '../../layout/layoutSlice';
import { useDispatch } from 'react-redux';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import {
  MoonIcon,
  BoltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import LogoSquare from '../../../components/layout/LogoSquare';
import { useRouter } from 'next/router';
import SalesBar from './SalesBar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderNew() {
  const [open, setOpen] = useState(false);
  const [isPath, setIsPath] = useState('/');
  const { user } = useSelector((state) => state.auth);
  const { darkMode } = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentPath = router.asPath;

  const navigation = {
    categories: [
      {
        name: 'Certificates',
        body: <CertMegaMenu onClose={() => setOpen(false)} />,
        callout: <CertMegaCallout onClose={() => setOpen(false)} />,
      },
      {
        name: 'Courses',
        body: (
          <div className='flex flex-col gap-9'>
            <CourseMenuBlock onClose={() => setOpen(false)} />
          </div>
        ),
        callout: <MobileMenuCoursesCallout onClose={() => setOpen(false)} />,
      },
    ],
    pages: [
      { name: 'Library', href: '/library' },
      { name: 'About', href: '/about' },
      // { name: 'Campus Store', href: '#' },
    ],
  };

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-40 lg:hidden'
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-full flex-col overflow-y-auto bg-slate-100 dark:bg-dark-dark pb-12 shadow-xl'>
                <div className='flex pb-2 pt-2 pl-2'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as='div' className='mt-2'>
                  <div className='border-b border-gray-200'>
                    <Tab.List className='-mb-px flex space-x-8 px-4'>
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? ' text-base-brand dark:text-white'
                                : 'border-transparent text-gray-900 dark:text-gray-500',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category, categoryIdx) => (
                      <Tab.Panel
                        key={category.name}
                        className='space-y-12 px-4 pb-6 pt-10 max-w-[96%]'
                      >
                        <div className='grid grid-cols-1 items-start gap-x-6 gap-y-10'>
                          <div className='grid grid-cols-1 gap-x-6 gap-y-10'>
                            <div>{category.body}</div>
                            <div>{category.callout}</div>
                          </div>
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  {navigation.pages.map((page) => (
                    <div
                      key={page.name}
                      className='flow-root'
                      onClick={() => setOpen(false)}
                    >
                      <Link href={page.href}>
                        <a
                          href={page.href}
                          className='-m-2 block p-2 font-medium text-gray-900 dark:text-white'
                        >
                          {page.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  <div className='flow-root'>
                    <a
                      href='https://learn.packagingschool.com'
                      target='_blank'
                      rel='noreferrer'
                      className='dark:text-white font-semibold'
                    >
                      Go to My Learning Dashbooard
                    </a>
                    {/* {!user && (
                      <Link href={`/api/auth/login?returnTo=${currentPath}`}>
                        <a className='-m-2 block p-2 font-medium text-gray-900 dark:text-white'>
                          Create a Free account
                        </a>
                      </Link>
                    )} */}
                  </div>
                  <div className='flow-root'>
                    <Link
                      href={
                        user
                          ? '/api/auth/logout'
                          : `/api/auth/login?returnTo=${currentPath}`
                      }
                    >
                      <a className='-m-2 block p-2 font-medium text-gray-900 dark:text-white'>
                        {user ? 'Sign Out' : 'Sign In to Packagingschool.com'}
                      </a>
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className='relative'>
        <nav aria-label='Top'>
          {/* Top navigation */}
          <Suspense>
            <SalesBar />
          </Suspense>

          {/* Secondary navigation */}
          <div className='bg-white dark:bg-dark-mid'>
            <div className='mx-auto max-w-7xl'>
              <div className='border-b border-t lg:border-t-0 border-slate-200 dark:border-gray-700'>
                <div className='flex h-24 items-center justify-between px-4 md:px-8 xl:pl-0'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex lg:items-center'>
                    <Link href='/'>
                      <div className='h-full w-44'>
                        <Logo />
                      </div>
                    </Link>
                  </div>

                  <div className='hidden h-full lg:flex'>
                    {/* Mega menus */}
                    <Popover.Group className='ml-8'>
                      <div className='flex h-full justify-center space-x-8'>
                        <Popover
                          key={navigation.categories[0].name}
                          className='flex'
                        >
                          {({ open, close }) => (
                            <>
                              <div className='relative flex'>
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-base-brand text-base-brand dark:text-white/80'
                                      : 'border-transparent text-gray-700 dark:hover:text-gray-500 hover:text-gray-800 dark:text-white/80',
                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px font-semibold font-greycliff transition-colors duration-200 ease-out'
                                  )}
                                >
                                  {navigation.categories[0].name}
                                </Popover.Button>
                                <Popover.Overlay className='fixed top-32 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-10' />
                              </div>

                              <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute inset-x-0 top-full text-gray-500 z-20'>
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white shadow'
                                    aria-hidden='true'
                                  />

                                  <div className='relative bg-slate-100 dark:bg-dark-dark'>
                                    <div className='mx-auto max-w-7xl px-8'>
                                      <div className='grid grid-cols-3 overflow-hidden items-start gap-x-8 gap-y-10 py-10'>
                                        <div className='grid grid-cols-1 overflow-hidden col-span-1 gap-6 h-full'>
                                          <CertMenuItem
                                            title='Certificate of Mastery in Packaging Management'
                                            apply='/certificate-of-mastery-in-packaging-management'
                                            learnMore='/certifications/get-to-know-cmpm'
                                            content='A 12-week, PhD-led program teaching you the latest technologies accelerating the packaging field in the space of packaging development, material procurement, and organizational management.'
                                            bgColor='bg-gradient-to-br from-base-brand to-slate-700'
                                            onClose={() => close()}
                                            // icon={'academicHat'}
                                          />

                                          <CertMenuItem
                                            title='Automotive Packaging Certificate'
                                            bgColor='bg-gradient-to-br from-clemson to-orange-800'
                                            content='The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field.'
                                            apply='https://learn.packagingschool.com/enroll/735516'
                                            learnMore='/certifications/get-to-know-apc'
                                            onClose={() => close()}
                                            // icon='cog'
                                          />
                                        </div>
                                        <div className='grid grid-cols-1 col-span-1 gap-6 h-full'>
                                          <CertMenuItem
                                            title='Certificate of Packaging Science'
                                            apply='/certificate-of-packaging-science-application'
                                            learnMore='/certifications/get-to-know-cps'
                                            onClose={() => close()}
                                            bgColor='bg-gradient-to-br from-base-dark to-slate-900'
                                            content='A 12-month, online program teaching the materials, processes, and influences shaping the advancement of the industry. Speak the language of packaging and be a key differentiator for you and your company.'
                                            // icon='beaker'
                                          />
                                          <CertMenuItem
                                            title='Food Packaging Certificate'
                                            onClose={() => close()}
                                            bgColor='bg-gradient-to-br from-green-500 to-slate-900'
                                            learnMore='/food-packaging'
                                            content='In Development! Want to be a part? Interested In Sponsoring? Leave your mark on the packaging industry. Click below to apply or reach out to our Academic Director Dr. Julie Suggs'
                                            // icon='food'
                                          />
                                        </div>
                                        <CertMegaCallout close={close} />
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>

                        <Popover
                          key={navigation.categories[1].name}
                          className='flex'
                        >
                          {({ open, close }) => (
                            <>
                              <div className='relative flex'>
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-base-brand text-base-brand dark:text-white/80'
                                      : 'border-transparent text-gray-700 dark:hover:text-gray-500 hover:text-gray-800 dark:text-white/80',
                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px font-semibold font-greycliff transition-colors duration-200 ease-out'
                                  )}
                                >
                                  {navigation.categories[1].name}
                                </Popover.Button>
                                <Popover.Overlay className='fixed top-32 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm z-10' />
                              </div>

                              <Transition
                                as={Fragment}
                                enter='transition ease-out duration-200'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='transition ease-in duration-150'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Popover.Panel className='absolute inset-x-0 top-full text-gray-500 z-20'>
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white shadow'
                                    aria-hidden='true'
                                  />

                                  <div className='relative bg-slate-100 dark:bg-dark-dark'>
                                    <div className='mx-auto max-w-7xl px-8'>
                                      <div className='grid grid-cols-3 items-start gap-x-8 gap-y-10 pb-8 pt-8'>
                                        <CourseDropDownCourses
                                          onClose={() => close()}
                                        />
                                        <CourseDropDownCallout
                                          onClose={() => close()}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                        {navigation.pages.map((page) => (
                          <Link passHref href={page.href} key={page.name}>
                            <a className='flex items-center font-semibold font-greycliff text-slate-700 dark:hover:text-gray-500 hover:text-slate-800 dark:text-white/80'>
                              {page.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex flex-1 items-center lg:hidden'>
                    <button
                      type='button'
                      className='rounded-md bg-white dark:bg-dark-mid p-2 text-slate-400 dark:text-white/40'
                      onClick={() => setOpen(true)}
                    >
                      <span className='sr-only'>Open menu</span>
                      <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Search */}
                    <a
                      href='#'
                      className='ml-2 p-2 text-slate-400 hover:text-slate-500 dark:text-white/40'
                      onClick={() => dispatch(showSearch())}
                    >
                      <span className='sr-only'>Search</span>
                      <MagnifyingGlassIcon
                        className='h-6 w-6'
                        aria-hidden='true'
                      />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href='/'>
                    <a className='lg:hidden'>
                      <span className='sr-only'>Packaging School</span>
                      <LogoSquare className='w-6 h-6' />
                    </a>
                  </Link>

                  <div className='flex flex-1 items-center justify-end'>
                    <div className='flex items-center lg:ml-8'>
                      <div className='flex space-x-8'>
                        <div className='hidden lg:flex'>
                          <a
                            href='#'
                            className='-m-2 p-2 text-slate-400 hover:text-slate-500 dark:text-white/40'
                            onClick={() => dispatch(showSearch())}
                          >
                            <span className='sr-only'>Search</span>
                            <MagnifyingGlassIcon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          </a>
                        </div>

                        <div className='flex'>
                          {user ? (
                            <Link href='/profile'>
                              <a className='-m-2 p-2 text-slate-400 hover:text-slate-500 dark:text-white/40 cursor-pointer'>
                                <UserIcon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              </a>
                            </Link>
                          ) : (
                            <div
                              className='-m-2 p-2 text-slate-400 hover:text-slate-500 dark:text-white/40 cursor-pointer'
                              onClick={() => dispatch(toggleSignInModal())}
                            >
                              <UserIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <span
                        className='mx-4 h-6 w-px bg-slate-200 dark:bg-white/40 lg:mx-6'
                        aria-hidden='true'
                      />

                      <div className='flow-root'>
                        {darkMode ? (
                          <div
                            onClick={() => {
                              dispatch(setLight());
                              document.body.classList.remove('dark');
                            }}
                          >
                            <MoonIcon className='w-6 h-6 text-gray-400 group-hover:text-gray-500 dark:text-white/40 cursor-pointer' />
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              dispatch(setDark());
                              document.body.classList.add('dark');
                            }}
                          >
                            <LightBulbIcon
                              className='h-6 w-6 flex-shrink-0 text-gray-400 dark:text-white/40 group-hover:text-gray-500 cursor-pointer'
                              aria-hidden='true'
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
