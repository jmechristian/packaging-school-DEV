import React, { useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const FadeIn = ({ children, delay }) => {
  const textRef = useRef();
  const inView = useInView(textRef);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        ref={textRef}
        transition={{ duration: 0.5, delay: delay ? delay : 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
