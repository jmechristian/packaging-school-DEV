import Layout from '../features/layout/Layout';
import HeaderPadding from '../features/layout/HeaderPadding';

export default function Home() {
  return (
    <div className='bg-slate-300'>
      <div className='bg-slate-900 h-20'></div>
      <div className='container__inner mx-auto px-6 md:px-8 lg:px-0 py-20'>
        <div className='flex flex-col w-full lg:w-1/2 gap-12'>
          <div className='text-white text-5xl lg:text-6xl font-bold'>
            Hello World From The Packaging School
          </div>
          <div className='text-gray-400 text-lg lg:text-xl leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sit amet augue condimentum, cursus diam vitae, porta
            est.
          </div>
        </div>
      </div>
    </div>
  );
}
