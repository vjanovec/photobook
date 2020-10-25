import React, { Component, useEffect } from 'react';
import { Link , useHistory } from 'react-router-dom';
import ShippingDetails from '../shippingDetails';

import Layout from '../layout';

const Shipping = () => {




    return (
      
        <Layout a={null} b={null} c={<ShippingDetails />}/>
      );
}

export default Shipping;
