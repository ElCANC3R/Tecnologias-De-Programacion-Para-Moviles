
import React from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    FlatList,
    Image,
    Button,
} from "react-native";
import CustomText from "../CustomText";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomHeader from "../CustomHeader";
import { TouchableOpacity } from "react-native-gesture-handler";

const Screen2 = ({ navigation }) => {
    const { canGoBack, goBack } = navigation;
    return (
        <View style={styles.container}>

            <View style={styles.containerTodo}>

                <CustomText texto="Play and Win!" fontSize={45} color={"white"} bold={true} />
                <CustomText texto="Game for any one who likes to try" fontSize={15} color={"white"} bold={false} />
                <CustomText texto="Luck at guessing numbers" fontSize={15} color={"white"} bold={false} />
            </View>
            <Image source={require("../../../assets/foto.png")} style={styles.image} />
            <TouchableOpacity onPress={() => navigation.navigate("Pantalla2")}>
                <View style={styles.Touchable}>
                    <CustomText
                        texto="Get Started"
                        fontSize={20}
                        color={"white"}
                        bold={true}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Screen2;

const styles = StyleSheet.create({
    container: {
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#016F48",
        height: "100%",
    },
    containerTodo: {
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#016F48",
        borderRadius: 20,
        marginBottom: 35,
        marginTop: 50,
        width: 350,
    },
    image: {
        width: 360,
        height: 360 ,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },  
    Touchable: {
        backgroundColor: "#F7793C",
        borderRadius: 40,
        marginTop: 150,
        width: 250,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
});
