import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EstoyDentro from './EstoyDentro';
import Home from './Home';

const Drawer = createDrawerNavigator();

const EstoyDentroNavigator = () => {
  return (
    <Drawer.Navigator
    initialRouteName='Dentro ahora si'
    screenOptions={{
      headerShown: true,
      drawerLabelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    }}
    >
      <Drawer.Screen name="Dentro ahora si" component={EstoyDentro} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  )
}

export default EstoyDentroNavigator