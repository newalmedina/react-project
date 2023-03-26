
import { ScrollView, Text, TouchableNativeFeedback, View } from "react-native"
import BestSeller from "./BestSeller";
import Jumbotron from "./Jumbotron";
import Novedades from "./Novedades";

const Home = ({ navigation }) => {
    return (
        <ScrollView >
            <Jumbotron />
            <View className="py-6 px-6">
                <Novedades />
                <BestSeller />
            </View>
        </ScrollView >
    );
}

export default Home;