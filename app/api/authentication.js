import authApi from "./client";

const login = (username, password) => authApi.post('/jwt/create/',{username,password});

export default {
    login
}