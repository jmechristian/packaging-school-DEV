const stats = [
  { label: 'Certificates', value: 0 },
  { label: 'Courses', value: 0 },
  { label: 'Applications', value: 0 },
];

export default function ProfileHead({ user }) {
  return (
    <div className='overflow-hidden rounded-t-lg bg-white box-shadow-lg'>
      <h2 className='sr-only' id='profile-overview-title'>
        Profile Overview
      </h2>
      <div className='bg-white p-9'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='sm:flex sm:space-x-5'>
            <div className='flex-shrink-0'>
              <img
                className='mx-auto h-32 w-32 rounded-full'
                src={user && user.picture}
                alt=''
              />
            </div>
            <div className='mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex flex-col justify-center'>
              <p className='text-lg font-medium text-slate-600'>
                Welcome back,
              </p>
              <p className='text-xl font-bold text-slate-900 sm:text-4xl'>
                {user && user.name}
              </p>
              <p className=' font-medium text-slate-600'>
                {user && user.title} at {user && user.company}
              </p>
            </div>
          </div>
          <div className='mt-5 flex justify-center sm:mt-0'>
            <a
              href='#'
              className='flex items-center justify-center rounded-md bg-white px-4 py-3 font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 font-greycliff'
            >
              Edit profile
            </a>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 divide-y divide-slate-200 border-t border-slate-200 bg-base-mid sm:grid-cols-3 sm:divide-x sm:divide-y-0'>
        {stats.map((stat) => (
          <div className='flex flex-col' key={stat.label}>
            <div className='px-6 py-5 text-center text-lg font-medium font-greycliff'>
              <span className='text-slate-100 font-bold'>{stat.value}</span>{' '}
              <span className='text-slate-100'>{stat.label}</span>
            </div>
            <div className='flex flex-col gap-2 py-16 border-r border-r-slate-300 bg-slate-200 justify-center items-center'>
              <div className='text-slate-700 text-sm'>
                No Applications Found
              </div>
              <div className='mt-5 flex justify-center sm:mt-0'>
                <a
                  href='#'
                  className='flex items-center justify-center rounded-md bg-white/75 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 font-greycliff'
                >
                  Start Application
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
