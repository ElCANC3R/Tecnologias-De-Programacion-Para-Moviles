import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from './CustomText'

const CustomView = ({text}) => {
  return (
   <TouchableOpacity>
    <View style={styles.container}>
    <CustomText text={text} fontSize={20} color="white" bold={false} textAling={"center"} />
    </View>
    </TouchableOpacity>
  )
}

export default CustomView

styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#55AFB1",
        borderRadius: 16,
        height: 50,
        width: 100,
    },
    });