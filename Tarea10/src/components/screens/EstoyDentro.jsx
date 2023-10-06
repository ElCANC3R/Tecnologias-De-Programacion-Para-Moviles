import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from "expo-constants";

const EstoyDentro = () => {
  return (
    <View style={styles.container}>

    </View>
  )
}

export default EstoyDentro


const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
    },
  });