import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate, useScroll } from 'framer-motion';
import Scroller from '../Scroller';
import CourseCard from '../course-card/CourseCard';

const RelatedCourses = ({ related }) => {
  const desktopRef = useRef();
  const scrollRef = useRef();
  const [width, setWidth] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    setWidth(desktopRef.current.offsetWidth - desktopRef.current.scrollWidth);
  }, []);

  const resetDrag = () => {
    animate(dragX, 0);
  };

  const resetScroll = () => {
    scrollRef.current.scrollTo(0, 0);
    console.log(scrollRef.current);
  };

  return (
    <div className='overflow-hidden' ref={desktopRef}>
      <div className='mt-6 auto-cols-min lg:hidden'>
        <Scroller rows='1' scroll={scrollRef}>
          {related &&
            related.map((course, i) => (
              <div
                className='inline-block'
                key={course.related.data.course_title[0].text}
              >
                <CourseCard
                  title={course.related.data.course_title[0].text}
                  desc={course.related.data.course_subtitle[0].text}
                  video={course.related.data.embed_id}
                  hours={course.related.data.course_hours}
                  lessons={course.related.data.course_lessons}
                  price={course.related.data.course_price}
                  slug={course.related.uid}
                  reset={resetScroll}
                />
              </div>
            ))}
        </Scroller>
      </div>
      <motion.div
        className='hidden lg:grid grid-flow-col auto-cols-max gap-6 px-16 2xl:px-56 py-6'
        drag='x'
        dragConstraints={{ right: 0, left: width, top: 0, bottom: 0 }}
        style={{ x: dragX }}
      >
        {related &&
          related.map((course, i) => (
            <motion.div
              className='w-72'
              key={course.related.data.course_title[0].text}
            >
              <CourseCard
                title={course.related.data.course_title[0].text}
                desc={course.related.data.course_subtitle[0].text}
                video={course.related.data.embed_id}
                hours={course.related.data.course_hours}
                lessons={course.related.data.course_lessons}
                price={course.related.data.course_price}
                slug={course.related.uid}
                reset={resetDrag}
              />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default RelatedCourses;
