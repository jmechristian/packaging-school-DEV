import { createDeal } from '../../helpers/utils';

export default async function handler(req, res) {
  const { contactId, formType } = req.body;

  const deal = await createDeal(contactId, formType);
  return res.status(200).json({ data: deal });
}
