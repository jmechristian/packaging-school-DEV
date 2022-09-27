import Layout from '../features/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='flex flex-col pt-20 w-1/2 gap-12'>
          <div className='text-white text-6xl font-bold'>
            Hello World From The Packaging School
          </div>
          <div className='text-gray-400 text-xl leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sit amet augue condimentum, cursus diam vitae, porta
            est.
          </div>
        </div>
      </div>
    </Layout>
  );
}
