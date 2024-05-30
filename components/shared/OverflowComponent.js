import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const OverflowComponent = ({ content, type }) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const parent = parentRef.current;
    const child = childRef.current;

    const checkOverflow = () => {
      if (parent && child) {
        setIsOverflowing(child.offsetHeight > parent.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(checkOverflow);

    if (parent) {
      resizeObserver.observe(parent);
    }
    if (child) {
      resizeObserver.observe(child);
    }

    // Initial check
    checkOverflow();

    return () => {
      if (parent) {
        resizeObserver.unobserve(parent);
      }
      if (child) {
        resizeObserver.unobserve(child);
      }
    };
  }, []);

  return (
    <div
      className={`col-span-5 flex content-center overflow-hidden overflow-ellipsis h-[120px] relative`}
      ref={parentRef}
    >
      <div className={`text-sm `} ref={childRef}>
        {content}
      </div>
    </div>
  );
};

export default OverflowComponent;
