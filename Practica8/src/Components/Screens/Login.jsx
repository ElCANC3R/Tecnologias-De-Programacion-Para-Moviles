import React from 'react'
import { Alert, TextInput, TouchableOpacity, View } from 'react-native'
import CustomText from '../CustomText'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const { handleActive, isActive } = useAppContext();
    const [useName , setUseName] = useState('')
    const [password , setPassword] = useState('')
    const {user, onLogin } = useAuthContext();
    const navigation = useNavigation();

    const handleLogin = () => {
        try {
           const loginValue = onLogin(useName, password);
              if (loginValue) {
                navigation.jumpTo('Pantalla1');
              }
        } catch (error) {
            Alert(error)
        }
    }

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: isActive ? "black" : "white"}}>
            <CustomText fontSize={40} color="black" bold={true} text="Iniciar sesion" />
            <TextInput value={useName} onChangeText={setUseName} placeholder="Ingresa tu usuario" 
            style={{borderWidth:1, borderColor:"black", borderRadius:10, padding:10, margin:10, width:200, textAlign:"center"}}/>
            <TextInput value={password} onChangeText={setPassword} placeholder="Ingresa tu contraseña"
            style={{borderWidth:1, borderColor:"black", borderRadius:10, padding:10, margin:10, width:200, textAlign:"center"}}/>
            <TouchableOpacity onPress={handleLogin}>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FEFF64', height: 60, marginHorizontal: 20, borderRadius: 25, marginTop: 20, borderWidth: isActive ? 0 : 1, borderColor: "gray" }}>
                    <CustomText fontSize={20} color="black" bold={true} text="Iniciar sesion" />
                </View>
            </TouchableOpacity>

    </View>
  )
}

export default Login