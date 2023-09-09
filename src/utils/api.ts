import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL : 'https://google.com',
    headers : {
        Authorization : '',
        Accept : 'application/json'
    }
})