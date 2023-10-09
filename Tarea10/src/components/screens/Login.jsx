import React, { useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Constants from "expo-constants";
import CustomText from '../CustomText';
import { Fontisto } from '@expo/vector-icons';


const Login = ({navigation}) => {

    const handleNavigate = () => {
        navigation.navigate("SingUp");
    }

    const [useName, setUseName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/vash.png')} />
            <View style={styles.textContainer}>
                <View style={{ marginBottom: 20 }}>
                    <CustomText text="Login!" fontSize={40} color="#4D5C7F" bold={true} />
                </View>
                <CustomText text="Email" fontSize={20} color="#4D5C7F" bold={true} />
                <TextInput style={styles.input} placeholder='Enter your email' onChangeText={setUseName} />
                <CustomText text="Password" fontSize={20} color="#4D5C7F" bold={true} />
                <View style={styles.rowContainer}>
                    <TextInput style={styles.input2} placeholder='Enter your password' secureTextEntry={true} onChangeText={setPassword} />
                    <TouchableOpacity>
                        <Fontisto name="eye" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity >
                    <CustomText text="Forgot Password?" fontSize={15} color="orange" bold={false} textAling={"right"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.boton}>
                        <CustomText text="Login" fontSize={20} color="white" bold={true} textAling={"center"} />
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 20, flexDirection:"row", justifyContent:"center" }}>
                    <CustomText text="Don't have an account?" fontSize={17} color="#4D5C7F" bold={false} textAling={"justify"} />
                    <TouchableOpacity style={{marginLeft:5}} onPress={handleNavigate}>
                        <CustomText text="Sign Up" fontSize={17} color="orange" bold={false} textAling={"justify"} textDecorationLine={"underline"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: "auto",
        height: 200,
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