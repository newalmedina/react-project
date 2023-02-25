
import { Text, View } from "react-native"
import UserNotLoged from "./UserNotLoged";

const User = () => {
    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <View className="py-6 px-6">
                <UserNotLoged />
            </View>
        </View >
    );
}

export default User;