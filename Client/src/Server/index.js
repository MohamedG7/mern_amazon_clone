import axios from 'axios';

const endPoint = 'https://amazon-clone22.herokuapp.com/api';

const config = {
    'Content-Type': 'application/json'
};

export const publicRequest = axios.create({
    baseURL: endPoint,
    headers: config
});