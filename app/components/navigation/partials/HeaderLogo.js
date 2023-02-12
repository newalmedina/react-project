import { Image, View } from "react-native";
import Logo from "../../../assets/img/logo.jpg"

const HeaderLogo = () => {
    return (
        //source={Logo}
        <View style={{ flexDirection: 'row' }} className="pb-2">
            <Image
                source={Logo}
                style={{
                    width: 60,
                    height: 40,
                    borderRadius: 40 / 2,
                    marginLeft: 0,
                    borderRadius: 5


                }}
            />

        </View>



    );
}

export default HeaderLogo;