import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-tindevep.herokuapp.com'
});

export default api;