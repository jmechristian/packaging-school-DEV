import Layout from '../features/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main className='pt-52 px-6 flex flex-wrap justify-start max-w-prose mx-auto'>
        <div className='text-5xl font-extrabold text-white w-full font-headline mb-8'>
          Hello World From The Packaging School
        </div>
        <div className='text-zinc-400 text-lg leading-relaxed max-w-prose'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sit amet augue condimentum, cursus diam vitae, porta est. Phasellus
          sagittis quam et ex pharetra, id tincidunt justo aliquam. Fusce
          suscipit, est eget posuere semper, mi sem consequat diam, quis maximus
          nulla lorem nec ex. Fusce ac egestas felis, vel molestie ligula. Sed a
          augue ac quam rhoncus imperdiet in nec diam. Donec in nisl id diam
          venenatis posuere. Sed vulputate hendrerit mi tincidunt aliquam. Morbi
          sit amet quam vitae leo fermentum rhoncus efficitur at dui. Aliquam
          porta, ante et bibendum imperdiet, arcu lacus auctor diam, ac
          tincidunt lectus ante ut neque. Maecenas sit amet tellus vitae libero
          rutrum dignissim. Morbi mollis mi sit amet purus blandit tempor. Ut
          semper, dolor sit amet convallis suscipit, lectus tortor interdum
          elit, tincidunt suscipit magna ante ac quam.
        </div>
      </main>
    </Layout>
  );
}
