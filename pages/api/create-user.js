import { PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from '../../libs/ddbDocClient';

const command = new QueryCommand({
  TableName: 'User-keuzpzdyrrd5bktwodatklekcu-staging',
  IndexName: 'byEmail',
  KeyConditionExpression: 'email = :email',
  ExpressionAttributeValues: {
    ':email': { S: email },
  },
});

export default async function createUser(req, res) {
  if (req.method === 'POST') {
    const isUser = res.status(201);
    res.json({ user: req.body });
  } else {
    res.status(402);
    res.json({ message: 'No' });
  }
}
