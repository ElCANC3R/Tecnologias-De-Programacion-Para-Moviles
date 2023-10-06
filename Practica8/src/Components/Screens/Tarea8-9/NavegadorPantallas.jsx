import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import { Text, SafeAreaView } from "react-native"; // Añadimos la importación de Text
import { NavigationContainer } from "@react-navigation/native";
import ScreenTeclado from "./ScreenTeclado";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import { useAppContext } from "../../../hooks/useAppContext";
import Login from "../Login";
import { useAuthContext } from "../../../hooks/useAuthContext";
const Tab = createMaterialBottomTabNavigator();

const Navegador = () => {
  const { handleActive, isActive } = useAppContext();
  const { user } = useAuthContext();

  const Layout = () => {

    if (!user) {
      return (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="calculator" size={24} color={color} />
            ),
          }}
        />
      );
    }
    else {
      return (
       <>
        <Tab.Screen
        name="Pantalla1"
        component={Screen2}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pantalla2"
        component={Screen3}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pantalla3"
        component={ScreenTeclado}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calculator" size={24} color={color} />
          ),
        }}
      />
       </>
      );
    }
  }


    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          activeColor="#000000"
          inactiveColor={isActive ? "#C7C7C7" : "#1F1F1F"}
          shifting={false}
          labeled={false}
          backBehavior="history"
          barStyle={{
            backgroundColor: isActive ? "#1F1F1F" : "#E6E6E6",
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            paddingBottom: 25,
          }}
        >
          <Layout /> 
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  export default Navegador;
