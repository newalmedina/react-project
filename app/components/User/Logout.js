import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { LogoutUser } from '../Auth/AuthenticatedUser';
import { AntDesign } from '@expo/vector-icons'
import { UserContext } from '../Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiManager from '../Api/ApiManager';

const Logout = () => {

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)

    const CerrarSesion = async () => {
        // setAutenticatedUser(LogoutUser())
        await ApiManager.get('auth/logout')
            .then((response) => {
                setAutenticatedUser([])
                console.log("session cerrada");
                AsyncStorage.removeItem('authToken', response.data.access_token);
                return []
            }).catch((error) => {
                console.log(error)
                return []
            });
    };



    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} className="mb-2" >
            <TouchableOpacity onPress={CerrarSesion}>
                <AntDesign name="logout" size={25} color="black" color='#ff0000' />
            </TouchableOpacity>
        </View>
    );
};

export default Logout;