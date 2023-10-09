import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import CustomText from './CustomText'

const FoodCard = ({text, price}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/burger.jpg')} />
        <CustomText text={text} fontSize={22} color="black" bold={true} textAling={"center"}/>
        <CustomText text={price} fontSize={27} color="#55AFB1" bold={true} textAling={"center"}/>
    </View>
  )
}

export default FoodCard

styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#55AFB1",
        borderRadius: 35,
        height: 300,
        width: 250,
        marginRight: 20,
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 15,
        marginBottom: 15,
    },
    });