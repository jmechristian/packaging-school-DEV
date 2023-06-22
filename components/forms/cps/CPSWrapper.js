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
import { useDispatch } from 'react-redux';
import { toggleSignInModal } from '../../../features/layout/layoutSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CPSWrapper = () => {
  const methods = useForm();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const sendFormToAWS = async (data) => {};

  const saveHandler = () => {
    const data = methods.getValues();
    if (user) {
      console.log(data);
      sendFormToAWS(data);
    } else if (!user) {
      dispatch(toggleSignInModal());
    }
  };

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className='w-full max-w-4xl mx-auto sm:px-0'>
      <FormProvider {...methods}>
        <CPSNav />
        <CPSForm methods={{ ...methods }} />
        <div className='flex justify-end bg-dark-dark px-6 py-4 rounded-t sticky z-50 bottom-0 gap-3 lg:gap-6 border-t border-t-slate-300 text-sm md:text-base'>
          <div
            className='flex cursor-pointer justify-center items-center w-fit px-6 py-3 rounded-lg ring-2 ring-slate-400 text-slate-400 font-greycliff font-semibold '
            onClick={saveHandler}
          >
            Save Form
          </div>
          <div
            className='flex cursor-pointer justify-center items-center w-fit px-6 py-3 rounded-lg bg-clemson font-greycliff font-semibold text-white text-sm md:text-base'
            onClick={methods.handleSubmit(onSubmit, onError)}
          >
            Submit Form
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default CPSWrapper;
