import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import CPSNav from './CPSNav';
import CPSForm from './CPSForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CPSWrapper = ({ params }) => {
  const methods = useForm();

  // const onSubmit = async (data, e) => {
  //   e.preventDefault();
  //   if (!user) {
  //     const res = await API.graphql({
  //       query: createCPSForm,
  //       variables: {
  //         input: {
  //           firstName: data.firstName,
  //           lastName: data.lastName,
  //           email: data.email,
  //           phone: data.phone,
  //           streetAddress: data.streetAddress,
  //           addressExtra: data.addressExtra,
  //           city: data.city,
  //           state: data.state,
  //           country: data.country,
  //           birthYear: data.birthYear,
  //           companyName: data.companyName,
  //           companyTitle: data.companyTitle,
  //           linkedin: data.linkedin,
  //           background: data.background,
  //           whyPackaging: data.whyPackaging,
  //           areaOfInterest: data.areaOfInterest,
  //           referral: data.referral,
  //           payment: data.payment,
  //           yearGoals: data.yearGoals,
  //           cpsGoals: data.cpsGoals,
  //           moreAboutYou: data.moreAboutYou,
  //           elective: data.elective,
  //         },
  //       },
  //     });

  //     if (res.data) {
  //       router.push('/cps-application-confirmation');
  //     }
  //   }

  //   if (user && !user.cpsFormID) {
  //     const res = await API.graphql({
  //       query: createCPSForm,
  //       variables: {
  //         input: {
  //           id: user.id,
  //           cPSFormUserId: user.id,
  //           firstName: data.firstName,
  //           lastName: data.lastName,
  //           email: data.email,
  //           phone: data.phone,
  //           streetAddress: data.streetAddress,
  //           addressExtra: data.addressExtra,
  //           city: data.city,
  //           state: data.state,
  //           country: data.country,
  //           birthYear: data.birthYear,
  //           companyName: data.companyName,
  //           companyTitle: data.companyTitle,
  //           linkedin: data.linkedin,
  //           background: data.background,
  //           whyPackaging: data.whyPackaging,
  //           areaOfInterest: data.areaOfInterest,
  //           referral: data.referral,
  //           payment: data.payment,
  //           yearGoals: data.yearGoals,
  //           cpsGoals: data.cpsGoals,
  //           moreAboutYou: data.moreAboutYou,
  //           elective: data.elective,
  //         },
  //       },
  //     });

  //     if (res.data) {
  //       await API.graphql({
  //         query: updateUser,
  //         variables: {
  //           input: {
  //             id: user.id,
  //             cpsFormID: user.id,
  //           },
  //         },
  //       });

  //       router.push('/cps-application-confirmation');
  //     }
  //   }
  // };

  useEffect(() => {
    if (params) {
      for (const property in params) {
        methods.setValue(`${property}`, `${params[property]}`);
      }
    }
  }, [params, methods]);

  return (
    <div className='w-full max-w-4xl mx-auto sm:px-0 pb-24'>
      <FormProvider {...methods}>
        <CPSNav />
        <CPSForm methods={methods} />
      </FormProvider>
    </div>
  );
};

export default CPSWrapper;
