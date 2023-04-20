export default function ProfileDetails({ user }) {
  return (
    <div className='px-16 py-12'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-lg font-bold font-greycliff leading-7 text-slate-900'>
          Your Information
        </h3>
        <p className='mt-1 max-w-2xl  leading-6 text-slate-500'>
          Personal details and bio.
        </p>
      </div>
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
    </div>
  );
}
