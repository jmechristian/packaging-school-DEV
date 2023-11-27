import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { SparklesIcon } from '@heroicons/react/24/outline';

import NewCouseCard from './NewCouseCard';
import ExpandSearch from './ExpandSearch';
import Loader from './Loader';

const CustomerCourses = ({ courses }) => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isSearchCourses, setIsSearchCourses] = useState('');

  const { allCourses } = useSelector((state) => state.course_filter);

  const initCourses = useMemo(() => {
    // Filter allCourses by a sorted by click count Courses array
    // const filtered = allCourses.filter((c) =>
    //   courses.find((s) => s.courseId === c.id)
    // );
    const filtered =
      courses &&
      courses.map((c) => {
        const matchedCourse =
          allCourses && allCourses.find((ac) => ac.id === c.courseId);
        return {
          ...c,
          ...matchedCourse,
          targetedId: c.id,
        };
      });
    return filtered;
  }, [courses, allCourses]);

  //   const coursesToShow = useMemo(() => {
  //     // Switch Suport Links to Filtered after we have that set
  //     return (
  //       initCourses &&
  //       initCourses
  //         .sort((a, b) => b.clicks - a.clicks)
  //         .filter(
  //           (o) =>
  //             o.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
  //             o.subheadline.toLowerCase().includes(isSearchTerm.toLowerCase())
  //         )
  //     );
  //   }, [initCourses, isSearchTerm]);

  return (
    <div className='max-w-7xl w-full mx-auto flex flex-col gap-6 mt-3'>
      <div className='flex justify-between items-center'>
        <div className='w-full font-bold lg:text-3xl text-base-dark'>
          ISBT<sup>&reg;</sup> Courses
        </div>
        <div>
          <ExpandSearch change={(val) => setIsSearchTerm(val)} />
        </div>
      </div>
      <div className='card-grid'>
        {allCourses && courses && initCourses ? (
          initCourses
            .sort((a, b) => b.clicks - a.clicks)
            .filter(
              (o) =>
                o.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
                o.subheadline.toLowerCase().includes(isSearchTerm.toLowerCase())
            )
            .map((link) => (
              <NewCouseCard
                key={link.id}
                title={link.title}
                description={link.subheadline}
                background={link.seoImage}
                link={link.link}
                link_text={'Select Course'}
                Icon={SparklesIcon}
                video={link.preview}
                courseId={link.id}
                clicks={link.clicks}
                targetedId={link.targetedId}
                tracked={true}
              />
            ))
        ) : (
          <div className='w-full flex justify-center items-center'>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerCourses;
