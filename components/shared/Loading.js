import React, { useState, useEffect } from 'react';
import Router from 'next/router';

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

  return loading ? (
    <div className='fixed inset-0 z-[200] bg-black flex justify-center items-center'>
      Loading
    </div>
  ) : (
    <></>
  );
};

export default Loading;
