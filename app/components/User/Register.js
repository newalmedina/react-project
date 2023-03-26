import React, { useState, useContext } from 'react';
import ApiManager from '../Api/ApiManager';
import Constants from 'expo-constants'; import { Modal, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { Formik } from 'formik';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../Context';
import * as Yup from 'yup';

const Registe = () => {
    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [gender, setGender] = useState("male");

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const login = (values) => {
        alert("lohin")
    };

    const validationSchema = Yup.object().shape({
        //  name: Yup.string().required('Please enter your name'),
        first_name: Yup.string().required('Campo nombre es obligatorio'),
        last_name: Yup.string().required('Campo apellidos es obligatorio'),
        gender: Yup.string(),
        phone: Yup.string().required('Campo teléfono es obligatorio'),

        password: Yup.string()
            .required('Campo Contraseña es obligatorio')
            .min(6, 'Campo Contraseña debe contener mínimo por 6 carácteres'),

        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Contraseña no coincide'),
        email: Yup.string().email('Campo email es invalida').required('Campo email es obligatorio')
            .test('Unique email', 'Este usuario Existe en la base de datos', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        ApiManager.post(`auth/user/exist`, { email: value })
                            .then((res) => {
                                console.log(res.data)
                                if (res.data === 1) {
                                    resolve(false);
                                } else {
                                    resolve(true)
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    })
                }
            ),
    });

    const singUp = async (data) => {
        console.log(data)
        ApiManager.post('auth/signup', data)
            .then(async response => {
                console.log(response.data)

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
                console.log(error);
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


    return (
        <View >
            <TouchableOpacity className="mt-5 bg-red-600  p-4 rounded-lg " onPress={toggleModal}>
                <Text className="text-2xl  text-center  text-white font-bold ">Registrarse</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" >
                <ScrollView style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }} className=" p-4">
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                        <TouchableOpacity onPress={toggleModal}  >
                            <FontAwesome5 name="times" size={32} color="black" color='#ff0000' />
                        </TouchableOpacity>
                    </View>
                    <Text className="text-3xl  text-center text-blue-600 font-bold pt-20 pb-10 ">
                        <FontAwesome5 name="user" size={100} color="black" />
                    </Text>

                    <Formik
                        initialValues={{ first_name: '', last_name: '', gender: '', phone: '', email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => singUp(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View className="pb-20">
                                <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('first_name')}
                                    onBlur={handleBlur('first_name')}
                                    value={values.first_name}
                                    placeholder="Introduce Nombre"
                                />
                                {touched.first_name && errors.first_name && <Text className="  text-red-400 text-base">{errors.first_name}</Text>}

                                <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('last_name')}
                                    onBlur={handleBlur('last_name')}
                                    value={values.last_name}
                                    placeholder="Introduce Apellidos"
                                />
                                {touched.last_name && errors.last_name && <Text className="  text-red-400 text-base mb-2">{errors.last_name}</Text>}

                                {/* <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('gender')}
                                    onBlur={handleBlur('gender')}
                                    value={values.gender}
                                    placeholder="Introduce Sexo"
                                />
                                {touched.gender && errors.gender && <Text className="  text-red-400 text-base">{errors.gender}</Text>} */}
                                <Text></Text>
                                <Text></Text>
                                <RadioButtonGroup
                                    containerStyle={{ marginBottom: 10 }}
                                    selected={values.gender}
                                    onSelected={handleChange('gender')}
                                    radioBackground="green"
                                    name="gender"
                                    onBlur={handleBlur('gender')}
                                    size={22}
                                    style={{ flexDirection: "row" }}
                                >

                                    <RadioButtonItem style={{ marginBottom: 10 }} value="male" label={
                                        <Text >Hombre</Text>
                                    } />
                                    <RadioButtonItem style={{ marginBottom: 10 }} value="female" label={
                                        <Text >Mujer</Text>
                                    } />

                                </RadioButtonGroup>
                                <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    value={values.phone}
                                    keyboardType='numeric'
                                    placeholder="Introduce Teléfono"
                                />
                                {touched.phone && errors.phone && <Text className="  text-red-400 text-base">{errors.phone}</Text>}

                                <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Introduce email"
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
                                <TextInput
                                    className=" border-b border-blue-400 py-5 text-base"
                                    onChangeText={handleChange('passwordConfirmation')}
                                    onBlur={handleBlur('passwordConfirmation')}
                                    value={values.passwordConfirmation}
                                    placeholder="Vuelve a introducir Contraseña"
                                    secureTextEntry
                                />
                                {touched.passwordConfirmation && errors.passwordConfirmation && <Text className="  text-red-400 text-base">{errors.passwordConfirmation}</Text>}

                                <View className="mt-5 ">
                                    <TouchableOpacity className="mt-5 bg-green-600  p-4  rounded-lg " onPress={handleSubmit}>
                                        <Text className="text-2xl  text-center  text-white font-bold ">Registrarse</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )}
                    </Formik>


                </ScrollView>
            </Modal>
        </View>
    );
};

export default Registe;