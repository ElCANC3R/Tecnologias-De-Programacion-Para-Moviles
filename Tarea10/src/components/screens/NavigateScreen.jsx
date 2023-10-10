import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';
import Login from './Login';
import SingUp from './SingUp';
import EstoyDentro from './EstoyDentro';
import { MaterialCommunityIcons, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import EstoyDentroNavigator from './EstoyDentroNavigator';

const Tab = createBottomTabNavigator();

const NavigateScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                backBehavior='history'
                screenOptions={{
                    tabBarActiveTintColor: '#55AFB1',
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="login" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SingUp"
                    component={SingUp}
                    options={{
                        tabBarLabel: 'SingUp',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="file-signature" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Dentro"
                    component={EstoyDentroNavigator}
                    options={{
                        tabBarLabel: 'Estas dentro',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="dingding" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default NavigateScreen
