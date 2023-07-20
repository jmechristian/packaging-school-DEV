import React from 'react';

const ArticleContent = ({ content }) => {
  return (
    <div className='relative overflow-hidden bg-white dark:bg-dark-dark'>
      <div className='relative px-6 lg:px-8 lg:pb-16'>
        <div className='prose prose-lg md:prose-xl prose-blockquote:text-base-mid prose-orange dark:prose-yellow mx-auto text-slate-500 dark:text-white/90'>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className='bad-html text-lg max-w-4xl mx-auto wp-content'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
