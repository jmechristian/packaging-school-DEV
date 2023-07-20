import { useRef } from 'react';
import Scroller from '../Scroller';
import SavedCourse from './SavedCourse';
import Link from 'next/link';
import SavedContentCard from '../shared/SavedContentCard';
import { useSelector } from 'react-redux';
import SavedArticleCard from '../shared/SavedArticleCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileStats({ user }) {
  const scrollRef = useRef();
  const { allArticles, allLessons } = useSelector(
    (state) => state.course_filter
  );
  return (
    <div className='md:px-16 pb-16 flex flex-col gap-16'>
      <div>
        <h3 className='text-lg font-bold leading-6 text-gray-900 font-greycliff mb-6 px-6 md:px-0'>
          Your Saved Courses
        </h3>
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {user && user.savedCourses && user.savedCourses.length > 0 ? (
            user.savedCourses.map((it, i) => (
              <div key={i} className='h-full'>
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
        <div className='md:hidden relative w-full h-full'>
          <div className='absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l  from-slate-100' />
          <Scroller rows='2' scroll={scrollRef}>
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
          </Scroller>
        </div>
      </div>
      <div>
        <h3 className='text-lg font-bold leading-6 text-gray-900 font-greycliff px-6 lg:px-0 mb-6'>
          Your Saved Lessons
        </h3>
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3  gap-3'>
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

          {user && user.savedLessons && user.savedLessons.length === 0 && (
            <div className='text-gray-500'>
              No lessons saved,{' '}
              <Link href={'/library'}>
                <a className='font-semibold'>start browsing.</a>
              </Link>
            </div>
          )}
        </div>
        <div className='md:hidden relative w-full h-full'>
          <div className='absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l  from-slate-100' />
          <Scroller rows='2' scroll={scrollRef}>
            {user && user.savedLessons && user.savedLessons.length > 0 ? (
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
                ))
            ) : (
              <div className='text-gray-500'>
                No lessons saved,{' '}
                <Link href={'/library'}>
                  <a className='font-semibold'>start browsing.</a>
                </Link>
              </div>
            )}
          </Scroller>
        </div>
      </div>
      <div>
        <h3 className='text-lg font-bold leading-6 text-gray-900 font-greycliff mb-6'>
          Your Saved Articles
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {user &&
            user.savedArticles &&
            allArticles &&
            allArticles
              .filter((les) => user.savedArticles.includes(les.id))
              .map((it, i) => (
                <div key={i} className='w-full h-full'>
                  <SavedArticleCard
                    id={it.id}
                    title={it.title}
                    desc={it.subhead}
                    slug={`/articles/${it.slug}`}
                  />
                </div>
              ))}

          {user && user.savedArticles && user.savedArticles.length === 0 && (
            <div className='text-gray-500'>
              No articles saved,{' '}
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
