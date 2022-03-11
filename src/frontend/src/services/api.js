import axios from 'axios';
import { API_URL } from 'config/environment';


const api = axios.create({
    baseURL: API_URL,
})


api.interceptors.request.use(
    (request) => {
        return request
    },
    (error) => {
        return error
    }
);

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return error
    }
);

export default api