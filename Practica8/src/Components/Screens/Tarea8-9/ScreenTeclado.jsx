import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons';
import Tecla from './ComponentesTeclado/Tecla';
import FilaTeclas from './ComponentesTeclado/FilaTeclas';
import CustomText from '../../CustomText';
import { useAppContext } from '../../../hooks/useAppContext';

const ScreenTeclado = () => {
    const { handleActive, isActive } = useAppContext();
    return (
        <View style={[styles.container, { backgroundColor: isActive ? "black" : "white" }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: "center", marginTop: 10 }}>
                <View style={styles.cuadrado}>
                    <Entypo name="arrow-bold-left" size={30} color={isActive ? "white" : "black"} />
                </View>
                <Text style={{ color: isActive ? 'white' : "black", fontSize: 20, fontWeight: 'bold' }}>Send</Text>
                <TouchableOpacity onPress={handleActive}>
                    <View style={styles.cuadrado}>
                        {isActive === true ? <Ionicons name="sunny" size={30} color="white" /> : <Ionicons name="md-moon" size={30} color="black" />}
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between', paddingHorizontal: 20, alignItems: "center", marginTop: 10 }}>
                <View style={{ flexDirection: 'row', marginTop: 15, position: 'relative', paddingLeft: 20 }}>
                    <Image source={require('../../../../assets/Diego_vieja.png')} style={{position: 'absolute', width: 80, height: 80, borderRadius: 50,  }} />
                    <View style={{  top: 0, left: 0, width: 80, height: 80, borderRadius: 50, backgroundColor: "#FEFF64", marginHorizontal: 40 }}>
                    </View>
                </View>

                <Text style={{ color: isActive ? 'white' : "black", fontSize: 20 }}>Diega Ruiz Ayala</Text>
                <Text style={{ color: 'gray', fontSize: 15 }}>****** 3294</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: isActive ? 'white' : "black", fontSize: 55, marginTop: 10, marginBottom: 20 }}>$340</Text>
                    <Text style={{ color: 'gray', fontSize: 55, marginTop: 10 }}>.00</Text>
                </View>
            </View>
            <View>
                <FilaTeclas texto1="1" texto2="2" texto3="3" />
                <FilaTeclas texto1="4" texto2="5" texto3="6" />
                <FilaTeclas texto1="7" texto2="8" texto3="9" />
                <FilaTeclas texto1="<" texto2="0" texto3="." />
            </View>
            <TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FEFF64', height: 60, marginHorizontal: 20, borderRadius: 25, marginTop: 20, borderWidth: isActive ? 0 : 1, borderColor: "gray" }}>
                    <CustomText fontSize={20} color="black" bold={true} text="Send" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenTeclado

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