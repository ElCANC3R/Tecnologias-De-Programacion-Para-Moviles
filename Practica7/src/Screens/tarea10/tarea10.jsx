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
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome, MaterialIcons, Entypo, Feather } from "@expo/vector-icons";
import Card from "../../Components/Card";
import SymptomCard from "../../Components/SymptomCard";
import Therapist from "../../Components/Therapist";
import { TouchableHighlight } from "react-native-web";
import CustomText from "../../Components/CustomText.android";
import Card2 from "../../Components/Card/card2";

const Tarea10 = () => {

    const handlePress = () => {
        // Cuando se presiona el botón, cambiamos el estado para mostrar el segundo componente
        setMostrarSegundoComponente(true);
    };

    return (
        <View style={styles.container}>
            <View
                style={styles.rowContainer1}
            >
                <View>
                    <CustomText text="Discover" bold={true} fontSize={32} color="black" />
                    <CustomText text="your products" bold={false} fontSize={30} color="#495258" />
                </View>
                <FontAwesome name="user-secret" size={50} color="black"
                    style={styles.icon}
                />
            </View>
            <View
                style={styles.rowContainer}
            >
                <Entypo name="magnifying-glass" size={30} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                />
                <View style={styles.iconContainer}>
                    <MaterialIcons name="settings-input-component" size={45} color="black" />
                </View>
            </View>
            <View style={styles.rowContainer2}>
                <TouchableOpacity style={styles.rowContainer3}>
                    <CustomText text="Miniso" bold={false} fontSize={15} color="gray" />
                    <Feather name="x" size={15} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContainer}>
                    <CustomText text="Neurso" bold={false} fontSize={15} color="gray" />
                    <Feather name="x" size={15} color="black" />
                </TouchableOpacity>
            </View>
            <CustomText text="Popular Product" bold={true} fontSize={30} color="black" />
            <ScrollView
                style={{ marginBottom: 40, marginTop: 40 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.cardContainer}>
                    <Card2 image={require("../../../assets/phos.jpg")} hashtag="#PortableRadio" name="Divoom Radio" price="$ 52.00" />
                </View>
                <View style={styles.cardContainer}>
                    <Card2 image={require("../../../assets/phos.jpg")} hashtag="#Airpods" name="Apple Airpods" price="$ 199.00" />
                </View>
                <View style={styles.cardContainer}>
                    <Card2 image={require("../../../assets/phos.jpg")} hashtag="#Iphone" name="Iphone 12" price="$ 999.00" />
                </View>
                <View style={styles.cardContainer}>
                    <Card2 image={require("../../../assets/phos.jpg")} hashtag="#Airpods" name="Apple Airpods" price="$ 199.00" />
                </View>
            </ScrollView>
            <View style={styles.rowContainer1}>
                <View style={styles.iconContainer2}>
                    <Ionicons name="home-sharp" size={30} color="white" />
                </View>
                <View style={styles.iconContainer3}>
                    <MaterialCommunityIcons name="purse-outline" size={30} color="gray" />
                </View>
                <View style={styles.iconContainer3}>
                    <Feather name="bell" size={30} color="gray" />
                </View>
                <View style={styles.iconContainer3}>
                    <Feather name="user" size={30} color="gray" />
                </View>

            </View>
        </View>
    );
};

export default Tarea10;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 35,
        paddingTop: 20,
        alignItems: "start",
        backgroundColor: "#F5F5F5",
        height: "100%"

    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 10,
    },
    rowContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        
    },
    rowContainer2: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 35,

    },
    rowContainer3: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        marginRight: 30
    },
    icon: {

    },
    iconContainer: {
        backgroundColor: "#F0B032",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    iconContainer2: {
        backgroundColor: "gray",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        height: 70,
        width: 70,
        marginBottom: 20
    },
    iconContainer3: {
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        height: 70,
        width: 70,
        marginBottom: 20
    },
    input: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        color: "black",
        height: 40
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    cardContainer: {
        marginRight: 20,
        backgroundColor: "gray",
        borderRadius: 10,
        padding: 15,
        height: 250,
    },

});
