import { createUser } from '../../helpers/utils';

export default async function handler(req, res) {
  let { email, firstName, lastName, phone } = req.body;
  const user = await createUser(email, firstName, lastName, phone);
  return res.status(200).json({ data: user });
}
