
import { useContext } from "react";
import { Text, View } from "react-native"
import { UserContext } from "../Context";
import UserLoged from "./UserLoged";
import UserNotLoged from "./UserNotLoged";

const User = () => {

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)

    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <View className="py-6 px-6">
                <Text>
                    hola
                </Text>
                {autenticatedUser.id
                    ?
                    <UserLoged />
                    :
                    <UserNotLoged />
                }
            </View>
        </View >
    );
}

export default User;