import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Constants from "expo-constants";
import CustomText from '../CustomText';

const Home = ({navigation}) => {

const handleNavigate = () => {
    navigation.navigate("Login");
}


  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/welcome.jpg')} />
        <View style={styles.textContainer}>
            <CustomText text="Shopping with the best e-commerce store" fontSize={32} color="black" bold={true} textAling={"center"} />
            <CustomText text="La luna llena sobre Paris, a transformado en hombre a Denise" fontSize={20} color="gray" bold={false} textAling={"center"} />
        </View>
        <TouchableOpacity onPress={handleNavigate} style={{paddingHorizontal: 20}}>
            <View style={styles.boton}>
                <CustomText text="Get Started" fontSize={20} color="white" bold={true} textAling={"center"} />
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "#fff",
      height: "100%",
    },
    image: {
        width: "auto",
        height: 300,
        marginTop:80
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        marginBottom:120
    },
    boton: {
        backgroundColor: "#55AFB1",
        width: "auto",
        height: 65,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
  });