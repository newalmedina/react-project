
import { Text, View, TouchableOpacity } from "react-native"

import Login from "./Login"
import Logout from "./Logout";
import Register from "./Register";
const UserLoged = () => {
    return (

        <View >
            <Logout />
            <Text className="text-xl text-rose-700">UsuarioLogeado.</Text>


        </View>
    );
}

export default UserLoged;