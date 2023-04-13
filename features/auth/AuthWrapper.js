import React from 'react';
import LoginModule from './LoginModule';

const AuthWrapper = () => {
  return (
    <div className='fixed w-screen h-screen bg-black/80 backdrop-blur-sm z-50'>
      <LoginModule />
    </div>
  );
};

export default AuthWrapper;
