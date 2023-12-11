import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
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
import {
  setDark,
  setLight,
  toggleSignInModal,
} from '../../../layout/layoutSlice';
import { setSelectedFilter } from '../../../all_courses/courseFilterSlice';
import {
  setMenuItem,
  setSelectedNav,
  closeMobileMenu,
} from '../../../navigation/navigationSlice';

const MobileMenuCoursesCallout = ({ onClose }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categoryClickHandler = (name, value) => {
    onClose();
    let newVal = value?.toUpperCase();
    router.push('/all_courses#courses');
    dispatch(setSelectedFilter({ name: name, value: value }));
    dispatch(closeMobileMenu());
    dispatch(setMenuItem());
    dispatch(setSelectedNav(null));
  };
  return (
    <div>
      <div className='flex flex-col gap-6'>
        <div className='grid gap-4 h-full'>
          <div
            className='w-full rounded-xl bg-base-mid shadow-xl cursor-pointer group hover:bg-base-dark transition-colors ease-in'
            onClick={() => categoryClickHandler('CPS Electives', 'ELECTIVE')}
          >
            <div className='px-4 py-4 w-full h-full flex items-center'>
              <div className='w-full flex justify-between items-center'>
                <div className='col-span-1'>
                  <BeakerIcon className='w-12 h-12 stroke-white/40 group-hover:stroke-clemson group-hover:scale-110 transition-all ease-in' />
                </div>
                <div className='col-span-4'>
                  <div className='font-medium text-white text-lg leading-tight'>
                    Certificate of Packaging
                    <br /> Science Courses
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='w-full h-full rounded-xl bg-indigo-500 hover:bg-indigo-700 transition-colors ease-in shadow-xl cursor-pointer group'
            onClick={() => categoryClickHandler('Automotive', 'AUTO')}
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
        <div className='col-span-1 w-full h-full rounded-xl'>
          <div className='w-full flex flex-col gap-4 py-4 justify-between h-full'>
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
                    20 days, 20 minutes daily. Gain a solid foundation with
                    eight hours of content, activities, and cheat sheets.
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
      </div>
    </div>
  );
};

export default MobileMenuCoursesCallout;
