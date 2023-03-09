import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ngrok = 'https://09de-139-47-113-225.eu.ngrok.io/'

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