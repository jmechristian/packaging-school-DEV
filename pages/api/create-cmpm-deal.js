import { createCMPMDeal } from '../../helpers/utils';

export default async function handler(req, res) {
  const { contactId } = req.body;

  const deal = await createCMPMDeal(contactId);
  return res.status(200).json({ data: deal });
}
