import axios from "axios";


const ApiManager = axios.create({
    // baseURL: "http://react-project.test/api/v1/",
    baseURL: "http://127.0.0.1/react-project/backend-laravel/public/api/v1/",

})


export default ApiManager;