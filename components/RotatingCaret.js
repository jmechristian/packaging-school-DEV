import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

const RotatingCaret = ({ open, styling }) => {
  const iconVariants = {
    up: {
      transform: 'rotate(180deg)',
    },
    down: {
      transform: 'rotate(360deg)',
    },
  };

  return (
    <motion.div variants={iconVariants} animate={open ? 'up' : 'down'}>
      <ChevronDownIcon className={`${styling}`} />
    </motion.div>
  );
};

export default RotatingCaret;
