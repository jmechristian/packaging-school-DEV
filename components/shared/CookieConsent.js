import React from 'react';
import { hasCookie, setCookie } from 'cookies-next';

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  const declineCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'false', {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className='fixed z-[210]'>
      <div className='fixed bottom-0 left-0 right-0 flex md:flex-row flex-col gap-6 md:items-center justify-between px-4 md:px-12 py-8 bg-base-dark'>
        <span className='text-white font-medium text-base mr-16 max-w-6xl'>
          We use cookies to enhance your browsing experience and analyze site
          traffic. By continuing to use our website, you consent to the use of
          cookies. No information will be used for marketing purposes without
          your direct request for it. For more information, please review our{' '}
          <a href='https://library.packagingschool.com/articles/privacy-policy'>
            Privacy Policy
          </a>
          .
        </span>
        <div className='w-fit flex gap-6 items-center'>
          <button
            className='bg-brand-yellow py-3 px-8 rounded text-neutral-900 font-bold'
            onClick={() => acceptCookie()}
          >
            Accept
          </button>
          <div
            className='text-white/80 cursor-pointer'
            onClick={() => declineCookie()}
          >
            Decline
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
