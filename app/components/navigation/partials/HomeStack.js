
import { Button, Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../../Home/Home";
import HeaderLogo from "./HeaderLogo";
import HeaderSearchInput from "./HeaderSearchInput";
import HeaderSearchButton from "./HeaderSearchButton";


const Stack = createNativeStackNavigator()
const HomeStack = () => {
    return (
        <>
            <Stack.Navigator initialRoutName="Home">
                <Stack.Screen name="Home" component={Home}
                    options={{
                        // title: 'Home', //Set Header Title
                        headerTitle: () => <HeaderSearchInput />,
                        headerLeft: () => <HeaderLogo />,
                        headerRight: () => <HeaderSearchButton />,
                    }}
                />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack