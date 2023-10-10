import React from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Constants from "expo-constants";
import { Feather, AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import CustomText from '../CustomText';
import CustomView from '../CustomView';
import FoodCard from '../FoodCard';
import { useAuthContext } from '../../hooks/useAuthContext';

const EstoyDentro = () => {
  const { user, handleLogin, handleRegister, handleLogout, isLogged } = useAuthContext();
  return (
    <View style={styles.container}>
      {/*<View style={styles.header}>
        <TouchableOpacity >
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={30} color="black" />
        </TouchableOpacity>
      </View>*/}
      <View style={{ paddingHorizontal: 25 }}>
        <TouchableOpacity onPress={handleLogout}>
          <CustomText text="Logout" fontSize={20} color="black" bold={true} />
        </TouchableOpacity>
        <View style={{ marginTop: 35, marginBottom: 25 }}>
          <CustomText text="Store for fast food & etc." fontSize={25} color="black" bold={true} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
          <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center" }}>
            <SimpleLineIcons name="magnifier" size={30} color="#55AFB1" />
            <TextInput style={styles.input} placeholder='Search' />
          </View>
          <MaterialIcons name="find-in-page" size={30} color="black" />
        </View>
        <View style={{ marginTop: 45, marginBottom: 50, flexDirection: "row", justifyContent: "space-between" }}>
          <CustomView text="Pizza" />
          <CustomView text="Burgers" />
          <CustomView text="Others" />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FoodCard text="Burger" price="$10" />
          <FoodCard text="Pizza" price="$15" />
          <FoodCard text="Hot Dog" price="$8" />
          <FoodCard text="Burger" price="$10" />
          <FoodCard text="Pizza" price="$15" />
          <FoodCard text="Hot Dog" price="$8" />
        </ScrollView>
      </View>
    </View>
  )
}

export default EstoyDentro


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 0,
  },
  input: {
    height: 50,
    padding: 10,
    fontSize: 20,
    color: "black",
    marginLeft: 10,
  },
});