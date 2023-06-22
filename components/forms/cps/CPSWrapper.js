import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CPSPersonalInfo from './CPSPersonalInfo';
import CPSProfessionalInfo from './CPSProfessionalInfo';
import CPSGoals from './CPSGoals';
import CPSApply from './CPSApply';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CPSNav from './CPSNav';
import CPSForm from './CPSForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CPSWrapper = () => {
  const methods = useForm();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  const sendFormToAWS = async () => {};

  const saveHandler = () => {
    const data = methods.getValues();
    console.log(data);
    sendFormToAWS();
  };

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className='w-full max-w-4xl mx-auto py-8 sm:px-0'>
      <FormProvider {...methods}>
        <CPSNav
          save={saveHandler}
          submit={methods.handleSubmit(onSubmit, onError)}
        />
        <CPSForm methods={{ ...methods }} />
        <div className='flex flex-col lg:flex-row justify-end bg-slate-100 px-6 py-6 rounded-t sticky bottom-0 gap-6 border-t border-t-slate-300'>
          <div
            className='flex justify-center items-center w-fit px-6 py-3 rounded-lg bg-base-mid font-greycliff font-semibold text-white'
            onClick={() => save()}
          >
            Save Form
          </div>
          <div
            className='flex justify-center items-center w-fit px-6 py-3 rounded-lg bg-clemson font-greycliff font-semibold text-white'
            onClick={() => submit()}
          >
            Submit Form
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default CPSWrapper;
