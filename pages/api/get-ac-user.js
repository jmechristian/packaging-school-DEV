import { getUser } from '../../helpers/utils';

export default async function handler(req, res) {
  let email = req.query.email;
  const user = await getUser(email);
  return res.status(200).json({ data: user });
}
