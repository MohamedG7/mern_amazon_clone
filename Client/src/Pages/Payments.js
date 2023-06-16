import React from 'react'
import Header from '../Components/Header'
import { useCart } from '../Server/Context/Hooks/cartHook';
import { useUser } from '../Server/Context/Hooks/userHook';
import CheckoutProduct from '../Components/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format'
import { publicRequest } from '../Server/index';


function Payments() {
    const { cartItems, total, clearCart } = useCart();
    const { currentUser } = useUser();
    const user = currentUser;

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [errorState, setErrorState] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [errorEvent, setErrorEvent] = useState("");

    const submitPay = async (e) => {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      };

      setProcessing(true);

      const cardElement = elements.getElement(CardElement);

      const { error, token } = await stripe.createToken(cardElement);

      if (error) {
        setErrorState(true);
        setErrMsg(error);
        return;
      };

      if (!error) {
        await publicRequest.post("/stripe/", {
          token: token.id,
          currency: "usd",
          price: total*100,
        }).then((res) => {
          setSucceeded(true);
          setProcessing(false);
        }).catch((error) => console.log("error:----->", error.message))
      };
      setTimeout(() => {
        setSucceeded(false);
      }, 3000);
    };

    const handleChange = event => {
      setDisabled(event.empty);
      setErrorEvent(event.error ? event.error.message : "");
    };
    return (
        <div className = "payment">
            <Header />
            <div className = "payment__container">
               <h1>
                  Checkout (<Link to = "/checkout">{cartItems.length} items</Link>)
               </h1>
               <div className = "payment__section">
                  <div className = "payment__title">
                    <h3>Delivery Address</h3>
                  </div>
                  <div className = "payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                  </div>
               </div>
               <div className = "payment__section">
                  <div className = "payment__title">
                    <h3>Review Items And Delivery</h3>
                  </div>
                  <div className = "payment__items">
                    {cartItems.map(item => (
                        <CheckoutProduct
                          id = {item._id}
                          title = {item.title}
                          image = {item.image}
                          price = {item.price}
                          rating = {item.rating}
                        />
                    ))}
                  </div>
               </div>
               <button className = "clear" onClick = {() => clearCart()}>Clear Cart</button>
               <div className = "payment__section">
                   <div className = "payment__title">
                      <h3>Payment Method</h3>
                      <div className = "payment__details">
                        <form onSubmit = {submitPay}>
                          <CardElement onChange = {handleChange} />
                          <div className = "payment__priceContaier">
                           <CurrencyFormat
                            renderText ={ (value) => (
                               <h3> OrderTotal: {value}</h3>
                            )}
                            decimalScale = {2}
                            value = {total}
                            displayType = {"text"}
                            thousandSeparator = {true}
                            prefix = {"$"}
                           />
                           <button disabled = {processing || disabled} className = "pay">
                              <span>
                                 {
                                     processing ? <p> processing </p> : "BUY NOW"
                                 }
                              </span>
                           </button>
                          </div>
                          {errorState && <div>{errMsg}</div>}
                          {
                            succeeded && <h3
                              style = {{
                                color: "lightgreen"
                              }}
                            >Payment confirmed</h3>
                          }
                        </form>
                      </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Payments
