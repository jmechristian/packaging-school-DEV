import { Fragment, Suspense, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import {
  AcademicCapIcon,
  Bars3Icon,
  BeakerIcon,
  Cog6ToothIcon,
  CogIcon,
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
import { setSelectedFilter } from '../../all_courses/courseFilterSlice';
import {
  setMenuItem,
  setSelectedNav,
  closeMobileMenu,
} from '../../navigation/navigationSlice';
import { useDispatch } from 'react-redux';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import {
  MoonIcon,
  BoltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import LogoSquare from '../../../components/layout/LogoSquare';
import { useRouter } from 'next/router';
import SalesBar from './SalesBar';
import MiniCertBlock from '../../../components/shared/MiniCertBlock';

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

  const categoryClickHandler = (name, value) => {
    let newVal = value?.toUpperCase();
    router.push('/all_courses#courses');
    dispatch(setSelectedFilter({ name: name, value: value }));
    dispatch(closeMobileMenu());
    dispatch(setMenuItem());
    dispatch(setSelectedNav(null));
  };

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
          <div className='flex flex-col gap-4 lg:gap-9'>
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
                  <div className='border-b border-gray-400'>
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

                <div className='space-y-6 border-t border-gray-400 px-4 py-6'>
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

                <div className='space-y-6 border-t border-gray-400 px-4 py-6'>
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
            <div className=''>
              <div className='border-b border-t lg:border-t-0 border-slate-400 dark:border-gray-700'>
                <div className='flex h-24 items-center justify-between px-4 md:px-8 xl:pl-0 mx-auto max-w-7xl'>
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
                                      ? 'border-transparent text-base-brand dark:text-white/80'
                                      : 'border-transparent text-gray-700 dark:hover:text-gray-500 hover:text-gray-800 dark:text-white/80',
                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px font-semibold font-greycliff transition-colors duration-200 ease-out'
                                  )}
                                >
                                  {navigation.categories[0].name}
                                </Popover.Button>
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
                                <Popover.Panel className='absolute inset-x-0 top-full z-20'>
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className='absolute inset-0 top-1/2 bg-white  shadow'
                                    aria-hidden='true'
                                  />
                                  <div className='mx-auto bg-base-light/95 dark:bg-dark-dark backdrop-blur  rounded-b-xl shadow-xl px-3 pt-6 pb-10'>
                                    <div className='grid grid-cols-3 items-start gap-3 max-w-7xl mx-auto h-full'>
                                      <div className='col-span-2 h-full'>
                                        <div className='flex flex-col gap-3 h-full'>
                                          <div className='w-full rounded-xl border bg-white dark:bg-dark-dark shadow-lg'>
                                            <div className='flex flex-col gap-4 p-4'>
                                              <h3 className='text-xl dark:text-white'>
                                                Comprehensive Certificate
                                                Programs
                                              </h3>
                                              <div className='grid grid-cols-2 gap-3'>
                                                <div className='border rounded-xl'>
                                                  <CertMenuItem
                                                    title='Certificate of Mastery in Packaging Management'
                                                    apply='/certificate-of-mastery-in-packaging-management'
                                                    learnMore='/certifications/get-to-know-cmpm'
                                                    content='A 12-week, PhD-led program teaching you the latest technologies accelerating the packaging field in the space of packaging development, material procurement, and organizational management.'
                                                    bgColor='bg-gradient-to-br from-base-brand to-slate-700'
                                                    onClose={() => close()}
                                                    // icon={'academicHat'}
                                                  />
                                                </div>
                                                <div className='border rounded-xl'>
                                                  <CertMenuItem
                                                    title='Certificate of Packaging Science'
                                                    apply='/certificate-of-packaging-science-application'
                                                    learnMore='/certifications/get-to-know-cps'
                                                    onClose={() => close()}
                                                    bgColor='bg-gradient-to-br from-base-dark to-slate-900'
                                                    content='A 12-month, online program teaching the materials, processes, and influences shaping the advancement of the industry. Speak the language of packaging and be a key differentiator for you and your company.'
                                                    // icon='beaker'
                                                  />
                                                </div>
                                                <div className='border rounded-xl'>
                                                  <CertMenuItem
                                                    title='Automotive Packaging Certificate'
                                                    bgColor='bg-gradient-to-br from-clemson to-orange-800'
                                                    content='The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field.'
                                                    apply='https://learn.packagingschool.com/enroll/735516'
                                                    learnMore='/certifications/get-to-know-apc'
                                                    enroll={true}
                                                    onClose={() => close()}
                                                  />
                                                </div>
                                                <div className='border rounded-xl'>
                                                  <CertMenuItem
                                                    enroll={true}
                                                    title='Certificate of Sustainable Packaging'
                                                    apply='https://learn.packagingschool.com/enroll/2772370'
                                                    learnMore='/certifications/get-to-know-csp'
                                                    onClose={() => close()}
                                                    bgColor='bg-gradient-to-br from-brand-green to-slate-900'
                                                    content="Introducing a transformative program empowering industry professionals to navigate the complexities of sustainable design. This initiative equips companies with internal champions, well-versed in the dos and don'ts of sustainable packaging, fostering a positive force for change within organizations."
                                                    callout={'Newly Released!'}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='col-span-1 border w-full h-full rounded-xl bg-neutral-100 dark:bg-dark-mid shadow-xl'>
                                        {/* <div className='w-full flex flex-col gap-4 p-4 justify-between h-full'>
                                          <div
                                            className='w-full aspect-[4/3] bg-cover bg-center rounded-xl relative cursor-pointer'
                                            style={{
                                              backgroundImage: `url('https://packschool.s3.amazonaws.com/JULIE-2018-sm.jpg')`,
                                            }}
                                          >
                                            <div className='w-full h-full bg-gradient-to-t from-black/80  rounded-b-xl absolute inset-0 z-[10]'></div>
                                            <div className='flex flex-col justify-between w-full h-full absolute inset-0 z-[20]'>
                                              <div className='w-fit py-2 text-sm font-semibold px-3 text-white bg-clemson rounded-xl mt-2 ml-2'>
                                                The Doctor is In!
                                              </div>
                                              <div className='flex flex-col gap-1 p-3 leading-tight'>
                                                <div className='font-bold text-2xl text-white'>
                                                  Questions about
                                                  Certifications?
                                                </div>
                                                <div className='text-white'>
                                                  Reach out to Dr. Julie Suggs
                                                  for a personalized
                                                  consultation for yourself or
                                                  your team.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <div className='flex flex-col gap-2'>
                                              <div className='font-bold w-full border-b border-b-slate-400 pb-2 font-greycliff'>
                                                Not Sure Where to Start?
                                              </div>
                                              <div
                                                className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2 cursor-pointer'
                                                onClick={() => {
                                                  router.push('/all_courses');
                                                  close();
                                                }}
                                              >
                                                <div className='text-sm text-slate-700 dark:text-slate-300'>
                                                  Browse the Library
                                                </div>
                                                <div>
                                                  <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
                                                </div>
                                              </div>
                                              <div
                                                className='flex gap-2 justify-between cursor-pointer items-center'
                                                onClick={() => {
                                                  router.push('/contact');
                                                  close();
                                                }}
                                              >
                                                <div className='text-sm text-slate-700 dark:text-slate-300'>
                                                  Contact Our Team
                                                </div>
                                                <div>
                                                  <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div> */}
                                        <CertMegaCallout
                                          onClose={() => close()}
                                        />
                                      </div>
                                      {/* <CourseDropDownCourses
                                          onClose={() => close()}
                                        />
                                        <CourseDropDownCallout
                                          onClose={() => close()}
                                        /> */}
                                    </div>
                                  </div>

                                  {/* <div className='mx-auto bg-base-light/95 backdrop-blur dark:bg-dark-dark rounded-b-xl shadow-xl px-3 pt-3 pb-8'>
                                    <div className='mx-auto max-w-7xl px-8'>
                                      <div className='grid grid-cols-3 overflow-hidden items-start gap-x-8 gap-y-10 py-4'>
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
                                  </div> */}
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
                                      ? 'border-transparent text-base-brand dark:text-white/80'
                                      : 'border-transparent text-gray-700 dark:hover:text-gray-500 hover:text-gray-800 dark:text-white/80',
                                    'relative z-10 -mb-px flex items-center border-b-2 pt-px font-semibold font-greycliff transition-colors duration-200 ease-out'
                                  )}
                                >
                                  {navigation.categories[1].name}
                                </Popover.Button>
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
                                <Popover.Panel className='absolute inset-x-0 top-full z-20'>
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}

                                  <div className='relative'>
                                    <div className='mx-auto bg-base-light/95 backdrop-blur dark:bg-dark-dark rounded-b-xl shadow-xl px-3 pt-6 pb-10'>
                                      <div className='grid grid-cols-3 items-start gap-3 max-w-7xl mx-auto h-full'>
                                        <div className='col-span-2 h-full'>
                                          <div className='flex flex-col gap-3 h-full'>
                                            <div className='w-full rounded-xl border bg-white dark:bg-dark-dark shadow-lg'>
                                              <div className='flex flex-col gap-4 p-4'>
                                                <h3 className='text-xl dark:text-white'>
                                                  Courses By Category
                                                </h3>
                                                <div className='grid grid-cols-2 gap-3'>
                                                  <CourseMenuBlock
                                                    onClose={close}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='w-full h-full'>
                                              <div className='grid grid-cols-2 gap-4 h-full'>
                                                <div
                                                  className='w-full rounded-xl bg-base-mid shadow-xl cursor-pointer group hover:bg-base-dark transition-colors ease-in'
                                                  onClick={() =>
                                                    categoryClickHandler(
                                                      'CPS Electives',
                                                      'ELECTIVE'
                                                    )
                                                  }
                                                >
                                                  <div className='px-4 py-4 w-full h-full flex items-center'>
                                                    <div className='w-full flex justify-between items-center'>
                                                      <div className='col-span-1'>
                                                        <BeakerIcon className='w-12 h-12 stroke-white/40 group-hover:stroke-clemson group-hover:scale-110 transition-all ease-in' />
                                                      </div>
                                                      <div className='col-span-4'>
                                                        <div className='font-medium text-white text-lg leading-tight'>
                                                          Certificate of
                                                          Packaging
                                                          <br /> Science Courses
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className='w-full h-full rounded-xl bg-indigo-500 hover:bg-indigo-700 transition-colors ease-in shadow-xl cursor-pointer group'
                                                  onClick={() =>
                                                    categoryClickHandler(
                                                      'Automotive',
                                                      'AUTO'
                                                    )
                                                  }
                                                >
                                                  <div className='px-4 py-4 w-full flex items-center h-full'>
                                                    <div className='w-full flex justify-between items-center'>
                                                      <div className='col-span-1'>
                                                        <Cog6ToothIcon className='w-12 h-12 stroke-white/40 group-hover:stroke-brand-yellow group-hover:scale-110 transition-all ease-in' />
                                                      </div>
                                                      <div className='col-span-4 flex flex-col gap-2'>
                                                        <div className='font-medium text-white text-lg leading-tight'>
                                                          Automotive Packaging
                                                          <br />
                                                          Certificate Courses
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className='col-span-1 border w-full h-full rounded-xl bg-neutral-100 dark:bg-dark-mid shadow-xl'>
                                          <div className='w-full flex flex-col gap-4 p-4 justify-between h-full'>
                                            <div
                                              className='w-full aspect-[4/3] bg-cover bg-center rounded-xl relative cursor-pointer'
                                              style={{
                                                backgroundImage: `url('https://packschool.s3.amazonaws.com/bootcamp-2-seoImage.png')`,
                                              }}
                                            >
                                              <div className='w-full h-full bg-gradient-to-t from-black/80 rounded-b-xl absolute inset-0 z-[10]'></div>
                                              <div className='flex flex-col justify-between w-full h-full absolute inset-0 z-[20]'>
                                                <div className='w-fit py-2 text-sm font-semibold px-3 text-white bg-clemson rounded-xl mt-2 ml-2'>
                                                  New To Packaging?
                                                </div>
                                                <div className='flex flex-col gap-1 p-3 leading-tight'>
                                                  <div className='font-bold text-2xl text-white'>
                                                    Packaging Bootcamp 101
                                                  </div>
                                                  <div className='text-white'>
                                                    20 days, 20 minutes daily.
                                                    Gain a solid foundation with
                                                    eight hours of content,
                                                    activities, and cheat
                                                    sheets.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <div className='flex flex-col gap-2'>
                                                <div className='font-bold w-full border-b dark:text-white border-b-slate-400 pb-2 font-greycliff'>
                                                  Not Sure Where to Start?
                                                </div>
                                                {/* <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700 dark:text-slate-300'>
              Take Our Skills Assesment
            </div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div> */}
                                                <div
                                                  className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2 cursor-pointer'
                                                  onClick={() => {
                                                    router.push('/all_courses');
                                                    close();
                                                  }}
                                                >
                                                  <div className='text-sm text-slate-700 dark:text-slate-300'>
                                                    Browse the Library
                                                  </div>
                                                  <div>
                                                    <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
                                                  </div>
                                                </div>
                                                <div
                                                  className='flex gap-2 justify-between cursor-pointer items-center'
                                                  onClick={() => {
                                                    router.push('/contact');
                                                    close();
                                                  }}
                                                >
                                                  <div className='text-sm text-slate-700 dark:text-slate-300'>
                                                    Contact Our Team
                                                  </div>
                                                  <div>
                                                    <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* <CourseDropDownCourses
                                          onClose={() => close()}
                                        />
                                        <CourseDropDownCallout
                                          onClose={() => close()}
                                        /> */}
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
