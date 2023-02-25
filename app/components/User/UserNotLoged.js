
import { Text, View, TouchableOpacity } from "react-native"
import Login from "./Login"
import Register from "./Register";
const UserNotLoged = () => {
    return (

        <View >
            <Text className="text-xl text-rose-700">Iniciar o registrarse para disfrutar de una experiencia inimaginable.</Text>

            <Login />
            <Register />

        </View>
    );
}

export default UserNotLoged;