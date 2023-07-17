import React from 'react';
import {
  listLMSCollections,
  getLMSCollection,
} from '../../src/graphql/queries';
import { API } from 'aws-amplify';
import CTAButton from '../../components/shared/CTAButton';
import { useRouter } from 'next/router';

const Page = ({ data }) => {
  const router = useRouter();
  return (
    <div className='relative dark:bg-dark-dark'>
      <div className='flex flex-col gap-16  container-7xl pt-24'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl xl:text-5xl leading-tight max-w-3xl dark:text-white'>
            Collection Title
          </h1>
          <h3 className='dark:text-white text-xl'>Collection Subtitle</h3>
          <p className='dark:text-gray-400'>Collection Author</p>
          <CTAButton
            text={'Enroll Now'}
            click={() => router.push(data.lmsLink)}
          />
        </div>
        <p className='text-base lg:text-lg dark:text-gray-500 text-gray-600 max-w-4xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
          felis, vehicula vitae neque in, interdum hendrerit lectus. Vestibulum
          eget ante iaculis, tincidunt eros vitae, sollicitudin risus. Sed
          convallis quam sit amet congue semper. Curabitur ut nisi quis lectus
          suscipit maximus. Cras interdum eros at turpis venenatis, et posuere
          enim porta. Nulla luctus tortor eu diam porttitor pellentesque.
          Vestibulum ante nibh, euismod sit amet condimentum sed, dictum a
          magna. Sed in fermentum ligula.
        </p>
      </div>
    </div>
  );
};

export default Page;

export async function getStaticPaths() {
  const res = await API.graphql({ query: listLMSCollections });
  const paths = res.data.listLMSCollections.items.map((collection) => ({
    params: { uid: collection.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const slug = params.uid;
  const res = await API.graphql({
    query: getLMSCollection,
    variables: { slug: slug },
  });
  const collection = res.data.getLMSCollection.items[0];

  return {
    props: { collection },
  };
}
