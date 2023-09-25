import { View, Text } from "react";
import { Button } from "react-native";

const LoginScreen = (navigation) => {
    return (
        <View>
        <Text>LoginScreen</Text>
        <Button title="Ir a Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
    }

export default LoginScreen;
