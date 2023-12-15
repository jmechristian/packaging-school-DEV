import { updateDeal } from '../../helpers/utils';

export default async function handler(req, res) {
  let dealId = req.query.dealId;
  let formType = req.query.formType;
  const deal = await updateDeal(dealId, formType);
  return res.status(200).json({ data: deal });
}
