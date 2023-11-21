import { Amplify, API } from 'aws-amplify';
import { listSalesBars } from '../src/graphql/queries';

export const getSalesBarItems = async () => {
  const items = await API.graphql({
    query: listSalesBars,
  });
  return items.data;
};
