import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from "react-native";
import React from "react";
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Card from "../../Components/Card";
import SymptomCard from "../../Components/SymptomCard";
import Therapist from "../../Components/Therapist";
import { TouchableHighlight } from "react-native-web";

const CreateAcount = () => {

    const handlePress = () => {
        // Cuando se presiona el botón, cambiamos el estado para mostrar el segundo componente
        setMostrarSegundoComponente(true);
    };

    return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" size={26} color="black" style={styles.icon} />
            <Text style={styles.textHeader}>Create new</Text>
            <Text style={styles.textHeader}>account</Text>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="orange" />
            <Text style={styles.text1}>Full name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
            />
            <Text style={styles.text2}>Email adress</Text>
            <TextInput
                style={styles.input}
                placeholder="name@example.com"
            />
            <Text style={styles.text2}>Create password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
            />
            <TouchableOpacity onPress={handlePress} >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In!</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CreateAcount;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        paddingTop: 100,
        alignItems: "start",
        backgroundColor: "white",

    },
    headerContainer: {
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    icon: {
        marginBottom: 50
    },
    text1: {
        fontSize: 16,
        marginTop: 85,
        color: "black"
    },
    text2: {
        fontSize: 16,
        marginTop: 25,
        color: "black"
    },
    input: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 20,
        color: "gray",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        height: 40
    },
    textHeader: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#495258",
    },
    remember: {
        padding: 10,
        borderColor: "gray",

        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        backgroundColor: '#FF8A39',
        padding: 10,
        borderRadius: 10,
        width: 300,
        height: 60,
        marginTop: 20,
        justifyContent: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: "center",
    },
});
