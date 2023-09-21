import React, { Component, Modal, Text } from 'react'
import { View, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'


const CustomModal = ({ name, done, date, handleModal, modalVisible }) => {
    return (
        <Modal
        visible={modalVisible}
        animationType="slide" // Puedes especificar el tipo de animación de entrada/salida
        transparent={true}   // Hace que el fondo del modal sea transparente
        onRequestClose={() => {
          // Maneja la acción cuando el usuario intenta cerrar el modal (puede ser opcional)
          handleModal();
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{name}</Text>
                <Text style={styles.modalText}>{done ? "Estado de la tarea: Completada" : "Estado de la tarea: Sin compeltar"}</Text>
                <Text style={styles.modalText}>{date}</Text>
                <CustomButton text={"Close"} light={true} onPress={() => handleModal()} color={"#0F96AB"} />
            </View>
        </View>

      </Modal>
    );
  };

  export default CustomModal;

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            },
            modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
            },
            openButton: {
            backgroundColor: "#F194FF",
            borderRadius: 20,
            padding: 10,
            elevation: 2
            },
            textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
            },
            modalText: {
            marginBottom: 15,
            textAlign: "center"
            }
    });


