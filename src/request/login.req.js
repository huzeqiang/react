import axios from 'axios';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
       config.headers.common['Authorization'] = 'Bearer ' + token;
    return config;
})

export default class User {
    login(params={}){
        return axios.post('/business/user/login',params)
    }

    loginState(params={}){
        return axios.get('/business/user/info',{params})
    }
    
}