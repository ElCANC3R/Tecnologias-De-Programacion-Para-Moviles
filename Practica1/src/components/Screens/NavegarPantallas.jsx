import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator, NavigatorContainer, Navigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen} from "../Screens/HomeScreen";
import { LoginScreen } from "../Screens/LoginScreen";

const Stack = createStackNavigator();
const BottomsTabNavigator = createStackNavigator();

const NavegarPantallas = () => {
  return (
    <NavigatorContainer>
        <View>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
        </View>
    </NavigatorContainer>
  );
};

export default NavegarPantallas;

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#2E3133",
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 180,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    marginLeft: 10,
    gap: 5,
  },
});
