import { Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
const HeaderSearchButton = () => {
    return (
        <TouchableOpacity onPress={() => alert("press")}>
            <FontAwesome5 name="search" size={24} color="black" />
        </TouchableOpacity>
    );
}

export default HeaderSearchButton;