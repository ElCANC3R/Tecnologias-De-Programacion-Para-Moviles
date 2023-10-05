import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ScreenTeclado from "./ScreenTeclado";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createMaterialBottomTabNavigator();

const Navegador = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: "tomato" }}
        >
          <Tab.Screen
            name="Feed"
            component={ScreenTeclado}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? "#e91e63" : "gray" }}>
                  Home
                </Text>
              ),
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Screen2}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? "#e91e63" : "gray" }}>
                  Updates
                </Text>
              ),
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Screen3}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? "#e91e63" : "gray" }}>
                  Profile
                </Text>
              ),
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navegador;
