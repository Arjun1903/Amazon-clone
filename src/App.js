import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import { auth } from "./Component/firebase";
import { useStateValue } from "./Component/StateProvider";
import Footer from "./Component/Footer";
import Payment from './Component/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from "@stripe/react-stripe-js"
import Order from './Component/Order'

const promise =loadStripe(
  "pk_test_51HQGp5EDpRoUxaMyzHSrw1jau1WGPNadVB1CBuWE5IeIV6NqIXciZxBJHIEpyt3X1GCBfVLJbOFpEML3oZmCs3ds0090frKegA"
);

console.log(promise)

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        //user just logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
     
            <Login />
          </Route>

          <Route path="/orders">
          <Header />
            <Order />
            <Footer showBelow={1}/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer showBelow={1}/>
         
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer showBelow={1}/>
         
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer showBelow={1}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
