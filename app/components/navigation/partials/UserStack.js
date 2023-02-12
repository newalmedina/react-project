
import { Button } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import User from "../../User/User"
import HeaderSearchInput from "./HeaderSearchInput"
import HeaderLogo from "./HeaderLogo"
import HeaderSearchButton from "./HeaderSearchButton"



const Stack = createNativeStackNavigator()

const UserStack = () => {
    return (
        <>
            <Stack.Navigator initialRoutName="User">
                <Stack.Screen name="User" component={User}
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

export default UserStack