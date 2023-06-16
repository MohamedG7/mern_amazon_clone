import React, { createContext, useReducer } from "react";
import cart, { cartState } from "../reducers/cart";
import { addToCart, removeFromCart, clearAllCart } from '../actions';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart, cartState);

    const addProduct = addToCart(dispatch);
    const removeProduct = removeFromCart(dispatch);
    const clearCart = clearAllCart(dispatch);

    const contextValues = {
        addProduct,
        removeProduct,
        clearCart,
        ...state
    }

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
    );
};