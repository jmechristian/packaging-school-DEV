import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import * as prismic from '@prismicio/client';
import { repositoryName } from '../prismicio';

const prismicClient = prismic.createClient(
  prismic.getEndpoint(repositoryName),
  {
    // If your repository is private, add an access token
    accessToken: '',
  }
);

export const client = new ApolloClient({
  link: new HttpLink({
    uri: prismic.getGraphQLEndpoint(repositoryName),
    fetch: prismicClient.graphQLFetch,
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
});
