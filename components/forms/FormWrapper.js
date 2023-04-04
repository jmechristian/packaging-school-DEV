import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const FormWrapper = ({ children }) => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='max-w-4xl mx-auto w-full'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex flex-col gap-8'
        >
          {children}
        </form>
      </FormProvider>
    </div>
  );
};

export default FormWrapper;
