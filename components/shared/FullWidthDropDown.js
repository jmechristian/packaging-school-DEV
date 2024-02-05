import React, { useState } from 'react';
import * as Icons from '@heroicons/react/24/solid';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const FullWidthDropDown = ({
  bgdark,
  bg,
  Icon,
  title,
  content,
  highlight,
  bgContent,
  cash,
  open,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [isTooltip, setTooltip] = useState('');

  return (
    <motion.div className={`w-full ${bg} rounded-xl flex flex-col`}>
      <motion.div
        className={`w-full transition-all ease-in duration-200 flex justify-between rounded-t-xl py-6 px-6 cursor-pointer ${
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
          <motion.div className='w-full flex gap-1 items-start'>
            <motion.div className='text-white font-semibold tracking-tight text-xl md:text-2xl capitalize leading-tight'>
              {title}
            </motion.div>
            {cash && (
              <motion.div
                className='w-5 h-5 rounded-full relative'
                onMouseEnter={() => setTooltip('Purchase Required')}
                onMouseLeave={() => setTooltip('')}
              >
                {isTooltip && (
                  <AnimatePresence>
                    <motion.div
                      className='ease-in absolute bottom-full px-2 py-0.5 rounded-lg text-sm bg-neutral-900 text-white whitespace-nowrap w-fit z-10 mb-1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={isTooltip}
                    >
                      {isTooltip}
                    </motion.div>
                  </AnimatePresence>
                )}
                <Icons.CurrencyDollarIcon className='w-5 h-5 fill-green-700 bg-white rounded-full' />
              </motion.div>
            )}
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
              className={`${bgContent} rounded-b-xl`}
            >
              <motion.div
                className={`px-6 w-full my-9 h-full`}
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

export default FullWidthDropDown;
