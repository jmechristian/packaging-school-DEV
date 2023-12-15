import React, { useState } from 'react';

const Page = () => {
  const [isUser, setIsUser] = useState('');
  const [isEmail, setIsEmail] = useState('jmechristian@gmail.com');
  const [isFirstName, setIsFirstName] = useState('Jamie');
  const [isLastName, setIsLastName] = useState('Christian');
  const [isPhone, setIsPhone] = useState('5122893696');
  const [isForm, setIsForm] = useState('CMPM');

  const findHandler = async () => {
    await fetch('/api/get-ac-user').then((res) => console.log(res.data));
  };

  const createHandler = async () => {
    await fetch('/api/create-ac-user').then((res) => console.log(res.data));
  };

  const createDealHandler = async () => {
    await fetch('/api/create-deal').then((res) => console.log(res.data));
  };

  const updateDealHandler = async () => {
    await fetch('/api/update-deal').then((res) => console.log(res.data));
  };

  const automateDealHandler = async () => {
    // Check For User
    const user = await fetch(`/api/get-ac-user?email=${isEmail}`).then(
      (response) => response.json()
    );
    if (user.data.contacts[0]) {
      //Create Deal
      const deal = await fetch('/api/create-deal', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          formType: isForm,
          contactId: user.data.contacts[0].id,
        }),
      }).then((response) => response.json());

      if (deal.data.deal.id) {
        // Update Deal
        const updated = await fetch(
          `/api/update-deal?dealId=${deal.data.deal.id}&formType=${isForm}`
        ).then((response) => response.json());
      } else {
        console.log('no deal');
      }
    } else {
      const newUser = await fetch('/api/create-ac-user', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: isEmail,
          firstName: isFirstName,
          lastName: isLastName,
          phone: isPhone,
        }),
      }).then((res) => res.json());

      if (newUser.data.contact) {
        //Create Deal
        const deal = await fetch('/api/create-deal', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            formType: isForm,
            contactId: newUser.data.contact.id,
          }),
        }).then((response) => response.json());

        if (deal.data.deal.id) {
          // Update Deal
          const updated = await fetch(
            `/api/update-deal?dealId=${deal.data.deal.id}&formType=${isForm}`
          ).then((response) => response.json());
        } else {
          console.log('no deal');
        }
      }
    }
  };

  return (
    <div className='w-full max-w-7xl mx-auto py-24 flex flex-col gap-12'>
      <div className='flex flex-wrap gap-6'>
        <div
          className='bg-clemson w-fit rounded-lg text-lg font-bold text-white px-6 py-3 cursor-pointer'
          onClick={() => findHandler()}
        >
          Find AC User
        </div>
        <div>User: {isUser}</div>
      </div>
      <div className='flex flex-wrap gap-6'>
        <div
          className='bg-clemson w-fit rounded-lg text-lg font-bold text-white px-6 py-3 cursor-pointer'
          onClick={() => createHandler()}
        >
          Create AC User
        </div>
        <div>User: {isUser}</div>
      </div>
      <div className='flex flex-wrap gap-6'>
        <div
          className='bg-clemson w-fit rounded-lg text-lg font-bold text-white px-6 py-3 cursor-pointer'
          onClick={() => createDealHandler()}
        >
          Create Deal
        </div>
        <div>User: {isUser}</div>
      </div>
      <div className='flex flex-wrap gap-6'>
        <div
          className='bg-clemson w-fit rounded-lg text-lg font-bold text-white px-6 py-3 cursor-pointer'
          onClick={() => updateDealHandler()}
        >
          Update Deal
        </div>
        <div>User: {isUser}</div>
      </div>
      <div className='flex flex-wrap gap-6'>
        <div
          className='bg-clemson w-fit rounded-lg text-lg font-bold text-white px-6 py-3 cursor-pointer'
          onClick={() => automateDealHandler()}
        >
          Automate Deal
        </div>
        <div>User: {isUser}</div>
      </div>
    </div>
  );
};

export default Page;
