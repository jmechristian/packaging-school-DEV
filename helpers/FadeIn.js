import React, { useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const FadeIn = ({ children, delay }) => {
  const textRef = useRef();
  const inView = useInView(textRef);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={textRef}
      transition={{ duration: 0.5, delay: delay ? delay : 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
