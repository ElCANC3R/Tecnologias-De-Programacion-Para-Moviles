import { View, Text } from "react";

const Screen1 = (navigation) => {
    return (
        <View>
        <Text>HomeScreen</Text>
        <Button title="Ir a Login" onPress={() => navigation.navigate("Login")} />
        </View>
    );
    }

export default Screen1;
