import React, { useContext, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { CMPMContext } from './cmpm/CMPMContextProvider';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { createCMPMForm, updateCMPMForm } from '../../src/graphql/mutations';
import SignInModal from '../shared/SignInModal';

const FormWrapper = ({ children, activeIndex, setActiveIndex }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

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

  const sessionErrors = ['session-applying', 'optOut', 'referral', 'payment'];

  const goalErrors = ['yearGoals', 'cmpmGoals', 'moreAboutYou'];

  const formSaveHandler = async (currentFormState) => {
    if (!user) {
      setOpen(true);
    } else if (user) {
      if (user.cmpmFormID) {
        setIsUpdated(false);
        setIsLoading(true);
        await API.graphql({
          query: updateCMPMForm,
          variables: {
            input: {
              id: user.id,
              firstName: currentFormState.firstName,
              lastName: currentFormState.lastName,
              email: currentFormState.email,
              phone: currentFormState.phone,
              streetAddress: currentFormState.streetAddress,
              addressExtra: currentFormState.addressExtra,
              city: currentFormState.city,
              state: currentFormState.state,
              country: currentFormState.country,
              companyName: currentFormState.companyName,
              companyTitle: currentFormState.companyTitle,
              linkedin: currentFormState.linkedIn,
              background: currentFormState.background,
              whyPackaging: currentFormState.whyPackaging,
              areaOfInterest: currentFormState.areaOfInterest,
              sessionApplying: currentFormState.sessionApplying,
              referral: currentFormState.referral,
              payment: currentFormState.payment,
              yearGoals: currentFormState.yearGoals,
              cmpmGoals: currentFormState.cmpmGoals,
              moreAboutYou: currentFormState.moreAboutYou,
              birthYear: currentFormState.birthYear,
              optOut: currentFormState.optOut,
            },
          },
        });
        setIsLoading(false);
        setIsUpdated(true);
      } else if (user && !user.cmpmFormID) {
        setIsUpdated(false);
        setIsLoading(true);
        await API.graphql({
          query: createCMPMForm,
          variables: {
            input: {
              id: user.id,
              cMPMFormUserId: user.id,
              firstName: currentFormState.firstName,
              lastName: currentFormState.lastName,
              email: currentFormState.email,
              phone: currentFormState.phone,
              streetAddress: currentFormState.streetAddress,
              addressExtra: currentFormState.addressExtra,
              city: currentFormState.city,
              state: currentFormState.state,
              country: currentFormState.country,
              companyName: currentFormState.companyName,
              companyTitle: currentFormState.companyTitle,
              linkedin: currentFormState.linkedIn,
              background: currentFormState.background,
              whyPackaging: currentFormState.whyPackaging,
              areaOfInterest: currentFormState.areaOfInterest,
              sessionApplying: currentFormState.sessionApplying,
              referral: currentFormState.referral,
              payment: currentFormState.payment,
              yearGoals: currentFormState.yearGoals,
              cmpmGoals: currentFormState.cmpmGoals,
              moreAboutYou: currentFormState.moreAboutYou,
              birthYear: currentFormState.birthYear,
              optOut: currentFormState.optOut,
            },
          },
        });
        setIsLoading(false);
        setIsUpdated(true);
      }
    }
  };

  const formForwardHandler = async (currentFormState) => {
    if (user) {
      if (user.cmpmFormID) {
        setIsUpdated(false);
        setIsLoading(true);
        await API.graphql({
          query: updateCMPMForm,
          variables: {
            input: {
              id: user.id,
              firstName: currentFormState.firstName,
              lastName: currentFormState.lastName,
              email: currentFormState.email,
              phone: currentFormState.phone,
              streetAddress: currentFormState.streetAddress,
              addressExtra: currentFormState.addressExtra,
              city: currentFormState.city,
              state: currentFormState.state,
              country: currentFormState.country,
              companyName: currentFormState.companyName,
              companyTitle: currentFormState.companyTitle,
              linkedin: currentFormState.linkedIn,
              background: currentFormState.background,
              whyPackaging: currentFormState.whyPackaging,
              areaOfInterest: currentFormState.areaOfInterest,
              sessionApplying: currentFormState.sessionApplying,
              referral: currentFormState.referral,
              payment: currentFormState.payment,
              yearGoals: currentFormState.yearGoals,
              cmpmGoals: currentFormState.cmpmGoals,
              moreAboutYou: currentFormState.moreAboutYou,
              birthYear: currentFormState.birthYear,
              optOut: currentFormState.optOut,
            },
          },
        });
        setIsLoading(false);
        setIsUpdated(true);
      } else if (user && !user.cmpmFormID) {
        setIsUpdated(false);
        setIsLoading(true);
        await API.graphql({
          query: createCMPMForm,
          variables: {
            input: {
              id: user.id,
              cMPMFormUserId: user.id,
              firstName: currentFormState.firstName,
              lastName: currentFormState.lastName,
              email: currentFormState.email,
              phone: currentFormState.phone,
              streetAddress: currentFormState.streetAddress,
              addressExtra: currentFormState.addressExtra,
              city: currentFormState.city,
              state: currentFormState.state,
              country: currentFormState.country,
              companyName: currentFormState.companyName,
              companyTitle: currentFormState.companyTitle,
              linkedin: currentFormState.linkedIn,
              background: currentFormState.background,
              whyPackaging: currentFormState.whyPackaging,
              areaOfInterest: currentFormState.areaOfInterest,
              sessionApplying: currentFormState.sessionApplying,
              referral: currentFormState.referral,
              payment: currentFormState.payment,
              yearGoals: currentFormState.yearGoals,
              cmpmGoals: currentFormState.cmpmGoals,
              moreAboutYou: currentFormState.moreAboutYou,
              birthYear: currentFormState.birthYear,
              optOut: currentFormState.optOut,
            },
          },
        });
        setIsLoading(false);
        setIsUpdated(true);
      }
    }
    setActiveIndex(activeIndex + 1);
  };

  const methods = useForm();
  const onSubmit = (data, errors) => {
    console.log(data);
    console.log(errors);
    router.push('/cmpm-application-confirmation');
  };
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
    <div className='mx-auto w-full px-6 md:px-16 pt-6 pb-12 bg-slate-100'>
      <SignInModal open={open} setOpen={() => setOpen(false)} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          {children}
          <div className='mt-9 flex w-full items-center justify-between gap-x-9 col-span-2'>
            <div>
              {isLoading && (
                <div className='text-green-600 text-lg font-greycliff font-semibold'>
                  Sending...
                </div>
              )}
              {isUpdated && (
                <div className='text-green-600 text-lg font-greycliff font-semibold'>
                  Updated!
                </div>
              )}
            </div>
            <div className='flex gap-6 items-center'>
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
                  <div className='leading-none'>
                    {user && 'Save and'} &nbsp;Continue
                  </div>
                  <div>
                    <ArrowLongRightIcon className='w-5 h-5 stroke-white' />
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormWrapper;
