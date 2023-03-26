import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants'; import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ApiManager from '../Api/ApiManager';
import { AuthenticatedUser } from '../Auth/AuthenticatedUser';
import { UserContext } from '../Context';


const Login = () => {
    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)


    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState("");
    const [errorStyle, setErrorStyle] = useState("");
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
    }, []);

    const iniciarSesion = async (data) => {
        console.log(data)
        setErrorStyle("")
        setError("")

        ApiManager.post('auth/login', data)
            .then(async response => {

                await AsyncStorage.setItem('authToken', response.data.access_token);
                //setAutenticatedUser(await AuthenticatedUser())
                await ApiManager.get('auth/user')
                    .then((response) => {
                        setAutenticatedUser(response.data)
                        return true
                    }).catch((error) => {
                        console.log(error)

                        setAutenticatedUser([])
                        return false;
                    });
                toggleModal()
            })
            .catch(error => {
                setAutenticatedUser([])
                if (error.response.status === 401) {
                    setErrorStyle("bg-red-600  p-4 rounded")
                    setError("Usuario No existe")
                }
                if (error.response.status === 403) {
                    setErrorStyle("bg-yellow-600  p-4 rounded")
                    setError("Usuario inactivo contacta con la administración")
                }
                AsyncStorage.removeItem('token');
            });

    };

    const validationSchema = Yup.object().shape({
        //  name: Yup.string().required('Please enter your name'),
        email: Yup.string().email('Campo email es invalida').required('Campo Email es obligatorio'),
        password: Yup.string()
            .required('Campo Contraseña es obligatorio')
            .min(6, 'Campo Contraseña debe contener mínimo por 6 carácteres'),
    });

    return (
        <View >
            <TouchableOpacity className="mt-5 bg-blue-600  p-4 rounded-lg " onPress={toggleModal}>
                <Text className="text-2xl  text-center  text-white font-bold ">Iniciar sesión</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" >
                <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }} className=" p-4">
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                        <TouchableOpacity onPress={toggleModal}  >
                            <FontAwesome5 name="times" size={32} color="black" color='#ff0000' />
                        </TouchableOpacity>
                    </View>
                    <Text className="text-3xl  text-center text-blue-600 font-bold pt-20 pb-10 ">
                        <FontAwesome5 name="user-lock" size={100} color="black" />
                    </Text>
                    <Text className={errorStyle}>{error}</Text>

                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => iniciarSesion(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>
                                <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Introduce Email"
                                />
                                {touched.email && errors.email && <Text className="  text-red-400 text-base">{errors.email}</Text>}

                                <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder="Introduce Contraseña"
                                    secureTextEntry
                                />
                                {touched.password && errors.password && <Text className="  text-red-400 text-base">{errors.password}</Text>}

                                <View className="mt-5">
                                    <TouchableOpacity className="mt-5 bg-green-600  p-4 rounded-lg " onPress={handleSubmit}>
                                        <Text className="text-2xl  text-center  text-white font-bold ">Iniciar Sesion</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )}
                    </Formik>


                </View>
            </Modal>
        </View>
    );
};

export default Login;