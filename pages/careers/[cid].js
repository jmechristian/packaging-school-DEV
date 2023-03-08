import CareerFeature from '../../components/careers/CareerFeature';
import CareerHero from '../../components/careers/CareerHero';
import CareerAction from '../../components/careers/CareerAction';
import CareerCTA from '../../components/careers/CareerCTA';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

const Index = ({ career }) => {
  return (
    <div className='w-full h-full relative flex flex-col mt-8'>
      <CareerHero
        title={career.title}
        altName={career.altName}
        media={career.media}
        subhead={career.subhead}
      />
      <CareerAction
        apcCopy={career.apcCopy}
        beverageCopy={career.beverageCopy}
        cmpmCopy={career.cmpmCopy}
        coreCopy={career.coreCopy}
        cpsCopy={career.cpsCopy}
        electiveCopy={career.electiveCopy}
        freeCopy={career.freeCopy}
      />
      <CareerFeature
        name={career.name}
        altName={career.altName}
        items={career.dayInLife.items}
      />
      <CareerCTA />
    </div>
  );
};

export async function getStaticPaths() {
  const listCareers = /* GraphQL */ `
    query ListCareers {
      listCareers {
        items {
          id
          slug
        }
      }
    }
  `;

  try {
    const res = await API.graphql(graphqlOperation(listCareers));
    const career = await res.data.listCareers.items;
    const paths = career.map((less) => ({
      params: { cid: `${less.slug}` },
    }));
    console.log(paths);
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const { cid } = params;

  const getCareer = /* GraphQL */ `
    query MyQuery($slug: String!) {
      careersBySlug(slug: $slug) {
        items {
          altName
          apcCopy
          beverageCopy
          cmpmCopy
          coreCopy
          cpsCopy
          dayInLife {
            items {
              name
              desc
              icon
            }
          }
          electiveCopy
          freeCopy
          media
          slug
          subhead
          title
        }
      }
    }
  `;

  const variables = {
    slug: cid, // key is "input" based on the mutation above
  };

  const res = await API.graphql(graphqlOperation(getCareer, variables));
  const career = await res.data.careersBySlug.items[0];

  return { props: { career }, revalidate: 10 };
}

export default Index;
