import React from 'react';
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import Timestamp from '../shared/Timestamp';

const VideoHeading = ({ id, title, quiz }) => {
  return (
    <div className='relative w-full'>
      <div className='bg-base-mid max-w-6xl w-full mx-auto rounded-b-lg'>
        <div className='grid grid-cols-2'>
          <div className='px-12 py-16 flex flex-col'>
            <div className='bg-clemson w-fit px-2.5 py-1 rounded-lg mb-1'>
              <h4 className='text-white font-greycliff'>{id}</h4>
            </div>
            <div>
              <h2 className='text-white font-greycliff font-bold text-5xl'>
                {title}
              </h2>
            </div>
            <div className='mt-9 font-greycliff text-white text-xl'>
              <h4 className='font-semibold'>Learning Objectives</h4>
              <ol className='mt-4 space-y-2'>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>Define carbon neutrality</div>
                  {/* <Timestamp time='01:10' /> */}
                </li>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>
                    Examine carbon credits and offsets
                  </div>
                  {/* <Timestamp time='03:34' /> */}
                </li>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>Summarize carbon trading</div>
                  {/* <Timestamp time='06:17' /> */}
                </li>
                <li className='text-base flex gap-2'>
                  <div>
                    <CheckCircleIcon className='fill-white/50 w-6 h-6' />
                  </div>
                  <div className='font-roboto'>
                    Discuss examples of carbon offset in the industry
                  </div>
                  {/* <Timestamp time='08:57' /> */}
                </li>
              </ol>
            </div>
          </div>
          <div className='py-16 px-12 bg-base-dark rounded-l-xl rounded-br-lg flex flex-col gap-10'>
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
            {/* <div className='flex flex-col gap-3'>
              <div className='flex gap-2 items-center'>
                <div>
                  <ChatBubbleLeftRightIcon className='fill-white h-5 w-5' />
                </div>
                <div>
                  <h3 className='text-white font-greycliff font-semibold text-xl'>
                    Join The Conversation
                  </h3>
                </div>
              </div>
              <div className='text-white bg-white/40 shadow-2xl w-fit px-6 py-3 rounded-lg font-bold font-greycliff'>
                PackChat
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHeading;
