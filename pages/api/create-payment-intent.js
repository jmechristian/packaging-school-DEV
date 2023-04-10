// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 2500;
};

export default async function handler(req, res) {
  const { metadata, receipt_email } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2500,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
    description: 'Cost To Submit CMPM Application',
    metadata,
    receipt_email,
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
