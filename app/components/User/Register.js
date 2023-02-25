import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
const Register = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View >
            <TouchableOpacity className="mt-5 bg-red-600  p-4 rounded-lg " onPress={toggleModal}>
                <Text className="text-2xl  text-center  text-white font-bold ">Registrarse</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" >
                <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }} className=" p-4">
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                        <TouchableOpacity onPress={toggleModal}  >
                            <FontAwesome5 name="times" size={32} color="black" color='#ff0000' />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-3xl  text-center text-blue-600 font-bold pt-20 ">
                        <FontAwesome5 name="user" size={100} color="#FC4721" />
                    </Text>
                    <View className="mt-10">
                        <TextInput
                            className=" border-b border-blue-400 py-5 text-base"
                            // onChangeText={(email) => setEmail(email)}
                            // value={email}
                            placeholder="Introduce Nombre"
                        />
                    </View>
                    <View className="mt-5">
                        <TextInput
                            className=" border-b border-blue-400 py-5 text-base"
                            // onChangeText={(email) => setEmail(email)}
                            // value={email}
                            placeholder="Introduce Apellidos"
                        />
                    </View>
                    <View className="mt-5">
                        <TextInput
                            className=" border-b border-blue-400 py-5 text-base"
                            // onChangeText={(email) => setEmail(email)}
                            // value={email}
                            placeholder="Introduce genero"
                        />
                    </View>
                    <View className="mt-5">
                        <TextInput
                            className=" border-b border-blue-400 py-5 text-base"
                            // onChangeText={(email) => setEmail(email)}
                            // value={email}
                            placeholder="Introduce teléfono"
                        />
                    </View>
                    <View className="mt-5">
                        <TextInput
                            className=" border-b border-blue-400 py-5 text-base"
                            // onChangeText={(email) => setEmail(email)}
                            // value={email}
                            secureTextEntry={true}
                            placeholder="Introduce Contraseña"
                        />
                    </View>
                    <View className="mt-5">
                        <TouchableOpacity className="mt-5 bg-green-600  p-4 rounded-lg " onPress={toggleModal}>
                            <Text className="text-2xl  text-center  text-white font-bold ">Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Register;