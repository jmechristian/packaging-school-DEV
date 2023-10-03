import React from 'react';
import LearningObjectives from './LearningObjectives';

const LessonsContent = ({ content, objectives }) => {
  return (
    <div className='relative overflow-hidden bg-white dark:bg-dark-dark'>
      <div className='relative px-6 lg:px-8 max-w-3xl mx-auto'>
        <div className='prose prose-lg md:prose-xl prose-orange dark:prose-orange mx-auto text-slate-700 dark:text-white/90 flex flex-col gap-6'>
          {objectives && (
            <div className='md:pb-6'>
              <LearningObjectives objectives={objectives} />
            </div>
          )}
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className='bad-html text-lg max-w-prose mx-auto'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LessonsContent;
