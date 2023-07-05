import React, { useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const FadeIn = ({ children }) => {
  const textRef = useRef();
  const inView = useInView(textRef);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        ref={textRef}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
