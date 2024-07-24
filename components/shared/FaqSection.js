import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { AnimatePresence, motion } from 'framer-motion';
import { MdAdd, MdHorizontalRule } from 'react-icons/md';

const FaqSection = ({ title, type, faqs, open }) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex justify-between items-center  bg-black w-full px-3 py-4'>
        <div className='flex items-center gap-3'>
          <h3 className='h3-base text-white'>{title}</h3>
          <div className='bg-base-brand text-sm text-white font-medium px-2 py-1'>
            {faqs.filter((it) => it.type === `${type}`).length} Questions
          </div>
        </div>
        <div
          className='w-10 h-10 flex items-center justify-center'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdHorizontalRule color='yellow' size={36} />
          ) : (
            <MdAdd color='yellow' size={36} />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen &&
          faqs
            .sort((a, b) => a.order - b.order)
            .filter((it) => it.type === `${type}`)
            .map((itm) => (
              <div key={itm.id}>
                <FAQItem title={itm.question}>
                  <div
                    className='text-neutral-700 faqs text-lg'
                    dangerouslySetInnerHTML={{ __html: itm.answer }}
                  ></div>
                </FAQItem>
              </div>
            ))}
      </AnimatePresence>
    </div>
  );
};

export default FaqSection;
