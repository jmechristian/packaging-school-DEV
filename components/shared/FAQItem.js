import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

const FAQItem = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className='border-b-[1px] border-b-slate-300'
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='flex w-full items-center justify-between gap-4 py-6 px-4 lg:px-0'
      >
        <motion.span
          variants={{
            open: {
              color: 'rgba(3, 6, 23, 0)',
            },
            closed: {
              color: 'rgba(3, 6, 23, 1)',
            },
          }}
          className='bg-clemson bg-clip-text text-left h4-base'
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: '180deg',
              color: 'rgb(124 58 237)',
            },
            closed: {
              rotate: '0deg',
              color: '#030617',
            },
          }}
        >
          <FiChevronDown className='text-2xl' />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className='overflow-hidden text-slate-600'
      >
        <div ref={ref} className='max-w-5xl px-4 lg:px-0 text-sm md:text-base'>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
export default FAQItem;
