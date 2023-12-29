import { Amplify, API } from 'aws-amplify';
import { getAuthor, listSalesBars } from '../src/graphql/queries';

export const getSalesBarItems = async () => {
  const items = await API.graphql({
    query: listSalesBars,
  });
  return items.data;
};

export const getAuthors = async (id) => {
  const items = await API.graphql({
    query: getAuthor,
    variables: { id: id },
  });
  return items.data;
};
