import { useState, useContext } from 'react';
import ModalWrapper from '../shared/ModalWrapper';
import { LessonContext } from '../../pages/lessons/[id]';
import { LockOpenIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toggleSignInModal } from '../../features/layout/layoutSlice';

/* This example requires Tailwind CSS v3.0+ */
export default function LessonActivity({
  actionCTA,
  actionSubhead,
  actionLink,
  actionExample,
  actionTitle,
  lessonTitle,
  name,
  mediaType,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { unlocked } = useContext(LessonContext);

  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const actionClickHandler = (e) => {
    e.preventDefault();
    // resourceRefHandler(e, lessonTitle);
    // gtag('event', 'resource_click', {
    //   resource: 'action_button',
    //   lesson: lessonTitle,
    // });
    if (user) {
      window.open(actionLink, '_blank');
    } else {
      dispatch(toggleSignInModal());
    }
  };

  const closeModal = () => setIsOpen(false);
  return (
    <>
      <ModalWrapper
        open={isOpen}
        close={closeModal}
        title={actionTitle}
        actionExample={actionExample}
        actionLink={actionLink}
        lessonTitle={lessonTitle}
      />
      <div className='bg-base-dark dark:dark-mid max-w-7xl mx-auto rounded-b-xl'>
        <div className='mx-auto max-w-prose lg:max-w-5xl px-8 py-20 lg:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
          <div className='text-left  max-w-2xl '>
            <h2 className='text-xl font-semibold text-clemson  max-3-3xl'>
              Take Action
            </h2>
            <p className='mt-1 text-4xl font-greycliff font-bold tracking-tight text-white sm:text-5xl'>
              {actionCTA}
            </p>
            <p className='mt-5 text-lg md:text-xl text-white/70'>
              {actionSubhead}
            </p>
          </div>
          {mediaType === 'SLIDES' ? (
            <div className='mt-8 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
              {unlocked ? (
                <button
                  className='rounded-md cursor-pointer bg-clemson px-6 py-3 text-lg lg:text-2xl font-semibold leading-7 text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson-dark'
                  data-click-target='resource'
                  data-click-name={name}
                  onClick={(event) => actionClickHandler(event)}
                  target='_blank'
                  rel='noReferrer'
                >
                  <div className='flex gap-2 items-center h-full'>
                    <div className='h-full'>Download</div>
                    <div className='w-10 h-10 rounded-full bg-clemson-dark/60 flex justify-center items-center'>
                      <LockOpenIcon className='w-5 h-5 fill-white/50' />
                    </div>
                  </div>
                </button>
              ) : (
                <div className='flex flex-col gap-2'>
                  <button
                    className='rounded-md cursor-pointer bg-clemson px-6 py-3 text-lg lg:text-2xl font-semibold leading-7 text-white shadow-sm hover:bg-clemson-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clemson-dark'
                    data-click-target='resource'
                    data-click-name={name}
                    onClick={(event) => actionClickHandler(event)}
                    target='_blank'
                    rel='noReferrer'
                    disabled
                  >
                    <div className='flex gap-3 items-center h-full'>
                      <div className='h-full'>Unlock</div>
                      <div className='w-10 h-10 rounded-full bg-clemson-dark/60 flex justify-center items-center'>
                        <LockClosedIcon className='w-5 h-5 fill-white/50' />
                      </div>
                    </div>
                  </button>
                  <div className='text-sm text-white/70'>
                    Complete slide deck to unlock
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='mt-8 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
              <button
                className='rounded-md cursor-pointer bg-clemson px-6 py-3 text-lg lg:text-2xl font-semibold leading-7 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
                data-click-target='resource'
                data-click-name={name}
                onClick={(event) => actionClickHandler(event)}
                target='_blank'
                rel='noReferrer'
              >
                <div className='flex gap-2 items-center'>
                  <div>
                    {user ? (
                      <LockOpenIcon className='w-5 h-5 fill-white' />
                    ) : (
                      <LockClosedIcon className='w-5 h-5 fill-white' />
                    )}
                  </div>
                  <div>Download</div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
