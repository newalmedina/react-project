import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ngrok = 'https://205e-139-47-116-197.eu.ngrok.io/'

const ApiManager = axios.create({
    baseURL: ngrok + "react-project/backend-laravel/public/api/",
    headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer:`
    }
});

ApiManager.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('authToken');
        console.log(token)
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


export default ApiManager;