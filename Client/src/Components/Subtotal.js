import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useCart } from '../Server/Context/Hooks/cartHook';
import '../style/style.css'
import { useHistory } from 'react-router';


function Subtotal() {
  const history = useHistory();
  const { cartItems, total } = useCart();
  const formatNumber = number => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
  }
    
    return (
        <div className = 'subtotal'>
            <CurrencyFormat
                renderText ={ (value) => (
                  <React.Fragment>
                     <p>
                       Subtotal  ({cartItems?.length} items): <strong>{`${value}`}</strong>
                     </p>
                     <small className = "subtotal_gift">
                       <input type = "checkbox" /> this order contains a gift 
                     </small>
                  </React.Fragment>
                )}
                decimalScale = {2}
                value = {formatNumber(total)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
            <button onClick = {e => history.push('/payments')}>check out</button>
        </div>
    )
}

export default Subtotal
