import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons';
import Tecla from './ComponentesTeclado/Tecla';
import FilaTeclas from './ComponentesTeclado/FilaTeclas';
import CustomText from '../../CustomText';
import { useAppContext } from '../../../hooks/useAppContext';
import Transaccion from '../../Transaccion';

const Screen3 = () => {
    const { handleActive, isActive } = useAppContext();
    return (
        <View style={[styles.container, {backgroundColor:isActive ? "black" :"white"}]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: "center", marginTop:10 }}>
                <View style={styles.cuadrado}>
                    <Entypo name="arrow-bold-left" size={30} color={isActive ? "white": "black"} />
                </View>
                
                <TouchableOpacity onPress={handleActive}>
                <View style={styles.cuadrado}>
                    {isActive === true ? <Ionicons name="sunny" size={30} color="white" /> : <Ionicons name="md-moon" size={30} color="black" />}
                </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between', paddingHorizontal: 20, alignItems: "center", marginTop: 10 }}>
               
                <Text style={{ color:isActive ? 'gray' : "black", fontSize: 20 }}>Total Balance</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{color:isActive ? 'white' : "black", fontSize: 50, marginTop: 10, marginBottom:20 }}>$32,751.75</Text>
                </View>
            </View>
            <Image source={require('../../../../assets/medio.png')} style={{ width: 390, height: 300, marginTop: 15 }} />
            <ScrollView style={{ marginTop: 20, borderRadius: 30, }}>
                <View style={{ backgroundColor: "#FEFF64", height: "auto", borderRadius: 30, paddingBottom: 40  }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20, marginBottom: 10 }}>
                        <CustomText fontSize={20} color={"black"} bold={false} text="Transactions" />
                        <CustomText fontSize={15} color={"gray"} bold={false} text="See All" />
                    </View>
                    <Transaccion Nombre="Diego Ruiz Ayala" fecha="October 4, 2023" cantidad="340" pago={true} />
                    <Transaccion Nombre="Alan Garcia Diaz" fecha="October 4, 2023" cantidad="1475" pago={false} />
                    <Transaccion Nombre="Ulises Responsabilidad Rojas" fecha="October 4, 2023" cantidad="200" pago={true} />
                    <Transaccion Nombre="Arturo Fuentes Martines" fecha="October 4, 2023" cantidad="364" pago={false} />
                    <Transaccion Nombre="Juan Pablo Juares Castillo" fecha="October 4, 2023" cantidad="805" pago={true} />
                    <Transaccion Nombre="Hector David Reyes Reyes" fecha="October 4, 2023" cantidad="999" pago={false} />
                </View>
            </ScrollView>
           
        </View>
    )
}

export default Screen3

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    cuadrado: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray'
    },


})