import { TextInput } from "react-native";

const HeaderSearchInput = () => {
    return (

        <TextInput
            className="shadow-md appearance-none border rounded w-60 py-2 ml-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            inlineImageLeft='search_icon'
            placeholder="Buscar productos..."
        />



    );
}

export default HeaderSearchInput;