import React from 'react'
import { Image, View } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons';
import CustomText from './CustomText';

const Transaccion = ({ Nombre, fecha, cantidad, pago}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: pago ? "#1F1F1F" : "#FF6464", alignItems: "center", justifyContent: "center"}}>
        <Ionicons name="ios-card-sharp" size={24} color={pago ? "white" : "black"} />
        </View>
        <View style={{marginLeft:20}}>
            <CustomText fontSize={17} color={"black"} bold={true} text={Nombre} />
            <CustomText fontSize={12} color={"black"} bold={false} text={fecha} />
        </View>
        </View>
        <CustomText fontSize={17} color={"black"} bold={true} text={pago ? ("+$"+cantidad) : ("-$"+cantidad)} />
    </View>
  )
}

export default Transaccion