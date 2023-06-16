import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Home from '../Pages/Home';
import CheckOut from '../Pages/CheckOut';
import Login from '../Pages/Login';
import Payments from '../Pages/Payments';
import Footer from '../Components/Footer';
import Register from '../Pages/Register';

const promise = loadStripe("pk_test_51JQKA1FVshOTkhC97ZXUNFcvOv1LuJgH0O5YaWo8rgNmTfE65Z5dvcJel1pvdsFBlxV1WPrEf2i0sFcrE2saRj4Q000bmXUYxD");

function AmazonClone() {
    return (
        <div>
            <Router>
              <div className = "app_amazon">
                <Switch>
                  <Route path = "/checkout">
                    <CheckOut />
                  </Route>
                  <Route path = "/login">
                    <Login />
                  </Route>
                  <Route path = "/register">
                    <Register />
                  </Route>
                  <Route path = "/payments">
                    <Elements stripe = {promise}>
                      <Payments />
                    </Elements>
                  </Route>
                  <Route path = "/">
                    <Home />
                  </Route>
                </Switch>
                <Footer />
              </div>
            </Router>
        </div>
    )
}

export default AmazonClone
