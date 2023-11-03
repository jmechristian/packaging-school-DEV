const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          // ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: 'price_1O83fPBmL7ZGJcSLz2UOanOn',
              quantity: 1,
            },
          ],
          mode: 'payment',
          allow_promotion_codes: true,
          success_url: `${req.headers.origin}/registration-confirmation?success=true`,
          cancel_url: `${req.headers.origin}/registration-confirmation?canceled=true`,
        });

        res.redirect(302, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    case 'GET':
      try {
        const session = await stripe.checkout.sessions.retrieve(
          req.query.session_id
        );

        res.send({
          status: session.status,
          customer_email: session.customer_details.email,
        });
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    default:
      res.setHeader('Allow', req.method);
      res.status(405).end('Method Not Allowed');
  }
}
