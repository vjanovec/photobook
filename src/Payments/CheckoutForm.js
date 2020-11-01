import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import { useSelector } from 'react-redux'

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
      
      console.log(user);
      axios.post("https://us-central1-photobook-b74d7.cloudfunctions.net/createPaymentIntent", {
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          items: [{id: "testphotobook"}], 
        customerDetails: {
          metadata: {'uid': auth.userUid},
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          phone: '',
            address: {
              city: user.city,
              country: user.country,
              line1: user.address_l1,
              line2: user.address_l2,
              postal_code: user.zipcode,
            },
        }
      }
      })
      .then(data => {
        setClientSecret(data.data.clientSecret);
      });
  }, []);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: ev.target.name.value
        }
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  const history = useHistory();
  const back = (e) => {
    e.preventDefault();
    history.push('/shipping')
  }

  return (
    <form id="payment-form" className='stripe-form card card-body shadow-sm' onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
        className='btn btn-block btn-primary w-100 mt-2'
      >
        <span id="button-text">
          {processing ? (
            <div className="stripe-spinner" id="spinner"></div>
          ) : (
            "Pay"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="stripe-card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "stripe-result-message" : "stripe-result-message stripe-hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
      <div class="row d-flex justify-content-between">
            <button
              class="btn btn-primary bg-white text-primary"
              
              type="submit" onClick={e => back(e)}
            >
              Back
            </button>
            {/* <button class="btn btn-primary" type="submit" onClick={e => saveAndContinue(e)}>
              Save & Continue
            </button> */}
          </div>
    </form>
  );
}