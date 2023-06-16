import { ADD_ITEM, REMOVE_ITEM, CART_ERROR, CLEAR } from '../actions';

const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

export const cartState = {
    cartItems: storage,
    ...sumItems(storage),
    error: false,
    errMsg: "",
    checkout: false,
};

export default (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            if (!state.cartItems.find(item => item._id === action.payload._id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } 
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item._id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item._id !== action.payload.id)]
            }
        case CLEAR:
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        case CART_ERROR:
            return {
                ...state,
                error: true,
                errMsg: action.payload.msg
            };
            break;
        default:
            return state

    }
};