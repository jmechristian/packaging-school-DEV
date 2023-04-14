import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from '../../libs/ddbDocClient';

export default async function createUser(req, res) {
  if (req.method === 'POST') {
    res.status(201);
    res.json({ message: 'Yes' });
  } else {
    res.status(402);
    res.json({ message: 'No' });
  }
}
