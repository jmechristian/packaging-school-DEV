import React, { useState } from 'react';
import * as Icons from '@heroicons/react/24/solid';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const UnileverHeader = ({ Icon }) => {
  return (
    <motion.div
      className={`w-full bg-gradient-to-br from-unilever-blue via-unilever-blue to-unilever-lightblue rounded-lg flex flex-col`}
    >
      <motion.div
        className={`w-full transition-all ease-in duration-200 flex justify-between rounded-t-lg py-6 px-6 cursor-pointer ${
          isOpen ? bgdark : bg
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className='flex items-center gap-2'>
          <motion.div
            className={`w-9 h-9 flex justify-center items-center ${highlight} rounded-full shadow`}
          >
            <Icon className={`stroke-white w-6 h-6 transition-all ease-in`} />
          </motion.div>
          <motion.div className='text-white font-semibold tracking-tight text-2xl capitalize leading-tight'>
            {title}
          </motion.div>
        </motion.div>
        <motion.div className='text-white'>
          <ChevronRightIcon
            className={
              isOpen
                ? 'rotate-90 transform transition-all w-7 md:w-9 h-7 md:h-9 ease-out duration-200'
                : 'w-7 md:w-9 h-7 md:h-9'
            }
          />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        <LayoutGroup>
          {isOpen && (
            <motion.section
              key={isOpen}
              layout
              initial='collapsed'
              animate='open'
              exit='collapsed'
              variants={{
                open: { height: 'auto' },
                collapsed: { height: 0 },
              }}
              transition={{
                duration: 0.3,
                delayChildren: 1,
              }}
              className={`${bgContent} rounded-b-lg`}
            >
              <motion.div
                className={`px-6 w-full mt-9`}
                layout
                key={isOpen}
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1 },
                  collapsed: { opacity: 0 },
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: 'easeInOut',
                }}
              >
                {content}
              </motion.div>
            </motion.section>
          )}
        </LayoutGroup>
      </AnimatePresence>
    </motion.div>
  );
};

export default UnileverHeader;
