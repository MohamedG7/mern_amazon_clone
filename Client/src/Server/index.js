import axios from 'axios';

const endPoint = 'https://mern-amazon-2rc9.onrender.com/api';

const config = {
    'Content-Type': 'application/json'
};

export const publicRequest = axios.create({
    baseURL: endPoint,
    headers: config
});