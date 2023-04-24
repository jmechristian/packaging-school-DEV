import React, { useContext, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { CMPMContext } from './cmpm/CMPMContextProvider';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { API } from 'aws-amplify';
import * as queries from '../../src/graphql/queries';

const FormWrapper = ({ children, activeIndex, setActiveIndex }) => {
  const { user } = useSelector((state) => state.auth);
  const [userForms, setUserForms] = useState([]);

  useEffect(() => {
    user && getUserFormGroup();
  }, [user]);

  const getUserFormGroup = async () => {
    const forms = await API.graphql({
      query: queries.userFormsByUserId,
      variables: { userId: user.id },
    });

    setUserForms(
      forms.data.userFormsByUserId.items
        ? forms.data.userFormsByUserId.items[0]
        : null
    );
  };

  const personalErrors = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'streetAddress',
    'city',
    'state',
    'country',
    'birthYear',
  ];

  const professionalErrors = [
    'companyName',
    'companyTitle',
    'background',
    'whyPackaging',
    'areaOfInterest',
  ];

  const sessionErrors = ['session-applying', 'referral', 'payment'];

  const goalErrors = ['yearGoals', 'cmpmGoals', 'moreAboutYou'];

  const formSaveHandler = async (currentFormState) => {
    console.log('form', currentFormState);
    console.log('user', user);
    // const startForm = await API.graphql({
    //   query: mutations.createUserForms,
    //   variables: { input: { userFormsUserIdId: user.id } },
    // });
    // console.log(startForm);
  };

  const formForwardHandler = (currentFormState) => {
    console.log('form', currentFormState);
    console.log('user', user);
    setActiveIndex(activeIndex + 1);
  };

  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  const onError = (errors) => {
    if (personalErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 0]);
    }

    if (professionalErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 1]);
    }

    if (goalErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 2]);
    }

    if (sessionErrors.every((key) => Object.keys(errors).includes(key))) {
      setErrorIndex((errorIndex) => [...errorIndex, 3]);
    }
  };

  const { setErrorIndex, errorIndex } = useContext(CMPMContext);

  return (
    <div className='mx-auto w-full px-16 pt-6 pb-12 bg-slate-100'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          {children}
          <div className='mt-9 flex w-full items-center justify-end gap-x-9 col-span-2'>
            <button
              type='button'
              className='text-lg font-semibold font-greycliff text-gray-600'
              onClick={() => formSaveHandler(methods.getValues())}
            >
              Save
            </button>
            {activeIndex === 3 ? (
              <button
                type='submit'
                className='rounded-md bg-base-brand px-4 py-3 text-lg font-semibold text-white shadow-sm font-greycliff hover:bg-base-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 flex gap-1 items-center'
              >
                <div className='leading-none'>Submit Application</div>
              </button>
            ) : (
              <div
                className='cursor-pointer rounded-md bg-base-brand px-4 py-3 text-lg font-semibold text-white shadow-sm font-greycliff hover:bg-base-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 flex gap-1 items-center'
                onClick={() => formForwardHandler(methods.getValues())}
              >
                <div className='leading-none'>Save and Continue</div>
                <div>
                  <ArrowLongRightIcon className='w-5 h-5 stroke-white' />
                </div>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormWrapper;
