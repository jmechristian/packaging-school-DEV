export default function HomeLogos() {
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <h2 className='text-center text-xl font-bold text-gray-900 font-greycliff'>
        Trusted by the world’s most innovative teams
      </h2>
      <div className='mx-auto mt-10 grid grid-cols-4 items-center gap-x-4 gap-y-10  sm:grid-cols-3 lg:mx-0 '>
        <img
          className='col-span-2 max-h-28 w-full object-contain lg:col-span-1'
          src='https://packschool.s3.amazonaws.com/bmw.png'
          alt='BWM'
          width={400}
          height={400}
        />
        <img
          className='col-span-2 max-h-28 w-full object-contain lg:col-span-1'
          src='https://packschool.s3.amazonaws.com/starbucks-coffee-logo.png'
          alt='Starbucks'
          width={400}
          height={400}
        />
        <img
          className='col-span-2 max-h-28 w-full object-contain lg:col-span-1'
          src='https://packschool.s3.amazonaws.com/coke.png'
          alt='Coke'
          width={400}
          height={400}
        />
        <img
          className='col-span-2 max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1'
          src='https://packschool.s3.amazonaws.com/skg_logo.png'
          alt='Smurfit Kappa'
          width={400}
          height={400}
        />
        <img
          className='col-span-2 col-start-2 max-h-28 w-full object-contain sm:col-start-auto lg:col-span-1'
          src='https://packschool.s3.amazonaws.com/3m.png'
          alt='3M'
          width={400}
          height={400}
        />
        <img
          className='col-span-2 col-start-2 max-h-28 w-full object-contain sm:col-start-auto lg:col-span-1'
          src='https://packschool.s3.amazonaws.com/colgate.png'
          alt='3M'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
