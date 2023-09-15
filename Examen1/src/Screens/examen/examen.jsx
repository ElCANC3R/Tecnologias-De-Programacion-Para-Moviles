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

import CustomText from "../../Components/CustomText.android";
import Card2 from "../../Components/Card/card2";
import CustomImage from "../../Components/imagenes";

const Examen = () => {

    const handlePress = () => {
        // Cuando se presiona el botón, cambiamos el estado para mostrar el segundo componente
        setMostrarSegundoComponente(true);
    };

    return (
        <View style={styles.container}>
            <View
                style={styles.rowContainer1}
            >
                <FontAwesome name="user-secret" size={50} color="black"
                    style={styles.icon}
                />
                <CustomText text="Hey _Diego" bold={true} fontSize={15} color="black" />
                <Entypo name="hand" size={24} color="black" />
                <Entypo name="magnifying-glass" size={24} color="black" />
                <AntDesign name="windowso" size={24} color="black" />

            </View>
            <View style={{ marginTop: 30 }}>
                <CustomText text="Stories" bold={false} fontSize={15} color="gray" />
            </View>
            <ScrollView
                style={{ marginBottom: 15, marginTop: 15 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={StyleSheet.imageContainer}>
                    <CustomImage height={150} width={150} borderRadius={50} />
                    <CustomText text="Your Story" bold={false} fontSize={15} color="gray" />
                </View>
                <View style={StyleSheet.imageContainer}>
                    <CustomImage height={150} width={150} borderRadius={50} />
                    <CustomText text="Your Story" bold={false} fontSize={15} color="gray" />
                </View>
                <View style={StyleSheet.imageContainer}>
                    <CustomImage height={50} width={150} borderRadius={50} />
                    <CustomText text="Your Story" bold={false} fontSize={15} color="gray" />
                </View>
                <View style={StyleSheet.imageContainer}>
                    <CustomImage height={50} width={150} borderRadius={50} />
                    <CustomText text="Your Story" bold={false} fontSize={15} color="gray" />
                </View>
                <View style={StyleSheet.imageContainer}>
                    <CustomImage height={50} width={150} borderRadius={50} />
                    <CustomText text="Your Story" bold={false} fontSize={15} color="gray" />
                </View>
                <View style={StyleSheet.imageContainer}>
                    <CustomImage height={50} width={150} borderRadius={50} />
                    <CustomText text="Your Story" bold={false} fontSize={15} color="gray" />
                </View>
            </ScrollView>

            <View style={styles.rowContainer2}>
                <TouchableOpacity style={styles.rowContainer3}>
                    <CustomText text="All" bold={true} fontSize={15} color="black" />     
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContainer}>
                    <CustomText text="Group" bold={true} fontSize={15} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rowContainer}>
                    <CustomText text="Chats" bold={true} fontSize={15} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginBottom: 40, marginTop: 40 }}>
                <View style={styles.rowContainer1}>
                    <CustomImage height={70} width={70} borderRadius={10} />
                    <View>
                    <CustomText text="Diego" bold={true} fontSize={15} color="black" />
                    <CustomText text="Hey, how are you?" bold={false} fontSize={15} color="gray" />
                    </View>
                </View>
                <View style={styles.rowContainer1}>
                    <CustomImage height={70} width={70} borderRadius={10} />
                    <View>
                    <CustomText text="Diego" bold={true} fontSize={15} color="black" />
                    <CustomText text="Hey, how are you?" bold={false} fontSize={15} color="gray" />
                    </View>
                </View>
                <View style={styles.rowContainer1}>
                    <CustomImage height={70} width={70} borderRadius={10} />
                    <View>
                    <CustomText text="Diego" bold={true} fontSize={15} color="black" />
                    <CustomText text="Hey, how are you?" bold={false} fontSize={15} color="gray" />
                    </View>
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

export default Examen;

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
        borderRadius: 15,
        height: 40,
        width: 80,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    rowContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        

    },
    rowContainer2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 35,
        backgroundColor: "#F0F1F6",
        width: 250,

    },
    rowContainer3: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        height: 40,
        width: 80,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
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
    imageContainer: {
        width: 150,
        height: 200,
        borderRadius: 50,
    },
    cardContainer: {
        marginRight: 20,
        backgroundColor: "gray",
        borderRadius: 10,
        padding: 15,
        height: 250,
    },

});
