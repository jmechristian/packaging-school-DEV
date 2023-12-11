import React, { useState } from 'react';
import {
  ArrowLongRightIcon,
  EnvelopeIcon,
  CakeIcon,
} from '@heroicons/react/24/outline';
import DoctorForm from './DoctorForm';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const CertMegaCallout = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className='rounded-lg relative'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='absolute left-0 right-0 z-30 w-full h-full bg-gray-200 dark:bg-dark-mid shadow-lg rounded-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DoctorForm close={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className='flex flex-col gap-4 p-1 md:p-4'>
        <div
          className='w-full aspect-[4/3] bg-cover bg-center rounded-xl relative cursor-pointer'
          style={{
            backgroundImage: `url('https://packschool.s3.amazonaws.com/JULIE-2018-sm.jpg')`,
          }}
        >
          <div className='w-full h-full bg-gradient-to-t from-black/80  rounded-b-xl absolute inset-0 z-[10]'></div>
          <div className='flex flex-col justify-between w-full h-full absolute inset-0 z-[20]'>
            <div className='w-fit py-2 text-sm font-semibold px-3 text-white bg-clemson rounded-xl mt-2 ml-2'>
              The Doctor is In!
            </div>
            <div className='flex flex-col gap-1 p-3 leading-tight'>
              <div className='font-bold text-2xl text-white'>
                Questions about Certifications?
              </div>
              <div className='text-white'>
                Reach out to Dr. Julie Suggs for a personalized consultation for
                yourself or your team.
              </div>
            </div>
          </div>
        </div>
        <div
          className='w-full rounded-xl bg-base-mid shadow-xl cursor-pointer group hover:bg-base-dark transition-colors ease-in'
          onClick={() => {
            onClose();
            router.push('/food-packaging');
          }}
        >
          <div className='px-4 py-4 w-full h-full flex items-center'>
            <div className='w-full flex justify-between items-center'>
              <div className='col-span-1'>
                <CakeIcon className='w-12 h-12 stroke-white/40 group-hover:stroke-clemson group-hover:scale-110 transition-all ease-in' />
              </div>
              <div className='col-span-4'>
                <div className='font-medium text-white text-lg leading-tight'>
                  Food Packaging
                  <br /> Certificate
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-2'>
          <div className='font-bold w-full dark:text-gray-200 text-slate-900 border-b border-b-slate-400 pb-2 font-greycliff'>
            Not Sure Where to Start?
          </div>
          <div
            className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2 cursor-pointer'
            onClick={() => {
              router.push('/certifications');
              close();
            }}
          >
            <div className='text-sm text-slate-700 dark:text-gray-500'>
              Compare Certificates
            </div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div>
          {/* <div className='flex gap-2 justify-between items-center border-b border-b-slate-400 pb-2'>
            <div className='text-sm text-slate-700 dark:text-gray-500'>
              Take our Skills Assessment
            </div>
            <div>
              <ArrowLongRightIcon className='h-5 w-5 stroke-slate-700' />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CertMegaCallout;
