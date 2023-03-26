import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { LogoutUser } from '../Auth/AuthenticatedUser';
import { AntDesign } from '@expo/vector-icons'
import { UserContext } from '../Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiManager from '../Api/ApiManager';
import { FancyAlert } from 'react-native-expo-fancy-alerts';

const Logout = () => {

    const [visible, setVisible] = React.useState(false);
    const toggleAlert = React.useCallback(() => {
        setVisible(!visible);
    }, [visible]);


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
            <TouchableOpacity onPress={toggleAlert}>
                <AntDesign name="logout" size={25} color="black" color='#ff0000' />
            </TouchableOpacity>

            <View>
                <FancyAlert
                    visible={visible}
                    icon={<View style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: '100%'
                    }}>
                        <AntDesign name="logout" size={25} color="black" color='#ff0000' />
                    </View>}
                    style={{ backgroundColor: 'white' }}
                >
                    <Text style={{ marginTop: -16, marginBottom: 10, fontSize: 20 }}>¿Seguro que deseas cerrar sesión?</Text>
                    <View style={{
                        flexDirection: 'row', paddingBottom: 10, width: "100%", justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity onPress={toggleAlert} className="mt-5  bg-red-600  p-2 rounded-lg">
                            <Text>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={CerrarSesion} className="mt-5 bg-green-600  p-2 px-5 rounded-lg">
                            <Text>Si</Text>
                        </TouchableOpacity>
                    </View>
                </FancyAlert>
            </View>
        </View>


    );
};

export default Logout;