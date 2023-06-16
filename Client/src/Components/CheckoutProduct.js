import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import { useCart } from '../Server/Context/Hooks/cartHook';

function CheckoutProduct({id, title, image, price, rating}) {
  const { removeProduct } = useCart();
    return (
        <div className = 'checkoutProduct'>
            <img className = "checkoutProduct__img" src = {image} alt = '' />
            <div className = 'checkoutProduct__info'>
              <p className = 'checkoutProduct__title'>{title}</p>
              <p className = "checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
              </p>
              <div className = "checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><StarIcon style={{ color: yellow[700] }} /></p>
                    ))
                }
              </div>
              <button onClick = {() => removeProduct({id})}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
