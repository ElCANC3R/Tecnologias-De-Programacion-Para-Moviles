import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const Tecla = ({texto,}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.texto}>{texto}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Tecla

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1F1F',
        borderRadius: 30,
        height: 80,
        width: 115,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2
    },
    texto: {
        color: 'white',
        fontSize: 25,
        fontWeight:'bold'
    }
})