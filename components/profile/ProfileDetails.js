import { API } from 'aws-amplify';
import { useState } from 'react';
import { updateUser } from '../../src/graphql/mutations';

export default function ProfileDetails({ user, isEditing }) {
  const [fullName, setFullName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [company, setCompany] = useState(user?.company);
  const [title, setTitle] = useState(user?.title);
  const [linkedIn, setLinkedIn] = useState(user?.linkedin);
  const [bio, setBio] = useState(user?.bio);
  const [errors, setErrors] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const updateUserProfile = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const res = await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: user.id,
          email: email,
          company: company,
          name: fullName,
          title: title,
          linkedin: linkedIn,
          bio: bio,
        },
      },
    });

    if (res.data) {
      setIsSending(false);
      setIsSent(true);
    } else if (res.errors) {
      setIsSending(fasle);
      setIsSent(true);
      setErrors(true);
    }
  };

  return (
    <div className='px-6 md:px-16 py-12'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-lg font-bold font-greycliff leading-7 text-slate-900'>
          Your Information
        </h3>
        <p className='mt-1 max-w-2xl  leading-6 text-slate-500'>
          Personal details and bio.
        </p>
      </div>
      {isEditing ? (
        <div className='mt-6'>
          <form
            className='grid grid-cols-1 sm:grid-cols-2 gap-x-16'
            onSubmit={updateUserProfile}
          >
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className='font-medium leading-6 font-greycliff text-slate-500'>
                Full name
              </dt>
              <div>
                <input
                  className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  id='firstName'
                  name='firstName'
                  type='text'
                  defaultValue={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Company
              </dt>
              <input
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                id='company'
                name='company'
                type='text'
                defaultValue={company}
                placeholder='Set Company...'
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Email address
              </dt>
              <input
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                id='email'
                name='email'
                type='text'
                defaultValue={email}
                placeholder='Set Email...'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Title
              </dt>
              <input
                className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                id='title'
                name='title'
                type='text'
                defaultValue={title}
                placeholder='Set Title...'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-2 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                LinkedIn
              </dt>
              <input
                className='mt-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                id='linkedin'
                name='linkedin'
                type='text'
                defaultValue={linkedIn}
                placeholder='Set LinkedIn...'
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-2 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Bio
              </dt>
              <textarea
                rows={4}
                name='bio'
                id='bio'
                className='mt-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                defaultValue={bio}
                placeholder='Set Bio...'
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-transparent hover:bg-slate-300 border cursor-pointer border-slate-900 font-greycliff font-semibold px-4 py-2 rounded-lg w-fit text-right'
              >
                {isSending
                  ? 'Sending...'
                  : !isSent
                  ? 'Update Profile'
                  : 'Updated!'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className='mt-6'>
          <dl className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className='font-medium leading-6 font-greycliff text-slate-500'>
                Full name
              </dt>
              <dd className='mt-1 leading-6 text-slate-700 sm:mt-2'>
                {user && user.name}
              </dd>
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Company
              </dt>
              <dd className='mt-1  leading-6 text-slate-700 sm:mt-2'>
                {user && user.company}
              </dd>
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Email address
              </dt>
              <dd className='mt-1  leading-6 text-slate-700 sm:mt-2'>
                {user && user.email}
              </dd>
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-1 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Title
              </dt>
              <dd className='mt-1  leading-6 text-slate-700 sm:mt-2'>
                {user && user.title}
              </dd>
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-2 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                LinkedIn
              </dt>
              <dd className='mt-1  leading-6 text-slate-700 sm:mt-2'>
                {user && user.linkedin}
              </dd>
            </div>
            <div className='border-t border-slate-300 px-4 py-7 sm:col-span-2 sm:px-0'>
              <dt className=' font-medium leading-6 text-slate-500 font-greycliff'>
                Bio
              </dt>
              <dd className='mt-1  leading-6 text-slate-700 sm:mt-2'>
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}
