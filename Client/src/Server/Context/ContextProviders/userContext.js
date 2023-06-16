import React, { createContext, useReducer } from "react";
import { userRegister, logUserIn, logUsetOut } from '../actions';
import user, { userState } from "../reducers/user";


export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(user, userState);

    const login = logUserIn(dispatch);
    const register = userRegister(dispatch);
    const logout = logUsetOut(dispatch);

    const contextValues = {
        login,
        register,
        logout,
        ...state
    }

    return (
        <UserContext.Provider value={contextValues} >
            { children }
        </UserContext.Provider>
    );
};