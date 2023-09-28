import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  Dimensions
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "../Screens/HomeScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import CharactersScrean from "../CharacterScrean";
import CharacterCard from "./Character";
import Screen1 from "./tarea6Screen1";
import Screen2 from "./tarea6Screen2";

const Stack = createStackNavigator();

const NavegarPantallas = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName="Pantalla1"
      screenOptions={
        {
          headerStyle: {
            backgroundColor: "#aa76ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false,
        }
      }
      >
        <Stack.Screen name="Pantalla1" component={Screen1} />
        <Stack.Screen name="Pantalla2" component={Screen2} options={{title: "Personaje"}} />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
  );
};

export default NavegarPantallas;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#aa76ff",
    // alignItems: "center",
    // justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    // paddingTop: ReactStatus.currentHeight,
  },
});