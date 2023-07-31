import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import {
  updateCMPMForm,
  createCMPMForm,
  updateUser,
} from '../../../src/graphql/mutations';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignInModal } from '../../../features/layout/layoutSlice';
import CMPMPersonalInfo from './CMPMPersonalInfo';
import CMPMProfessionalInfo from './CMPMProfessionalInfo';
import { useRouter } from 'next/router';
import CMPMGoals from './CMPMGoals';
import CMPMSessionInfo from './CMPMSessionInfo';

const CMPMForm = ({ methods }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [cookieData, setCookieData] = useState(undefined);
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const sendFormToAWS = async () => {
    if (user && user.cmpmFormID) {
      setIsUpdated(false);
      setIsLoading(true);
      await API.graphql({
        query: updateCMPMForm,
        variables: {
          input: {
            id: user.id,
            firstName: methods.getValues('firstName'),
            lastName: methods.getValues('lastName'),
            email: methods.getValues('email'),
            phone: methods.getValues('phone'),
            streetAddress: methods.getValues('streetAddress'),
            addressExtra: methods.getValues('addressExtra'),
            city: methods.getValues('city'),
            state: methods.getValues('state'),
            country: methods.getValues('country'),
            birthYear: methods.getValues('birthYear'),
            companyName: methods.getValues('companyName'),
            sessionApplying: methods.getValues('sessionApplying'),
            companyTitle: methods.getValues('companyTitle'),
            linkedin: methods.getValues('linkedin'),
            background: methods.getValues('background'),
            whyPackaging: methods.getValues('whyPackaging'),
            areaOfInterest: methods.getValues('areaOfInterest'),
            referral: methods.getValues('referral'),
            payment: methods.getValues('payment'),
            yearGoals: methods.getValues('yearGoals'),
            cmpmGoals: methods.getValues('cmpmGoals'),
            moreAboutYou: methods.getValues('moreAboutYou'),
            paymentConfirmation: methods.getValues('paymentConfirmation'),
          },
        },
      });
      setIsLoading(false);
      setIsUpdated(true);
    } else if (user && !user.CMPMFormID) {
      setIsUpdated(false);
      setIsLoading(true);
      await API.graphql({
        query: createCMPMForm,
        variables: {
          input: {
            id: user.id,
            cMPMFormUserId: user.id,
            firstName: methods.getValues('firstName'),
            lastName: methods.getValues('lastName'),
            email: methods.getValues('email'),
            phone: methods.getValues('phone'),
            streetAddress: methods.getValues('streetAddress'),
            addressExtra: methods.getValues('addressExtra'),
            city: methods.getValues('city'),
            state: methods.getValues('state'),
            country: methods.getValues('country'),
            birthYear: methods.getValues('birthYear'),
            companyName: methods.getValues('companyName'),
            companyTitle: methods.getValues('companyTitle'),
            linkedin: methods.getValues('linkedin'),
            background: methods.getValues('background'),
            whyPackaging: methods.getValues('whyPackaging'),
            areaOfInterest: methods.getValues('areaOfInterest'),
            sessionApplying: methods.getValues('sessionApplying'),
            referral: methods.getValues('referral'),
            payment: methods.getValues('payment'),
            yearGoals: methods.getValues('yearGoals'),
            cmpmGoals: methods.getValues('cmpmGoals'),
            moreAboutYou: methods.getValues('moreAboutYou'),
            paymentConfirmation: methods.getValues('paymentConfirmation'),
          },
        },
      });

      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            cmpmFormID: user.id,
          },
        },
      });
      setIsLoading(false);
      setIsUpdated(true);
    }
  };

  const submitFormToAWS = async () => {
    if (!user) {
      setIsUpdated(false);
      setIsLoading(true);
      await API.graphql({
        query: createCMPMForm,
        variables: {
          input: {
            firstName: methods.getValues('firstName'),
            lastName: methods.getValues('lastName'),
            email: methods.getValues('email'),
            phone: methods.getValues('phone'),
            streetAddress: methods.getValues('streetAddress'),
            addressExtra: methods.getValues('addressExtra'),
            city: methods.getValues('city'),
            state: methods.getValues('state'),
            country: methods.getValues('country'),
            birthYear: methods.getValues('birthYear'),
            companyName: methods.getValues('companyName'),
            companyTitle: methods.getValues('companyTitle'),
            linkedin: methods.getValues('linkedin'),
            background: methods.getValues('background'),
            whyPackaging: methods.getValues('whyPackaging'),
            areaOfInterest: methods.getValues('areaOfInterest'),
            sessionApplying: methods.getValues('sessionApplying'),
            referral: methods.getValues('referral'),
            payment: methods.getValues('payment'),
            yearGoals: methods.getValues('yearGoals'),
            cmpmGoals: methods.getValues('cmpmGoals'),
            moreAboutYou: methods.getValues('moreAboutYou'),
            paymentConfirmation: methods.getValues('paymentConfirmation'),
          },
        },
      });
      setIsLoading(false);
      setIsUpdated(true);
      router.push('/cmpm-application-confirmation');
    }
    if (user && user.cmpmFormID) {
      setIsUpdated(false);
      setIsLoading(true);
      await API.graphql({
        query: updateCMPMForm,
        variables: {
          input: {
            id: user.id,
            firstName: methods.getValues('firstName'),
            lastName: methods.getValues('lastName'),
            email: methods.getValues('email'),
            phone: methods.getValues('phone'),
            streetAddress: methods.getValues('streetAddress'),
            addressExtra: methods.getValues('addressExtra'),
            city: methods.getValues('city'),
            state: methods.getValues('state'),
            country: methods.getValues('country'),
            birthYear: methods.getValues('birthYear'),
            companyName: methods.getValues('companyName'),
            companyTitle: methods.getValues('companyTitle'),
            linkedin: methods.getValues('linkedin'),
            background: methods.getValues('background'),
            whyPackaging: methods.getValues('whyPackaging'),
            areaOfInterest: methods.getValues('areaOfInterest'),
            sessionApplying: methods.getValues('sessionApplying'),
            referral: methods.getValues('referral'),
            payment: methods.getValues('payment'),
            yearGoals: methods.getValues('yearGoals'),
            cmpmGoals: methods.getValues('cmpmGoals'),
            moreAboutYou: methods.getValues('moreAboutYou'),
            paymentConfirmation: methods.getValues('paymentConfirmation'),
          },
        },
      });
      setIsLoading(false);
      setIsUpdated(true);
      router.push('/cmpm-application-confirmation');
    } else if (user && !user.cmpmFormID) {
      setIsUpdated(false);
      setIsLoading(true);
      await API.graphql({
        query: createCMPMForm,
        variables: {
          input: {
            id: user.id,
            cMPMFormUserId: user.id,
            firstName: methods.getValues('firstName'),
            lastName: methods.getValues('lastName'),
            email: methods.getValues('email'),
            phone: methods.getValues('phone'),
            streetAddress: methods.getValues('streetAddress'),
            addressExtra: methods.getValues('addressExtra'),
            city: methods.getValues('city'),
            state: methods.getValues('state'),
            country: methods.getValues('country'),
            birthYear: methods.getValues('birthYear'),
            companyName: methods.getValues('companyName'),
            companyTitle: methods.getValues('companyTitle'),
            linkedin: methods.getValues('linkedin'),
            background: methods.getValues('background'),
            whyPackaging: methods.getValues('whyPackaging'),
            areaOfInterest: methods.getValues('areaOfInterest'),
            referral: methods.getValues('referral'),
            payment: methods.getValues('payment'),
            sessionApplying: methods.getValues('sessionApplying'),
            yearGoals: methods.getValues('yearGoals'),
            cmpmGoals: methods.getValues('cmpmGoals'),
            moreAboutYou: methods.getValues('moreAboutYou'),
            paymentConfirmation: methods.getValues('paymentConfirmation'),
          },
        },
      });

      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            cmpmFormID: user.id,
          },
        },
      });
      setIsLoading(false);
      setIsUpdated(true);
      router.push('/cmpm-application-confirmation');
    }
  };

  const saveHandler = () => {
    const data = methods.getValues();
    console.log(data);
    const rawData = JSON.stringify(data);
    if (user) {
      sendFormToAWS(data);
    } else if (!user) {
      Cookies.set('cmpmFormSave', rawData, { expires: 7 });
      dispatch(toggleSignInModal());
    }
  };

  const sendSubmitNotification = async (data) => {
    await fetch('/api/send-certificate-submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        form: 'CMPM',
      }),
    });
  };

  const onSubmit = async (data) => {
    await submitFormToAWS(data);
    sendSubmitNotification(data);
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <form
      className='w-full bg-slate-200 p-6 divide-y space-y-6 divide-slate-300'
      onSubmit={methods.handleSubmit(onSubmit, onError)}
    >
      <div
        id='personal'
        className='flex flex-col gap-6 py-6 scroll-mt-24 lg:py-9'
      >
        <div className='text-xl lg:text-2xl lg:mb-4 font-greycliff font-semibold'>
          Personal Information
        </div>
        <CMPMPersonalInfo />
      </div>
      <div
        id='professional'
        className='py-6 scroll-mt-24 lg:py-9 flex flex-col gap-6'
      >
        <div className='text-xl lg:text-2xl lg:mb-4 font-greycliff font-semibold'>
          Professional Information
        </div>
        <CMPMProfessionalInfo />
      </div>
      <div id='goals' className='py-6 scroll-mt-24 lg:py-9 flex flex-col gap-6'>
        <div className='text-xl lg:text-2xl lg:mb-4 font-greycliff font-semibold'>
          Professional Goals
        </div>
        <CMPMGoals />
      </div>
      <div
        id='session'
        className='py-6 scroll-mt-24 lg:py-9 flex flex-col gap-6'
      >
        <div className='text-xl lg:text-2xl lg:mb-4 font-greycliff font-semibold'>
          Session Info
        </div>
        <CMPMSessionInfo />
      </div>
      <div className='flex justify-between items-center bg-slate-300 dark:bg-dark-dark px-6 py-4 rounded-t sticky z-50 bottom-0 gap-3 lg:gap-6 border-t border-t-slate-300 text-sm md:text-base'>
        <div className='w-fit font-greycliff font-semibold h-full text-green-600 text-lg'>
          {isLoading ? 'Sending...' : isUpdated ? 'Updated!' : ''}
        </div>
        <div className='flex gap-2 items-center'>
          <div
            className='flex cursor-pointer justify-center items-center w-fit px-6 py-3 rounded-lg ring-2 ring-slate-400 text-slate-500 font-greycliff font-semibold '
            onClick={saveHandler}
          >
            Save Form
          </div>
          <button
            type='submit'
            className='flex cursor-pointer justify-center items-center w-fit px-6 py-3 rounded-lg bg-clemson font-greycliff font-semibold text-white text-sm md:text-base'
          >
            Submit Form
          </button>
        </div>
      </div>
    </form>
  );
};

export default CMPMForm;
