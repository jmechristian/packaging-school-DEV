import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import Layout from '../../features/layout/Layout';
import ContentMenu from '../../components/ContentMenu';

import { createClient, linkResolver } from '../../prismicio';
import { components } from '../../slices';

const Page = ({ page, menu }) => {
  const menuItems = menu?.data.slices[0].items;
  return (
    <Layout>
      <ContentMenu items={menuItems} />
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID('certification', params.uid);
  const menu = await client.getByUID('contentmenu', params.uid);

  return {
    props: {
      page,
      menu,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType('certification');

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}
