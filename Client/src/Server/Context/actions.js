import { publicRequest } from '../index';
////============================ ACTIONS =============================////

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR = 'CLEAR';
export const CART_ERROR = 'CART_ERROR';
export const START_AUTH = 'START_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAILURE_AUTH = 'FAILURE_AUTH';
export const LOG_USER_OUT = 'LOG_USER_OUT';
export const END_AUTH = 'END_AUTH';


////============================ ACTIONS CREATORS =============================////

//?--------------------- CART ----------------------

export const addToCart = dispatch => payload => {
    try {
        dispatch({type: 'ADD_ITEM', payload});
    } catch (error) {
        const msg = error.message;
        console.log("done !!!!!", ">>>>>", msg);
        dispatch({
            type: CART_ERROR,
            payload: {
                msg
            }
        });
    };
};

export const removeFromCart = dispatch => payload => {
    try {
        dispatch({type: 'REMOVE_ITEM', payload});
    } catch (error) {
        const msg = error.message;
        console.log("done !!!!!", ">>>>>", msg);
        dispatch({
            type: CART_ERROR,
            payload: {
                msg
            }
        });
    };
};

export const clearAllCart = dispatch => () => {
    try {
        dispatch({type: 'CLEAR'});
    } catch (error) {
        const msg = error.message;
        console.log("done !!!!!", ">>>>>", msg);
        dispatch({
            type: CART_ERROR,
            payload: {
                msg
            }
        });
    };
};

//? --------------------- USER ------------------------

export const logUsetOut  = dispatch => () => {
    dispatch({type: LOG_USER_OUT});
};

export const userRegister = dispatch => async (user) => {
    try {
        dispatch({type: START_AUTH});
        const { data } = await publicRequest.post("/auth/register", user);
        console.log("done !!!!!", ">>>>>", "auth success");
        dispatch({
            type: SUCCESS_AUTH,
            payload: {
                user: data
            }
        });
    } catch (error) {
        console.log("done !!!!!", ">>>>>", "auth failure");
        dispatch({
            type: FAILURE_AUTH,
            payload: {
                msg: error.response.data.error
            }
        });
    };

    setTimeout(() => {
        dispatch({type: END_AUTH});
    }, 5000);
};

export const logUserIn = dispatch => async (user) => {
    try {
        dispatch({type: START_AUTH});
        const { data } = await publicRequest.post("/auth/login", user);
        console.log("done !!!!!", ">>>>>", "auth success");
        dispatch({
            type: SUCCESS_AUTH,
            payload: {
                user: data
            }
        });
    } catch (error) {
        console.log("done !!!!!", ">>>>>", "auth failure");
        dispatch({
            type: FAILURE_AUTH,
            payload: {
                msg: error.response.data.error
            }
        });
    };
};