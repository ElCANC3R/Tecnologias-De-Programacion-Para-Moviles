import { Alert } from 'react-native';
export const createAlert = (text) => {
    Alert.alert("Error", text, [
        {
            text: "aceptar",
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        },
    ]);
}