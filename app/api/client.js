import { create } from 'apisauce';

 const authApi = create({
    baseURL: "http://127.0.0.1:8000/auth",
});


export default {
    authApi,
};