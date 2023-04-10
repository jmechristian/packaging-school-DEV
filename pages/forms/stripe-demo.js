import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/layout/CheckoutForm';

const StripeDemo = () => {
  // Make sure to call loadStripe outside of a component’s render to avoid
  // recreating the Stripe object on every render.
  // This is your test publishable API key.
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const [clientSecret, setClientSecret] = React.useState('');

  //   useEffect(() => {
  //     // Create PaymentIntent as soon as the page loads
  //     fetch('/api/create-payment-intent', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         items: [{ id: 'cost-to-submit-CMPM-application' }],
  //         metadata: {
  //           Email: 'jmechristian@gmail.com',
  //           Name: 'Jamie Christian',
  //           Application: 'CMPM',
  //         },
  //         receipt_email: 'jmechristian@gmail.com',
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setClientSecret(data.clientSecret));
  //   }, []);
  //   const appearance = {
  //     theme: 'stripe',
  //   };
  //   const options = {
  //     clientSecret,
  //     appearance,
  //   };

  return (
    <div className='max-w-5xl mx-auto py-40'>
      {/* {clientSecret && ( */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      {/* )} */}
    </div>
  );
};

export default StripeDemo;
