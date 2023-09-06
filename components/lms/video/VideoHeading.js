import React from 'react';
import {
  BoltIcon,
  CheckCircleIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const VideoHeading = ({
  id,
  title,
  quiz,
  nextLesson,
  nextLessonLink,
  download,
  downloadCopy,
}) => {
  const router = useRouter();
  return (
    <div className='relative w-full'>
      <div className='bg-base-mid max-w-6xl w-full mx-auto rounded-b-lg'>
        <div className='grid md:grid-cols-2'>
          <div className='px-12 py-20 flex flex-col'>
            <div className='bg-clemson w-fit px-2.5 py-1 rounded-lg mb-1'>
              <h4 className='text-white font-greycliff'>{id}</h4>
            </div>
            <div>
              <h2 className='text-white font-greycliff font-bold text-5xl'>
                {title}
              </h2>
            </div>
            {/* <div className='mt-9 font-greycliff text-white text-xl'>
              <h4 className='font-semibold'>Learning Objectives</h4>
              <ol className='mt-4 space-y-2'>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>Define carbon neutrality</div>
                  <Timestamp time='01:10' />
                </li>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>
                    Examine carbon credits and offsets
                  </div>
                  <Timestamp time='03:34' />
                </li>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>Summarize carbon trading</div>
                  <Timestamp time='06:17' />
                </li>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>
                    Discuss examples of carbon offset in the industry
                  </div>
                  <Timestamp time='08:57' />
                </li>
              </ol>
            </div> */}
          </div>
          <div className='py-20 px-12 bg-base-dark rounded-l-xl rounded-br-lg flex flex-col gap-16'>
            {quiz && (
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                  <div>
                    <BoltIcon className='fill-white h-5 w-5' />
                  </div>
                  <div>
                    <h3 className='text-white font-greycliff font-semibold text-xl'>
                      Knowledge Challenge
                    </h3>
                  </div>
                </div>
                <div className='text-base-dark bg-white shadow-2xl w-fit px-6 py-3 rounded-lg font-bold font-greycliff'>
                  Take the Quiz
                </div>
              </div>
            )}
            <div
              className='flex flex-col gap-3 cursor-pointer'
              onClick={() => {
                router.push(
                  `/curriculum/cps/cps-12/branding-basics/${nextLessonLink}`
                );
              }}
            >
              <div className='flex gap-2 items-center'>
                <div>
                  <h3 className='text-white font-greycliff font-semibold text-xl'>
                    Next Lesson: {nextLesson}
                  </h3>
                </div>
              </div>
              <div className='text-white bg-white/40 flex gap-2 shadow-2xl w-fit px-6 py-3 rounded-lg font-bold font-greycliff'>
                {/* <div>
                  <LockClosedIcon className='w-5 h-5 fill-white/60' />
                </div> */}
                <div>Complete & Continue</div>
              </div>
            </div>
            {download && (
              <div
                className='flex gap-3 cursor-pointer'
                onClick={() => {
                  window.open(`${download}`, '_blank');
                }}
              >
                <div className='flex gap-2 items-center'>
                  <div>
                    <h3 className='text-white font-greycliff font-semibold text-xl'>
                      {downloadCopy}
                    </h3>
                  </div>
                </div>
                <div>
                  <ArrowDownCircleIcon className='w-7 h-7 fill-white/60' />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHeading;
