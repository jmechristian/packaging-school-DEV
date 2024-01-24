import { registgerCourseClick } from '../../helpers/api';

export default async function handler(req, res) {
  let { id, page } = req.body;
  const click = await registgerCourseClick(id, page);
  return res.status(200).json({ data: click });
}
