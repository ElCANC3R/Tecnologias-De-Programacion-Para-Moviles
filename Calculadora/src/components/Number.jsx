import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Number = ({text, role, onPress}) => {
  return (
    <TouchableOpacity style = {styles.container} onPress = {() => onPress(role)}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Number   

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 10,
        height: 70,
        width: 70,
        alignContent: 'center',
      },
        text: {
            fontSize: 30,
            color: '#000'
        }
})