import React from 'react'
import { StyleSheet, Text } from 'react-native'


const CustomText = ({text, fontSize, color, bold, textAling, textDecorationLine}) => {
  return (
    <Text style={{fontSize: fontSize, color: color, fontWeight: bold ? 'bold' : 'normal', textAlign: textAling, textDecorationLine:textDecorationLine}}>{text}</Text>
  )
}

export default CustomText

