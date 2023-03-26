
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import HomeStack from './partials/HomeStack'
import UserStack from './partials/UserStack'
import CategoriesStack from './partials/CategoriesStack'
import CartStack from './partials/CartStack'


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return (
        <>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home' || route.name === 'HomeTab') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'User' || route.name === 'UserTab') {
                            iconName = focused ? 'user' : 'user';
                        } else if (route.name === 'Cart' || route.name === 'CartTab') {
                            iconName = focused ? 'shopping-cart' : 'shopping-cart';
                        } else if (route.name === 'Categories' || route.name === 'CategoriesTab') {
                            iconName = focused ? 'list' : 'list';
                        }

                        return <FontAwesome5 name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FC4721',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false


                })}
            >
                <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarShowLabel: false, }} />
                <Tab.Screen name="UserTab" component={UserStack} options={{ tabBarShowLabel: false, }} />
                <Tab.Screen name="CartTab" component={CartStack} options={{ tabBarShowLabel: false, }} />
                <Tab.Screen name="CategoriesTab" component={CategoriesStack} options={{ tabBarShowLabel: false, }} />
            </Tab.Navigator>
        </>
    )
}

export default TabNavigation