import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import React, { useState } from 'react';
import { Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Card from "../../Components/Card";
import SymptomCard from "../../Components/SymptomCard";
import Therapist from "../../Components/Therapist";
import { TouchableHighlight } from "react-native-web";
import SignIn from "./signIn";

const Welcome = () => {
    const [mostrarSegundoComponente, setMostrarSegundoComponente] = useState(false);
    const handlePress = () => {
        // Cuando se presiona el botón, cambiamos el estado para mostrar el segundo componente
        //setMostrarSegundoComponente(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Welcome!</Text>
            <Text style={styles.text2}>Sign in or create a new account</Text>
            <Image source={require("../../../assets/globo.png")} style={styles.image} ></Image>
            <TouchableOpacity onPress={handlePress} >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Go to Sign In</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} >
                <View style={styles.button2}>
                    <Text style={styles.buttonText2}>No acount yet?</Text>
                    <Text style={styles.buttonText3}>Sign up</Text>
                </View>
            </TouchableOpacity>

            {mostrarSegundoComponente && <SignIn />}
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 110,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    image: {
        width: 300,
        height: 300,
    },
    text2: {
        fontSize: 15,
        marginTop: 15,
        marginBottom: 20,
        color: "gray"
    },
    textHeader: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#495258",
    },
    button: {
        backgroundColor: '#FF8A39',
        padding: 10,
        borderRadius: 10,
        width: 300,
        height: 60,
        marginTop: 50,
        justifyContent: "center"
    },
    button2: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        width: 300,
        height: 60,
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: "center",
    },
    buttonText2: {
        color: 'white',
        fontSize: 18,
        textAlign: "center",
    },
    buttonText3: {
        color: '#FF8A39',
        fontSize: 18,
        textAlign: "center",
    },
});
