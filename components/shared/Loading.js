import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Lottie from 'lottie-react';
import loadingAnimation from '../../loading.json';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from '../../helpers/FadeIn';

const Loading = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <AnimatePresence mode='wait' initial={false}>
      {loading && (
        <motion.div
          className='fixed inset-0 z-[200] bg-base-mid dark:bg-dark-mid flex flex-col gap-12 justify-center items-center'
          initial={{ x: '100%' }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%' }}
          transition={{
            type: 'spring',
            velocity: 3,
            bounce: 0,
          }}
        >
          <motion.div
            className='rounded-full bg-base-brand h-[33%] md:h-[50%] aspect-1 bg-cover bg-center opacity-70 shadow-xl relative'
            style={{ backgroundImage: `url('/images/sky.jpg')` }}
          >
            <FadeIn>
              <Lottie animationData={loadingAnimation} loop={true} />
            </FadeIn>
          </motion.div>
          <motion.div className='font-semibold text-xl md:text-4xl text-white'>
            Knowledge <span className='italic'>Inbound...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Loading;
