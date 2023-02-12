
import { ScrollView, Text, TouchableNativeFeedback, View } from "react-native"

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <View>
                <Text>Home</Text>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Text>Cart</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('User')}
                >
                    <Text>User</Text>
                </TouchableNativeFeedback>
            </View>
        </View >
    );
}

export default Home;