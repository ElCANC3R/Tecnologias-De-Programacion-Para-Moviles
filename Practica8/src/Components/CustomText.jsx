import React from 'react'
import { Text } from 'react-native'

const CustomText = ({fontSize, color, bold, text}) => {
  return (
    <Text style={{ fontSize: fontSize, color: color, fontWeight: bold ? 'bold' : 'normal' }}>{text}</Text>
  )
}

export default CustomText