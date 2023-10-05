import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Entypo, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Tecla from './ComponentesTeclado/Tecla';
import FilaTeclas from './ComponentesTeclado/FilaTeclas';
import CustomText from '../../CustomText';
import { useAppContext } from '../../../hooks/useAppContext';
import Contacto from '../../Contacto';

const Screen2 = () => {
    const { handleActive, isActive } = useAppContext();
    return (
        <View style={[styles.container, { backgroundColor: isActive ? "black" : "white" }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: "center", marginTop: 10 }}>
                <View style={styles.cuadrado}>
                    <Image source={require('../../../../assets/Diego_vieja.png')} style={{ width: 60, height: 60, borderRadius: 20 }} />
                </View>
                <TouchableOpacity onPress={handleActive}>
                    <View style={styles.cuadrado}>
                        {isActive === true ? <Ionicons name="sunny" size={30} color="white" /> : <Ionicons name="md-moon" size={30} color="black" />}
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, alignItems: "start", marginTop: 20 }}>
                <CustomText fontSize={55} color={isActive ? "white" : "black"} bold={false} text="My cards" />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: "center", marginTop: 10, height: 120 }}>
                <View style={{ backgroundColor: "#FEFF64", width: 80, height: "100%", borderRadius: 30, alignItems: "center", justifyContent: "center" }}>
                    <Entypo name="plus" size={24} color="black" />
                </View>
                <View style={{ backgroundColor: isActive ? "white" : "#1F1F1F", width: 265, height: "100%", borderRadius: 30, alignItems: "center", justifyContent: "space-evenly" }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 250, paddingHorizontal: 15 }}>
                        <FontAwesome name="mars-double" size={24} color={isActive ? "black" : "white"} />
                        <CustomText fontSize={20} color={isActive ? "black" : "white"} bold={false} text="**** 4934" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'start', width: 250, paddingHorizontal: 15, alignItems: "flex-end" }}>
                        <CustomText fontSize={20} color={isActive ? "black" : "white"} bold={false} text="$" />
                        <CustomText fontSize={30} color={isActive ? "black" : "white"} bold={true} text="13,397." />
                        <CustomText fontSize={20} color={isActive ? "black" : "white"} bold={false} text="23" />
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", marginTop: 25 }}>
                <View style={styles.cuadroTarjetas}>
                    <Ionicons name="ios-card-sharp" size={24} color={"white"} />
                    <CustomText fontSize={15} color={"#FEFF64"} bold={false} text="Send" />
                </View>
                <View style={styles.cuadroTarjetas}>
                    <Ionicons name="ios-card-sharp" size={24} color={"white"} />
                    <CustomText fontSize={15} color={"#FEFF64"} bold={false} text="Recive" />
                </View>
                <View style={styles.cuadroTarjetas}>
                    <AntDesign name="swap" size={24} color={"white"} />
                    <CustomText fontSize={15} color={"#FEFF64"} bold={false} text="Swap" />
                </View>
            </View>
            <View style={{ alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", marginTop: 25 }}>
                <TouchableOpacity>
                    <View style={styles.cuadroTarjetas2}>
                        <CustomText fontSize={15} color={"white"} bold={false} text="Activity" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.cuadroTarjetas3}>
                        <CustomText fontSize={15} color={"black"} bold={false} text="Contacts" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.cuadroTarjetas2}>
                        <CustomText fontSize={15} color={"white"} bold={false} text="Payments" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.cuadroTarjetas2}>
                        <CustomText fontSize={15} color={"white"} bold={false} text="Sale" />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ paddingHorizontal: 20, marginTop: 20, borderRadius: 30, }}>
                <View style={{ backgroundColor: "#1F1F1F", height: "auto", borderRadius: 30, paddingBottom: 40  }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20, marginBottom: 10 }}>
                        <CustomText fontSize={20} color={"white"} bold={false} text="My contacts" />
                        <Entypo name="magnifying-glass" size={24} color="white" />
                    </View>
                    <Contacto imagen={require('../../../../assets/Ginjo.jpg')} Nombre="Ginjo Kugo" numTarjeta="3294" />
                    <Contacto imagen={require('../../../../assets/akane.png')} Nombre="Keka Galindo" numTarjeta="3294" />
                    <Contacto imagen={require('../../../../assets/ulises.jpg')} Nombre="Ulises Rojas" numTarjeta="3294" />
                    <Contacto imagen={require('../../../../assets/bochi.png')} Nombre="La Bocho" numTarjeta="3294" />
                    <Contacto imagen={require('../../../../assets/kagura.png')} Nombre="Kagura" numTarjeta="3294" />
                    <Contacto imagen={require('../../../../assets/rukia.jpg')} Nombre="Rukia" numTarjeta="3294" />
                </View>
            </ScrollView>
        </View>
    )
}

export default Screen2

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
    cuadroTarjetas: {
        backgroundColor: "#1F1F1F",
        width: 115,
        height: 100,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",

    },
    cuadroTarjetas2: {
        backgroundColor: "black",
        width: "auto",
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderWidth: 1,
        borderColor: "#FEFF64",
        padding: 10,
    },
    cuadroTarjetas3: {
        backgroundColor: "#FEFF64",
        width: "auto",
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderWidth: 1,
        borderColor: "#FEFF64",
        padding: 10,
    },
})