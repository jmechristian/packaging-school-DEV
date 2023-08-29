import React from 'react';
import Timestamp from '../shared/Timestamp';
import VideoHeading from './VideoHeading';
import NextLesson from '../shared/NextLesson';

const VideoBody = ({
  content,
  title,
  id,
  objectives,
  quiz,
  nextLesson,
  nextLessonLink,
}) => {
  return (
    <>
      <VideoHeading title={title} quiz={quiz} id={id} />
      <div className='w-full h-full pb-24'>
        <div className='relative px-6 lg:px-8 py-20 space-y-12'>
          <div className='mx-auto max-w-prose text-lg'>
            {/* <div className='flex gap-2 items-center'>
              <h1>
                <span className='mt-2 block text-3xl font-bold leading-8 tracking-tight dark:text-white sm:text-4xl'>
                  Introduction
                </span>
              </h1>
              <Timestamp time='00:00' />
            </div> */}
            {content}
            {/* <p className='mt-8 text-xl leading-8 dark:text-white'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget.
            </p>
            <p className='mt-8 text-xl leading-8 prose prose-blue dark:text-white'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh <a href='#'>egestas fringilla</a> dui,
              diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam
              nulla orci at in viverra scelerisque eget. Eleifend egestas
              fringilla sapien.
            </p> */}
          </div>
          {/* <div className='mx-auto max-w-prose text-lg'>
            <div className='flex gap-2 items-center'>
              <h1>
                <span className='mt-2 block text-3xl font-bold leading-8 tracking-tight dark:text-white sm:text-4xl'>
                  Define Carbon Neutrality
                </span>
              </h1>
              <Timestamp time='01:10' />
            </div>
            <p className='mt-8 text-xl leading-8 dark:text-white'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <p className='mt-8 text-xl leading-8 dark:text-white prose prose-blue'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, <a href='#'>egestas fringilla</a> nibh dui,
              diam eget aliquam. Quisque id at vitae feugiat egestas ac.
            </p>
            <p className='mt-8 text-xl leading-8 dark:text-white prose prose-blue'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend <a href='#'>egestas fringilla</a>{' '}
              sapien. Quisque id at vitae feugiat egestas ac. Diam nulla orci at
              in viverra scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <figure className='py-12'>
              <img
                className='w-full rounded-lg'
                src='https://res.cloudinary.com/jmechristian/image/upload/v1675785204/IV_Clean_LM_carbon_footprint_uuctdm.jpg'
                alt=''
                width={1310}
                height={873}
              />
              <figcaption className='text-xs dark:text-white/50'>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
              </figcaption>
            </figure>
            <p className='mt-8 text-xl leading-8 dark:text-white'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
          </div>
          <div className='mx-auto max-w-prose text-lg'>
            <div className='flex gap-2 items-center'>
              <h1>
                <span className='mt-2 block text-3xl font-bold leading-8 tracking-tight dark:text-white sm:text-4xl'>
                  Examine carbon credits and offsets
                </span>
              </h1>
              <Timestamp time='03:34' />
            </div>
            <p className='mt-8 text-xl leading-8 dark:text-white'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <p className='mt-8 text-xl leading-8 dark:text-white prose prose-blue'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, <a href='#'>egestas fringilla</a> nibh dui,
              diam eget aliquam. Quisque id at vitae feugiat egestas ac.
            </p>
            <p className='mt-8 text-xl leading-8 dark:text-white prose prose-blue'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend <a href='#'>egestas fringilla</a>{' '}
              sapien. Quisque id at vitae feugiat egestas ac. Diam nulla orci at
              in viverra scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <figure className='py-12'>
              <img
                className='w-full rounded-lg'
                src='https://images.unsplash.com/photo-1588842692531-3a6ef58678e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                alt=''
                width={1310}
                height={873}
              />
              <figcaption className='text-xs dark:text-white/50'>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
              </figcaption>
            </figure>
            <p className='mt-8 text-xl leading-8 dark:text-white'>
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
          </div> */}
        </div>
        <NextLesson nextLesson={nextLesson} nextLessonLink={nextLessonLink} />
      </div>
    </>
  );
};

export default VideoBody;
