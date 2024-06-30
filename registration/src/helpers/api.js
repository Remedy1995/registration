import axios from 'axios';
// const baseUrl = `http://10.221.96.142:6914`;
//const baseUrl = `https://apps.prudential.com.gh/hrdesk_api`;
// const baseUrl = `https://apps.prudential.com.gh/hrapps`;
const baseUrl = `http://localhost:8000`;
export const getAxios = function (baseURL = baseUrl) {
    let token = localStorage.getItem("CURRENT_TOKEN");
    token = token !== null ? JSON.parse(token) : token;
   
    const instance = axios.create({
        baseURL,
        headers: { 'Access-Control-Allow-Origin': '*', 'Authorization': `Bearer ${token}` }
    });

    instance.interceptors.response.use((response) => {
        return response;
    }, function (error) {
        if (error.response.status === 400) return Promise.resolve(error.response);
        if(error.response.status === 401){
            localStorage.removeItem('CURRENT_TOKEN');
            window.location.href ='/'
        }
        
        return Promise.reject(error.response);
    });

    return instance;
}