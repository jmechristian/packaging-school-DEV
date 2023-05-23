import {
  BarsArrowUpIcon,
  UsersIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

export default function TextInput() {
  return (
    <div>
      <label
        htmlFor='email'
        className='block sr-only font-medium leading-6 text-gray-900'
      >
        Search Courses
      </label>
      <div className='mt-2 flex rounded-md shadow-sm'>
        <div className='relative flex flex-grow items-stretch focus-within:z-10'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <MagnifyingGlassIcon
              className='h-5 md:h-6 md:w-6 w-5 text-gray-500'
              aria-hidden='true'
            />
          </div>
          <input
            type='text'
            name='search'
            id='search'
            className='block w-full md:text-lg bg-slate-200 rounded-none rounded-l-md border-0 py-1.5 md:py-2 lg:py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
            placeholder='What do you want to learn?'
          />
        </div>
      </div>
    </div>
  );
}
