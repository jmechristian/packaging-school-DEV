import React, { useState } from 'react';
import * as Icons from '@heroicons/react/24/solid';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import {
  BoltIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { MdArrowDropDown } from 'react-icons/md';
import BrutalIcon from '../shared/BrutalIcon';

const CustomerDropdown = ({
  bgdark,
  bg,
  icon,
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
    <motion.div
      className={`w-full ${bg} flex flex-col transition-all border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.20)]`}
    >
      <motion.div
        className={`w-full transition-all ease-in duration-200 flex justify-between py-7 px-6 cursor-pointer ${
          isOpen ? bgdark : bg
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className='flex items-center gap-2 w-full'>
          <BrutalIcon bgColor={highlight}>{icon}</BrutalIcon>
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
        <motion.div className='bg-white border border-black w-9 h-9  flex justify-center items-center'>
          <div
            className={`${
              isOpen ? 'rotate-180' : 'rotate-0'
            } transition-all ease-in`}
          >
            <MdArrowDropDown size={28} color='black' />
          </div>
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
              className={`${bgContent} border-t-2 border-t-black`}
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

export default CustomerDropdown;
