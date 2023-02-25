import axios from "axios";

const ngrok = 'https://e61e-139-47-113-225.eu.ngrok.io/'
const ApiManager = axios.create({
    // baseURL: "http://react-project.test/api/v1/",
    baseURL: ngrok + "react-project/backend-laravel/public/api/v1/",

})


export default ApiManager;