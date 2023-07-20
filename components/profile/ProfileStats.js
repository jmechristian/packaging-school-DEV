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
import Link from 'next/link';
import SavedContentCard from '../shared/SavedContentCard';
import { useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileStats({ user }) {
  const { allLessons } = useSelector((state) => state.course_filter);
  return (
    <div className='px-6 md:px-16 pb-16 flex flex-col gap-16'>
      <div>
        <h3 className='text-lg font-bold leading-6 text-gray-900 font-greycliff mb-6'>
          Your Saved Courses
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {user && user.savedCourses && user.savedCourses.length > 0 ? (
            user.savedCourses.map((it, i) => (
              <div key={i}>
                <SavedCourse courseId={it} savedCourse={user?.savedCourses} />
              </div>
            ))
          ) : (
            <div className='text-gray-500'>
              No courses saved,{' '}
              <Link href={'/all_courses'}>
                <a className='font-semibold'>start browsing.</a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className='text-lg font-bold leading-6 text-gray-900 font-greycliff mb-6'>
          Your Saved Lessons
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {user &&
            user.savedLessons &&
            allLessons &&
            allLessons
              .filter((les) => user.savedLessons.includes(les.id))
              .map((it, i) => (
                <div key={i} className='w-full h-full'>
                  <SavedContentCard
                    id={it.id}
                    title={it.title}
                    desc={it.subhead}
                    slug={`/lessons/${it.slug}`}
                  />
                </div>
              ))}

          {user && user.savedCourses && user.savedCourses.length === 0 && (
            <div className='text-gray-500'>
              No lessons saved,{' '}
              <Link href={'/library'}>
                <a className='font-semibold'>start browsing.</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
