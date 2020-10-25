import React, { Component, useEffect, Fragment } from 'react';
import { Link , useHistory } from 'react-router-dom'
import Stripe from '../../Payments/Stripe'

import Layout from '../layout';

const Payment = () => {
  const history = useHistory();

  const saveAndContinue = (e) => {
    e.preventDefault();
    history.push('/');
  }


    return (
      
        <Layout a={null} b={null} c={<Stripe />}/>
      );
}
export default Payment;
