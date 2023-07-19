import React from 'react';

export function usePageVisibility() {
  const getBrowserVisibilityProp = () => {
    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      return 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      return 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      return 'webkitvisibilitychange';
    }
  };

  const getBrowserDocumentHiddenProp = () => {
    if (typeof document.hidden !== 'undefined') {
      return 'hidden';
    } else if (typeof document.msHidden !== 'undefined') {
      return 'msHidden';
    } else if (typeof document.webkitHidden !== 'undefined') {
      return 'webkitHidden';
    }
  };

  const [isVisible, setIsVisible] = React.useState('visible');

  React.useEffect(() => {
    const getIsDocumentHidden = () => {
      return !document[getBrowserDocumentHiddenProp()];
    };

    const visibilityChange = getBrowserVisibilityProp();
    const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());
    document.addEventListener(visibilityChange, onVisibilityChange, false);

    return () => {
      document.removeEventListener(visibilityChange, onVisibilityChange);
    };
  });

  return isVisible;
}
