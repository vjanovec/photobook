import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_4cLMgHseXJONLgj0b8YgFOSR004V2ybe7E");

const Stripe = () => { 
        return (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        );
}

export default Stripe;