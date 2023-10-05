import React from 'react'
import { Image, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import CustomText from './CustomText';

const Contacto = ({imagen, Nombre, numTarjeta}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={imagen} style={{ width: 50, height: 50, borderRadius: 50 }} />
        <View style={{marginLeft:20}}>
            <CustomText fontSize={17} color={"white"} bold={false} text={Nombre} />
            <CustomText fontSize={12} color={"white"} bold={false} text={"****** " + numTarjeta} />
        </View>
        </View>
        <Entypo name="dots-three-vertical" size={24} color="white" />
    </View>
  )
}

export default Contacto