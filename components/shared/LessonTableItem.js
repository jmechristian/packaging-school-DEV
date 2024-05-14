import React, { useState, useEffect, useMemo } from 'react';
import { API } from 'aws-amplify';
import { getAuthor } from '../../src/graphql/queries';

const AuthorName = ({ id }) => {
  const [isName, setIsName] = useState('');

  useEffect(() => {
    const getName = async () => {
      const author = await API.graphql({
        query: getAuthor,
        variables: { id: id },
      });
      setIsName(author.data.getAuthor.name);
    };

    id && getName();
  }, [id]);

  return <div className='text-sm'>{isName}</div>;
};

const LessonTableItem = ({ less }) => {
  return (
    <div
      key={less.id}
      className='w-full grid grid-cols-12 border-2 border-black  overflow-hidden content-center max-h-[160px]'
    >
      <div className='col-span-2 h-full max-w-full'>
        <div className='flex flex-col w-full items-end'>
          <div className='aspect-[16/9] w-full'>
            <div
              className='bg-cover bg-center w-full h-full'
              style={{ backgroundImage: `url('${less.seoImage}')` }}
            ></div>
          </div>
          <div className='bg-black h-12 w-full'></div>
        </div>
      </div>
      <div className='col-span-4 content-center p-5'>
        <div className='flex flex-col'>
          <div className='h4-base'>{less.title}</div>
          <div className='flex gap-1.5'>
            {less.author.map((auth) => (
              <AuthorName key={auth} id={auth} />
            ))}
          </div>
        </div>
      </div>

      <div
        className='col-span-6 content-center m-5 overflow-scroll max-h-[120px]'
        id='scrollers'
      >
        <div className='flex flex-col'>
          <div className='text-sm'>{less.subhead}</div>
        </div>
      </div>
    </div>
  );
};

export default LessonTableItem;
