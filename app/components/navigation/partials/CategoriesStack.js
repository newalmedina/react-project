
import { Button } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


import Categories from "../../Categories/Categories";
import HeaderSearchInput from "./HeaderSearchInput";
import HeaderLogo from "./HeaderLogo";
import HeaderSearchButton from "./HeaderSearchButton";

const Stack = createNativeStackNavigator()

const CategoriesStack = () => {
    return (
        <>
            <Stack.Navigator initialRoutName="Categories">
                <Stack.Screen name="Categories" component={Categories}
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

export default CategoriesStack