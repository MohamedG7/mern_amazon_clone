import { START_AUTH, SUCCESS_AUTH, FAILURE_AUTH, END_AUTH, LOG_USER_OUT } from '../actions';

const UserStorage = (currentUser) => {
    localStorage.setItem('user', JSON.stringify(currentUser ? currentUser : null));
};
const storageUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const authItems = (currentUser) => {
    UserStorage(currentUser);
    if(currentUser) {
        const log = {
            id: currentUser._id,
            email: currentUser.email,
            token: currentUser.accessToken
        };
        return {
            log
        };
    };
};

export const userState = {
    currentUser: storageUser,
    ...authItems(storageUser),
    isFetching: false,
    error: false,
    errorMsg: ""
};

export default (state, action) => {
    switch(action.type) {
        case START_AUTH:
            return {
                ...state,
                isFetching: true
            };
            break;
        case SUCCESS_AUTH:
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload.user,
                ...authItems(action.payload.user)
            };
            break;
        case FAILURE_AUTH:
            return {
                ...state,
                error: true,
                errorMsg: action.payload.msg
            };
            break;
        case LOG_USER_OUT:
            return {
                ...state,
                currentUser: null,
                ...authItems(null)
            };
            break;
        case END_AUTH:
            return {
                ...state,
                error: false,
                errorMsg: ""
            };
            break;
        default:
            return state;
    }
};