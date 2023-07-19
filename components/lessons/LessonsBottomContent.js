import React, { useRef } from 'react';
import { resourceRefHandler } from '../Util/ResourceClickGTAG';

const LessonsBottomContent = () => {
  const resourceRef = useRef(null);

  return (
    <div className='relative overflow-hidden bg-white'>
      <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]'>
        <div
          className='relative mx-auto h-full max-w-prose text-lg'
          aria-hidden='true'
        >
          <svg
            className='absolute top-12 left-full translate-x-32 transform'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-slate-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
            />
          </svg>
          <svg
            className='absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-slate-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
        </div>
      </div>
      <div className='relative px-6 lg:px-8 lg:py-16'>
        <div className='prose prose-lg prose-orange mx-auto text-slate-500'>
          <h3>Optimize Your Sustainability Packaging Process</h3>
          <p>
            For a deeper dive into sustainability as it relates to packaging and
            ways to reduce a company’s environmental footprint, look no further
            than our{' '}
            <a
              href='https://packagingschool.com/sustainable-packaging/'
              data-click-target='resource'
              data-click-name='sustainable_packaging_course'
              ref={resourceRef}
              onClick={(e) => resourceRefHandler(e)}
              target='_blank'
              rel='noReferrer'
            >
              <strong>sustainability course </strong>
            </a>{' '}
            containing over 4 hours of engaging content.
          </p>
          <p>
            While you are at it, check out our certificate programs,{' '}
            <a
              href='https://packagingschool.com/get-to-know-cps/'
              data-click-target='resource'
              data-click-name='cps'
              ref={resourceRef}
              onClick={(e) => resourceRefHandler(e)}
              target='_blank'
              rel='noReferrer'
            >
              <strong>Certificate of Packaging Science</strong>
            </a>{' '}
            and{' '}
            <a
              href='https://packagingschool.com/get-to-know-cmpm/'
              data-click-target='resource'
              data-click-name='cmpm'
              ref={resourceRef}
              onClick={(e) => resourceRefHandler(e)}
              target='_blank'
              rel='noReferrer'
            >
              <strong>Certificate of Mastery in Packaging Management</strong>
            </a>{' '}
            that cover this course and <br />
            much more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonsBottomContent;
