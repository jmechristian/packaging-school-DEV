// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API } from 'aws-amplify';
import { listLessons } from '../../src/graphql/queries';

export default async function handler(req, res) {
  const getLessons = await API.graphql({
    query: listLessons,
    variables: {
      filter: { status: { eq: 'PUBLISHED' } },
    },
  });

  return getLessons.data.listLessons.items
    ? res.status(200).json({ lessons: getLessons.data.listLessons.items })
    : res.status(200).json({ error: getLessons.errors });
}
