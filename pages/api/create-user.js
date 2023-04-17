export default async function createUser(req, res) {
  if (req.method === 'POST') {
    res.status(201);
    res.json({ user: req.body });
  } else {
    res.status(402);
    res.json({ message: 'No' });
  }
}
