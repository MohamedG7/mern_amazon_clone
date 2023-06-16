import React from 'react'
import { useCart } from '../Server/Context/Hooks/cartHook';
import CheckoutProduct from '../Components/CheckoutProduct';
import Subtotal from '../Components/Subtotal';
import Header from '../Components/Header'
import { useUser } from '../Server/Context/Hooks/userHook';


function CheckOut() {
  const { cartItems, clearCart } = useCart();
  const { currentUser } = useUser();
  const user = currentUser;
    return (
        <div className = 'checkout'>
            <Header />
            <img className = 'checkout__img' src = 'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt = '' />
            {cartItems?.length === 0 ? (
                <div>
                   <h3>
                      Hello
                      <br />
                      {user?.email}
                   </h3>
                   <h1> Your Cart Is Empty </h1>
                   <p>
                     You Have No Items In Your Cart. To Buy One Or More Than One Item You Have To Click On "Add To Cart" Next To The Item
                   </p>
                   <hr />
                </div>
            ) : (
                <div>
                   <h3>
                      Hello
                      <br />
                     {user?.email}
                   </h3>
                   <h1 className = 'checkout__title'> Your Cart </h1>
                   <hr />
                      <div>
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
                     <button className = "clear" onClick = {() => clearCart()}>Clear Cart</button>
                </div>
            )}
            {cartItems.length > 0 && (
                <div className = 'checkout__right'>
                  <Subtotal />
                </div>
            )}
        </div>
    );
}

export default CheckOut
