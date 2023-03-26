import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import ApiManager from "../Api/ApiManager";
import { UserContext } from "../Context";


const AuthenticatedUser = async () => {

    await ApiManager.get('auth/user')
        .then((response) => {
            return response.data
            return true
        }).catch((error) => {
            console.log(error)
            return []
        });

}

const LogoutUser = async () => {

    await ApiManager.get('auth/logout')
        .then((response) => {
            console.log("session cerrada");
            AsyncStorage.removeItem('authToken', response.data.access_token);
            return []
        }).catch((error) => {
            console.log(error)
            return []
        });


}

export { AuthenticatedUser, LogoutUser };