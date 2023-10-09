import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Constants from "expo-constants";
import { MaterialCommunityIcons, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import CustomText from '../CustomText';
import { Fontisto } from '@expo/vector-icons';

const SingUp = ({ navigation }) => {

    const handleNavigate = () => {
        navigation.navigate("Login");
    }

    const [useName, setUseName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleNavigate}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <View style={{ marginBottom: 20 }}>
                    <CustomText text="Sing Up!" fontSize={40} color="#4D5C7F" bold={true} />
                    <View style={{ marginTop: 5, flexDirection: "row",  }}>
                        <CustomText text="Already have an account?" fontSize={17} color="#4D5C7F" bold={false} textAling={"justify"} />
                        <TouchableOpacity style={{ marginLeft: 5 }} onPress={handleNavigate}>
                            <CustomText text="Login" fontSize={17} color="orange" bold={false} textAling={"justify"} textDecorationLine={"underline"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomText text="Name" fontSize={20} color="#4D5C7F" bold={true} />
                <TextInput style={styles.input} placeholder='Enter your name' onChangeText={setUseName} />
                <CustomText text="Email" fontSize={20} color="#4D5C7F" bold={true} />
                <TextInput style={styles.input} placeholder='Enter your email' onChangeText={setUseName} />
                <CustomText text="Password" fontSize={20} color="#4D5C7F" bold={true} />
                <View style={styles.rowContainer}>
                    <TextInput style={styles.input2} placeholder='Enter your password' secureTextEntry={true} onChangeText={setPassword} />
                    <TouchableOpacity>
                        <Fontisto name="eye" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={styles.boton}>
                        <CustomText text="Sing Up" fontSize={20} color="white" bold={true} textAling={"center"} />
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "flex-start" }}>
                    <CustomText text="By singninguo you are agreeing to our " fontSize={14} color="#4D5C7F" bold={false} textAling={"justify"} />
                    <TouchableOpacity>
                        <CustomText text="Terms of" fontSize={14} color="#55AFB1" bold={false} textAling={"justify"} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-start" }}>
                    <TouchableOpacity>
                        <CustomText text="services" fontSize={14} color="#55AFB1" bold={false} textAling={"justify"} />
                    </TouchableOpacity>
                    <CustomText text=" and  " fontSize={14} color="#4D5C7F" bold={false} textAling={"justify"} />
                    <TouchableOpacity>
                        <CustomText text="Privacy Policy" fontSize={14} color="#55AFB1" bold={false} textAling={"justify"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SingUp


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        marginTop: 20,

    },
    textContainer: {
        paddingHorizontal: 35,
        marginTop: 50,
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: "#4D5C7F",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
        color: "gray",
    },
    input2: {

        height: 50,
        fontSize: 20,
        color: "gray",
    },
    rowContainer: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: "#4D5C7F",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boton: {
        backgroundColor: "#55AFB1",
        width: "auto",
        height: 65,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },

});