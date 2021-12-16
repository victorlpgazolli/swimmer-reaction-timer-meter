import axios from 'axios';


const api = axios.create({
    baseURL: "",
})


api.interceptors.request.use(
    (request) => {
        console.log(request.url);
    },
    (error) => { }
);

api.interceptors.response.use(
    (response) => {

    },
    (error) => { }
);

export default api