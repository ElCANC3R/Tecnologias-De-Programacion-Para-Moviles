import React from 'react'
import Tecla from './Tecla'
import { View, Text, StyleSheet } from 'react-native'

const FilaTeclas = ({texto1, texto2, texto3}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20, alignItems: "center" }}>
                    <Tecla texto={texto1} />
                    <Tecla texto={texto2} />
                    <Tecla texto={texto3} />
    </View>
  )
}

export default FilaTeclas