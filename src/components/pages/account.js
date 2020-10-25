import React, { Component, useEffect } from 'react';
import { Link , useHistory } from 'react-router-dom';
import AccountDetailsForm from '../accountDetailsForm';

import Layout from '../layout';

const Account = () => {




    return (
      
        <Layout a={null} b={null} c={<AccountDetailsForm />}/>
      );
}

export default Account;
