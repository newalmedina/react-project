import { Image, Text, View } from "react-native";
import jumbotronImage from "../../assets/img/jumbotron-image.png"
const Jumbotron = () => {
    return (
        <View className="text-center relative overflow-hidden bg-no-repeat bg-cover w-full bg-green-200 h-60" >
            <Image className="object-cover  w-full h-full "
                source={jumbotronImage}
            />
        </View>
    );
}

export default Jumbotron;