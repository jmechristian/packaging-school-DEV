import React, { useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import { createCMPMForm, updateUser } from '../../src/graphql/mutations';
import { useRouter } from 'next/router';

Amplify.configure(awsExports);
const FormStat = ({ stat, label, link, updated, userId }) => {
  const [isErrors, setIsError] = useState(null);
  const router = useRouter();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const newDate = new Date(updated).toLocaleString();

  const formCreateHandler = async () => {
    const res = await API.graphql({
      query: createCMPMForm,
      variables: { input: { id: userId, cMPMFormUserId: userId } },
    });
    if (res.data) {
      addCmpmToUser();
    } else {
      setIsError('Error creating new form.');
    }
  };

  const addCmpmToUser = async () => {
    const res = await API.graphql({
      query: updateUser,
      variables: { input: { id: userId, cmpmFormID: userId } },
    });
    if (res.data) {
      router.push(link);
    } else {
      setIsError('Error updating user.');
    }
  };

  return (
    <div className='flex flex-col' key={label}>
      <div className='px-6 py-5 text-center text-lg font-medium font-greycliff'>
        <span className='text-slate-100 font-bold text-sm'>
          {stat ? '1' : '0'}
        </span>{' '}
        <span className='text-slate-100 text-sm'>{label}</span>
      </div>
      <div className='flex flex-col gap-2 py-16 border-r border-r-slate-300 bg-slate-200 h-full justify-center items-center'>
        <div className='text-slate-700 text-sm'>
          {!updated ? (
            'No Applications Found'
          ) : (
            <div className='flex flex-col gap-1 items-center'>
              <div className='font-semibold'>Last Updated:</div>
              <div>{updated && newDate}</div>
            </div>
          )}
        </div>
        <div className='mt-5 flex justify-center sm:mt-0'>
          <button
            onClick={updated ? () => router.push(link) : formCreateHandler}
            className={`flex items-center justify-center rounded-md cursor-pointer ${
              !updated
                ? 'bg-clemson hover:bg-clemson-dark'
                : 'bg-base-brand hover:bg-base-mid'
            } text-white px-4 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-slate-300 font-greycliff`}
          >
            {updated ? 'View' : 'Start'} Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStat;
