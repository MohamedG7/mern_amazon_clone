import { useContext } from 'react';
import { UserContext } from '../ContextProviders/userContext';

export const useUser = () => {
    const userTX = useContext(UserContext);
    return {
        ...userTX
    };
};