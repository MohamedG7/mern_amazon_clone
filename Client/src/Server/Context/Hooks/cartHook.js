import { useContext } from 'react';
import { CartContext } from '../ContextProviders/cartContext';

export const useCart = () => {
    const cartTX = useContext(CartContext);
    return {
        ...cartTX
    };
};