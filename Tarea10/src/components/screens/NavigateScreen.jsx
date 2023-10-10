import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';
import Login from './Login';
import SingUp from './SingUp';
import EstoyDentro from './EstoyDentro';
import { MaterialCommunityIcons, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import EstoyDentroNavigator from './EstoyDentroNavigator';
import { useAuthContext } from '../../hooks/useAuthContext';

const Tab = createBottomTabNavigator();

const NavigateScreen = () => {
    const {user,
        handleLogin,
        handleRegister,
        handleLogout,
        isLogged,
        handleUpdate,} = useAuthContext();

    //Una funcion que cuando el usaurio este logeado, se muestre el tab de EstoyDentro y se oculte la de login y singup
    
    const handlePestañas = () => {
        if(isLogged()){
            return (
                <>
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
                </>
            )
        }
        else{
            return (
                <>
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
                </>
            )
        }
    }

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
                {handlePestañas()}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default NavigateScreen
