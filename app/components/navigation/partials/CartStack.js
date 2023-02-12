
import { ScrollView, Text, View, Button } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cart from "../../Cart/Cart";
import HeaderSearchInput from "./HeaderSearchInput";
import HeaderLogo from "./HeaderLogo";
import HeaderSearchButton from "./HeaderSearchButton";



const Stack = createNativeStackNavigator()

const CartStack = () => {
    return (
        <>
            <Stack.Navigator initialRoutName="Cart">
                <Stack.Screen name="Cart" component={Cart}
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

export default CartStack