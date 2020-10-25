import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Editor from './components/pages/editor';
import Navbar from './components/navbar';
import SelectImages from './components/selectImages';
import InstagramSignUp from './components/signUpMethods/instagramSignUp';
import EmailSignUp from './components/signUpMethods/emailSignUp';
import StepList from './components/stepList';
import SmallBookPreview from './components/smallBookPreview';
import UploadPhotosHeading from './components/uploadPhotosHeading';
import StartHeading from './components/startHeading';
import AccountDetailsForm from './components/accountDetailsForm';
import ShippingDetails from './components/shippingDetails';

import Layout from './components/layout';

import UploadPhotos from './components/pages/uploadPhotos';
import Homepage from './components/pages/homepage';
import UploadPhotosGallery from './components/pages/uploadPhotosGallery';
import UploadPhotosInstagram from './components/pages/uploadPhotosInstagram';
import Account from './components/pages/account';
import Shipping from './components/pages/shipping';
import Payment from './components/pages/payment';
import Verifyig from './verifyig';

import "./App.css";
import "./assets/css/custom.css";
import "./assets/css/theme.css";
import "./assets/css/loaders/loader-pulse.css";
import "./assets/css/CardSectionStyles.css";

// REDUX
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Switch>
            <Route exact path="/verifyig" component={Verifyig} />
            <Route exact path="/upload/gallery" component={UploadPhotosGallery} />
            <Route exact path="/upload/instagram" component={UploadPhotosInstagram} />
            <Route exact path="/upload" component={UploadPhotos} />
            <Route exact path="/editor" component={Editor} />
            <Route exact path="/preview" component={null} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/shipping" component={Shipping} />
            <Route exact path="/delivery" component={null} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
