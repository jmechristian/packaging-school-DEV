import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate, useScroll } from 'framer-motion';
import Scroller from '../Scroller';
import CourseCard from '../course-card/CourseCard';
import { useSelector } from 'react-redux';
import LMSCourseCard from '../shared/LMSCourseCard';

const RelatedCourses = ({ category, id }) => {
  const desktopRef = useRef();
  const scrollRef = useRef();
  const [width, setWidth] = useState(0);
  const [isRelated, setIsRelated] = useState(null);

  const { allCourses } = useSelector((state) => state.course_filter);
  const { user } = useSelector((state) => state.auth);

  const dragX = useMotionValue(0);

  useEffect(() => {
    allCourses &&
      setIsRelated(
        allCourses.filter((c) => c.category === category && c.id != id)
      );

    setWidth(desktopRef.current.offsetWidth - desktopRef.current.scrollWidth);
  }, [allCourses, category, id]);

  const resetDrag = () => {
    animate(dragX, 0);
  };

  const resetScroll = () => {
    scrollRef.current.scrollTo(0, 0);
    console.log(scrollRef.current);
  };

  return (
    <div className='overflow-hidden' ref={desktopRef}>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container-7xl gap-4'>
        {isRelated &&
          isRelated.slice(0, 8).map((course, i) => (
            <div key={course.id} className='inline-block'>
              <LMSCourseCard id={course.id} courses={isRelated} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
