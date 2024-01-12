import React from 'react';
import CardThree from '../../../components/cards/CardThree';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  return (
    <div className='w-full h-full flex items-center justify-center min-h-[600px]'>
      <AnimatePresence>
        {router.query.id && (
          <motion.div
            initial={{ opacity: 0 }}
            layoutId={router.query.id}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={router.query.id}
          >
            <CardThree id={router.query.id} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
